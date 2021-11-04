'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1cefaf2a48f42633ff4b37ffe0e9de96",
"index.html": "df51f281365ba529b76af0d83790814e",
"/": "df51f281365ba529b76af0d83790814e",
"main.dart.js": "11895e7f06f60c137bb272b276267e72",
"favicon3.png": "d7e521d157e1db4218a7293693e69dc1",
"favicon3.jpg": "252191ebe5f3ba316e784a0ea34617ce",
"favicon.png": "f24b69b3f492e11e78b9654bffa78ce2",
"icons/Icon-192.png": "d7e521d157e1db4218a7293693e69dc1",
"icons/Icon-192.jpg": "252191ebe5f3ba316e784a0ea34617ce",
"icons/Icon-512-2.png": "f24b69b3f492e11e78b9654bffa78ce2",
"icons/Logo.png": "fc974f97e85cd2027f9998000a0c6f05",
"manifest.json": "afb073ab30241af9e0cbdb9cb02eb726",
".git/config": "bc6e66240e07c8c6dd2d219afafaacdf",
".git/objects/pack/pack-eb729ca188e3c6cf86bf89792ac01488d07410d4.idx": "e840193be30ab77738128a1fb90c1beb",
".git/objects/pack/pack-eb729ca188e3c6cf86bf89792ac01488d07410d4.pack": "7a307a90ffca357ba83a7c97ff608373",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/refs/remotes/origin/master": "d7b05e403841ac87c367ec66bff5c86e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/remotes/origin/master": "5458370b67d42d35615bbc54f99e8d37",
".git/FETCH_HEAD": "932c6f1cb8ac911d3c289680937a484d",
"assets/AssetManifest.json": "cacbc5f1e460918e3be77b0a41bb1147",
"assets/NOTICES": "2a05d493c12b50da3a89d6dca13ee368",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/splLogo.png": "63a2f9ca28d02a2f65a52af3b50bce0e",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/bdMuseumsLogo.png": "d528aeb2b8a638e93f25480684856c2e",
"assets/assets/projects/bdMuseumsLogo.jpg": "46157889fc3a553fa0e34db0e06bcc77",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/qmedDoctorsLogo.png": "2ca349e03750d7a5ae626e4dfe6c2423",
"assets/assets/projects/QM-Doctor-Logo.jpg": "f7186b06e6847bd8aa9ee7afb7148325",
"assets/assets/projects/burgerLogo.png": "acd0a73a13d7688a7e7e72ed76e93114",
"assets/assets/projects/knock.jpg": "0a1d56d2bf2f1b93af932f452ce6fe32",
"assets/assets/projects/quickPatientLogo.png": "b9e47682f7d576688d44ac3c8c2cbc1e",
"assets/assets/projects/qmedLogo.png": "23ef4bed784fc85336b0e3c3429725da",
"assets/assets/nsu.png": "4c148446ca3fcfe0844fd1bc3a212a75",
"assets/assets/logo-quickmed-final.png": "1582a51c1e5544515d5aaf8ed5924a25",
"assets/assets/files/Resume.pdf": "952c2938f0a43a772b773bdf06a1cb64",
"assets/assets/files/Resume.png": "32a16a84a3d394592bb3838b7fe8995a",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/nsuLogo.png": "f1dfb3914ea9eab8716529711aa3ffc1",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/1.png": "88be963a142cae0730636bb69ff99560"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
