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
exports.id = "app/api/match/jobs/route";
exports.ids = ["app/api/match/jobs/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmatch%2Fjobs%2Froute&page=%2Fapi%2Fmatch%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmatch%2Fjobs%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmatch%2Fjobs%2Froute&page=%2Fapi%2Fmatch%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmatch%2Fjobs%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var F_Bsc_CN_CINEC_Project_jobguard_app_api_match_jobs_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/match/jobs/route.ts */ \"(rsc)/./app/api/match/jobs/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/match/jobs/route\",\n        pathname: \"/api/match/jobs\",\n        filename: \"route\",\n        bundlePath: \"app/api/match/jobs/route\"\n    },\n    resolvedPagePath: \"F:\\\\Bsc CN (CINEC)\\\\Project\\\\jobguard\\\\app\\\\api\\\\match\\\\jobs\\\\route.ts\",\n    nextConfigOutput,\n    userland: F_Bsc_CN_CINEC_Project_jobguard_app_api_match_jobs_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/match/jobs/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtYXRjaCUyRmpvYnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1hdGNoJTJGam9icyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1hdGNoJTJGam9icyUyRnJvdXRlLnRzJmFwcERpcj1GJTNBJTVDQnNjJTIwQ04lMjAoQ0lORUMpJTVDUHJvamVjdCU1Q2pvYmd1YXJkJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1GJTNBJTVDQnNjJTIwQ04lMjAoQ0lORUMpJTVDUHJvamVjdCU1Q2pvYmd1YXJkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNzQjtBQUNuRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYmd1YXJkLW5leHRqcy12My8/ZTljOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJGOlxcXFxCc2MgQ04gKENJTkVDKVxcXFxQcm9qZWN0XFxcXGpvYmd1YXJkXFxcXGFwcFxcXFxhcGlcXFxcbWF0Y2hcXFxcam9ic1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWF0Y2gvam9icy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21hdGNoL2pvYnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21hdGNoL2pvYnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJGOlxcXFxCc2MgQ04gKENJTkVDKVxcXFxQcm9qZWN0XFxcXGpvYmd1YXJkXFxcXGFwcFxcXFxhcGlcXFxcbWF0Y2hcXFxcam9ic1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbWF0Y2gvam9icy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmatch%2Fjobs%2Froute&page=%2Fapi%2Fmatch%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmatch%2Fjobs%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/match/jobs/route.ts":
/*!*************************************!*\
  !*** ./app/api/match/jobs/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/jwt */ \"(rsc)/./lib/jwt.ts\");\n\n\n\nasync function POST(req) {\n    const cookie = req.headers.get(\"cookie\") || \"\";\n    const m = /jobguard_token=([^;]+)/.exec(cookie);\n    if (!m) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const p = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_2__.verifyJwt)(m[1]);\n    if (!p) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { skills } = await req.json();\n    const toks = (skills || \"\").toLowerCase().split(/[,\\s]+/).filter(Boolean);\n    const jobs = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.job.findMany({\n        orderBy: {\n            id: \"desc\"\n        }\n    });\n    const scored = jobs.map((j)=>{\n        const hay = `${j.title} ${j.description}`.toLowerCase();\n        let hits = 0;\n        toks.forEach((t)=>{\n            if (hay.includes(t)) hits++;\n        });\n        const score = Math.min(100, Math.round(hits / Math.max(1, toks.length) * 100));\n        return {\n            id: j.id,\n            title: j.title,\n            company: j.company,\n            score\n        };\n    }).filter((x)=>x.score > 0).sort((a, b)=>b.score - a.score).slice(0, 10);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        matches: scored\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21hdGNoL2pvYnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMyQztBQUNMO0FBQ0E7QUFFL0IsZUFBZUcsS0FBS0MsR0FBWTtJQUNyQyxNQUFNQyxTQUFTLElBQUtDLE9BQU8sQ0FBU0MsR0FBRyxDQUFDLGFBQWE7SUFDckQsTUFBTUMsSUFBSSx5QkFBeUJDLElBQUksQ0FBQ0o7SUFDeEMsSUFBRyxDQUFDRyxHQUFHLE9BQU9SLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQ3pFLE1BQU1DLElBQUlYLG1EQUFTQSxDQUFDTSxDQUFDLENBQUMsRUFBRTtJQUFHLElBQUcsQ0FBQ0ssR0FBRyxPQUFPYixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUVwRyxNQUFNLEVBQUVFLE1BQU0sRUFBRSxHQUFHLE1BQU1WLElBQUlNLElBQUk7SUFDakMsTUFBTUssT0FBTyxDQUFDRCxVQUFRLEVBQUMsRUFBR0UsV0FBVyxHQUFHQyxLQUFLLENBQUMsVUFBVUMsTUFBTSxDQUFDQztJQUMvRCxNQUFNQyxPQUFPLE1BQU1uQiwrQ0FBTUEsQ0FBQ29CLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDO1FBQUVDLFNBQVM7WUFBRUMsSUFBSTtRQUFPO0lBQUU7SUFDakUsTUFBTUMsU0FBU0wsS0FBS00sR0FBRyxDQUFDQyxDQUFBQTtRQUN0QixNQUFNQyxNQUFNLENBQUMsRUFBRUQsRUFBRUUsS0FBSyxDQUFDLENBQUMsRUFBRUYsRUFBRUcsV0FBVyxDQUFDLENBQUMsQ0FBQ2QsV0FBVztRQUNyRCxJQUFJZSxPQUFPO1FBQ1hoQixLQUFLaUIsT0FBTyxDQUFDQyxDQUFBQTtZQUFLLElBQUlMLElBQUlNLFFBQVEsQ0FBQ0QsSUFBSUY7UUFBUTtRQUMvQyxNQUFNSSxRQUFRQyxLQUFLQyxHQUFHLENBQUMsS0FBS0QsS0FBS0UsS0FBSyxDQUFDLE9BQVFGLEtBQUtHLEdBQUcsQ0FBQyxHQUFHeEIsS0FBS3lCLE1BQU0sSUFBSztRQUMzRSxPQUFPO1lBQUVoQixJQUFJRyxFQUFFSCxFQUFFO1lBQUVLLE9BQU9GLEVBQUVFLEtBQUs7WUFBRVksU0FBU2QsRUFBRWMsT0FBTztZQUFFTjtRQUFNO0lBQy9ELEdBQUdqQixNQUFNLENBQUN3QixDQUFBQSxJQUFHQSxFQUFFUCxLQUFLLEdBQUMsR0FBR1EsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQUlBLEVBQUVWLEtBQUssR0FBQ1MsRUFBRVQsS0FBSyxFQUFFVyxLQUFLLENBQUMsR0FBRTtJQUM3RCxPQUFPOUMscURBQVlBLENBQUNVLElBQUksQ0FBQztRQUFFcUMsU0FBU3RCO0lBQU87QUFDN0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2JndWFyZC1uZXh0anMtdjMvLi9hcHAvYXBpL21hdGNoL2pvYnMvcm91dGUudHM/NDMxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgeyB2ZXJpZnlKd3QgfSBmcm9tICdAL2xpYi9qd3QnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3Qpe1xuICBjb25zdCBjb29raWUgPSAocmVxLmhlYWRlcnMgYXMgYW55KS5nZXQoJ2Nvb2tpZScpIHx8ICcnO1xuICBjb25zdCBtID0gL2pvYmd1YXJkX3Rva2VuPShbXjtdKykvLmV4ZWMoY29va2llKTtcbiAgaWYoIW0pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xuICBjb25zdCBwID0gdmVyaWZ5Snd0KG1bMV0pOyBpZighcCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG5cbiAgY29uc3QgeyBza2lsbHMgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIGNvbnN0IHRva3MgPSAoc2tpbGxzfHwnJykudG9Mb3dlckNhc2UoKS5zcGxpdCgvWyxcXHNdKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3Qgam9icyA9IGF3YWl0IHByaXNtYS5qb2IuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGlkOiAnZGVzYycgfSB9KTtcbiAgY29uc3Qgc2NvcmVkID0gam9icy5tYXAoaj0+e1xuICAgIGNvbnN0IGhheSA9IGAke2oudGl0bGV9ICR7ai5kZXNjcmlwdGlvbn1gLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIHRva3MuZm9yRWFjaCh0PT57IGlmIChoYXkuaW5jbHVkZXModCkpIGhpdHMrKzsgfSk7XG4gICAgY29uc3Qgc2NvcmUgPSBNYXRoLm1pbigxMDAsIE1hdGgucm91bmQoKGhpdHMgLyBNYXRoLm1heCgxLCB0b2tzLmxlbmd0aCkpICogMTAwKSk7XG4gICAgcmV0dXJuIHsgaWQ6IGouaWQsIHRpdGxlOiBqLnRpdGxlLCBjb21wYW55OiBqLmNvbXBhbnksIHNjb3JlIH07XG4gIH0pLmZpbHRlcih4PT54LnNjb3JlPjApLnNvcnQoKGEsYik9PmIuc2NvcmUtYS5zY29yZSkuc2xpY2UoMCwxMCk7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1hdGNoZXM6IHNjb3JlZCB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJ2ZXJpZnlKd3QiLCJQT1NUIiwicmVxIiwiY29va2llIiwiaGVhZGVycyIsImdldCIsIm0iLCJleGVjIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicCIsInNraWxscyIsInRva3MiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvYnMiLCJqb2IiLCJmaW5kTWFueSIsIm9yZGVyQnkiLCJpZCIsInNjb3JlZCIsIm1hcCIsImoiLCJoYXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaGl0cyIsImZvckVhY2giLCJ0IiwiaW5jbHVkZXMiLCJzY29yZSIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsIm1heCIsImxlbmd0aCIsImNvbXBhbnkiLCJ4Iiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJtYXRjaGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/match/jobs/route.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmatch%2Fjobs%2Froute&page=%2Fapi%2Fmatch%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmatch%2Fjobs%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();