"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/index.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/index.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [linkOrText, setLinkOrText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (result) {\n            document.getElementById(\"result\").innerText = \"Result: \".concat(result);\n            setResult(\"\");\n        }\n    }, [\n        result\n    ]);\n    async function getResult() {\n        setLoading(true);\n        const result = await fetch(\"/api/ask\");\n        const resultJson = await result.json();\n        const resultMessage = resultJson.message;\n        if (resultMessage) {\n            setResult(resultMessage);\n        } else {\n            setError(resultJson.error);\n        }\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen gap-[25px] flex-col items-center px-[25px] py-[15px] \".concat((next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex align-center flex-col gap-[15px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-[5px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"link-or-text\",\n                                className: \"text-xl font-medium\",\n                                children: \"Link or Text\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"link-or-text\",\n                                value: linkOrText,\n                                onChange: (e)=>setLinkOrText(e.target.value),\n                                className: \"px-[15px] py-[7px] rounded-[5px]\",\n                                name: \"link-or-text\",\n                                type: \"text\",\n                                placeholder: \"Paste a link or text\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-[5px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"link-or-text\",\n                                className: \"text-xl font-medium\",\n                                children: \"Question\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"px-[15px] py-[7px] rounded-[5px]\",\n                                name: \"message\",\n                                placeholder: \"Type a message\",\n                                value: question,\n                                onChange: (e)=>setQuestion(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-[15px] py-[7px] bg-blue-900 w-[fit-content] rounded-[5px] font-bold color-red\",\n                        onClick: async ()=>{\n                            await getResult();\n                        },\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full flex flex-col gap-[5px] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        id: \"result\",\n                        className: \"text-2xl\",\n                        children: \"Result:\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white w-full h-[200px] rounded-[5px]\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Bie1mhZWBNEBxu/M5dN9gZAF9rQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU1NQTtBQUp5QjtBQUNXO0FBSzNCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUMsQ0FBQztJQUN0QyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUUsUUFBUTtZQUNWVSxTQUFTQyxjQUFjLENBQUMsVUFBVUMsU0FBUyxHQUFHLFdBQWtCLE9BQVBaO1lBQ3pEQyxVQUFVO1FBQ1o7SUFDRixHQUFHO1FBQUNEO0tBQU87SUFFWCxlQUFlYTtRQUNiVixXQUFXO1FBQ1gsTUFBTUgsU0FBUyxNQUFNYyxNQUFNO1FBQzNCLE1BQU1DLGFBQWEsTUFBTWYsT0FBT2dCLElBQUk7UUFDcEMsTUFBTUMsZ0JBQWdCRixXQUFXRyxPQUFPO1FBRXhDLElBQUlELGVBQWU7WUFDakJoQixVQUFVZ0I7UUFDWixPQUNLO1lBQ0haLFNBQVNVLFdBQVdYLEtBQUs7UUFDM0I7UUFDQUQsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNnQjtRQUNDQyxXQUFXLDBFQUEwRixPQUFoQnpCLDJKQUFlOzswQkFFcEcsOERBQUMwQjtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQU1DLEtBQUk7Z0NBQWVILFdBQVU7MENBQXNCOzs7Ozs7MENBQzFELDhEQUFDSTtnQ0FDQ0MsSUFBRztnQ0FDSEMsT0FBT2xCO2dDQUNQbUIsVUFBVUMsQ0FBQUEsSUFBS25CLGNBQWNtQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzNDTixXQUFVO2dDQUNWVSxNQUFLO2dDQUFlQyxNQUFLO2dDQUN6QkMsYUFBWTs7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ1g7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBTUMsS0FBSTtnQ0FBZUgsV0FBVTswQ0FBc0I7Ozs7OzswQ0FDMUQsOERBQUNhO2dDQUNDYixXQUFVO2dDQUNWVSxNQUFLO2dDQUNMRSxhQUFZO2dDQUNaTixPQUFPcEI7Z0NBQ1BxQixVQUFVQyxDQUFBQSxJQUFLckIsWUFBWXFCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUk3Qyw4REFBQ1E7d0JBQ0NkLFdBQVU7d0JBQ1ZlLFNBQVM7NEJBQ1AsTUFBTXRCO3dCQUNSO2tDQUNEOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNRO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ2dCO3dCQUNDWCxJQUFHO3dCQUNITCxXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNDO3dCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0E1RXdCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaW5rT3JUZXh0LCBzZXRMaW5rT3JUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikuaW5uZXJUZXh0ID0gYFJlc3VsdDogJHtyZXN1bHR9YDtcbiAgICAgIHNldFJlc3VsdChcIlwiKVxuICAgIH1cbiAgfSwgW3Jlc3VsdF0pXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVzdWx0KCkge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXNrXCIpXG4gICAgY29uc3QgcmVzdWx0SnNvbiA9IGF3YWl0IHJlc3VsdC5qc29uKClcbiAgICBjb25zdCByZXN1bHRNZXNzYWdlID0gcmVzdWx0SnNvbi5tZXNzYWdlXG5cbiAgICBpZiAocmVzdWx0TWVzc2FnZSkge1xuICAgICAgc2V0UmVzdWx0KHJlc3VsdE1lc3NhZ2UpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0RXJyb3IocmVzdWx0SnNvbi5lcnJvcilcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIGNsYXNzTmFtZT17YGZsZXggbWluLWgtc2NyZWVuIGdhcC1bMjVweF0gZmxleC1jb2wgaXRlbXMtY2VudGVyIHB4LVsyNXB4XSBweS1bMTVweF0gJHtpbnRlci5jbGFzc05hbWV9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGFsaWduLWNlbnRlciBmbGV4LWNvbCBnYXAtWzE1cHhdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtWzVweF1cIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibGluay1vci10ZXh0XCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bVwiPkxpbmsgb3IgVGV4dDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgaWQ9XCJsaW5rLW9yLXRleHRcIiBcbiAgICAgICAgICAgIHZhbHVlPXtsaW5rT3JUZXh0fSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldExpbmtPclRleHQoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LVsxNXB4XSBweS1bN3B4XSByb3VuZGVkLVs1cHhdXCIgXG4gICAgICAgICAgICBuYW1lPVwibGluay1vci10ZXh0XCIgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgYSBsaW5rIG9yIHRleHRcIiBcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC1bNXB4XVwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJsaW5rLW9yLXRleHRcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+UXVlc3Rpb248L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LVsxNXB4XSBweS1bN3B4XSByb3VuZGVkLVs1cHhdXCIgXG4gICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZVwiXG4gICAgICAgICAgICB2YWx1ZT17cXVlc3Rpb259IFxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UXVlc3Rpb24oZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICA+XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtWzE1cHhdIHB5LVs3cHhdIGJnLWJsdWUtOTAwIHctW2ZpdC1jb250ZW50XSByb3VuZGVkLVs1cHhdIGZvbnQtYm9sZCBjb2xvci1yZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGdldFJlc3VsdCgpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNlbmRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGdhcC1bNXB4XSBcIj5cbiAgICAgICAgPGgzXG4gICAgICAgICAgaWQ9XCJyZXN1bHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsXCJcbiAgICAgICAgPlxuICAgICAgICAgIFJlc3VsdDogXG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1mdWxsIGgtWzIwMHB4XSByb3VuZGVkLVs1cHhdXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInJlc3VsdCIsInNldFJlc3VsdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJsaW5rT3JUZXh0Iiwic2V0TGlua09yVGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJnZXRSZXN1bHQiLCJmZXRjaCIsInJlc3VsdEpzb24iLCJqc29uIiwicmVzdWx0TWVzc2FnZSIsIm1lc3NhZ2UiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});