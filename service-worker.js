if (location.port != 5173) {

    const addResourcesToCache = async (resources) => {
        const cache = await caches.open("v2");
        await cache.addAll(resources);
    };

    self.addEventListener("install", (event) => {
        event.waitUntil(
            addResourcesToCache([
                "/",
                "/index.html",
                "/assets/index-B6-zCAfD.js",
                "/assets/index-BNDeTAFa.css",
                "/logo.png",
                "/manifest.json",
                "/service-worker.js"
            ]),
        );
    });

    self.addEventListener("fetch", e => {
        e.respondWith(
            fetch(e.request).catch(() => caches.match(e.request))
        )
    })

}