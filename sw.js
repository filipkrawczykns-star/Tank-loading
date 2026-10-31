// Kalkulator komór: service worker.
// Strona: najpierw sieć (zawsze najnowsza wersja), bez zasięgu: kopia z pamięci.
// Zmień CACHE przy każdym wydaniu: stare pliki zostaną posprzątane. Dane użytkownika (naczepy, produkty) nie są tu przechowywane i nie są usuwane.
const CACHE="komory-v2.0";
const CORE=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/icon-180.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("komory-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
function withTimeout(p,ms){return new Promise((res,rej)=>{const t=setTimeout(()=>rej(new Error("timeout")),ms);p.then(v=>{clearTimeout(t);res(v)},e=>{clearTimeout(t);rej(e)})})}
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);
  if(url.pathname.endsWith("version.json"))return; // zawsze z sieci
  if(req.mode==="navigate"){
    e.respondWith(withTimeout(fetch(req,{cache:"no-store"}),5000).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put("index.html",cp))}return r})
      .catch(()=>caches.match("index.html").then(r=>r||caches.match("./"))));
    return;
  }
  if(url.origin===location.origin||url.hostname.endsWith("fonts.googleapis.com")||url.hostname.endsWith("fonts.gstatic.com")){
    e.respondWith(caches.match(req).then(hit=>{
      const net=fetch(req).then(r=>{if(r&&(r.ok||r.type==="opaque")){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp))}return r}).catch(()=>hit);
      return hit||net;
    }));
  }
});
