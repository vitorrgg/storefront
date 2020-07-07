<template>
  <div id="checkout">
    <the-checkout
      :amount="amount"
      :checkoutStep.sync="checkoutStep"
      @login="login"
      :customer.sync="customer"
      @addressSelected="selectAddress"
      :shippingZipCode="shippingZipCode"
      :shippingService.sync="shippingService"
      :paymentGateway.sync="paymentGateway"
      :discountCoupon.sync="discountCoupon"
      :base-modules-request-data="baseModulesRequestData"
      @setDiscountRule="setDiscountRule"
      @checkout="checkout"
    />
  </div>
</template>

<script src="./js/Checkout.js"></script>
