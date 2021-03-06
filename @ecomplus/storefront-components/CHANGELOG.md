# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-beta.46](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.45...@ecomplus/storefront-components@1.0.0-beta.46) (2020-08-14)


### Bug Fixes

* **account-form:** validating phone number country code (int) ([b999e83](https://github.com/ecomplus/storefront/commit/b999e83e3296dc5bd786902b650ddc750abbebf1))


### Features

* **product-card:** add `transitionClass` prop ([a68f712](https://github.com/ecomplus/storefront/commit/a68f712ae05bde2999e3f0dbbc664914508bb6d6))
* **product-gallery:** handle first picture pre loaded without reload ([96ab0d8](https://github.com/ecomplus/storefront/commit/96ab0d8e46e04b915c4b05a031951ff844faf775))
* **search-engine:** add  boolean prop (true by default) ([06b4585](https://github.com/ecomplus/storefront/commit/06b45851a6948cd05e5ce7f4e19c580ad039c888))
* **the-product:** handlers for painless hydration using portals ([59999eb](https://github.com/ecomplus/storefront/commit/59999eb1bf21e91fe4ba04d55c1e2679528a0afe))





# [1.0.0-beta.45](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.44...@ecomplus/storefront-components@1.0.0-beta.45) (2020-08-12)


### Bug Fixes

* **account-form:** fixing full name string (sequential spaces) ([04b46bf](https://github.com/ecomplus/storefront/commit/04b46bf363039bdc1b1975628fb5243e64054ab5))
* **address-form:** better handling zip code and address fetch ([38f3577](https://github.com/ecomplus/storefront/commit/38f35778b1cdf894e78eb8662ebf4b694898f81c))
* **deps:** update @ecomplus/shopping-cart to ^2.1.6 ([499004b](https://github.com/ecomplus/storefront/commit/499004bbb1442b5852f5b2099711340064f8d863))
* **product-variations:** ensure no option is selected by default ([0598f07](https://github.com/ecomplus/storefront/commit/0598f07ea492dc3b339e4785a65ac47f1330b971))





# [1.0.0-beta.44](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.43...@ecomplus/storefront-components@1.0.0-beta.44) (2020-08-11)


### Bug Fixes

* **account-form:** fix parting full name str to name object (ensure familly name) ([d938d07](https://github.com/ecomplus/storefront/commit/d938d075238f4ad6f67865b522020dc32cea3311))





# [1.0.0-beta.43](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.42...@ecomplus/storefront-components@1.0.0-beta.43) (2020-08-10)


### Features

* **account-form:** better ux response on submit ([0829f2d](https://github.com/ecomplus/storefront/commit/0829f2d1e1a7b69bd42d8f9d6c6b94bbd07a615e))
* **shipping-calculator:** add `shippingAppsSort` prop ([f21d7e5](https://github.com/ecomplus/storefront/commit/f21d7e5bb625ee99ecbd1693825a7ddcdd88b906))





# [1.0.0-beta.42](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.41...@ecomplus/storefront-components@1.0.0-beta.42) (2020-08-04)


### Bug Fixes

* **account-addresses:** passing customer full name to address recipient ([#278](https://github.com/ecomplus/storefront/issues/278)) ([1000832](https://github.com/ecomplus/storefront/commit/100083258c5024a59c37795ac7785fdb55ea7542))
* **account-addresses:** prevent exceed maximum number of characters in the recipient's name ([3d99fb0](https://github.com/ecomplus/storefront/commit/3d99fb0d8d6b7005fb9089c4a56d478fba7736df))
* **discount-applier:** always sending custom on params (if logged) ([5db55bc](https://github.com/ecomplus/storefront/commit/5db55bca522c3a3ca76e466d3ce99b3f3604a732))
* **shipping-calculator:** sort shipping services by price and delivery time ([#280](https://github.com/ecomplus/storefront/issues/280)) ([bb08539](https://github.com/ecomplus/storefront/commit/bb08539e996e07453e0b4c7a22465c92ceafda87))





# [1.0.0-beta.41](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.40...@ecomplus/storefront-components@1.0.0-beta.41) (2020-07-29)


### Bug Fixes

* **deps:** update @ecomplus/client to ^2.1.0 ([95139fe](https://github.com/ecomplus/storefront/commit/95139fef754897d7618f5d81fed00493f93eae17))
* **input-phone:** minor pattern fix (br ddd) ([602e795](https://github.com/ecomplus/storefront/commit/602e795a0925aad65ec424d293c539c20a8722fe))





# [1.0.0-beta.40](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.39...@ecomplus/storefront-components@1.0.0-beta.40) (2020-07-20)


### Bug Fixes

* **shipping-calculator:** fix handling retry when no valid shipping options ([837e9cf](https://github.com/ecomplus/storefront/commit/837e9cf4fe60f32bdfd971ed9c81aa64719d601a))





# [1.0.0-beta.39](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.38...@ecomplus/storefront-components@1.0.0-beta.39) (2020-07-17)


### Bug Fixes

* **account-form:** regex pattern for email input (check domain) ([1f77c2a](https://github.com/ecomplus/storefront/commit/1f77c2ae1cc1691f9396c6da0babb22b8ec4ccc4))
* **deps:** update @ecomplus/i18n to v1.14.0 ([ea9f37c](https://github.com/ecomplus/storefront/commit/ea9f37c80401653eee18c7c9c2b384935c1ed298))
* **deps:** update all non-major dependencies ([#265](https://github.com/ecomplus/storefront/issues/265)) ([f85b9be](https://github.com/ecomplus/storefront/commit/f85b9bea392fd7107cd2dcd8b42e5b09b44663a3))





# [1.0.0-beta.38](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.37...@ecomplus/storefront-components@1.0.0-beta.38) (2020-07-03)


### Bug Fixes

* **cart-item:** check min quantity not gt max before fixing current qnt ([ceaba7b](https://github.com/ecomplus/storefront/commit/ceaba7b12a9fb65d853c698596535ac49932891c))





# [1.0.0-beta.37](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.36...@ecomplus/storefront-components@1.0.0-beta.37) (2020-07-03)


### Bug Fixes

* **cart-item:** fix handling optionals min/max quantity ([7d3acd6](https://github.com/ecomplus/storefront/commit/7d3acd6f144be0bc460b9d75478de820ae8defa2))





# [1.0.0-beta.36](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.35...@ecomplus/storefront-components@1.0.0-beta.36) (2020-07-03)


### Bug Fixes

* **cart-item:** prevent so much quantity options (with max quantity) ([f532b72](https://github.com/ecomplus/storefront/commit/f532b721790e02c68dca4c962f342a456cbaeb55))
* **picture:** fallback for legacy storage api v1 ([926f444](https://github.com/ecomplus/storefront/commit/926f4445e4dd55a3544d49e6db17f2c77c8d2f4f))


### Features

* **account-form:** create new AccountForm component ([#261](https://github.com/ecomplus/storefront/issues/261)) ([0b1e319](https://github.com/ecomplus/storefront/commit/0b1e31960ce020fd4d1a267ce78dab9b911635b5))





# [1.0.0-beta.35](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.34...@ecomplus/storefront-components@1.0.0-beta.35) (2020-07-02)


### Bug Fixes

* **cart-item:** ignore 11+ quantity option if max quantity lt 10 ([29b5159](https://github.com/ecomplus/storefront/commit/29b5159338334cd6fcdbcc13513526e725d8a3ba))
* **deps:** fix @ecomplus/shopping-cart to v2.1.5 ([9d5d68c](https://github.com/ecomplus/storefront/commit/9d5d68c2218226d5984f648fb7f6914c93e4ec20))
* **discount-applier:** fix setting quantity when adding freebie item ([27224c3](https://github.com/ecomplus/storefront/commit/27224c3a42de01596feb87a53fedd674874b8d86))





# [1.0.0-beta.34](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.33...@ecomplus/storefront-components@1.0.0-beta.34) (2020-06-30)


### Bug Fixes

* **deps:** update @ecomplus/shopping-cart to v2.1.2 ([d4fb6b0](https://github.com/ecomplus/storefront/commit/d4fb6b032b82519f7e3b433fd6faad3715746fbf))
* **deps:** update @ecomplus/shopping-cart to v2.1.3 ([0a71d3b](https://github.com/ecomplus/storefront/commit/0a71d3b161b8f2b4258ec72df0772a5ac9e8b3c0))
* **input-doc-number:** valid cpf/cnpj only when input is filled ([9c04909](https://github.com/ecomplus/storefront/commit/9c049093d21684e01bf9396cb902f62dc10f88a6))


### Features

* **account-addresses:** add new AccountAddresses component :tada: ([#256](https://github.com/ecomplus/storefront/issues/256)) ([a37811e](https://github.com/ecomplus/storefront/commit/a37811e58cb810d1295cccba4606a8f536131b7b))
* **input-doc-number:** checking br cpf/cnpj ([067d398](https://github.com/ecomplus/storefront/commit/067d3981536aa979777944390ac0c94d59f75d36))





# [1.0.0-beta.33](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.32...@ecomplus/storefront-components@1.0.0-beta.33) (2020-06-25)


### Bug Fixes

* **scss:** minor fixes for @ecomplus/storefront v5.9.0 ([6fea498](https://github.com/ecomplus/storefront/commit/6fea4982b7086f03217b4c516267849abd3918a0))


### Features

* **the-cart:** add TheCart component ([#248](https://github.com/ecomplus/storefront/issues/248)) ([2116548](https://github.com/ecomplus/storefront/commit/2116548faad452acfd2f08786bb68e4645bc1d26)), closes [#182](https://github.com/ecomplus/storefront/issues/182)





# [1.0.0-beta.32](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.31...@ecomplus/storefront-components@1.0.0-beta.32) (2020-06-21)

**Note:** Version bump only for package @ecomplus/storefront-components





# [1.0.0-beta.31](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.30...@ecomplus/storefront-components@1.0.0-beta.31) (2020-06-21)

**Note:** Version bump only for package @ecomplus/storefront-components





# [1.0.0-beta.30](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.29...@ecomplus/storefront-components@1.0.0-beta.30) (2020-06-18)

**Note:** Version bump only for package @ecomplus/storefront-components





# [1.0.0-beta.29](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.28...@ecomplus/storefront-components@1.0.0-beta.29) (2020-06-18)


### Bug Fixes

* **deps:** update all non-major dependencies ([#251](https://github.com/ecomplus/storefront/issues/251)) ([d08be72](https://github.com/ecomplus/storefront/commit/d08be7258f1f0d55f2d6b6b53fd3f5fb1b6a4bbe))





# [1.0.0-beta.28](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.27...@ecomplus/storefront-components@1.0.0-beta.28) (2020-06-10)


### Bug Fixes

* **cart-item:** disable input (quantity edit) if no price ([cc8d8e4](https://github.com/ecomplus/storefront/commit/cc8d8e49345c1b31eb97dcf875a789400176d8b1))
* **deps:** update @ecomplus/i18n to v1.12.0 ([eadefea](https://github.com/ecomplus/storefront/commit/eadefea96ee224f0d403686b3c8ff6ca574a6b50))
* **deps:** update all non-major dependencies ([#249](https://github.com/ecomplus/storefront/issues/249)) ([6762fac](https://github.com/ecomplus/storefront/commit/6762fac914c7a272e115ce79c497d918c8518416))
* **i18n:** update (import) some new words ([e55bbfd](https://github.com/ecomplus/storefront/commit/e55bbfd321b6808970bdf81e2a19ec95c72e1a9f))





# [1.0.0-beta.27](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.26...@ecomplus/storefront-components@1.0.0-beta.27) (2020-06-06)


### Features

* **cart-item:** handling freebie items by flag ([2867e52](https://github.com/ecomplus/storefront/commit/2867e52d1af0e611a9b688fc710ceb62f749641e))
* **discount-applier:** handle new 'canAddFreebieItems' prop ([5bfb52f](https://github.com/ecomplus/storefront/commit/5bfb52f61178c418f05d5f6a0fc610f326a192d4))





# [1.0.0-beta.26](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.25...@ecomplus/storefront-components@1.0.0-beta.26) (2020-06-03)


### Bug Fixes

* **search-engine:** check term string to handle suggestions ([89800f4](https://github.com/ecomplus/storefront/commit/89800f422cd211891001c4afeb509faf1b2d937b))





# [1.0.0-beta.25](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.24...@ecomplus/storefront-components@1.0.0-beta.25) (2020-06-03)


### Bug Fixes

* **product-card:** style fix for chrome mobile ([38d9415](https://github.com/ecomplus/storefront/commit/38d9415d91ac58ea5dcaafdafd3be78c0329f94b))
* **search-engine:** fix handling suggestions with case insensitive terms ([c5d682b](https://github.com/ecomplus/storefront/commit/c5d682b10eedda7491bc93bdbe087ed7842a3bf5))





# [1.0.0-beta.24](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.23...@ecomplus/storefront-components@1.0.0-beta.24) (2020-06-02)


### Bug Fixes

* **recommended-items:** fix handling pagination (load more) ([d3e4802](https://github.com/ecomplus/storefront/commit/d3e4802bfc0d6ac4d428b1de07ca426277c3cf1f))
* **recommended-items:** styles/props fixes for mobile ([c174b5d](https://github.com/ecomplus/storefront/commit/c174b5debcf7b804abe0996f010252bbd323038b))
* **shipping-calculator:** preventing unecessary update fetch ([e718eff](https://github.com/ecomplus/storefront/commit/e718effb05e08e5d22e7a1db563937e1b2edf795))


### Features

* **product-card:** add 'installmentsOption' and 'discountOption' ([4e3217f](https://github.com/ecomplus/storefront/commit/4e3217f037e6a5a461cd7066d17134e2689564af))





# [1.0.0-beta.23](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.22...@ecomplus/storefront-components@1.0.0-beta.23) (2020-06-02)


### Bug Fixes

* **deps:** update @ecomplus/search-engine to v2.3.2 ([042f082](https://github.com/ecomplus/storefront/commit/042f082e89ee8c4627407d3bbf3e38804ef3fb92))
* **discount-applier:** fix local amount calc ([1f6c38e](https://github.com/ecomplus/storefront/commit/1f6c38e4842a87f505cb692f519731b813b28eac))
* **shipping-calculator:** ensure skip progress bar if no 50% for free ([841ca10](https://github.com/ecomplus/storefront/commit/841ca1090737de1bcbd722ee2be20329710600f3))


### Features

* **product:** add 'free shipping from' info ([397bad5](https://github.com/ecomplus/storefront/commit/397bad555a91095870fbc22588efa9fe830b00f1))
* **product:** handling optional payment apps sort array ([550aad3](https://github.com/ecomplus/storefront/commit/550aad38fdff0fc7ef8ac57657af160be18b72ff))
* **recommended-items:** new 'RecommendedItems' component :tada: ([083ddd7](https://github.com/ecomplus/storefront/commit/083ddd7d4b1b675103524753e86523fa625cc112))
* **shipping-calculator:** add 'free-from-value' and 'option' slots ([6a91188](https://github.com/ecomplus/storefront/commit/6a911885b6440dd9041002304284416f992ffd27))





# [1.0.0-beta.22](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.21...@ecomplus/storefront-components@1.0.0-beta.22) (2020-05-28)


### Bug Fixes

* **variations:** fix skipping out of stock variation on select ([d38978a](https://github.com/ecomplus/storefront/commit/d38978aff4fa6ce98a91ed5b2c5b61f5d56f12a3))





# [1.0.0-beta.21](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.20...@ecomplus/storefront-components@1.0.0-beta.21) (2020-05-28)


### Features

* **product:** show success button when product on cart ([069e0c0](https://github.com/ecomplus/storefront/commit/069e0c09c6d97c98f5d62306ef8688d930c5de86))





# [1.0.0-beta.20](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.19...@ecomplus/storefront-components@1.0.0-beta.20) (2020-05-28)


### Bug Fixes

* **back-shopping:** 'continue shopping' button on quickview and cart page ([#241](https://github.com/ecomplus/storefront/issues/241)) ([47f1064](https://github.com/ecomplus/storefront/commit/47f1064b1640cfb95f486c6c6b9b8dd31decf321))
* **deps:** update @ecomplus/i18n to v1.11.1 ([0d3a041](https://github.com/ecomplus/storefront/commit/0d3a041e4985555482ca5c3965149d28b439fbbf))
* **deps:** update @ecomplus/search-engine to v2.3.1 ([471416d](https://github.com/ecomplus/storefront/commit/471416d80c4a54e1c7c5245bafbb9fb631321813))
* **product:** fix using ProductGalery component (`current-slide`) ([8123d2f](https://github.com/ecomplus/storefront/commit/8123d2f73b142066baf04a022afaaed385c0b540))
* **product:** handling payment with 'installments_option' ([095ca74](https://github.com/ecomplus/storefront/commit/095ca740a68e17d3a080246d10843a89bbed1dce))
* **product:** minor fix for unselected variations message ([5a67b7d](https://github.com/ecomplus/storefront/commit/5a67b7d121a0bfba12489f74377efcea319b09c4))
* **share:** stop forcing vertical margin ([1347012](https://github.com/ecomplus/storefront/commit/134701261d191f59e31b69ab8133d8f5ee793672))


### Features

* **payment-option:** add `installmentsOption` prop ([726b2de](https://github.com/ecomplus/storefront/commit/726b2de92f8c6019c6dfc953c33b4a34666d83b6))
* **product:** add share buttons after buy button ([e707e3d](https://github.com/ecomplus/storefront/commit/e707e3d56d597d55f5d07a23a8c5a5c5c594b63f))
* **product-variations:** better showing selected option value ([d111a44](https://github.com/ecomplus/storefront/commit/d111a449e4c6cfd3ccd97f51a30c85e258ddad5f))
* **share:** add new AShare component :tada: ([2018619](https://github.com/ecomplus/storefront/commit/201861922b8355ee1e733d34d9ccf47ca8cfa1c9))





# [1.0.0-beta.19](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.18...@ecomplus/storefront-components@1.0.0-beta.19) (2020-05-26)


### Features

* **product-card:** accepting preseted picture size variables (!default) ([7f4de60](https://github.com/ecomplus/storefront/commit/7f4de605dcc367e812157f57a64d3c47015e7a6e))





# [1.0.0-beta.18](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.17...@ecomplus/storefront-components@1.0.0-beta.18) (2020-05-26)

**Note:** Version bump only for package @ecomplus/storefront-components





# [1.0.0-beta.17](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.16...@ecomplus/storefront-components@1.0.0-beta.17) (2020-05-24)


### Bug Fixes

* **deps:** update @ecomplus/search-engine v2.3.0 ([f544a71](https://github.com/ecomplus/storefront/commit/f544a7146c60429709e5f18853df8808ae2aaf69))
* **search-engine:** fix handling fixed categories filters ([f1fc397](https://github.com/ecomplus/storefront/commit/f1fc3977593b32509bd5634ee670a663639174be))


### Features

* **picture:** check configured default img size and container height ([eb7c8bb](https://github.com/ecomplus/storefront/commit/eb7c8bbe6e9041887f3209d5032cb736aec24fab))





# [1.0.0-beta.16](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.15...@ecomplus/storefront-components@1.0.0-beta.16) (2020-05-22)


### Bug Fixes

* **deps:** update @ecomplus/i18n to v1.11.0 ([07414f3](https://github.com/ecomplus/storefront/commit/07414f3d9e16238b87653df5bac1a601c7c25421))
* **deps:** update @ecomplus/utils to v1.4.0 ([551e02e](https://github.com/ecomplus/storefront/commit/551e02e0e1e3bee6ce7002fd84d0c91f9cb8fb08))


### Features

* **seacrh-engine:** add/handle new 'defaultSort' prop ([1528d67](https://github.com/ecomplus/storefront/commit/1528d67f40109b0fb57b808201eb1b522966c7b2))
* **search-engine:** add fixed right filter/loading button ([8ca2149](https://github.com/ecomplus/storefront/commit/8ca2149f3c76f44c40ff41e69108aee5653e1cd6))





# [1.0.0-beta.15](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.14...@ecomplus/storefront-components@1.0.0-beta.15) (2020-05-22)


### Bug Fixes

* **search-engine:** fix handling `isFixed${filter}` props ([8810fd2](https://github.com/ecomplus/storefront/commit/8810fd236973c6c8cb1c4168d9bc98eedc4bb481))





# [1.0.0-beta.14](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.13...@ecomplus/storefront-components@1.0.0-beta.14) (2020-05-21)


### Bug Fixes

* **deps:** update @ecomplus/passport-client to v1.0.10 ([ff72116](https://github.com/ecomplus/storefront/commit/ff721164afc001d02431601bd083c3beb417fada))
* **discount-applier:** updating discoutn value when amout is changed ([afedcab](https://github.com/ecomplus/storefront/commit/afedcab50756c06812f0133322758cee749ad8a9))
* **search-engine:** add 'isFixedBrands' and 'isFixedCategories' props ([8b9407b](https://github.com/ecomplus/storefront/commit/8b9407bc26407f8d0e425afba3480cbe5d1f1f92))





# [1.0.0-beta.13](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.12...@ecomplus/storefront-components@1.0.0-beta.13) (2020-05-16)


### Bug Fixes

* **product:** move payment options to after buy button, start hide ([dd712e5](https://github.com/ecomplus/storefront/commit/dd712e5d1b304b45f727917908fde6e7b0ee7989))





# [1.0.0-beta.12](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.11...@ecomplus/storefront-components@1.0.0-beta.12) (2020-05-16)


### Bug Fixes

* **deps:** update @ecomplus/i18n to v1.10.1 ([143d40a](https://github.com/ecomplus/storefront/commit/143d40a4d2cc407882dc30caba67fddb4cc71373))
* **deps:** update @ecomplus/search-engine to v2.2.1 ([3da510f](https://github.com/ecomplus/storefront/commit/3da510fbd6024ddd05e3ef9721d24d6e9a91473f))
* **prices:** check installment/discount options from props separately ([e2e3356](https://github.com/ecomplus/storefront/commit/e2e3356df67aff655a6c2b277fca7485afca230e))
* **prices:** minor template fix for compared prices ([971ee3c](https://github.com/ecomplus/storefront/commit/971ee3ce6ae591feea86a3e339ba89bca90abee1))


### Features

* **payment-option:** add new 'PaymentOption' component :tada: ([c4c001b](https://github.com/ecomplus/storefront/commit/c4c001b8a42797b1baef962f4c87d0f136ffc6d2))
* **prices:** emit 'fix-price' to pass price with extra discount ([d854fb1](https://github.com/ecomplus/storefront/commit/d854fb1eabb4c2155d10570a58d11db192a4df32))
* **product:** handling fixed price and list payment options ([03c3f62](https://github.com/ecomplus/storefront/commit/03c3f6205a2aa9ce2ebb905beb138ee176d0f6de))





# [1.0.0-beta.11](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.10...@ecomplus/storefront-components@1.0.0-beta.11) (2020-05-14)


### Bug Fixes

* **deps:** update @ecomplus/search-engine to v2.1.0 ([7458273](https://github.com/ecomplus/storefront/commit/745827394b3255105a666c55f829fd97c8845a10))





# [1.0.0-beta.10](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.9...@ecomplus/storefront-components@1.0.0-beta.10) (2020-05-12)


### Bug Fixes

* **prices:** fix literal installments text (upto x of y) ([61f9fca](https://github.com/ecomplus/storefront/commit/61f9fcae2ae87c6d552438747ffeb09a64f5f8d1))
* **product-gallery:** fix opening zoom on excedent images button ([b44fbdb](https://github.com/ecomplus/storefront/commit/b44fbdba3e6f70978836c2865dab0eb328a26bf9))
* **product-variations:** minor style fix for multiple grid options cases ([52cf785](https://github.com/ecomplus/storefront/commit/52cf7850e7b1a6a099e88b2c519f72bd908d4873))
* **search-engine:** handle search engine sort order change ([#213](https://github.com/ecomplus/storefront/issues/213)) ([9879e69](https://github.com/ecomplus/storefront/commit/9879e694b63733d40b38d85e91efd6956dad1f65)), closes [#212](https://github.com/ecomplus/storefront/issues/212)


### Features

* **address-form:** add new 'AddressForm' component :tada: ([ebafa32](https://github.com/ecomplus/storefront/commit/ebafa32cdac6d70bd573578c14e8812be5937f88))
* **product-variations:** handle 'maxOptionsBtns' prop ([73ec095](https://github.com/ecomplus/storefront/commit/73ec0953bd03fe2f23382fa084c7e0b208293be7))





# [1.0.0-beta.9](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.8...@ecomplus/storefront-components@1.0.0-beta.9) (2020-05-08)


### Bug Fixes

* **product-gallery:** open photoswipe with 1000x1000 if size undefined ([4a509e8](https://github.com/ecomplus/storefront/commit/4a509e8539fcda30d2495a88169950f5ab89d573))


### Features

* **cart-quickview:** show installment/discount options with APrice ([104154f](https://github.com/ecomplus/storefront/commit/104154f9198cf6fe0fe421befb81f6948c666572))





# [1.0.0-beta.8](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.7...@ecomplus/storefront-components@1.0.0-beta.8) (2020-05-05)


### Bug Fixes

* **deps:** update @ecomplus/i18n to v1.9.0 ([534a235](https://github.com/ecomplus/storefront/commit/534a23571d6d054a9f8186fb0d9e069dac78836f))
* **input-phone:** minor fix for br phone number placeholder ([363a686](https://github.com/ecomplus/storefront/commit/363a686bc985b54658cf649f07ea1ee1a898ceb2))





# [1.0.0-beta.7](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.6...@ecomplus/storefront-components@1.0.0-beta.7) (2020-05-03)


### Bug Fixes

* **instant-search:** minor style fix for results count block ([24eeece](https://github.com/ecomplus/storefront/commit/24eeeced67d8edb8d3168af2dc356391e9a83899))
* **search-engine:** fix preseted brands/categories options (filterable) ([cbb286a](https://github.com/ecomplus/storefront/commit/cbb286a2f47de05a4595d488fe9b042a53ced432))





# [1.0.0-beta.6](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.5...@ecomplus/storefront-components@1.0.0-beta.6) (2020-05-01)


### Bug Fixes

* **components:** fix importing and declaring alert/link components ([c7318c1](https://github.com/ecomplus/storefront/commit/c7318c1109df41a0a3a57d7f7ead6acd6736b957))


### Features

* **alert:** expose AAlert component (was internal) ([e4ba211](https://github.com/ecomplus/storefront/commit/e4ba21133f65fa12a142defd8892262c35e7dff1))
* **input-date:** date input with format ([93a3d51](https://github.com/ecomplus/storefront/commit/93a3d516fae8faaacc15f1ef3cbca36cd87ea6d2))
* **input-phone:** phone number input with format ([8561df0](https://github.com/ecomplus/storefront/commit/8561df0924a8bb2d025de66bc73dd8e0b7774e2e))
* **input-zip-code:** zip code (CEP) input with format ([1969622](https://github.com/ecomplus/storefront/commit/196962266dac093e6225e5e93748e3c20a8de2e7))
* **link:** expose ALink component (was internal) ([b8663bf](https://github.com/ecomplus/storefront/commit/b8663bf34ef622b1ce071cc7efb3971248a78e37))
* **prices:** showing installments option even with interest ([eaf702f](https://github.com/ecomplus/storefront/commit/eaf702fe1525bba47c391d0f2f386deff9092978))





# [1.0.0-beta.5](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.4...@ecomplus/storefront-components@1.0.0-beta.5) (2020-04-23)


### Bug Fixes

* **deps:** update @ecomplus/i18n to 1.7.1 ([6a55c90](https://github.com/ecomplus/storefront/commit/6a55c90b370ae5e872ee96c0763febc94462484d))
* **deps:** update @ecomplus/i18n to v1.8.0 ([63140b8](https://github.com/ecomplus/storefront/commit/63140b837537442f92532ae98a8e14caa55edc55))
* **discount-applier:** fix el class names ([c011832](https://github.com/ecomplus/storefront/commit/c011832d7c28470b4f93b8df48968527a3ef7dcf))
* **discount-applier:** fix emitted events (kebab case) ([c03cfac](https://github.com/ecomplus/storefront/commit/c03cfaca0ff39576614ffcb82f914d9f3c48205b))
* **discount-applier:** import alert component (internal) ([1b1c120](https://github.com/ecomplus/storefront/commit/1b1c12079e4c4f14b799f6073199d2c39a09f6b5))
* **prices:** handle discount option without label ([417e8ee](https://github.com/ecomplus/storefront/commit/417e8eed212765abcca1ad6f6a3cce2cf15aab06))
* **product-card:** fix handling product with one picture only ([53b8c1a](https://github.com/ecomplus/storefront/commit/53b8c1a9c72e26314e0af621bc6ee4194e8b0a5a))
* **the-product:** minor style fixes for stock alert ([2c3c5c8](https://github.com/ecomplus/storefront/commit/2c3c5c8d2371e4e2f75bb01ef60f20e4f9b7bdf3))


### Features

* **account:** add new TheAccount component :tada: ([6e11fd1](https://github.com/ecomplus/storefront/commit/6e11fd1aa8d99c951da908962063f8cab30457b1))
* **discount-applier:** add DiscountApplier component :tada: ([f4f1eb3](https://github.com/ecomplus/storefront/commit/f4f1eb34d464dd789dde6e43d0cb33daaed71727))
* **input-doc-number:** add InputDocNumber component :tada: ([f8873f7](https://github.com/ecomplus/storefront/commit/f8873f723ecea52d6b13ae1cc712fc78f1bc0b5d))
* **login-block:** add new LoginBlock component :tada: ([3e72b87](https://github.com/ecomplus/storefront/commit/3e72b87d482e93416c274ee3993fb9ebc26de59b))





# [1.0.0-beta.4](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.3...@ecomplus/storefront-components@1.0.0-beta.4) (2020-04-16)


### Bug Fixes

* **product-card:** check window object to support ssr ([8dc2de2](https://github.com/ecomplus/storefront/commit/8dc2de21b657d7bf5ae5d0122bb1fb777bd1b50e))





# [1.0.0-beta.3](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.2...@ecomplus/storefront-components@1.0.0-beta.3) (2020-04-16)


### Bug Fixes

* **backdrop:** lock body scrool on backdrop visible ([16f6079](https://github.com/ecomplus/storefront/commit/16f60794c310cac4efb853dda68c9c363b2bf7d4))
* **deps:** update all non-major dependencies ([#196](https://github.com/ecomplus/storefront/issues/196)) ([9a9c188](https://github.com/ecomplus/storefront/commit/9a9c18889a091c40064441e3079a9ed6d8905589))
* **instant-search:** `autoFixTerm` to `autoFixScore` ([3ce8ef7](https://github.com/ecomplus/storefront/commit/3ce8ef70e724bac1af8342aed91fd5fc6c7d7ff5))
* **instant-search:** fix triggering input focus ([5634d4c](https://github.com/ecomplus/storefront/commit/5634d4c9395764b79bc83661f4af36c7bf3dc46a))
* **instant-search:** properly set input value before parent form submit ([81199a4](https://github.com/ecomplus/storefront/commit/81199a4048cbc8ba8b0627df6c023a8870f64619))
* **product-card:** ensure picture max width ([5e4c911](https://github.com/ecomplus/storefront/commit/5e4c911ee22625c74e9b12b4ef2f87f3224b452c))
* **product-card:** ensure product name block box sizing ([f92abd5](https://github.com/ecomplus/storefront/commit/f92abd59959dad76a9b92d6c3041c20300f04777))
* **product-variations:** fix scss class name and minor style fixes ([c06e527](https://github.com/ecomplus/storefront/commit/c06e527510fc6f0ee9f55e955c7a34e6cdb1c5b8))


### Features

* **product:** add 'rating' slot ([c917288](https://github.com/ecomplus/storefront/commit/c917288292ac2e0fc032b3279c3f7bf6f5502aa9))
* **product-card:** try some vars from window to customize card ([81fe202](https://github.com/ecomplus/storefront/commit/81fe202cdf3eda934053fb976a8e1c31b2cc4034))





# [1.0.0-beta.2](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.1...@ecomplus/storefront-components@1.0.0-beta.2) (2020-04-03)


### Bug Fixes

* **deps:** update @ecomplus/passport-client to v1.0.7 ([b2c624d](https://github.com/ecomplus/storefront/commit/b2c624d1780a6920d8227aa1e0e693630bfd2a92))


### Features

* **picture:** emit 'load' event when image is ready ([e5e568a](https://github.com/ecomplus/storefront/commit/e5e568a1818226e24a9f533ca8b8e1b3f2e948ff))
* **product:** add some slots common for product page and ssr ([4aaf96d](https://github.com/ecomplus/storefront/commit/4aaf96d427315b0771dbe8ae0f468c9e9c08b30a))
* **product-card:** add header, title and buy-buttont-content slots ([3818e20](https://github.com/ecomplus/storefront/commit/3818e2047dd6ef026ec6dab662f526ba0ff96542))
* **product-gallery:** supporting a preloaded first image with slot ([1a163ea](https://github.com/ecomplus/storefront/commit/1a163ea23a042207b954d35c0a4f7e2aba259135))





# [1.0.0-beta.1](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@1.0.0-beta.0...@ecomplus/storefront-components@1.0.0-beta.1) (2020-03-30)

**Note:** Version bump only for package @ecomplus/storefront-components





# [1.0.0-beta.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@0.3.0...@ecomplus/storefront-components@1.0.0-beta.0) (2020-03-28)


### Bug Fixes

* **atoms:** minor style fixes for prices/picture atoms ([0aee47d](https://github.com/ecomplus/storefront/commit/0aee47d05118ef2519d2ce64d884d0c745fcd17d))
* **backdrop:** ensure invisible backdrop is out of screen ([1dbb499](https://github.com/ecomplus/storefront/commit/1dbb499e2b2a9a66342a639b8fa7e6ab0fca193c))
* **backdrop:** rename prop to `canAutoHide`, check if clickable ([2fc3399](https://github.com/ecomplus/storefront/commit/2fc3399a7ffa18f65201bed579b168cb483c71c4))
* **backdrop:** sync visibility state by prop, also ensure fade in ([c2b4d92](https://github.com/ecomplus/storefront/commit/c2b4d92672cee1f32b5403d6105659a87d304c92))
* **deps:** fix pkg deps, update root @ecomplus/i18n to v1.5.0 ([89699e2](https://github.com/ecomplus/storefront/commit/89699e22bcb8ea1fa36e64babcf10f41f4e9805b))
* **deps:** update @ecomplus/i18n to ^1.7.0 ([8c2b1c7](https://github.com/ecomplus/storefront/commit/8c2b1c70e1fb131b69e38eb9893a46fc6b2157d5))
* **deps:** update \@ecomplus/utils to v1.3.4 ([5b3b40a](https://github.com/ecomplus/storefront/commit/5b3b40a8f9d0d5154512a2401fff333239aabc1a))
* **deps:** update all non-major dependencies ([#171](https://github.com/ecomplus/storefront/issues/171)) ([d94b3fe](https://github.com/ecomplus/storefront/commit/d94b3fec0726e5d92becd3dd53f3833c77bb03cc))
* **instant-search:** mobile style fixes ([7be8752](https://github.com/ecomplus/storefront/commit/7be87528f8c1e027111117665f01c2f5e2939ce6))
* **js:** don't fire window directly to prevent ssr error ([7a248be](https://github.com/ecomplus/storefront/commit/7a248bee4b32dd2758ccb544633353a2a21d43c9))
* **links:** check if route path exists to use router-link ([974b1b0](https://github.com/ecomplus/storefront/commit/974b1b09e964ca3af5c0754b78f7656643ee449c))
* **links:** using internal VLink to support vue router ([0d60177](https://github.com/ecomplus/storefront/commit/0d60177bf29f7fb805b90b3cde498582e98a5e8a))
* **login-modal:** use VLink for account menu to support router ([6836215](https://github.com/ecomplus/storefront/commit/6836215047a60ddd9dd741c33a50cb74c223ee8d))
* **picture:** edit loading background, minor fix fade effect ([97fab5b](https://github.com/ecomplus/storefront/commit/97fab5b12c2238d25351b721c1f2d1aaf3c5b428))
* **picture:** fix handling fade effect on load ([a8493a2](https://github.com/ecomplus/storefront/commit/a8493a228d5d6e8767f3f8abd7d26e5557ca93c1))
* **picture:** properlly handling src as img object ([edf5eaf](https://github.com/ecomplus/storefront/commit/edf5eafb2bf91c89e2d846feb383dcaf228c0b5d))
* **picture:** set height only if el 'clientWidth' is set ([9553d7d](https://github.com/ecomplus/storefront/commit/9553d7d6cb2435e1fb2063d28867dd8b9b22e1ee))
* **product-card:** load secondary image on hover only, minor fade fix ([bccb1b3](https://github.com/ecomplus/storefront/commit/bccb1b320777f2a72b10c6539fb6f97c34499674))
* **product-card:** minor pictures overlap fix, offer stamp prettier ([036371b](https://github.com/ecomplus/storefront/commit/036371bf57617dccb0c2a897ee1d79eed3fda853))
* **product-card:** minor pictures style fixes ([ac91ea9](https://github.com/ecomplus/storefront/commit/ac91ea916ca599dea415c1c9da810d3ed2e455af))
* **product-gallery:** prevent errors with undefined product props ([2c38a60](https://github.com/ecomplus/storefront/commit/2c38a606c75c2d1e7c64cd7488edd606f33f3951))
* **props:** consistent boolean props naming ([69a7e6b](https://github.com/ecomplus/storefront/commit/69a7e6ba2748ea077563bde27774a4ad6b08576b))


### Features

* **backdrop:** add ABackdrop atom component ([5008b26](https://github.com/ecomplus/storefront/commit/5008b26df789117ad4e439d4f484c84a3ef32948))
* **cart-item:** add CartItem component :tada: ([37ca938](https://github.com/ecomplus/storefront/commit/37ca9387b805da85c8beba984ca3f3e71f7cce86))
* **cart-quickview:** add CartQuickview component :tada: ([a6467ff](https://github.com/ecomplus/storefront/commit/a6467ffaa7f291cd223030c4f6cdd2c98a0b8d0c))
* **instant-search:** setup InstantSearch component :tada: ([33f9fc0](https://github.com/ecomplus/storefront/commit/33f9fc042a2328ce207b55a7bf8f6f928732cdf8))
* **login-modal:** add new LoginModal component :tada: ([75238ca](https://github.com/ecomplus/storefront/commit/75238cab394927767261444b1cdd4e2db19aa45e))
* **picture:** add lozad options props, handle $img onload ([fd6368f](https://github.com/ecomplus/storefront/commit/fd6368fcac821ab1a11e8ea5f120f2a3cf3f78fb))
* **product-card:** add 'rating' scoped slot (empty by default) ([d558954](https://github.com/ecomplus/storefront/commit/d558954b2741bfe44f2ea2dff70cabb01b4be683))
* **product-card:** prop for heading tag, small product card variation ([ab90a7b](https://github.com/ecomplus/storefront/commit/ab90a7b34feca7e7aea0099760a3bdd2cacab16e))
* **product-card:** setting up ProductCard molecule component ([8b6230d](https://github.com/ecomplus/storefront/commit/8b6230d737deb06775aa452a5943786b5ae30c80))
* **product-gallery:** add ProductGallery component :tada: ([5f79b52](https://github.com/ecomplus/storefront/commit/5f79b52eb77a4dfb80a37a1283d13d7527969626))
* **product-variations:** add new ProductVariations component :tada: ([6ab36dc](https://github.com/ecomplus/storefront/commit/6ab36dc80ef48cad8b47353af99e8e60c81c9129))
* **search-engine:** complete SearchEngine component ([daea95a](https://github.com/ecomplus/storefront/commit/daea95ae3284dcae04d2c0f9e5fc9e0d05c8e93e))
* **search-engine:** handle load more on scroll (observer) ([a621a39](https://github.com/ecomplus/storefront/commit/a621a398c53bc4ba1cce63fff6ae539470c73237))
* **search-engine:** handle search fetch with queue for props watch ([4ff86fa](https://github.com/ecomplus/storefront/commit/4ff86fac198d2a1f357d31567bcd182a9ce617ce))
* **search-engine:** handling search filters with off canvas menu ([df47b2b](https://github.com/ecomplus/storefront/commit/df47b2b55868b85e2c83d52c8def6b498192a061))
* **search-engine:** render search engine nav for info, sort and filter ([1a18828](https://github.com/ecomplus/storefront/commit/1a1882866e3d9459a4c9195a24e840631fe6b963))
* **shipping-calculator:** add new ShippingCalculator component :tada: ([07a4094](https://github.com/ecomplus/storefront/commit/07a40945fff66cdf569775f7702a7f3417cedbda))
* **shipping-line:** new ShippingLine component :tada: ([89f8d80](https://github.com/ecomplus/storefront/commit/89f8d802b76b6182491d633eeda520036880141d))
* **the-product:** add new TheProduct component :tada: ([80141ca](https://github.com/ecomplus/storefront/commit/80141ca1023cbe6a66032515c14730b16ab44ed4))





# [0.3.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@0.2.0...@ecomplus/storefront-components@0.3.0) (2020-02-27)


### Features

* **picture:** picture atom component (first one :tada:) ([f3a5a9e](https://github.com/ecomplus/storefront/commit/f3a5a9e31967667b222a52999829c671bffed52d))
* **prices:** prices atom component ([7729340](https://github.com/ecomplus/storefront/commit/77293403387f78a00232207d6e6b7359af553588))





# [0.2.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-components@0.1.1...@ecomplus/storefront-components@0.2.0) (2020-02-13)


### Features

* **components:** setting up src and first component (picture) ([0f881ce](https://github.com/ecomplus/storefront/commit/0f881ced0454fd6e7b1ea9f5378575d99c650423))





## 0.1.1 (2020-02-06)

**Note:** Version bump only for package @ecomplus/storefront-components
