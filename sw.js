// Dynamic cache versioning based on timestamp
// This ensures cache is busted on every deployment
const CACHE_VERSION = new Date().getTime();
const CACHE_NAME = `calculator-v${CACHE_VERSION}`;

// Development mode detection
const isDevelopment = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json'
];

// Install Service Worker
self.addEventListener('install', event => {
  // Skip waiting to activate new service worker immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - Network first for development, Cache first for production
self.addEventListener('fetch', event => {
  if (isDevelopment) {
    // Development: Always fetch from network
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request)) // Fallback to cache if offline
    );
  } else {
    // Production: Cache first, then network
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  // Take control of all pages immediately
  event.waitUntil(
    clients.claim().then(() => {
      // Clean up old caches
      return caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      });
    })
  );
});