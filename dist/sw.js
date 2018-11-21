// Let's have it locally. Run "workbox copyLibraries dist"
importScripts('workbox-v3.6.3/workbox-sw.js')

// SETTINGS

// Use local version of Workbox libraries
workbox.setConfig({modulePathPrefix: 'workbox-v3.6.3/'})

// Verbose logging even for the production
workbox.setConfig({ debug: true })
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)

// Modify SW update cycle
workbox.skipWaiting()
workbox.clientsClaim()

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
  {
    "url": "3rdpartylicenses.txt",
    "revision": "3110f4db026710261a0b58c2cca7e377"
  },
  {
    "url": "assets/config/config.dev.json",
    "revision": "505613c558bcb6873363959bf3bcbad2"
  },
  {
    "url": "assets/config/config.prod.json",
    "revision": "01b9150d5c99b1b7198fe972e3de7c58"
  },
  {
    "url": "assets/config/new-service-config.json",
    "revision": "33e75c4ec8d559bfc69d236d8bc3709b"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "573ed1ebc07927ece4c15af50e42621c"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "4d0cf2a482f47585629895849f8cbabb"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "ddeef34939ef17bb69624205140857c2"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "ed53cea5f0ba2c6369ebf2e08de0cfd4"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "6d41d9911c4281e7427927af5a093dab"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "ada841d3ed8f29ac831468b43d66b9c4"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "c012c516689e3e9debb06b9749c8fcaf"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "8c0d8df68f5007840dc205958ea5be0a"
  },
  {
    "url": "assets/images/logo.png",
    "revision": "f5fd664cc80a6c77d6c79e5bd2653426"
  },
  {
    "url": "favicon.ico",
    "revision": "4f6a4dab3f3cae2985be59bfd9909605"
  },
  {
    "url": "index.html",
    "revision": "270d548f5d21654b515a35e108877ed8"
  },
  {
    "url": "inline.318b50c57b4eba3d437b.bundle.js",
    "revision": "6eaa1608803b51f7d836604d9585670d"
  },
  {
    "url": "main.7da618cf86c4f3b7ce69.bundle.js",
    "revision": "eb4a598f03c90b6255e4294ad89d97a6"
  },
  {
    "url": "manifest.json",
    "revision": "e9c43483cf3f84f96be0f4be9158dcb5"
  },
  {
    "url": "polyfills.7d45653c6826e2fefc7d.bundle.js",
    "revision": "c32f442a0c1333c90ff323ff1a3cebb7"
  },
  {
    "url": "styles.b3f30bba4ac11acb8bbb.bundle.css",
    "revision": "d4c9d7710d7be30d203e0538c3fa1d5e"
  }
])

// RUNTIME CACHING

// Google fonts
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
)

// API with network-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
  workbox.strategies.networkFirst()
)

// API with cache-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
  workbox.strategies.cacheFirst()
)

// PUSH NOTIFICATIONS

// BACKGROUND SYNC

// GOOGLE ANALYTICS
