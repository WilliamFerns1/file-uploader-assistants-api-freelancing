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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/index.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/index.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [linkOrText, setLinkOrText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (result) {\n            document.getElementById(\"result\").innerText = \"Result: \".concat(result);\n            setResult(\"\");\n        }\n    }, [\n        result\n    ]);\n    async function getResult() {\n        setLoading(true);\n        const result = await fetch(\"/api/ask\");\n        const resultJson = await result.json();\n        const resultMessage = resultJson.message;\n        if (resultMessage) {\n            setResult(resultMessage);\n        } else {\n            setError(resultJson.error);\n        }\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen gap-[25px] flex-col items-center px-[25px] py-[15px] \".concat((next_font_google_target_css_path_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex align-center flex-col gap-[15px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-[5px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"link-or-text\",\n                                className: \"text-xl font-medium\",\n                                children: \"Link or Text\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"link-or-text\",\n                                value: linkOrText,\n                                onChange: (e)=>setLinkOrText(e.target.value),\n                                className: \"px-[15px] py-[7px] rounded-[5px]\",\n                                name: \"link-or-text\",\n                                type: \"text\",\n                                placeholder: \"Paste a link or text\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-[5px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"link-or-text\",\n                                className: \"text-xl font-medium\",\n                                children: \"Question\"\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"px-[15px] py-[7px] rounded-[5px]\",\n                                name: \"message\",\n                                placeholder: \"Type a message\",\n                                value: question,\n                                onChange: (e)=>setQuestion(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-[15px] py-[7px] bg-blue-900 w-[fit-content] rounded-[5px] font-bold color-red\",\n                        onClick: async ()=>{\n                            await getResult();\n                        },\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full flex flex-col gap-[5px] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        id: \"result\",\n                        className: \"text-2xl\",\n                        children: \"Result:\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white w-full h-[200px] rounded-[5px]\"\n                    }, void 0, false, {\n                        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/adonis/dev/freelancing/active/file-uploader-assistants-api-freelancing/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qsj9rD/glFejAZhaI2/lFWNo99Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU1NQTtBQUp5QjtBQUNXO0FBSzNCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUMsQ0FBQztJQUN0QyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQTtJQUNsQyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSLElBQUlFLFFBQVE7WUFDVlUsU0FBU0MsY0FBYyxDQUFDLFVBQVVDLFNBQVMsR0FBRyxXQUFrQixPQUFQWjtZQUN6REMsVUFBVTtRQUNaO0lBQ0YsR0FBRztRQUFDRDtLQUFPO0lBRVgsZUFBZWE7UUFDYlYsV0FBVztRQUNYLE1BQU1ILFNBQVMsTUFBTWMsTUFBTTtRQUMzQixNQUFNQyxhQUFhLE1BQU1mLE9BQU9nQixJQUFJO1FBQ3BDLE1BQU1DLGdCQUFnQkYsV0FBV0csT0FBTztRQUV4QyxJQUFJRCxlQUFlO1lBQ2pCaEIsVUFBVWdCO1FBQ1osT0FDSztZQUNIWixTQUFTVSxXQUFXWCxLQUFLO1FBQzNCO1FBQ0FELFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFDQ0MsV0FBVywwRUFBMEYsT0FBaEJ6QiwySkFBZTs7MEJBRXBHLDhEQUFDMEI7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFNQyxLQUFJO2dDQUFlSCxXQUFVOzBDQUFzQjs7Ozs7OzBDQUMxRCw4REFBQ0k7Z0NBQ0NDLElBQUc7Z0NBQ0hDLE9BQU9sQjtnQ0FDUG1CLFVBQVVDLENBQUFBLElBQUtuQixjQUFjbUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMzQ04sV0FBVTtnQ0FDVlUsTUFBSztnQ0FBZUMsTUFBSztnQ0FDekJDLGFBQVk7Ozs7Ozs7Ozs7OztrQ0FHaEIsOERBQUNYO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQU1DLEtBQUk7Z0NBQWVILFdBQVU7MENBQXNCOzs7Ozs7MENBQzFELDhEQUFDYTtnQ0FDQ2IsV0FBVTtnQ0FDVlUsTUFBSztnQ0FDTEUsYUFBWTtnQ0FDWk4sT0FBT3BCO2dDQUNQcUIsVUFBVUMsQ0FBQUEsSUFBS3JCLFlBQVlxQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztrQ0FJN0MsOERBQUNRO3dCQUNDZCxXQUFVO3dCQUNWZSxTQUFTOzRCQUNQLE1BQU10Qjt3QkFDUjtrQ0FDRDs7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDUTtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNnQjt3QkFDQ1gsSUFBRzt3QkFDSEwsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDQzt3QkFBSUQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZCO0dBNUV3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xpbmtPclRleHQsIHNldExpbmtPclRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS5pbm5lclRleHQgPSBgUmVzdWx0OiAke3Jlc3VsdH1gO1xuICAgICAgc2V0UmVzdWx0KFwiXCIpXG4gICAgfVxuICB9LCBbcmVzdWx0XSlcblxuICBhc3luYyBmdW5jdGlvbiBnZXRSZXN1bHQoKSB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFwiL2FwaS9hc2tcIilcbiAgICBjb25zdCByZXN1bHRKc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxuICAgIGNvbnN0IHJlc3VsdE1lc3NhZ2UgPSByZXN1bHRKc29uLm1lc3NhZ2VcblxuICAgIGlmIChyZXN1bHRNZXNzYWdlKSB7XG4gICAgICBzZXRSZXN1bHQocmVzdWx0TWVzc2FnZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRFcnJvcihyZXN1bHRKc29uLmVycm9yKVxuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpblxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBtaW4taC1zY3JlZW4gZ2FwLVsyNXB4XSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHgtWzI1cHhdIHB5LVsxNXB4XSAke2ludGVyLmNsYXNzTmFtZX1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggYWxpZ24tY2VudGVyIGZsZXgtY29sIGdhcC1bMTVweF1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC1bNXB4XVwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJsaW5rLW9yLXRleHRcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+TGluayBvciBUZXh0PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBpZD1cImxpbmstb3ItdGV4dFwiIFxuICAgICAgICAgICAgdmFsdWU9e2xpbmtPclRleHR9IFxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TGlua09yVGV4dChlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtWzE1cHhdIHB5LVs3cHhdIHJvdW5kZWQtWzVweF1cIiBcbiAgICAgICAgICAgIG5hbWU9XCJsaW5rLW9yLXRleHRcIiB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSBhIGxpbmsgb3IgdGV4dFwiIFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLVs1cHhdXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImxpbmstb3ItdGV4dFwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW1cIj5RdWVzdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtWzE1cHhdIHB5LVs3cHhdIHJvdW5kZWQtWzVweF1cIiBcbiAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCIgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlXCJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbn0gXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRRdWVzdGlvbihlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgID5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJweC1bMTVweF0gcHktWzdweF0gYmctYmx1ZS05MDAgdy1bZml0LWNvbnRlbnRdIHJvdW5kZWQtWzVweF0gZm9udC1ib2xkIGNvbG9yLXJlZFwiXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgZ2V0UmVzdWx0KClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU2VuZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLVs1cHhdIFwiPlxuICAgICAgICA8aDNcbiAgICAgICAgICBpZD1cInJlc3VsdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGxcIlxuICAgICAgICA+XG4gICAgICAgICAgUmVzdWx0OiBcbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgaC1bMjAwcHhdIHJvdW5kZWQtWzVweF1cIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsImxpbmtPclRleHQiLCJzZXRMaW5rT3JUZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsImdldFJlc3VsdCIsImZldGNoIiwicmVzdWx0SnNvbiIsImpzb24iLCJyZXN1bHRNZXNzYWdlIiwibWVzc2FnZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsImZvciIsImlucHV0IiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});