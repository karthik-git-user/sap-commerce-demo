
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@spartacus/punchout/fesm2022/spartacus-punchout.mjs": [
    "chunk-WRK76I43.js"
  ],
  "node_modules/@spartacus/smartedit/fesm2022/spartacus-smartedit.mjs": [
    "chunk-ZCWU57O5.js"
  ],
  "node_modules/@spartacus/product/fesm2022/spartacus-product-future-stock.mjs": [
    "chunk-O4YHFLZL.js"
  ],
  "node_modules/@spartacus/product/fesm2022/spartacus-product-variants.mjs": [
    "chunk-62O4BE7N.js"
  ],
  "node_modules/@spartacus/product/fesm2022/spartacus-product-image-zoom.mjs": [
    "chunk-3R3KMM5X.js"
  ],
  "node_modules/@spartacus/product/fesm2022/spartacus-product-bulk-pricing.mjs": [
    "chunk-B6YT7YVX.js"
  ],
  "node_modules/@spartacus/organization/fesm2022/spartacus-organization-administration.mjs": [
    "chunk-HWJRXDCQ.js",
    "chunk-UK2ECVAL.js"
  ],
  "node_modules/@spartacus/organization/fesm2022/spartacus-organization-account-summary.mjs": [
    "chunk-PU5U3ZL5.js",
    "chunk-UK2ECVAL.js"
  ],
  "node_modules/@spartacus/organization/fesm2022/spartacus-organization-unit-order.mjs": [
    "chunk-6MKQJ3GJ.js",
    "chunk-XPVWCZPB.js",
    "chunk-MFMVEAPT.js",
    "chunk-UW3GRV27.js"
  ],
  "node_modules/@spartacus/organization/fesm2022/spartacus-organization-order-approval.mjs": [
    "chunk-D6CCRVH6.js",
    "chunk-MFMVEAPT.js",
    "chunk-UW3GRV27.js"
  ],
  "src/app/spartacus/features/product-configurator/rulebased-configurator-wrapper.module.ts": [
    "chunk-QBYOPGG5.js"
  ],
  "node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder.mjs": [
    "chunk-5CGLU6JP.js",
    "chunk-SYXUUCNU.js"
  ],
  "node_modules/@spartacus/asm/fesm2022/spartacus-asm.mjs": [
    "chunk-4HDRHYLO.js",
    "chunk-JGFVNY5C.js"
  ],
  "node_modules/@spartacus/asm/fesm2022/spartacus-asm-customer-360.mjs": [
    "chunk-SJBXECBS.js",
    "chunk-SYXUUCNU.js",
    "chunk-JGFVNY5C.js"
  ],
  "node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list.mjs": [
    "chunk-K3FE5HYD.js"
  ],
  "node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list-components-add-to-wishlist.mjs": [
    "chunk-PIPCTNFM.js"
  ],
  "node_modules/@spartacus/cart/fesm2022/spartacus-cart-quick-order.mjs": [
    "chunk-4SLXATQE.js"
  ],
  "node_modules/@spartacus/cart/fesm2022/spartacus-cart-import-export.mjs": [
    "chunk-CFLPYUP2.js"
  ],
  "node_modules/@spartacus/order/fesm2022/spartacus-order.mjs": [
    "chunk-JC5DWOIY.js",
    "chunk-XPVWCZPB.js",
    "chunk-MFMVEAPT.js",
    "chunk-UW3GRV27.js"
  ],
  "src/app/spartacus/features/checkout/checkout-wrapper.module.ts": [
    "chunk-U3ZECVPD.js",
    "chunk-YGDCIAP6.js"
  ],
  "node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-personalization.mjs": [
    "chunk-T2EJP3IE.js"
  ],
  "node_modules/@spartacus/organization/fesm2022/spartacus-organization-user-registration.mjs": [
    "chunk-LPGG3GUM.js"
  ],
  "node_modules/cross-fetch/dist/browser-ponyfill.js": [
    "chunk-B7JTROQR.js"
  ],
  "node_modules/@spartacus/user/fesm2022/spartacus-user-account.mjs": [
    "chunk-L4RDDKGU.js"
  ],
  "node_modules/@spartacus/user/fesm2022/spartacus-user-profile.mjs": [
    "chunk-VFQ5Z5PF.js",
    "chunk-YGDCIAP6.js"
  ],
  "node_modules/@spartacus/cart/fesm2022/spartacus-cart-base.mjs": [
    "chunk-66HBTZ3P.js"
  ],
  "node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-components-mini-cart.mjs": [
    "chunk-DHP4YUT5.js"
  ],
  "node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-components-add-to-cart.mjs": [
    "chunk-MI6W3LT2.js",
    "chunk-UW3GRV27.js"
  ],
  "node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart.mjs": [
    "chunk-IT2A2IOS.js",
    "chunk-UW3GRV27.js"
  ]
},
  assets: {
    'index.csr.html': {size: 26434, hash: '6243e77dc013812014eb33a86d3c1bc19fbce138effb52658ffda8f02d3d58f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1615, hash: 'a2c722129ae36589368e9cce69b65d8c1beb968e46408d658f7d89934693e657', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3YEBY26Q.css': {size: 906527, hash: 'f1/6jr1VomY', text: () => import('./assets-chunks/styles-3YEBY26Q_css.mjs').then(m => m.default)}
  },
};
