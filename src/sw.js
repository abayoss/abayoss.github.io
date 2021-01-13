const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'dynamic-cache-v3';
const assets = [
    '/',
    '/index.html',
    'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/css/uikit.min.css',
    'https://bootswatch.com/4/cyborg/bootstrap.min.css',
    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Alata&display=swap',
    'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js',
    'https://unpkg.com/scrollreveal/dist/scrollreveal.min.js',
];

// install event
self.addEventListener('install', (evt) => {
    //console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', (evt) => {
    //console.log('service worker activated');
    evt.waitUntil(
        caches.keys().then((keys) => {
            //console.log(keys);
            return Promise.all(
                keys
                    .filter((key) => key !== staticCacheName)
                    .map((key) => caches.delete(key))
            );
        })
    );
});

// fetch event
self.addEventListener('fetch', (evt) => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches
            .match(evt.request)
            .then((cacheRes) => {
                return (
                    cacheRes ||
                    fetch(evt.request).then((fetchRes) => {
                        return caches.open(dynamicCacheName).then((cache) => {
                            if (evt.request.url.indexOf('http') === 0) {
                                cache.put(evt.request.url, fetchRes.clone());
                            }
                            return fetchRes;
                        });
                    })
                );
            })
            .catch(() => caches.match('/pages/fallback.html'))
    );
});
