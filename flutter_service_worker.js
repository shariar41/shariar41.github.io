'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1cefaf2a48f42633ff4b37ffe0e9de96",
"index.html": "f63bdb04f61666bdbb5dcdbdf35d8722",
"/": "f63bdb04f61666bdbb5dcdbdf35d8722",
"main.dart.js": "bb58bda0014db290aa4aa1dc3c49a852",
"favicon3.png": "d7e521d157e1db4218a7293693e69dc1",
"favicon3.jpg": "252191ebe5f3ba316e784a0ea34617ce",
"favicon.png": "f24b69b3f492e11e78b9654bffa78ce2",
"icons/Icon-192.png": "d7e521d157e1db4218a7293693e69dc1",
"icons/Icon-192.jpg": "252191ebe5f3ba316e784a0ea34617ce",
"icons/Icon-512-2.png": "f24b69b3f492e11e78b9654bffa78ce2",
"icons/Logo.png": "fc974f97e85cd2027f9998000a0c6f05",
"manifest.json": "afb073ab30241af9e0cbdb9cb02eb726",
".git/config": "8badc754830b4e32214f605244530464",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/9b/e5828b78f617d04cd1c2a4beb2e949c8e56d08": "7f226f50aa805745b29f8d2f80815be8",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/ad/66817b7cd83d783e205d080b0f7cb01d9cacd8": "e6de1ccd2589ed33f8440a4110e8f964",
".git/objects/be/fa1caf35e2593ef36d028cf49dc076c824adfb": "7702b2b27e1d232a25458555809b4a61",
".git/objects/a5/bc1737b3ca31db60736e401f8acefb8e18cefd": "f8316047fa6f3be07d98ec2f84fe7ac4",
".git/objects/a5/cee2687b1b38021c2e151ce2d8e7c441f8386a": "50fb7966b721cb443ab9d5fa78a284ff",
".git/objects/bc/62b741f868382e551e35b43ced2a911255d853": "adaeb3508aa24beea4633d5a50464c8b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/000fe334139366ce057754c80784f6837283c1": "c58854a2dfde312aac6a462e049a655c",
".git/objects/f4/24afc8ea3387a916f541dc037e5609778f51a0": "386a666a5506f69503d62a3370fae78a",
".git/objects/f3/be82451e413c13e434faec0cce72696b290f7e": "c4e5f4f5d1b877daaaf253ca6624c77d",
".git/objects/c7/963186bdd1fa188e38e55f2f015dda50190f72": "63f2281752ecb8bc38382a097ea8cddc",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/c0/47f6b27302440585b7bdba3b41d6a590770f2d": "4cb380646c17032b356dc5625622e449",
".git/objects/ee/c4bf4c0b3e83be881d93739ac962a55f098622": "341833079e79f544146a15be84aa37be",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/fd/c43e3fcc5f235c0c828f381a2b268b8d8a9810": "9ab111f397468ea019d8c600e2eb4956",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/c8/aacd28481984835afe12dc80e2a7ab5b49a9c5": "1dcd3bae6e0d72f154f7dfbc20f376f2",
".git/objects/c6/e32ecfb59cddfbd776f43bfb8319da1258ebc6": "2015a77c10f72674337f07424fd43ffc",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c6/9df815041de845c80b02963c4e639636acfe7d": "eb82b1686fe3c50a4824f7c9a0a67675",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/21/4ba1b004d874802481d4c5b0431219326212f2": "5f67921c8a8ae6012f2def31b6e79f04",
".git/objects/9f/8f5ed631c5b8d213d027ce0ade2ed220001c0f": "dfd1e63a1d2342b6986ff9ee88e3a90d",
".git/objects/9f/20c17ce2ee9b97cd8f9a2be7b4fbce20958f9c": "ae2c012c4620b6082ff24e509669629c",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/31/04a286b7f87c54189616f19a35504db84bd4ce": "4463feea4cb0e390c0c2e8e57f5401c4",
".git/objects/3f/4246826353c94f0bb73628b0ce014c55600f54": "acbec3b08bf4c13b1e75073d8c7ed556",
".git/objects/5b/6cb893fd30a84aa1a3ad5ab5709de7781a71bb": "cfe86dad12e83af2d61061b06b95192e",
".git/objects/5b/943c4fe694bc09218ec2a265d6c2bbf519d54e": "dee72ed3da2a7da6aeb1bea6ee451795",
".git/objects/37/23efedfc667d6e4edee8b5675625623c63fb92": "4b63759abb48490c1f1653b3c65dd164",
".git/objects/52/dd8e71d400df82dbc82891b26d0107495badbf": "102e82d0188520bf974bdeec296376e7",
".git/objects/0f/207f4e0587c3dd8e660aacf8e4a2747d4ddd32": "664b8e9a7beb90a7a4b0b83886d8f77d",
".git/objects/0a/b7495d622ad7144a8b64f1c84b85bc7238f3fd": "cdd93b71c3a8f0a04bd64dbc4993ded9",
".git/objects/a0/e00e85ca00c7db141a6610b1390e404f7bc355": "a8eab049a6e2b1aaeef78f9bbf98b0ef",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b7/21abd5da3379d547464a79eed7307be03a507e": "9f893daaf625c1bdf16db7b91777b289",
".git/objects/a8/59296955509d63d8ab8a2a610a2fad762bcf6c": "ac7d5b73e2dade62c99f6417525184fa",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/76003aad294a13d856ef681748a198b906c57b": "4c0fbb6dee9c9ba1c0f17930b258f111",
".git/objects/e8/0ff295c433233b2ec6bf7c22e8c2fee965ccec": "1f0598891ac8823c9592a5debee06280",
".git/objects/f8/ff3f7712df34718382e96242f59338200ab274": "7060b4f03f917b806e9f6ae95cacf211",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e0/fbc5fad57b416a3989b8efbc362ddbd8e88093": "26896afe4be1e7e6973ad9a244f180b6",
".git/objects/46/b7900ebe2440d1b2f81290f0f1eb9cca06919d": "c310581a40eb036e803adc843a4780b7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/70/1cfa266694e7b198fa37e32a26c915e0e86c07": "95a25471f539d98b924017fb547d14c4",
".git/objects/70/2163e906658cca389f1da50e01cfb80c423bff": "0e031ed42849cdf134c3a5f25ea21d54",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8c/7233bcefc01240384b99ebee54527d2c7002a5": "b3e0f6991f08b7b0b4c5a9e29ed0aeca",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/40/0a3ba674fb45cb827a99e865c45f8ff6fec861": "6620a2e7c77a009db627efee05764ecc",
".git/objects/47/6ceb60376c0f4780f79cfb1e26aa221faf3a87": "7120a4f0a2bd37c0ac18042028aaacf4",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/14/da1ad563ed1c126f4a2f68841a2b201d3f5f00": "c47889864ab52ef7806a2987cb5f6b50",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "287bf5b9f98029b1fd6dbd9beaef70e5",
".git/logs/refs/heads/master": "287bf5b9f98029b1fd6dbd9beaef70e5",
".git/logs/refs/remotes/origin/master": "921c69dbc75e10d2b713a932e894ea0d",
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
".git/refs/heads/master": "0cb8b010dc20202305dfb6da251976b0",
".git/refs/remotes/origin/master": "0cb8b010dc20202305dfb6da251976b0",
".git/index": "8bbebf466c2e68a34beb98a7a815e21d",
".git/COMMIT_EDITMSG": "9372be30cea6642bacc6fd42fe045df3",
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
