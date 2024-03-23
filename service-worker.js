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
                "/assets/index-DaYYNdQt.css",
                "/assets/index-DxHMfmef.js",
                "/logo.png",
                "/manifest.json",
                "/service-worker.js"
            ]),
        );
    });
}