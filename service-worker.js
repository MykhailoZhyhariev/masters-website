"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/MikhailZhyhariev/masters-website/index.html","a0a56da2b6e5d53dccae37ca615fa145"],["/MikhailZhyhariev/masters-website/static/css/main.934c9388.css","cb5e44e760446f5d5d061e483a4b8344"],["/MikhailZhyhariev/masters-website/static/js/main.decef87e.js","2e582a5d5edc5863752a1b090e7f020a"],["/MikhailZhyhariev/masters-website/static/media/RobotoBold.36b5bab5.ttf","36b5bab58a18b9c924861a4ccbf1a790"],["/MikhailZhyhariev/masters-website/static/media/RobotoLight.d5c46b13.ttf","d5c46b134c17b2138dcd1bb0efa67049"],["/MikhailZhyhariev/masters-website/static/media/RobotoRegular.5673da52.ttf","5673da52c98bb6cb33ada5aaf649703e"],["/MikhailZhyhariev/masters-website/static/media/RobotoThin.14147ca3.ttf","14147ca3288fa08b850d029193150722"],["/MikhailZhyhariev/masters-website/static/media/bing-logo.833c785e.svg","833c785e5ea25acaa1bfcfb6e18320bb"],["/MikhailZhyhariev/masters-website/static/media/en.fd72d9b5.svg","fd72d9b5184b47afb2f7b4db0c8a35de"],["/MikhailZhyhariev/masters-website/static/media/google-logo.111f7abd.svg","111f7abd2e7e8b3aacc2886135fb1eec"],["/MikhailZhyhariev/masters-website/static/media/meta-logo.216c16f7.svg","216c16f7f4c2b774d42b9691c0013d26"],["/MikhailZhyhariev/masters-website/static/media/ru.073f6ef7.svg","073f6ef795fdf4440534d05fa592f2d0"],["/MikhailZhyhariev/masters-website/static/media/ua.8553278a.svg","8553278ac7132ef2065302a0f8880a7d"],["/MikhailZhyhariev/masters-website/static/media/yandex-logo.3c80be12.svg","3c80be12493f586a257a2d6c4f909aa0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var s=new URL(e);return r&&s.pathname.match(r)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),s=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/MikhailZhyhariev/masters-website/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});