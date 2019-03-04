/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "77ae58f7d8ec1cd9cb6ef72e822be44b"
  },
  {
    "url": "assets/css/0.styles.1e9dd1c2.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.28954348.js",
    "revision": "e08110f2a7c00c8f431dac1f68d07ab4"
  },
  {
    "url": "assets/js/11.c1740785.js",
    "revision": "e01f00ec8db9b979ddfc9e1891de2552"
  },
  {
    "url": "assets/js/12.fb797e9a.js",
    "revision": "cb57cf78a414b86a3fb83d451b1d9be1"
  },
  {
    "url": "assets/js/13.c8e4c8f3.js",
    "revision": "20a65c469e43ca10b5e97cf5fbf8ac2e"
  },
  {
    "url": "assets/js/14.262cea6a.js",
    "revision": "8cc899933d003affff3c7264f640a429"
  },
  {
    "url": "assets/js/15.a7d02051.js",
    "revision": "a3e7db25b4076801d0561be4f19faeae"
  },
  {
    "url": "assets/js/16.e794ec5c.js",
    "revision": "2c8ae84c9a490d20716adca901cb9a57"
  },
  {
    "url": "assets/js/17.c61ecedf.js",
    "revision": "01c92bce8174ce1021e66ef26526fcc3"
  },
  {
    "url": "assets/js/18.f414d947.js",
    "revision": "ed3a74d16e74c23211211058921e6f2a"
  },
  {
    "url": "assets/js/19.ede18da2.js",
    "revision": "2f4a03e1c08030cdb0e224080c857b18"
  },
  {
    "url": "assets/js/2.46f75de9.js",
    "revision": "9d70c102bb1f8fc49c3562925fdcc914"
  },
  {
    "url": "assets/js/20.48ebdc87.js",
    "revision": "bffe3f871e53d1916192ecf423cd4bc6"
  },
  {
    "url": "assets/js/21.874a82fc.js",
    "revision": "e2fefdcefdaa839a453cf9dd27197db1"
  },
  {
    "url": "assets/js/22.8b2c32ff.js",
    "revision": "891abe8cc22f613a09a5da15267bb40f"
  },
  {
    "url": "assets/js/23.4a018cab.js",
    "revision": "ff37fc083bdd80da85aa5a5e374da2bb"
  },
  {
    "url": "assets/js/24.0ad595b7.js",
    "revision": "16fbaf2da920486c70134d05cc9080a8"
  },
  {
    "url": "assets/js/25.b41da89a.js",
    "revision": "71c49472d0ae41f3ca5bff731138c04d"
  },
  {
    "url": "assets/js/26.12321e83.js",
    "revision": "7dd56bc7f48d88eb1aaaf45f41bff663"
  },
  {
    "url": "assets/js/27.c7a75a65.js",
    "revision": "3afde618a8f210b5f699d4ebc19ea3c2"
  },
  {
    "url": "assets/js/28.e88e1321.js",
    "revision": "f5c3779019b1e73d4e1603933834f927"
  },
  {
    "url": "assets/js/29.90a7c0aa.js",
    "revision": "2384d4f5452c54740e76b4d14d2ddf51"
  },
  {
    "url": "assets/js/3.2c7f7618.js",
    "revision": "fab5a02067447102d7ad949cad439c8a"
  },
  {
    "url": "assets/js/30.36cd1059.js",
    "revision": "1ff63c7ac4ac989243fe38b0b78f6b05"
  },
  {
    "url": "assets/js/31.3d5c92d4.js",
    "revision": "5c78e94a9657c6bc5688fa56ce8ba292"
  },
  {
    "url": "assets/js/32.d02c797e.js",
    "revision": "5834f7b6beafc1aef94f73000797bb17"
  },
  {
    "url": "assets/js/33.7fa25b62.js",
    "revision": "39e45997b471a864342e853229c9352d"
  },
  {
    "url": "assets/js/34.29df39e5.js",
    "revision": "4e4d07940ae95036c7f8fe17df2716b4"
  },
  {
    "url": "assets/js/35.077fb1d6.js",
    "revision": "786b7e850ffdfe36a3887827f59d400c"
  },
  {
    "url": "assets/js/36.6981a90e.js",
    "revision": "86a6b7b8ec348259be1224a56065c6ec"
  },
  {
    "url": "assets/js/37.fed3dd0c.js",
    "revision": "7e4a43b60de533fe4ee41463fe765d2b"
  },
  {
    "url": "assets/js/38.af7c9dff.js",
    "revision": "cacdb1d672ff47d21ac9d607923be6e1"
  },
  {
    "url": "assets/js/39.bb943913.js",
    "revision": "ed9b727e2f8021c916b4b741069f14e5"
  },
  {
    "url": "assets/js/4.7edbf204.js",
    "revision": "96f8516075720b7fcd4e94dae0756b43"
  },
  {
    "url": "assets/js/40.5c8b1644.js",
    "revision": "e2fbeea6ac47c637f0dd45d81eabde82"
  },
  {
    "url": "assets/js/41.891eaeb5.js",
    "revision": "39841567ac60524d16837819dd3cd229"
  },
  {
    "url": "assets/js/42.4a130b7d.js",
    "revision": "0c79f65b892b3049d7f48e0d178993ca"
  },
  {
    "url": "assets/js/43.c2a0ff57.js",
    "revision": "afa544ecfc60fbd211ce8e5475387aa2"
  },
  {
    "url": "assets/js/44.8ef8e1c5.js",
    "revision": "aad89dcae1020ec912d03c5e97c7997a"
  },
  {
    "url": "assets/js/45.448a5950.js",
    "revision": "3b7bf2fed783920c62be199cce2a429a"
  },
  {
    "url": "assets/js/46.4e386136.js",
    "revision": "79e52820f7f4e6c9b40c6df9514b2e5f"
  },
  {
    "url": "assets/js/47.1d0316c6.js",
    "revision": "ccb0ca4052ce58a0df61a3fd7c77e7af"
  },
  {
    "url": "assets/js/48.13db9c68.js",
    "revision": "93467875e4f256d5802542f3d6bf88de"
  },
  {
    "url": "assets/js/49.39f95a16.js",
    "revision": "b1efdcb7c7febe600e68ebd17379138b"
  },
  {
    "url": "assets/js/5.d780beb6.js",
    "revision": "af160df76331172e4d8ddb0176cfe507"
  },
  {
    "url": "assets/js/50.f9f33ba1.js",
    "revision": "bec1dfc42033a85474014d679040c8d0"
  },
  {
    "url": "assets/js/51.f9741a6b.js",
    "revision": "9a7470f06fd2db03ac1600902fb849c4"
  },
  {
    "url": "assets/js/52.01c4ec3e.js",
    "revision": "ec1ca7b3019298e5839e2f7d5778d94d"
  },
  {
    "url": "assets/js/53.42784198.js",
    "revision": "e5ee209285971d2783ea42376b0f1cbf"
  },
  {
    "url": "assets/js/54.722cea85.js",
    "revision": "c50b2445ff634b12a88f08d488f0f6b8"
  },
  {
    "url": "assets/js/55.31dd6bf1.js",
    "revision": "ff9bc7990c4d15471bc21c3f2b6f834b"
  },
  {
    "url": "assets/js/56.30e1f111.js",
    "revision": "da491d54817d60dec1c0caa88a5e74b1"
  },
  {
    "url": "assets/js/57.ce2364ec.js",
    "revision": "3c7f097e88b08743809f280d829187c9"
  },
  {
    "url": "assets/js/58.fd74d3c0.js",
    "revision": "44957802a28b1d832e530f403cd4032a"
  },
  {
    "url": "assets/js/59.c1f2e2a0.js",
    "revision": "7effe279914d4e233446c7f26150c544"
  },
  {
    "url": "assets/js/6.8f8e5025.js",
    "revision": "cde0d65cb67349289b94bf67e7aabbab"
  },
  {
    "url": "assets/js/60.1482a69c.js",
    "revision": "ec84171d28691bc535c11c46d42c8086"
  },
  {
    "url": "assets/js/61.d09285c5.js",
    "revision": "f8967585339579b60473019a53721ddb"
  },
  {
    "url": "assets/js/62.c75bbd92.js",
    "revision": "5fe36a8a60e80d922b25326da8bf0e7b"
  },
  {
    "url": "assets/js/63.76ad5e76.js",
    "revision": "f89ef699812d7f3ac722bee073f4bb61"
  },
  {
    "url": "assets/js/64.1af21e33.js",
    "revision": "efca083c560e4b1bbe3435b595fbddd5"
  },
  {
    "url": "assets/js/65.4ef53a8e.js",
    "revision": "99a29431d6aeaba954b25fdafe3c6999"
  },
  {
    "url": "assets/js/66.acd4e7e5.js",
    "revision": "e7552a9e97bcbc014831039bade5f6d4"
  },
  {
    "url": "assets/js/67.093140cf.js",
    "revision": "920c2226ec7bfc9d138cbbc79ba31b09"
  },
  {
    "url": "assets/js/68.6ec5b467.js",
    "revision": "78dd707a878efa49bd8f81bb35eea4c9"
  },
  {
    "url": "assets/js/69.7e1a2870.js",
    "revision": "484ebf29724e9ce2ae30eae195ffc3dd"
  },
  {
    "url": "assets/js/7.71bb1ca6.js",
    "revision": "839cc362c2a02541bc9188dbf84d610b"
  },
  {
    "url": "assets/js/70.3a1c2bec.js",
    "revision": "456188208c9a2bc1649e923f3a1a67f3"
  },
  {
    "url": "assets/js/71.d2c72d00.js",
    "revision": "2ca13898307f20ec52a0c293b424c6d3"
  },
  {
    "url": "assets/js/72.21e225e6.js",
    "revision": "e5397f9b3839661f7a217fc068d3e801"
  },
  {
    "url": "assets/js/73.39c7bf9a.js",
    "revision": "32658520cddb160e3c188dc841abf63b"
  },
  {
    "url": "assets/js/74.1b2137dd.js",
    "revision": "870af61dd31df7f011b3d138f15988f9"
  },
  {
    "url": "assets/js/75.d182f15d.js",
    "revision": "5c8d0afc6915de1b29f41829f4a78595"
  },
  {
    "url": "assets/js/76.b9a34b5a.js",
    "revision": "321a9536064c6f04ca0189888323093a"
  },
  {
    "url": "assets/js/77.490934be.js",
    "revision": "a48119bf2bc685826ef8cdcd45abc10b"
  },
  {
    "url": "assets/js/78.55d2b22f.js",
    "revision": "ad9b94f10a929d5dc8d2e82c0dbdfcf7"
  },
  {
    "url": "assets/js/79.186ceb90.js",
    "revision": "83603060c8bde35c2a759e786d132e3a"
  },
  {
    "url": "assets/js/8.32a2d058.js",
    "revision": "60ae210e3e2c6274c281925bc63a716e"
  },
  {
    "url": "assets/js/80.72bb7259.js",
    "revision": "8254fb40ba668640a1fbaaae16884fd9"
  },
  {
    "url": "assets/js/81.39ce8130.js",
    "revision": "2c05287dfc028bb62b6c7c1af3b5f908"
  },
  {
    "url": "assets/js/82.cbf1c03e.js",
    "revision": "beef5036b79619dddead4653b8b44ca4"
  },
  {
    "url": "assets/js/83.a7d2a05c.js",
    "revision": "9b90c48882dd9c1f35587fd61078b5c3"
  },
  {
    "url": "assets/js/84.fa408e46.js",
    "revision": "b69566bb569f32db0ed4bb556cb990da"
  },
  {
    "url": "assets/js/85.da1821df.js",
    "revision": "2aeb2319cb92cf5fba4311bf72928f14"
  },
  {
    "url": "assets/js/9.288ed0bc.js",
    "revision": "7bc8c6e250aaa1dcbddf884c30dba7b3"
  },
  {
    "url": "assets/js/app.44f765af.js",
    "revision": "6c0f73230ddc5cb484d65aab2f301be5"
  },
  {
    "url": "compiler/ast.html",
    "revision": "b48f80a94bd03360fe0231b5b6f3b610"
  },
  {
    "url": "compiler/binder.html",
    "revision": "ab6739a931a8767f1322888c481e7a25"
  },
  {
    "url": "compiler/checker.html",
    "revision": "6c25d694c0ab7b24bc1925b073e1e1cf"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "7988b1d9e400208a117b842bd899d9e0"
  },
  {
    "url": "compiler/overview.html",
    "revision": "61c4a66436f126c46f4ead8f241ef1b4"
  },
  {
    "url": "compiler/parser.html",
    "revision": "70c95d4f97df08323cee16d0505cea85"
  },
  {
    "url": "compiler/program.html",
    "revision": "bdd196d3447051e6358428da84e3e193"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "57300796c5b09423511de3b5b9a9bc84"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "b69034a424786ec16f252f0e88bf015b"
  },
  {
    "url": "error/interpreting.html",
    "revision": "2bfd2a5d807131e61c2fc46a2ef1fcbe"
  },
  {
    "url": "faqs/class.html",
    "revision": "74acaf4e50eee687fd83e6e1cc4791a1"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "5b0cca613728444be8a2f9df63bb90cc"
  },
  {
    "url": "faqs/comments.html",
    "revision": "363a5e1466c3a668607bc0faac17bd51"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "6fb60e9a595ac89808dae4bebbadab0c"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "5a54613d068efc147240bdcee948f08a"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "346bf96c5a6a24c4b59f31c093bd88c6"
  },
  {
    "url": "faqs/enums.html",
    "revision": "991ca6ade7600409e9f9e95f7fc98621"
  },
  {
    "url": "faqs/function.html",
    "revision": "5fdecc9a46b29af30c05894a4b5bb6b0"
  },
  {
    "url": "faqs/generics.html",
    "revision": "2cab7df40b198f8787ed40b527dd6047"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "ceadd567f716ad04dc75abd7de54cfca"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "8d96e796b9e3e5f2d8945d53957cf60d"
  },
  {
    "url": "faqs/modules.html",
    "revision": "73921025df92372560fff333b751024e"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "a76d7e8626e6cd917ce1c7d1e2fb2857"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "2a0b1db6b7e4dc5c0b47e24449e3897e"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "dfeade3b50a3a2c228dca9e41dad625f"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "230da354b651cd75f78828e0c625100e"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "c13986f4f3c39cf8435dc5a3a5132d31"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "8d85dc3ff32aaf32c37eb1d86477a5e2"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "4c67046ef86dbacb6e819fe78c582531"
  },
  {
    "url": "jsx/support.html",
    "revision": "b4a631fd52543ea497ec7c4831d846bd"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "d0a43baf87de78fcfa775a698c236dd2"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "67d475e8bf58a4dc3491b06ae1276cbc"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "90243503ccbc1445aae493d5559e27e3"
  },
  {
    "url": "project/modules.html",
    "revision": "3974a7cb8260b879e0fa546e461b02ac"
  },
  {
    "url": "project/namespaces.html",
    "revision": "c9ec8cf3f835ea1208422001a6d4d117"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "fb7e89d6fd367d7ca74f021c6e9e550e"
  },
  {
    "url": "tips/barrel.html",
    "revision": "fb477991b10dc946f9166494bd2a477b"
  },
  {
    "url": "tips/bind.html",
    "revision": "7c7167b29dd639d3c374aad27caec1c8"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "674fb736b6755500d20bde2bac34f0c5"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "421b5f487f1d27c3b3a1b5afc01cebd5"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "b9cbd564afd2f1ea5ec8e6ae163dc5f4"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "8cfd184eac9f45c4e1172574ccea2023"
  },
  {
    "url": "tips/curry.html",
    "revision": "f2f4300577c97e0497d3007a60895969"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "a22da0b3a0311ea392b43f20d833e603"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "04e150365b0e25f49ef83646228bdf9a"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "ef3d7c1939f6be5f5827c047587fd15d"
  },
  {
    "url": "tips/metadata.html",
    "revision": "9fa9c08dc4bed459ef9b6df450ac1e4a"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "014348f3f578cb06423b208dda9af0a3"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "280e9e12bf995a335a742d5a794546e6"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "6e93aeb7a101694670bc696a3059041d"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "8cd754135e84d8f3e4d5e0cc2544aa57"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "470910bed50e987aa8697d0ed355dcc1"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "b69c6706a9ee971767542f3388586df0"
  },
  {
    "url": "tips/truthy.html",
    "revision": "011cac4a4a923245847c2ac8f9ac5b18"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "3db61a2069444d9f665be20c111af64b"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "a4e53dc620a023849224f80ed98b40fe"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "fb8274822cedddc201328b36961d857d"
  },
  {
    "url": "typings/callable.html",
    "revision": "e3d88078957cbe93558858c9d10f7f5c"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "9b9d2f349f92721f3231bee05d562512"
  },
  {
    "url": "typings/enums.html",
    "revision": "29b4c08a3eb9282fa1e99ec4ca439d28"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "9661e44635ffe7a02b4027b5a428699a"
  },
  {
    "url": "typings/freshness.html",
    "revision": "4bfb309c21a569ec4ab54256edd4e65f"
  },
  {
    "url": "typings/functions.html",
    "revision": "9f088f88ce443a3f97db5011b75b570c"
  },
  {
    "url": "typings/generices.html",
    "revision": "da7ad06cc0d3182496866336dabd47a4"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "288df5e26022ff4ad6f1ed3b77789d8b"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "26a89067a294beba4a7585c8b1de5a70"
  },
  {
    "url": "typings/lib.html",
    "revision": "a65d4b2e58130c7c888de841ec423013"
  },
  {
    "url": "typings/literals.html",
    "revision": "12071a8558d0ef526a101413759d372a"
  },
  {
    "url": "typings/migrating.html",
    "revision": "114458a9b7126cde6dce8d1ae6bea9a1"
  },
  {
    "url": "typings/mixins.html",
    "revision": "a494418e089aee99f0dfc7dd3f044539"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "a7dbcf28de8316a14020a2331b904917"
  },
  {
    "url": "typings/neverType.html",
    "revision": "b78934a7968e16f03bd5486e48dc6fb6"
  },
  {
    "url": "typings/overview.html",
    "revision": "c110465c9aefa865535aaeeb0c441ab6"
  },
  {
    "url": "typings/readonly.html",
    "revision": "78ae789fbc41d5300de764c5fe6efbf9"
  },
  {
    "url": "typings/thisType.html",
    "revision": "40600b094813bb8e10069c88cc337bb2"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "444b93841a865a49a47910e2068c9da7"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "68bc7b6da222197a6b0cd244a6180246"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "c166a6afb5c3d35ce2dcb4840afea5d6"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "7552fac2cc943ceda958ee5ef5ae6bdb"
  },
  {
    "url": "typings/types.html",
    "revision": "ef8bd600dc10678813d12c2c97546c9f"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
