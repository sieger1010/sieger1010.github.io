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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
workbox.precaching.precacheAndRoute([
  {
    "url": "assets/SBLogo-120x120.png",
    "revision": "e81a777453f3ef2bfbf4c04b34e3c65d"
  },
  {
    "url": "assets/SBLogo-128x128.png",
    "revision": "977dc72e58dfc57b43c15365d6ca32fb"
  },
  {
    "url": "assets/SBLogo-180x180.png",
    "revision": "4105032e05fdf275c0bb7be6aeb8ffe6"
  },
  {
    "url": "assets/SBLogo-32x32.png",
    "revision": "5ea2ccf17e3b0237bda3f4109a54b62f"
  },
  {
    "url": "assets/SBLogo-512x512.png",
    "revision": "2668b055d5cef16ba1924ef67ebd8918"
  },
  {
    "url": "assets/SBLogo-64x64.png",
    "revision": "121bd5492ee4f839765c3488dabdbddf"
  },
  {
    "url": "assets/SBLogo-64x64.webp",
    "revision": "255ab1e6d42af5876d141ee665b3e00d"
  },
  {
    "url": "assets/SBLogo16x16.ico",
    "revision": "5de7274c70b2806d5f9244c83bb2acc3"
  },
  {
    "url": "assets/SBLogo16x16.png",
    "revision": "3fd6ff86af04dd952b2e48bd0897438b"
  },
  {
    "url": "assets/social-screenshot-1200x721.jpg",
    "revision": "75272b9857bdccb219637755340b2814"
  },
  {
    "url": "assets/social-screenshot-1250x635.jpg",
    "revision": "d16fd027a1727db8871b222655655ffd"
  },
  {
    "url": "assets/work-1920x1280.jpg",
    "revision": "8e61c5c50054084a55c1ab705f99434c"
  },
  {
    "url": "assets/work-banner-mobile-vertical.jpg",
    "revision": "5b4184d21040a9360d3952e831def60c"
  },
  {
    "url": "assets/work-banner.jpg",
    "revision": "53c620970388293a530753427f27fba3"
  },
  {
    "url": "assets/work.jpg",
    "revision": "ad7c27713c091aaeadc656448ea5b643"
  },
  {
    "url": "css/style.min.css",
    "revision": "10d73c12b52224bd13286885674ec935"
  },
  {
    "url": "english.html",
    "revision": "358902ec174dd49132dae4e59c126544"
  },
  {
    "url": "index.html",
    "revision": "929359a47260e1a7e95b7f16fc2ab0d3"
  },
  {
    "url": "js/scripts.min.js",
    "revision": "62e00a505882ecd72896a94bf8b15667"
  },
  {
    "url": "web.html",
    "revision": "0e2cd1e0eb4aa18c61740e0ff8fd6907"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "a7b95dbdd87e0c809570affaf366a434"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "5bf145531213545e03ff41cd27df7d2b"
  },
  {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "98b6db59be947f563350d2284fc9ea36"
  },
  {
    "url": "webfonts/fa-brands-400.woff",
    "revision": "2ef8ba3410dcc71578a880e7064acd7a"
  },
  {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "5e2f92123d241cabecf0b289b9b08d4a"
  },
  {
    "url": "webfonts/fa-regular-400.eot",
    "revision": "dcce4b7fbd5e895561e18af4668265af"
  },
  {
    "url": "webfonts/fa-regular-400.svg",
    "revision": "5eb754ab7dbd2fee562360528db4c3c0"
  },
  {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "65b9977aa23185e8964b36eddbce7a20"
  },
  {
    "url": "webfonts/fa-regular-400.woff",
    "revision": "427d721b86fc9c68b2e85ad42b69238c"
  },
  {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "e6257a726a0cf6ec8c6fec22821c055f"
  },
  {
    "url": "webfonts/fa-solid-900.eot",
    "revision": "46e7cec623d8bd790d9fdbc8de2d3ee7"
  },
  {
    "url": "webfonts/fa-solid-900.svg",
    "revision": "49279363201ed19a840796e05a74a91b"
  },
  {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "ff8d9f8adb0d09f11d4816a152672f53"
  },
  {
    "url": "webfonts/fa-solid-900.woff",
    "revision": "a7140145ebaaf5fb14e40430af5d25c4"
  },
  {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "418dad87601f9c8abd0e5798c0dc1feb"
  }
])

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
/*self.__precacheManifest = [
  {
    "url": "assets/SBLogo-128x128.png",
    "revision": "977dc72e58dfc57b43c15365d6ca32fb"
  },
  {
    "url": "assets/SBLogo-32x32.png",
    "revision": "5ea2ccf17e3b0237bda3f4109a54b62f"
  },
  {
    "url": "assets/SBLogo-512x512.png",
    "revision": "2668b055d5cef16ba1924ef67ebd8918"
  },
  {
    "url": "assets/SBLogo-64x64.png",
    "revision": "121bd5492ee4f839765c3488dabdbddf"
  },
  {
    "url": "assets/SBLogo-64x64.webp",
    "revision": "255ab1e6d42af5876d141ee665b3e00d"
  },
  {
    "url": "assets/SBLogo16x16.ico",
    "revision": "5de7274c70b2806d5f9244c83bb2acc3"
  },
  {
    "url": "assets/SBLogo16x16.png",
    "revision": "3fd6ff86af04dd952b2e48bd0897438b"
  },
  {
    "url": "assets/social-screenshot-1200x721.jpg",
    "revision": "75272b9857bdccb219637755340b2814"
  },
  {
    "url": "assets/social-screenshot-1250x635.jpg",
    "revision": "d16fd027a1727db8871b222655655ffd"
  },
  {
    "url": "assets/work-1920x1280.jpg",
    "revision": "8e61c5c50054084a55c1ab705f99434c"
  },
  {
    "url": "assets/work-banner-mobile-vertical.jpg",
    "revision": "5b4184d21040a9360d3952e831def60c"
  },
  {
    "url": "assets/work-banner.jpg",
    "revision": "53c620970388293a530753427f27fba3"
  },
  {
    "url": "assets/work.jpg",
    "revision": "ad7c27713c091aaeadc656448ea5b643"
  },
  {
    "url": "css/style.min.css",
    "revision": "f488b85bf085ae26e304e81a987ce6c4"
  },
  {
    "url": "english.html",
    "revision": "bef899fd7ab89872fef202c83be2f104"
  },
  {
    "url": "index.html",
    "revision": "95195562696b470df57637c6ea3e7af9"
  },
  {
    "url": "js/scripts.min.js",
    "revision": "62e00a505882ecd72896a94bf8b15667"
  },
  {
    "url": "manifest.json",
    "revision": "aebb33537dc07a1fc7f1f78f0de90314"
  },
  {
    "url": "web.html",
    "revision": "3698120b19f02303c0f09dc9d07a7ce6"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "a7b95dbdd87e0c809570affaf366a434"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "5bf145531213545e03ff41cd27df7d2b"
  },
  {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "98b6db59be947f563350d2284fc9ea36"
  },
  {
    "url": "webfonts/fa-brands-400.woff",
    "revision": "2ef8ba3410dcc71578a880e7064acd7a"
  },
  {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "5e2f92123d241cabecf0b289b9b08d4a"
  },
  {
    "url": "webfonts/fa-regular-400.eot",
    "revision": "dcce4b7fbd5e895561e18af4668265af"
  },
  {
    "url": "webfonts/fa-regular-400.svg",
    "revision": "5eb754ab7dbd2fee562360528db4c3c0"
  },
  {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "65b9977aa23185e8964b36eddbce7a20"
  },
  {
    "url": "webfonts/fa-regular-400.woff",
    "revision": "427d721b86fc9c68b2e85ad42b69238c"
  },
  {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "e6257a726a0cf6ec8c6fec22821c055f"
  },
  {
    "url": "webfonts/fa-solid-900.eot",
    "revision": "46e7cec623d8bd790d9fdbc8de2d3ee7"
  },
  {
    "url": "webfonts/fa-solid-900.svg",
    "revision": "49279363201ed19a840796e05a74a91b"
  },
  {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "ff8d9f8adb0d09f11d4816a152672f53"
  },
  {
    "url": "webfonts/fa-solid-900.woff",
    "revision": "a7140145ebaaf5fb14e40430af5d25c4"
  },
  {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "418dad87601f9c8abd0e5798c0dc1feb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});*/

workbox.googleAnalytics.initialize({});

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);