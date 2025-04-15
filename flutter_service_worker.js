'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1cefaf2a48f42633ff4b37ffe0e9de96",
"index.html": "309a24316dc5b2df96466507b49ffa1a",
"/": "309a24316dc5b2df96466507b49ffa1a",
"main.dart.js": "75ff0fb36a9e2e5843679a44d0a55b77",
"favicon3.png": "d7e521d157e1db4218a7293693e69dc1",
"favicon3.jpg": "252191ebe5f3ba316e784a0ea34617ce",
"README.md": "f488e6a268f4023be792659c13d9f3d0",
"favicon.png": "f24b69b3f492e11e78b9654bffa78ce2",
"icons/Icon-192.png": "d7e521d157e1db4218a7293693e69dc1",
"icons/Icon-192.jpg": "252191ebe5f3ba316e784a0ea34617ce",
"icons/Icon-512-2.png": "f24b69b3f492e11e78b9654bffa78ce2",
"icons/Logo.png": "fc974f97e85cd2027f9998000a0c6f05",
"icons/Icon-512.png": "84780d2dfe97536ad1b68213079cc78b",
"manifest.json": "afb073ab30241af9e0cbdb9cb02eb726",
".git/ORIG_HEAD": "90266645f2d93e3ea4489260c69246a0",
".git/config": "bc6e66240e07c8c6dd2d219afafaacdf",
".git/objects/03/147f421acd1bcbbcf7535e122dc097d688be3b": "b7edb9824e977b8a9664703ed5d3224b",
".git/objects/9b/15f47872ae6299a202d26201bff00a71ac8bf3": "e2317af7bd1563a216653ef3f80bbe46",
".git/objects/51/5b79f0d3ca14184225a3de7b0b015545c319bd": "2f05f293fb3ba2223cb678c908d8ab82",
".git/objects/60/06f18da060e04f6ce87fd0e73fe142803f951b": "be08ad5676ccbc3f510ac9fe5952a0fe",
".git/objects/34/dba1db7b3c8b7cedf5cf49a8d5c071d8d77490": "e6ab253716b56fa4dcd28e23204070bd",
".git/objects/d9/95492aaa0f0087c3c490fe8f7b07344c6498ba": "f0fdde968bb1c64649eb37f8100f598e",
".git/objects/b4/fe0aadde23f92ce29cb6f8b1ebd6fc31b0f26c": "e968be7b7dfc459e16d506f35672aa3a",
".git/objects/ed/ca19bc56fd9bae435ec9eadc42f838290dd6e4": "7e1223c896fa590064cea5f080cfbe53",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-eb729ca188e3c6cf86bf89792ac01488d07410d4.idx": "e840193be30ab77738128a1fb90c1beb",
".git/objects/pack/pack-eb729ca188e3c6cf86bf89792ac01488d07410d4.pack": "7a307a90ffca357ba83a7c97ff608373",
".git/objects/1f/24985436ad6c16dc86d7ae3cf533abd2f2ca53": "c1d7b8a7a0b00e1c5df0b9a48f83c2fa",
".git/objects/74/f252deb416b778ddfd871200cad72841850ea6": "7c36b65de6ff491d4bb5372663b9ef72",
".git/objects/4c/8956abffea0c14e0a398ad30da5a7d2e4d7e19": "2e4976a5c99f9bda1779caa04612c802",
".git/objects/72/761d249e09a81bad9573f1778cb0b91ae52afe": "3aee688383694ab84dd1fe4ec056ebe9",
".git/objects/65/d33aa7ea36afe4bca2fdc09b193192965d7725": "8be8d63f2815051c56633cdb45a1527c",
".git/objects/98/a7da17eb939111e4d46d5e5b0c84e11b430ba5": "36990a201e83b28572fed7ec5d47657f",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/5e/dccd1bbf5452e1a2cc349dde1123243704a610": "2da2201126b7895dfdd5ca19a61928f3",
".git/objects/63/6550b3b7d473ca1b701727d1e9dda96b6fd384": "9877a4cf67cd5ec556fb227c88396500",
".git/objects/d4/edc75496c29161054763a9fb155adc1e7bce65": "01e307c14969eaacc9d9c3c7575377fc",
".git/objects/ba/c1444da493985f6a457fbd68294eb9fa7720d1": "5ee0c2967fbcdea23ac4c32612d2728f",
".git/objects/a9/06b1d33d425358074c89cc1f2713bee0471cdc": "53411282c4325f77963c89cbf7117c36",
".git/objects/db/6b107f6f9e8f73b0f5de9de0af4bff77d136d0": "812558b282e2d09537fe8a76433f7881",
".git/objects/a1/775ccb8b212dbea2483cbabed317573f3e8ee7": "8b6890da003beb0c8fd5b6ffdc8710de",
".git/objects/c4/2f8e2abf454e93a7657d6e1bc1a13d178a0d7f": "5085974336409ffe3eca6a254c449427",
".git/objects/c4/5104f14533020627a64891133cb4249e78dbb8": "505288aa2377876b25b634358c48c752",
".git/objects/f1/ec1582c7064e36df89ca97f24a7a31b8096bff": "3f451f89f7de94620025ea70cfbfbad1",
".git/objects/e7/c4c45f4b29d29ae8194eabe503a02aa6646fef": "09edfcc8c14112461a1ee471e96c671e",
".git/objects/e7/f14524428c0a706a461618d0aded6623ace1b0": "36c903826b18a85df7d49a8ab01baaa3",
".git/objects/f8/2bd072f186da9d60cef2cb321978bfa287e73f": "d23c34d7bda8be42b7a44f5d6d60ebc6",
".git/objects/76/bc8fc68852129b3ae41fe19bc2f57d7aff4830": "d2a7eb87479de6ab7aa1cedd5590a68f",
".git/objects/8b/2847e8ce8a8c6f58364499ea065de39c0475e1": "9eaeb3ccaea57d7f2dcdbabe75af26b8",
".git/objects/22/f4138b31d0c03418222a6cc207ed4219e0bf81": "28cf2291866cb5011792948751b36522",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "8d6f3601b3a621c32ac206c3abd18acd",
".git/logs/refs/heads/master": "f41af18640ec8af1eef64bc74e4548ed",
".git/logs/refs/remotes/origin/master": "4f50e5e1a8c5e7a7272d0192f5f208e1",
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
".git/refs/heads/master": "999f763ec74e8d9a34a62db50ee92968",
".git/refs/remotes/origin/master": "999f763ec74e8d9a34a62db50ee92968",
".git/index": "359ae7a0fa4f0179292685bc718f3fba",
".git/COMMIT_EDITMSG": "5690b907c19d052eb278dff73645e17b",
".git/FETCH_HEAD": "5adae86809cd7a58071bcb0bf2480db2",
"assets/AssetManifest.json": "9cda5c3e2ed2de3a910f8e3ee560ba3a",
"assets/NOTICES": "2a05d493c12b50da3a89d6dca13ee368",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/img_1.png": "c0f7f7eeb5786bff5b8c196b2ea2634c",
"assets/assets/lorhan-logo.png": "004be7863f46a5ffd96f812d1c1a3df3",
"assets/assets/splLogo.png": "63a2f9ca28d02a2f65a52af3b50bce0e",
"assets/assets/projects/qmedLogo.jpeg": "d522e366b66c7b547083cf9fb1dfdfb1",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/bdMuseumsLogo.png": "d528aeb2b8a638e93f25480684856c2e",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/bdMuseumsLogo.jpg": "46157889fc3a553fa0e34db0e06bcc77",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/qmedDoctorsLogo.png": "2ca349e03750d7a5ae626e4dfe6c2423",
"assets/assets/projects/QM-Doctor-Logo.jpg": "f7186b06e6847bd8aa9ee7afb7148325",
"assets/assets/projects/burgerLogo.png": "acd0a73a13d7688a7e7e72ed76e93114",
"assets/assets/projects/logoFoodKnock.png": "c8286933f25faa2ad4fdc7c149ee244c",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/knock.jpg": "0a1d56d2bf2f1b93af932f452ce6fe32",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/nsu.png": "4c148446ca3fcfe0844fd1bc3a212a75",
"assets/assets/img.png": "c0f7f7eeb5786bff5b8c196b2ea2634c",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/logo-quickmed-final.png": "1582a51c1e5544515d5aaf8ed5924a25",
"assets/assets/ub-logo2.png": "5be51de00ed3950bb19b7a6dd6b72150",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/files/Resume.pdf": "952c2938f0a43a772b773bdf06a1cb64",
"assets/assets/files/Resume.png": "32a16a84a3d394592bb3838b7fe8995a",
"assets/assets/files/Resume-ShariarIslamSaimon.pdf": "0dbaabcf5f4b5cdafa91dfca0b50d1ce",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/nsuLogo.png": "f1dfb3914ea9eab8716529711aa3ffc1",
"assets/assets/ub-logo.png": "7dc0e259aca45975bae112bf52f340f1",
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
