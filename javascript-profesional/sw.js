const version = V1;

self.addEventListener('install', event =>{
    event.waitUntil(precache())
});

self.addEventListener('fetch', event =>{
    if (resquest.method === 'GET'){
        return;
    }

    event.responseWith(cachedResponse(resquest));
    event.waitUntil()
});


async function precache(){
    const cache =await caches.open(version);
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/mediaPlayer.js',
        '/assets/plugins/autoPlay.js',
        '/assets/plugins/autoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}

async function cachedResponse(request){
    const cache = await caches.open(version);
    const response =  await cache.match(request);
    return response || fetch (request);
}