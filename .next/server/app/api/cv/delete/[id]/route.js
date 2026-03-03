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
exports.id = "app/api/cv/delete/[id]/route";
exports.ids = ["app/api/cv/delete/[id]/route"];
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var F_Bsc_CN_CINEC_Project_jobguard_app_api_cv_delete_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/cv/delete/[id]/route.ts */ \"(rsc)/./app/api/cv/delete/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/cv/delete/[id]/route\",\n        pathname: \"/api/cv/delete/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/cv/delete/[id]/route\"\n    },\n    resolvedPagePath: \"F:\\\\Bsc CN (CINEC)\\\\Project\\\\jobguard\\\\app\\\\api\\\\cv\\\\delete\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: F_Bsc_CN_CINEC_Project_jobguard_app_api_cv_delete_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/cv/delete/[id]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjdiUyRmRlbGV0ZSUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjdiUyRmRlbGV0ZSUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY3YlMkZkZWxldGUlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1GJTNBJTVDQnNjJTIwQ04lMjAoQ0lORUMpJTVDUHJvamVjdCU1Q2pvYmd1YXJkJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1GJTNBJTVDQnNjJTIwQ04lMjAoQ0lORUMpJTVDUHJvamVjdCU1Q2pvYmd1YXJkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYmd1YXJkLW5leHRqcy12My8/MjQzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJGOlxcXFxCc2MgQ04gKENJTkVDKVxcXFxQcm9qZWN0XFxcXGpvYmd1YXJkXFxcXGFwcFxcXFxhcGlcXFxcY3ZcXFxcZGVsZXRlXFxcXFtpZF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2N2L2RlbGV0ZS9baWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY3YvZGVsZXRlL1tpZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2N2L2RlbGV0ZS9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRjpcXFxcQnNjIENOIChDSU5FQylcXFxcUHJvamVjdFxcXFxqb2JndWFyZFxcXFxhcHBcXFxcYXBpXFxcXGN2XFxcXGRlbGV0ZVxcXFxbaWRdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jdi9kZWxldGUvW2lkXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/cv/delete/[id]/route.ts":
/*!*****************************************!*\
  !*** ./app/api/cv/delete/[id]/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/jwt */ \"(rsc)/./lib/jwt.ts\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function DELETE(req, { params }) {\n    const cookie = req.headers.get(\"cookie\") || \"\";\n    const m = /jobguard_token=([^;]+)/.exec(cookie);\n    if (!m) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const p = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_2__.verifyJwt)(m[1]);\n    if (!p) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const cv = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.cV.findUnique({\n        where: {\n            id: Number(params.id)\n        }\n    });\n    if (!cv || cv.userId !== Number(p.sub)) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Not found\"\n    }, {\n        status: 404\n    });\n    try {\n        const filePath = path__WEBPACK_IMPORTED_MODULE_4___default().join(process.cwd(), \"public\", cv.path.replace(\"/\", \"\"));\n        await fs__WEBPACK_IMPORTED_MODULE_3__.promises.unlink(filePath).catch(()=>{});\n    } catch  {}\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.cV.delete({\n        where: {\n            id: cv.id\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2N2L2RlbGV0ZS9baWRdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ0w7QUFDQTtBQUNGO0FBQ1o7QUFFakIsZUFBZU0sT0FBT0MsR0FBWSxFQUFFLEVBQUVDLE1BQU0sRUFBOEI7SUFDL0UsTUFBTUMsU0FBUyxJQUFLQyxPQUFPLENBQVNDLEdBQUcsQ0FBQyxhQUFhO0lBQ3JELE1BQU1DLElBQUkseUJBQXlCQyxJQUFJLENBQUNKO0lBQ3hDLElBQUcsQ0FBQ0csR0FBRyxPQUFPWixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUN6RSxNQUFNQyxJQUFJZixtREFBU0EsQ0FBQ1UsQ0FBQyxDQUFDLEVBQUU7SUFBRyxJQUFHLENBQUNLLEdBQUcsT0FBT2pCLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQ3BHLE1BQU1FLEtBQUssTUFBTWpCLCtDQUFNQSxDQUFDa0IsRUFBRSxDQUFDQyxVQUFVLENBQUM7UUFBRUMsT0FBTztZQUFFQyxJQUFJQyxPQUFPZixPQUFPYyxFQUFFO1FBQUU7SUFBRTtJQUN6RSxJQUFHLENBQUNKLE1BQU1BLEdBQUdNLE1BQU0sS0FBS0QsT0FBT04sRUFBRVEsR0FBRyxHQUFHLE9BQU96QixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBWSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUN0RyxJQUFHO1FBQ0QsTUFBTVUsV0FBV3JCLGdEQUFTLENBQUN1QixRQUFRQyxHQUFHLElBQUcsVUFBVVgsR0FBR2IsSUFBSSxDQUFDeUIsT0FBTyxDQUFDLEtBQUk7UUFDdkUsTUFBTTFCLHdDQUFFQSxDQUFDMkIsTUFBTSxDQUFDTCxVQUFVTSxLQUFLLENBQUMsS0FBSztJQUN2QyxFQUFDLE9BQUssQ0FBQztJQUNQLE1BQU0vQiwrQ0FBTUEsQ0FBQ2tCLEVBQUUsQ0FBQ2MsTUFBTSxDQUFDO1FBQUVaLE9BQU87WUFBRUMsSUFBSUosR0FBR0ksRUFBRTtRQUFDO0lBQUU7SUFDOUMsT0FBT3RCLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7UUFBRW9CLElBQUk7SUFBSztBQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYmd1YXJkLW5leHRqcy12My8uL2FwcC9hcGkvY3YvZGVsZXRlL1tpZF0vcm91dGUudHM/ZTEzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgeyB2ZXJpZnlKd3QgfSBmcm9tICdAL2xpYi9qd3QnO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXE6IFJlcXVlc3QsIHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9KXtcbiAgY29uc3QgY29va2llID0gKHJlcS5oZWFkZXJzIGFzIGFueSkuZ2V0KCdjb29raWUnKSB8fCAnJztcbiAgY29uc3QgbSA9IC9qb2JndWFyZF90b2tlbj0oW147XSspLy5leGVjKGNvb2tpZSk7XG4gIGlmKCFtKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgY29uc3QgcCA9IHZlcmlmeUp3dChtWzFdKTsgaWYoIXApIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xuICBjb25zdCBjdiA9IGF3YWl0IHByaXNtYS5jVi5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IE51bWJlcihwYXJhbXMuaWQpIH0gfSk7XG4gIGlmKCFjdiB8fCBjdi51c2VySWQgIT09IE51bWJlcihwLnN1YikpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICB0cnl7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncHVibGljJywgY3YucGF0aC5yZXBsYWNlKCcvJywnJykpO1xuICAgIGF3YWl0IGZzLnVubGluayhmaWxlUGF0aCkuY2F0Y2goKCk9Pnt9KTtcbiAgfWNhdGNoe31cbiAgYXdhaXQgcHJpc21hLmNWLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBjdi5pZCB9IH0pO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJ2ZXJpZnlKd3QiLCJwcm9taXNlcyIsImZzIiwicGF0aCIsIkRFTEVURSIsInJlcSIsInBhcmFtcyIsImNvb2tpZSIsImhlYWRlcnMiLCJnZXQiLCJtIiwiZXhlYyIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInAiLCJjdiIsImNWIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJOdW1iZXIiLCJ1c2VySWQiLCJzdWIiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwicmVwbGFjZSIsInVubGluayIsImNhdGNoIiwiZGVsZXRlIiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/cv/delete/[id]/route.ts\n");

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcv%2Fdelete%2F%5Bid%5D%2Froute.ts&appDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CBsc%20CN%20(CINEC)%5CProject%5Cjobguard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();