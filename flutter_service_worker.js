'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7529504957103695dba4a9946727667b",
"assets/AssetManifest.json": "11d3c9a0810b195e32c7ad1c2e7778d3",
"assets/assets/audios/ain.mp3": "f8558e530d744593a798be2e6a6bc513",
"assets/assets/audios/bah.mp3": "52625e580d52fa92bbeebc27e1100662",
"assets/assets/audios/dal.mp3": "b3b76c1d6ad4b49361c81144f8a0e755",
"assets/assets/audios/fah.mp3": "cbe51bc2ba7c3676cfed8952beb4cb26",
"assets/assets/audios/goin.mp3": "324bb4b56cd037f3d0e77c9640b4cd81",
"assets/assets/audios/hah.mp3": "c504008795d77bf1d134c71df2e2a92c",
"assets/assets/audios/hamza.mp3": "1a3b063eecb28c3f158efcde86dd1d12",
"assets/assets/audios/hhah.mp3": "018030143efce430822320a9c04ce066",
"assets/assets/audios/jeem.mp3": "76155ea9c68971f63fa452a482730ffb",
"assets/assets/audios/kaf.mp3": "86ca01ffc8d70c9019229f03c7e9f79e",
"assets/assets/audios/krah.mp3": "c72dfb352776ddb0a3ca48c03efccedb",
"assets/assets/audios/lad.mp3": "bdf23e7a2ecebc1baeee0d2cfebebf36",
"assets/assets/audios/lah.mp3": "0c4844d0ff080727f92bd4c566c5154b",
"assets/assets/audios/lam.mp3": "ceaacaff5e123e49c36716c9050221d4",
"assets/assets/audios/meem.mp3": "e6bd0cfbb5598e025c8e5f4dced5c37c",
"assets/assets/audios/noon.mp3": "ce298b286575a6a312c40fa94a1ff915",
"assets/assets/audios/qaf.mp3": "bcb33e1c0d37a61a92d6e44b7d307b21",
"assets/assets/audios/rah.mp3": "39ea9ad5d8b56a305f5639ecab37fca9",
"assets/assets/audios/seen.mp3": "0e3ab8c2e476f066592df290a93d577b",
"assets/assets/audios/sheen.mp3": "8c7c3ebc2c9a9b05ac7ed0a9af8ea607",
"assets/assets/audios/simpleaudio.mp3": "1d902b2a00bda934b74003711f7ed9b9",
"assets/assets/audios/ssah.mp3": "ae718007d111c7535b34f8cc412e1766",
"assets/assets/audios/swad.mp3": "6e31260e1c47780fc285c90e316f932a",
"assets/assets/audios/thah.mp3": "51d9ec38f466d80262264308d6a76a62",
"assets/assets/audios/twah.mp3": "a8f742044d3cc498fae48f097e7428b9",
"assets/assets/audios/vav.mp3": "cff025f9fa723a6a73d309f160808501",
"assets/assets/audios/yah.mp3": "02257660f54e934db7707c33e46e6b36",
"assets/assets/audios/zah.mp3": "fe1327bfe81b45c19238e5781b9aa757",
"assets/assets/audios/zal.mp3": "c8b063de4f259de7a686842304dc7c12",
"assets/assets/gif/aa.gif": "21a440a15047b2807b310518d34c9fd6",
"assets/assets/gif/bah.gif": "2aa253cd8fec88522cee17f63b6a30bc",
"assets/assets/gif/blankgif.gif": "0853936e57d08926ebc55e3fc2f635ae",
"assets/assets/gif/dhal.gif": "e0dea9af24883953c4a27abfa74bf222",
"assets/assets/gif/fah.gif": "26d2e7cac80c41aee1ff9fc5dcee3ef0",
"assets/assets/gif/goin.gif": "729329737f0ee5266c75438c5812c3db",
"assets/assets/gif/haah.gif": "e9bb5e0e6db56ff0e322bbc0fb8f4726",
"assets/assets/gif/hain.gif": "26f6879300ec5dde3bb459a984927f3d",
"assets/assets/gif/heh.gif": "18ebe76236bb38c64b97471065a95024",
"assets/assets/gif/jeem.gif": "91d7b8a55eae2a06eeb0b8c30776c179",
"assets/assets/gif/kaf.gif": "255dafd4dab61799c391f93990a15196",
"assets/assets/gif/krah.gif": "644b92de19fe39bbd7bbe14f5fb56f72",
"assets/assets/gif/lad.gif": "12d064a397e26353e1b395e7e0335dd9",
"assets/assets/gif/lah.gif": "614565cea0c7da5d72194f7b3078ad65",
"assets/assets/gif/lam.gif": "2fa51d31d5619ad4eb424b4f61781d32",
"assets/assets/gif/meem.gif": "84d9004c17de419474b98cfeacad2dfe",
"assets/assets/gif/noon.gif": "b7dec24c45b6af2d1a3527d4d9f6c95c",
"assets/assets/gif/qaf.gif": "d22d49ac6fb334db5e98c424fc68a0ca",
"assets/assets/gif/rah.gif": "b80596af8a8d7fcc3af423734adb6fbb",
"assets/assets/gif/seen.gif": "612d276963fff37bb66b6427e6a57b58",
"assets/assets/gif/sheen.gif": "da7479a7a75dde40bf420c2e5bd4cd64",
"assets/assets/gif/ssah.gif": "ae43b750304901d73cd0107d5ed7d45a",
"assets/assets/gif/swad.gif": "708a5c67f7a8a830dc97d67f19c9df32",
"assets/assets/gif/tha.gif": "080ff83dba30ab05660729dd116a0f86",
"assets/assets/gif/thwah.gif": "ec4e2b6cc5c70da47c7de7ec77dbf8ee",
"assets/assets/gif/vav.gif": "ef21d9f7ecef741d2fb775bdf86b8fd9",
"assets/assets/gif/yah.gif": "0d10ef0cf700baae53a7b9ff17c1eaab",
"assets/assets/gif/zal.gif": "189d6bb6c69629fb360bd679e3d1b0d8",
"assets/assets/gif/zay.gif": "9d8052b9a1ecdd4fdde93cd04a68d9e9",
"assets/assets/image/humanwithoutmarksedited.png": "1cb4c6e03b4633721cf9b6cf9ac3cf49",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "69a0d490a6393d966f5b41e4767eddf7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "4647829c7e37bb7846dc2f8a6faf3a1b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ccc8d99eddd7596b2cfe84514798dcc",
"/": "3ccc8d99eddd7596b2cfe84514798dcc",
"main.dart.js": "e1016fddb1292a880ded59d7d70ecae3",
"manifest.json": "3003da4dad43aedbc334e182281cbf87",
"version.json": "805aee81ff25e310c7d518d4fa3f1fb1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
