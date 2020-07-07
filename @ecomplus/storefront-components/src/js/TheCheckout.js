import {
  i19addToCart,
  i19backToCart,
  i19bag,
  i19buyAlsoMsg,
  i19buyer,
  i19changeShippingMethod,
  i19checkout,
  i19contactPhone,
  i19continue,
  i19delivery,
  i19discount,
  i19docNumber,
  i19freight,
  i19logout,
  i19myAccount,
  i19payment,
  i19proceedToPayment,
  i19registerToBuy,
  i19selectedOffers,
  i19summary
} from '@ecomplus/i18n'

import {
  i18n,
  name,
  formatMoney,
  price,
  img
} from '@ecomplus/utils'

import ecomCart from '@ecomplus/shopping-cart'
import DiscountApplier from './../DiscountApplier.vue'
import LoginBlock from './../LoginBlock.vue'
import ShippingCalculator from './../ShippingCalculator.vue'
import ShippingLine from './../ShippingLine.vue'
import RecommendedItems from './../RecommendedItems.vue'
import PaymentMethods from './../../../storefront-app/src/components/PaymentMethods.vue'
import AccountForm from './../AccountForm.vue'
import AccountAddresses from './../AccountAddresses.vue'
import EcSummary from './../../../storefront-app/src/components/EcSummary.vue'

export default {
  name: 'TheCheckout',

  components: {
    DiscountApplier,
    LoginBlock,
    ShippingLine,
    ShippingCalculator,
    RecommendedItems,
    PaymentMethods,
    AccountForm,
    AccountAddresses,
    EcSummary
  },

  props: {
    baseModulesRequestData: {
      type: Object,
      default () {
        return {}
      }
    },
    cartUrl: {
      type: String,
      default: '/app/#/cart'
    },
    amount: {
      type: Object,
      default () {
        return {}
      }
    },
    customer: {
      type: Object,
      default () {
        return {}
      }
    },
    shippingZipCode: String,
    checkoutStep: {
      type: Number,
      default: 1
    },
    shippingService: Object,
    paymentGateway: Object,
    ecomCart: {
      type: Object,
      default: () => ecomCart
    },
    discountCoupon: String
  },

  data () {
    return {
      checkoutAppId: 1,
      toCheckoutStep: this.checkoutStep,
      customerEmail: this.customer.main_email,
      isUserIdentified: Boolean(this.customer.main_email),
      editAccount: false,
      editShippingService: !this.shippingService,
      localZipCode: this.shippingZipCode,
      hasMoreOffers: false
    }
  },

  computed: {
    modulesPayload () { return this.baseModulesRequestData },
    i19addToCart: () => i18n(i19addToCart),
    i19backToCart: () => i18n(i19backToCart),
    i19bag: () => i18n(i19bag),
    i19buyAlsoMsg: () => i18n(i19buyAlsoMsg),
    i19buyer: () => i18n(i19buyer),
    i19changeShippingMethod: () => i18n(i19changeShippingMethod),
    i19checkout: () => i18n(i19checkout),
    i19contactPhone: () => i18n(i19contactPhone),
    i19continue: () => i18n(i19continue),
    i19delivery: () => i18n(i19delivery),
    i19discount: () => i18n(i19discount),
    i19docNumber: () => i18n(i19docNumber),
    i19freight: () => i18n(i19freight),
    i19logout: () => i18n(i19logout),
    i19myAccount: () => i18n(i19myAccount),
    i19payment: () => i18n(i19payment),
    i19proceedToPayment: () => i18n(i19proceedToPayment),
    i19registerToBuy: () => i18n(i19registerToBuy),
    i19selectedOffers: () => i18n(i19selectedOffers),
    i19summary: () => i18n(i19summary),

    cart () {
      return this.ecomCart.data
    },

    hasBuyerInfo () {
      const { customer } = this
      return this.customerEmail &&
        customer.name && customer.name.given_name && customer.name.family_name &&
        customer.birth_date && customer.birth_date.day &&
        customer.registry_type && customer.doc_number &&
        customer.phones && customer.phones.length
    },

    localCustomer: {
      get () {
        return this.customer
      },
      set (customer) {
        this.editAccount = false
        this.$emit('update:customer', customer)
      }
    },

    localDiscountCoupon: {
      get () {
        return this.discountCoupon
      },
      set (couponCode) {
        this.$emit('update:discount-coupon', couponCode)
      }
    },

    shownCheckoutStep () {
      if (!this.hasBuyerInfo || this.editAccount) {
        return 0
      } else {
        return this.toCheckoutStep
      }
    },

    shippingAddress () {
      const { addresses } = this.customer
      return addresses && addresses.find(addr => {
        return Boolean(addr.default && addr.street && addr.city && addr.province_code)
      })
    },

    enabledCheckoutStep () {
      return !this.hasBuyerInfo ? 0
        : this.shippingAddress && this.shippingService ? 2 : 1
    },

    paymentsListKey () {
      let key = 'pay'
      if (this.localDiscountCoupon) {
        key += `-${this.localDiscountCoupon}`
      }
      ;['freight', 'subtotal'].forEach(amountField => {
        if (this.amount[amountField] > 0) {
          key += `-${this.amount[amountField]}`
        }
      })
      return key
    }
  },

  methods: {
    name,
    price,
    formatMoney,

    img (item) {
      return img(item, null, 'small')
    },

    login (ecomPassport) {
      if (ecomPassport.checkLogin()) {
        this.customerEmail = ecomPassport.getCustomer().main_email
        this.$emit('login', ecomPassport)
      }
    },

    autoMoveStep () {
      if ('activeElement' in document) {
        document.activeElement.blur()
      }
      this.toCheckoutStep = this.enabledCheckoutStep
    },

    updateZipCode () {
      if (this.shippingAddress) {
        this.localZipCode = this.shippingAddress.zip
      }
    },

    selectAddress (addressId) {
      this.$emit('addressSelected', addressId)
      this.updateZipCode()
    },

    goToTop () {
      window.scroll({
        top: this.$el.offsetTop - 15,
        behavior: 'smooth'
      })
    },

    goToOffers () {
      window.scroll({
        top: this.$refs.offers.$el.offsetTop - 15,
        behavior: 'smooth'
      })
    },

    selectPaymentGateway (gateway) {
      this.$emit('update:paymentGateway', gateway)
      this.goToTop()
    }
  },

  watch: {
    customerEmail (email) {
      if (email) {
        this.$emit('update:customer', { ...this.customer, main_email: email })
        this.isUserIdentified = true
      }
    },

    localZipCode () {
      this.editShippingService = true
    },

    toCheckoutStep (stepNumber) {
      this.$emit('update:checkoutStep', stepNumber)
      this.goToTop()
    },

    enabledCheckoutStep () {
      this.autoMoveStep()
    }
  },

  created () {
    this.autoMoveStep()
    this.updateZipCode()
    this.ecomCart.on('addItem', () => {
      this.checkoutAppId++
      this.$nextTick(() => {
        this.goToTop()
      })
    })
  }
}
