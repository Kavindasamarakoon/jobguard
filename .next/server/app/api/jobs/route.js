"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/jobs/route";
exports.ids = ["app/api/jobs/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fjobs%2Froute&page=%2Fapi%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjobs%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fjobs%2Froute&page=%2Fapi%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjobs%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var F_Bsc_CN_CINEC_Project_jobguard_app_api_jobs_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/jobs/route.ts */ \"(rsc)/./app/api/jobs/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/jobs/route\",\n        pathname: \"/api/jobs\",\n        filename: \"route\",\n        bundlePath: \"app/api/jobs/route\"\n    },\n    resolvedPagePath: \"F:\\\\Bsc CN (CINEC)\\\\Project\\\\jobguard\\\\app\\\\api\\\\jobs\\\\route.ts\",\n    nextConfigOutput,\n    userland: F_Bsc_CN_CINEC_Project_jobguard_app_api_jobs_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/jobs/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZqb2JzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZqb2JzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGam9icyUyRnJvdXRlLnRzJmFwcERpcj1GJTNBJTVDQnNjJTIwQ04lMjAoQ0lORUMpJTVDUHJvamVjdCU1Q2pvYmd1YXJkJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1GJTNBJTVDQnNjJTIwQ04lMjAoQ0lORUMpJTVDUHJvamVjdCU1Q2pvYmd1YXJkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNlO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iZ3VhcmQtbmV4dGpzLXYzLz9hMDA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkY6XFxcXEJzYyBDTiAoQ0lORUMpXFxcXFByb2plY3RcXFxcam9iZ3VhcmRcXFxcYXBwXFxcXGFwaVxcXFxqb2JzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9qb2JzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvam9ic1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvam9icy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkY6XFxcXEJzYyBDTiAoQ0lORUMpXFxcXFByb2plY3RcXFxcam9iZ3VhcmRcXFxcYXBwXFxcXGFwaVxcXFxqb2JzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9qb2JzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fjobs%2Froute&page=%2Fapi%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjobs%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/jobs/route.ts":
/*!*******************************!*\
  !*** ./app/api/jobs/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/jwt */ \"(rsc)/./lib/jwt.ts\");\n\n\n\nasync function GET(req) {\n    const url = new URL(req.url);\n    const q = url.searchParams.get(\"q\") || \"\";\n    const jobs = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.job.findMany({\n        where: q ? {\n            OR: [\n                {\n                    title: {\n                        contains: q,\n                        mode: \"insensitive\"\n                    }\n                },\n                {\n                    company: {\n                        contains: q,\n                        mode: \"insensitive\"\n                    }\n                },\n                {\n                    location: {\n                        contains: q,\n                        mode: \"insensitive\"\n                    }\n                },\n                {\n                    description: {\n                        contains: q,\n                        mode: \"insensitive\"\n                    }\n                }\n            ]\n        } : {},\n        orderBy: {\n            id: \"desc\"\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        jobs\n    });\n}\nasync function POST(req) {\n    try {\n        const cookie = req.headers.get(\"cookie\") || \"\";\n        const m = /jobguard_token=([^;]+)/.exec(cookie);\n        if (!m) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n        const payload = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_2__.verifyJwt)(m[1]);\n        if (!payload) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n        const { title, company, location, type, description } = await req.json();\n        if (!title || !company || !location || !type || !description) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Missing fields\"\n        }, {\n            status: 400\n        });\n        const job = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.job.create({\n            data: {\n                title,\n                company,\n                location,\n                type,\n                description,\n                postedById: Number(payload.sub)\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            job\n        });\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2pvYnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMkM7QUFDTDtBQUNBO0FBRS9CLGVBQWVHLElBQUlDLEdBQVk7SUFDcEMsTUFBTUMsTUFBTSxJQUFJQyxJQUFJRixJQUFJQyxHQUFHO0lBQzNCLE1BQU1FLElBQUlGLElBQUlHLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLFFBQVE7SUFDdkMsTUFBTUMsT0FBTyxNQUFNVCwrQ0FBTUEsQ0FBQ1UsR0FBRyxDQUFDQyxRQUFRLENBQUM7UUFDckNDLE9BQU9OLElBQUc7WUFBRU8sSUFBSTtnQkFDZDtvQkFBRUMsT0FBTzt3QkFBRUMsVUFBVVQ7d0JBQUdVLE1BQU07b0JBQWM7Z0JBQUU7Z0JBQzlDO29CQUFFQyxTQUFTO3dCQUFFRixVQUFVVDt3QkFBR1UsTUFBTTtvQkFBYztnQkFBRTtnQkFDaEQ7b0JBQUVFLFVBQVU7d0JBQUVILFVBQVVUO3dCQUFHVSxNQUFNO29CQUFjO2dCQUFFO2dCQUNqRDtvQkFBRUcsYUFBYTt3QkFBRUosVUFBVVQ7d0JBQUdVLE1BQU07b0JBQWM7Z0JBQUU7YUFDckQ7UUFBQyxJQUFJLENBQUM7UUFDUEksU0FBUztZQUFFQyxJQUFJO1FBQU87SUFDeEI7SUFDQSxPQUFPdEIscURBQVlBLENBQUN1QixJQUFJLENBQUM7UUFBRWI7SUFBSztBQUNsQztBQUVPLGVBQWVjLEtBQUtwQixHQUFZO0lBQ3JDLElBQUc7UUFDRCxNQUFNcUIsU0FBUyxJQUFLQyxPQUFPLENBQVNqQixHQUFHLENBQUMsYUFBYTtRQUNyRCxNQUFNa0IsSUFBSSx5QkFBeUJDLElBQUksQ0FBQ0g7UUFDeEMsSUFBRyxDQUFDRSxHQUFHLE9BQU8zQixxREFBWUEsQ0FBQ3VCLElBQUksQ0FBQztZQUFFTSxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFDekUsTUFBTUMsVUFBVTdCLG1EQUFTQSxDQUFDeUIsQ0FBQyxDQUFDLEVBQUU7UUFDOUIsSUFBRyxDQUFDSSxTQUFTLE9BQU8vQixxREFBWUEsQ0FBQ3VCLElBQUksQ0FBQztZQUFFTSxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFDL0UsTUFBTSxFQUFFZixLQUFLLEVBQUVHLE9BQU8sRUFBRUMsUUFBUSxFQUFFYSxJQUFJLEVBQUVaLFdBQVcsRUFBRSxHQUFHLE1BQU1oQixJQUFJbUIsSUFBSTtRQUN0RSxJQUFHLENBQUNSLFNBQVMsQ0FBQ0csV0FBVyxDQUFDQyxZQUFZLENBQUNhLFFBQVEsQ0FBQ1osYUFBYSxPQUFPcEIscURBQVlBLENBQUN1QixJQUFJLENBQUM7WUFBRU0sT0FBTztRQUFpQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtRQUNqSSxNQUFNbkIsTUFBTSxNQUFNViwrQ0FBTUEsQ0FBQ1UsR0FBRyxDQUFDc0IsTUFBTSxDQUFDO1lBQUVDLE1BQU07Z0JBQUVuQjtnQkFBT0c7Z0JBQVNDO2dCQUFVYTtnQkFBTVo7Z0JBQWFlLFlBQVlDLE9BQU9MLFFBQVFNLEdBQUc7WUFBRTtRQUFFO1FBQzdILE9BQU9yQyxxREFBWUEsQ0FBQ3VCLElBQUksQ0FBQztZQUFFWjtRQUFJO0lBQ2pDLEVBQUMsT0FBSztRQUFFLE9BQU9YLHFEQUFZQSxDQUFDdUIsSUFBSSxDQUFDO1lBQUVNLE9BQU87UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUFJO0FBQ2hGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iZ3VhcmQtbmV4dGpzLXYzLy4vYXBwL2FwaS9qb2JzL3JvdXRlLnRzPzllNzgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgdmVyaWZ5Snd0IH0gZnJvbSAnQC9saWIvand0JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3Qpe1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xuICBjb25zdCBxID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSB8fCAnJztcbiAgY29uc3Qgam9icyA9IGF3YWl0IHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgIHdoZXJlOiBxPyB7IE9SOiBbXG4gICAgICB7IHRpdGxlOiB7IGNvbnRhaW5zOiBxLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcbiAgICAgIHsgY29tcGFueTogeyBjb250YWluczogcSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXG4gICAgICB7IGxvY2F0aW9uOiB7IGNvbnRhaW5zOiBxLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcbiAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHEsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxuICAgIF0gfSA6IHt9LFxuICAgIG9yZGVyQnk6IHsgaWQ6ICdkZXNjJyB9XG4gIH0pO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBqb2JzIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3Qpe1xuICB0cnl7XG4gICAgY29uc3QgY29va2llID0gKHJlcS5oZWFkZXJzIGFzIGFueSkuZ2V0KCdjb29raWUnKSB8fCAnJztcbiAgICBjb25zdCBtID0gL2pvYmd1YXJkX3Rva2VuPShbXjtdKykvLmV4ZWMoY29va2llKTtcbiAgICBpZighbSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgY29uc3QgcGF5bG9hZCA9IHZlcmlmeUp3dChtWzFdKTtcbiAgICBpZighcGF5bG9hZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgY29uc3QgeyB0aXRsZSwgY29tcGFueSwgbG9jYXRpb24sIHR5cGUsIGRlc2NyaXB0aW9uIH0gPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGlmKCF0aXRsZSB8fCAhY29tcGFueSB8fCAhbG9jYXRpb24gfHwgIXR5cGUgfHwgIWRlc2NyaXB0aW9uKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ01pc3NpbmcgZmllbGRzJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIGNvbnN0IGpvYiA9IGF3YWl0IHByaXNtYS5qb2IuY3JlYXRlKHsgZGF0YTogeyB0aXRsZSwgY29tcGFueSwgbG9jYXRpb24sIHR5cGUsIGRlc2NyaXB0aW9uLCBwb3N0ZWRCeUlkOiBOdW1iZXIocGF5bG9hZC5zdWIpIH0gfSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgam9iIH0pO1xuICB9Y2F0Y2h7IHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnU2VydmVyIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pOyB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwidmVyaWZ5Snd0IiwiR0VUIiwicmVxIiwidXJsIiwiVVJMIiwicSIsInNlYXJjaFBhcmFtcyIsImdldCIsImpvYnMiLCJqb2IiLCJmaW5kTWFueSIsIndoZXJlIiwiT1IiLCJ0aXRsZSIsImNvbnRhaW5zIiwibW9kZSIsImNvbXBhbnkiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwib3JkZXJCeSIsImlkIiwianNvbiIsIlBPU1QiLCJjb29raWUiLCJoZWFkZXJzIiwibSIsImV4ZWMiLCJlcnJvciIsInN0YXR1cyIsInBheWxvYWQiLCJ0eXBlIiwiY3JlYXRlIiwiZGF0YSIsInBvc3RlZEJ5SWQiLCJOdW1iZXIiLCJzdWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/jobs/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/jwt.ts":
/*!********************!*\
  !*** ./lib/jwt.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signJwt: () => (/* binding */ signJwt),\n/* harmony export */   verifyJwt: () => (/* binding */ verifyJwt)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SECRET = process.env.JWT_SECRET || \"dev-secret\";\nfunction signJwt(payload, expiresIn = \"7d\") {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, SECRET, {\n        expiresIn\n    });\n}\nfunction verifyJwt(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, SECRET);\n    } catch  {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvand0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDK0I7QUFDL0IsTUFBTUMsU0FBU0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLElBQUk7QUFDbEMsU0FBU0MsUUFBUUMsT0FBZSxFQUFFQyxZQUFZLElBQUk7SUFBRyxPQUFPUCx3REFBUSxDQUFDTSxTQUFTTCxRQUFRO1FBQUVNO0lBQVU7QUFBSTtBQUN0RyxTQUFTRSxVQUFVQyxLQUFhO0lBQUcsSUFBSTtRQUFFLE9BQU9WLDBEQUFVLENBQUNVLE9BQU9UO0lBQWdCLEVBQUUsT0FBTTtRQUFFLE9BQU87SUFBTTtBQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iZ3VhcmQtbmV4dGpzLXYzLy4vbGliL2p3dC50cz9lYTIzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuY29uc3QgU0VDUkVUID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCAnZGV2LXNlY3JldCc7XG5leHBvcnQgZnVuY3Rpb24gc2lnbkp3dChwYXlsb2FkOiBvYmplY3QsIGV4cGlyZXNJbiA9ICc3ZCcpeyByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgU0VDUkVULCB7IGV4cGlyZXNJbiB9KTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUp3dCh0b2tlbjogc3RyaW5nKXsgdHJ5IHsgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIFNFQ1JFVCkgYXMgYW55OyB9IGNhdGNoIHsgcmV0dXJuIG51bGw7IH0gfVxuIl0sIm5hbWVzIjpbImp3dCIsIlNFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwic2lnbkp3dCIsInBheWxvYWQiLCJleHBpcmVzSW4iLCJzaWduIiwidmVyaWZ5Snd0IiwidG9rZW4iLCJ2ZXJpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/jwt.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM4QztBQUV2QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBLEdBQUc7QUFDMUQsSUFBSUcsSUFBeUIsRUFBY0QsT0FBT0QsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYmd1YXJkLW5leHRqcy12My8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmRlY2xhcmUgZ2xvYmFsIHsgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkOyB9XG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fjobs%2Froute&page=%2Fapi%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjobs%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();