/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/2.png":
/*!***********************!*\
  !*** ./src/img/2.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a9b0fee7f967b62a1ea467a6086dbeae.png");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conexion": () => (/* binding */ conexion)
/* harmony export */ });
const httpProvider = 'https://api.edamam.com/api/recipes/v2?type=public&';
const resultados = document.getElementById('resultados');
const tabla = document.querySelector('.table');
const resultado = document.getElementById('resultado');
const adelante = document.getElementById('adelante');
const btnAnterior = document.getElementById('anterior');
const pagina = document.getElementById('pagina');
let anterior = [];
let y = 0;
const conexion = async(query, pepe, wololo) =>{
    let resp = '';
    let data = '';
    if(pepe === false){
        const url = `${httpProvider}q=${query}&app_id=319131b3&app_key=cb08df52f86317722ba6e2aca2153d0d`;
        resp = await fetch(url);
        data = await resp.json();
        anterior.push(url);
    }else{
        resp = await fetch(query);
        data = await resp.json();
    }    
    resultados.innerHTML = '';
    if(data.hits.length === 0){
        tabla.classList.add('d-none');
        resultado.classList.remove('d-none');
        resultado.innerHTML='La consulta no ha ofrecido ningún resultado, por favor escriba otro ingrediente, o puede que lo que haya puesto no sea un ingrediente';
    }else{
        botonera.classList.remove('d-none');
        botonera.classList.add('d-flex');
        resultado.classList.add('d-none');
        tabla.classList.remove('d-none');
        tabla.classList.add('d-block-flex');   
        data.hits.forEach(element => {
            resultados.innerHTML += `<tr>
            <th scope="row"><img class="imagen" src="${element.recipe.image}"></th>
            <td class="m-auto"><p>${element.recipe.label}</p><p><a href="${element.recipe.url}" class="btn btn-primary" target="_blank">Pincha aquí para ver receta</p></td>
            <td>${element.recipe.calories.toFixed(2)} kcal</td>
          </tr>`;
        });
        pagina.innerHTML = y;
        adelante.setAttribute('href', `${data._links.next.href}`);
        if(y<=0){
            y=0;
            btnAnterior.setAttribute('href', `${anterior[y]}`)
        }else{
            anterior.push(data._links.next.href);
            btnAnterior.setAttribute('href', `${anterior[y-1]}`)
        }
        if(wololo===true){
            y++;
            pagina.innerHTML = y;
        }else if(wololo===false){
            y--;
            pagina.innerHTML = y;
        }
    }    
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _src_img_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/2.png */ "./src/img/2.png");



const query = document.getElementById('query');
const adelante = document.getElementById('adelante');
const btnAnterior = document.getElementById('anterior');
const bundlePosition = _src_img_2_png__WEBPACK_IMPORTED_MODULE_2__.default.indexOf('bundle/');
const urlImg = _src_img_2_png__WEBPACK_IMPORTED_MODULE_2__.default.substring(bundlePosition, _src_img_2_png__WEBPACK_IMPORTED_MODULE_2__.default.lenght);
const imgLogo = document.querySelector('.logo');
imgLogo.setAttribute('src', `${_src_img_2_png__WEBPACK_IMPORTED_MODULE_2__.default}`);
query.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        (0,_js_app__WEBPACK_IMPORTED_MODULE_1__.conexion)(query.value, false, '');
    }
})
adelante.addEventListener('click', (event)=>{
    event.preventDefault();
    window.scroll(0, 0);
    const url = adelante.getAttribute('href');
    adelante.setAttribute('disabled', true);
    btnAnterior.setAttribute('disabled', true);
    (0,_js_app__WEBPACK_IMPORTED_MODULE_1__.conexion)(url, true, true);
    adelante.disabled=false;
    btnAnterior.disabled=false;
})
btnAnterior.addEventListener('click', (event)=>{
    event.preventDefault();
    window.scroll(0,0);
    const url = btnAnterior.getAttribute('href');
    adelante.setAttribute('disabled', true);
    btnAnterior.setAttribute('disabled', true);
    (0,_js_app__WEBPACK_IMPORTED_MODULE_1__.conexion)(url, true, false);
    adelante.disabled=false;
    btnAnterior.disabled=false;
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNldGFzLy4vc3JjL2ltZy8yLnBuZyIsIndlYnBhY2s6Ly9yZWNldGFzLy4vc3JjL2Nzcy9zdHlsZS5jc3M/NmI3YiIsIndlYnBhY2s6Ly9yZWNldGFzLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9yZWNldGFzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlY2V0YXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlY2V0YXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZWNldGFzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVjZXRhcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlY2V0YXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVjZXRhcy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7QUNBL0U7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWEsSUFBSSxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QztBQUNBO0FBQ0E7QUFDQSx1REFBdUQscUJBQXFCO0FBQzVFLG9DQUFvQyxxQkFBcUIsa0JBQWtCLG1CQUFtQjtBQUM5RixrQkFBa0IsbUNBQW1DO0FBQ3JEO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUNBQXlDLHNCQUFzQjtBQUMvRDtBQUNBO0FBQ0EsZ0RBQWdELFlBQVk7QUFDNUQsU0FBUztBQUNUO0FBQ0EsZ0RBQWdELGNBQWM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSztBQUNBLEM7Ozs7OztVQ3hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7QUNmeUI7QUFDVztBQUNEO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBVztBQUNsQyxlQUFlLDZEQUFhLGlCQUFpQiwwREFBVTtBQUN2RDtBQUNBLCtCQUErQixtREFBRyxDQUFDO0FBQ25DO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWjtBQUNBO0FBQ0EsQ0FBQyxDIiwiZmlsZSI6ImFmNjMyZDI2ZTcwMjMwNGYwM2E2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhOWIwZmVlN2Y5NjdiNjJhMWVhNDY3YTYwODZkYmVhZS5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBodHRwUHJvdmlkZXIgPSAnaHR0cHM6Ly9hcGkuZWRhbWFtLmNvbS9hcGkvcmVjaXBlcy92Mj90eXBlPXB1YmxpYyYnO1xyXG5jb25zdCByZXN1bHRhZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdGFkb3MnKTtcclxuY29uc3QgdGFibGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUnKTtcclxuY29uc3QgcmVzdWx0YWRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdGFkbycpO1xyXG5jb25zdCBhZGVsYW50ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGVsYW50ZScpO1xyXG5jb25zdCBidG5BbnRlcmlvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnRlcmlvcicpO1xyXG5jb25zdCBwYWdpbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hJyk7XHJcbmxldCBhbnRlcmlvciA9IFtdO1xyXG5sZXQgeSA9IDA7XHJcbmV4cG9ydCBjb25zdCBjb25leGlvbiA9IGFzeW5jKHF1ZXJ5LCBwZXBlLCB3b2xvbG8pID0+e1xyXG4gICAgbGV0IHJlc3AgPSAnJztcclxuICAgIGxldCBkYXRhID0gJyc7XHJcbiAgICBpZihwZXBlID09PSBmYWxzZSl7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7aHR0cFByb3ZpZGVyfXE9JHtxdWVyeX0mYXBwX2lkPTMxOTEzMWIzJmFwcF9rZXk9Y2IwOGRmNTJmODYzMTc3MjJiYTZlMmFjYTIxNTNkMGRgO1xyXG4gICAgICAgIHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcclxuICAgICAgICBhbnRlcmlvci5wdXNoKHVybCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXNwID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcclxuICAgIH0gICAgXHJcbiAgICByZXN1bHRhZG9zLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYoZGF0YS5oaXRzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgdGFibGEuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgcmVzdWx0YWRvLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHJlc3VsdGFkby5pbm5lckhUTUw9J0xhIGNvbnN1bHRhIG5vIGhhIG9mcmVjaWRvIG5pbmfDum4gcmVzdWx0YWRvLCBwb3IgZmF2b3IgZXNjcmliYSBvdHJvIGluZ3JlZGllbnRlLCBvIHB1ZWRlIHF1ZSBsbyBxdWUgaGF5YSBwdWVzdG8gbm8gc2VhIHVuIGluZ3JlZGllbnRlJztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGJvdG9uZXJhLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGJvdG9uZXJhLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpO1xyXG4gICAgICAgIHJlc3VsdGFkby5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB0YWJsYS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICB0YWJsYS5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrLWZsZXgnKTsgICBcclxuICAgICAgICBkYXRhLmhpdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0YWRvcy5pbm5lckhUTUwgKz0gYDx0cj5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+PGltZyBjbGFzcz1cImltYWdlblwiIHNyYz1cIiR7ZWxlbWVudC5yZWNpcGUuaW1hZ2V9XCI+PC90aD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwibS1hdXRvXCI+PHA+JHtlbGVtZW50LnJlY2lwZS5sYWJlbH08L3A+PHA+PGEgaHJlZj1cIiR7ZWxlbWVudC5yZWNpcGUudXJsfVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+UGluY2hhIGFxdcOtIHBhcmEgdmVyIHJlY2V0YTwvcD48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+JHtlbGVtZW50LnJlY2lwZS5jYWxvcmllcy50b0ZpeGVkKDIpfSBrY2FsPC90ZD5cclxuICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwYWdpbmEuaW5uZXJIVE1MID0geTtcclxuICAgICAgICBhZGVsYW50ZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtkYXRhLl9saW5rcy5uZXh0LmhyZWZ9YCk7XHJcbiAgICAgICAgaWYoeTw9MCl7XHJcbiAgICAgICAgICAgIHk9MDtcclxuICAgICAgICAgICAgYnRuQW50ZXJpb3Iuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7YW50ZXJpb3JbeV19YClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYW50ZXJpb3IucHVzaChkYXRhLl9saW5rcy5uZXh0LmhyZWYpO1xyXG4gICAgICAgICAgICBidG5BbnRlcmlvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHthbnRlcmlvclt5LTFdfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdvbG9sbz09PXRydWUpe1xyXG4gICAgICAgICAgICB5Kys7XHJcbiAgICAgICAgICAgIHBhZ2luYS5pbm5lckhUTUwgPSB5O1xyXG4gICAgICAgIH1lbHNlIGlmKHdvbG9sbz09PWZhbHNlKXtcclxuICAgICAgICAgICAgeS0tO1xyXG4gICAgICAgICAgICBwYWdpbmEuaW5uZXJIVE1MID0geTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjb25leGlvbiB9IGZyb20gJy4vanMvYXBwJztcclxuaW1wb3J0IGltZyBmcm9tIFwiLi4vc3JjL2ltZy8yLnBuZ1wiO1xyXG5jb25zdCBxdWVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVyeScpO1xyXG5jb25zdCBhZGVsYW50ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGVsYW50ZScpO1xyXG5jb25zdCBidG5BbnRlcmlvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnRlcmlvcicpO1xyXG5jb25zdCBidW5kbGVQb3NpdGlvbiA9IGltZy5pbmRleE9mKCdidW5kbGUvJyk7XHJcbmNvbnN0IHVybEltZyA9IGltZy5zdWJzdHJpbmcoYnVuZGxlUG9zaXRpb24sIGltZy5sZW5naHQpO1xyXG5jb25zdCBpbWdMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcclxuaW1nTG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2ltZ31gKTtcclxucXVlcnkuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpPT57XHJcbiAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpe1xyXG4gICAgICAgIGNvbmV4aW9uKHF1ZXJ5LnZhbHVlLCBmYWxzZSwgJycpO1xyXG4gICAgfVxyXG59KVxyXG5hZGVsYW50ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xyXG4gICAgY29uc3QgdXJsID0gYWRlbGFudGUuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICBhZGVsYW50ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBidG5BbnRlcmlvci5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBjb25leGlvbih1cmwsIHRydWUsIHRydWUpO1xyXG4gICAgYWRlbGFudGUuZGlzYWJsZWQ9ZmFsc2U7XHJcbiAgICBidG5BbnRlcmlvci5kaXNhYmxlZD1mYWxzZTtcclxufSlcclxuYnRuQW50ZXJpb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93LnNjcm9sbCgwLDApO1xyXG4gICAgY29uc3QgdXJsID0gYnRuQW50ZXJpb3IuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICBhZGVsYW50ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBidG5BbnRlcmlvci5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBjb25leGlvbih1cmwsIHRydWUsIGZhbHNlKTtcclxuICAgIGFkZWxhbnRlLmRpc2FibGVkPWZhbHNlO1xyXG4gICAgYnRuQW50ZXJpb3IuZGlzYWJsZWQ9ZmFsc2U7XHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==