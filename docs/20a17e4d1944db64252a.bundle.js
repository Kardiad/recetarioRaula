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
        y=0;
        anterior = [];
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
            if(y<0){
                y=0;
            }
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
        window.scroll(0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNldGFzLy4vc3JjL2ltZy8yLnBuZyIsIndlYnBhY2s6Ly9yZWNldGFzLy4vc3JjL2Nzcy9zdHlsZS5jc3M/NmI3YiIsIndlYnBhY2s6Ly9yZWNldGFzLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9yZWNldGFzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlY2V0YXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlY2V0YXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZWNldGFzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVjZXRhcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlY2V0YXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVjZXRhcy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7QUNBL0U7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixhQUFhLElBQUksTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEM7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHFCQUFxQjtBQUM1RSxvQ0FBb0MscUJBQXFCLGtCQUFrQixtQkFBbUI7QUFDOUYsa0JBQWtCLG1DQUFtQztBQUNyRDtBQUNBLFNBQVM7QUFDVDtBQUNBLHlDQUF5QyxzQkFBc0I7QUFDL0Q7QUFDQTtBQUNBLGdEQUFnRCxZQUFZO0FBQzVELFNBQVM7QUFDVDtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQSxDOzs7Ozs7VUM3REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7O0FDZnlCO0FBQ1c7QUFDRDtBQUNuQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQVc7QUFDbEMsZUFBZSw2REFBYSxpQkFBaUIsMERBQVU7QUFDdkQ7QUFDQSwrQkFBK0IsbURBQUcsQ0FBQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWjtBQUNBO0FBQ0EsQ0FBQyxDIiwiZmlsZSI6IjIwYTE3ZTRkMTk0NGRiNjQyNTJhLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhOWIwZmVlN2Y5NjdiNjJhMWVhNDY3YTYwODZkYmVhZS5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBodHRwUHJvdmlkZXIgPSAnaHR0cHM6Ly9hcGkuZWRhbWFtLmNvbS9hcGkvcmVjaXBlcy92Mj90eXBlPXB1YmxpYyYnO1xyXG5jb25zdCByZXN1bHRhZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdGFkb3MnKTtcclxuY29uc3QgdGFibGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUnKTtcclxuY29uc3QgcmVzdWx0YWRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdGFkbycpO1xyXG5jb25zdCBhZGVsYW50ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGVsYW50ZScpO1xyXG5jb25zdCBidG5BbnRlcmlvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnRlcmlvcicpO1xyXG5jb25zdCBwYWdpbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hJyk7XHJcbmxldCBhbnRlcmlvciA9IFtdO1xyXG5sZXQgeSA9IDA7XHJcbmV4cG9ydCBjb25zdCBjb25leGlvbiA9IGFzeW5jKHF1ZXJ5LCBwZXBlLCB3b2xvbG8pID0+e1xyXG4gICAgbGV0IHJlc3AgPSAnJztcclxuICAgIGxldCBkYXRhID0gJyc7XHJcbiAgICBpZihwZXBlID09PSBmYWxzZSl7XHJcbiAgICAgICAgeT0wO1xyXG4gICAgICAgIGFudGVyaW9yID0gW107XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7aHR0cFByb3ZpZGVyfXE9JHtxdWVyeX0mYXBwX2lkPTMxOTEzMWIzJmFwcF9rZXk9Y2IwOGRmNTJmODYzMTc3MjJiYTZlMmFjYTIxNTNkMGRgO1xyXG4gICAgICAgIHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcclxuICAgICAgICBhbnRlcmlvci5wdXNoKHVybCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXNwID0gYXdhaXQgZmV0Y2gocXVlcnkpO1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcclxuICAgIH0gICAgXHJcbiAgICByZXN1bHRhZG9zLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYoZGF0YS5oaXRzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgdGFibGEuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgcmVzdWx0YWRvLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHJlc3VsdGFkby5pbm5lckhUTUw9J0xhIGNvbnN1bHRhIG5vIGhhIG9mcmVjaWRvIG5pbmfDum4gcmVzdWx0YWRvLCBwb3IgZmF2b3IgZXNjcmliYSBvdHJvIGluZ3JlZGllbnRlLCBvIHB1ZWRlIHF1ZSBsbyBxdWUgaGF5YSBwdWVzdG8gbm8gc2VhIHVuIGluZ3JlZGllbnRlJztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGJvdG9uZXJhLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGJvdG9uZXJhLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpO1xyXG4gICAgICAgIHJlc3VsdGFkby5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB0YWJsYS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICB0YWJsYS5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrLWZsZXgnKTsgICBcclxuICAgICAgICBkYXRhLmhpdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0YWRvcy5pbm5lckhUTUwgKz0gYDx0cj5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+PGltZyBjbGFzcz1cImltYWdlblwiIHNyYz1cIiR7ZWxlbWVudC5yZWNpcGUuaW1hZ2V9XCI+PC90aD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwibS1hdXRvXCI+PHA+JHtlbGVtZW50LnJlY2lwZS5sYWJlbH08L3A+PHA+PGEgaHJlZj1cIiR7ZWxlbWVudC5yZWNpcGUudXJsfVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+UGluY2hhIGFxdcOtIHBhcmEgdmVyIHJlY2V0YTwvcD48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+JHtlbGVtZW50LnJlY2lwZS5jYWxvcmllcy50b0ZpeGVkKDIpfSBrY2FsPC90ZD5cclxuICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwYWdpbmEuaW5uZXJIVE1MID0geTtcclxuICAgICAgICBhZGVsYW50ZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtkYXRhLl9saW5rcy5uZXh0LmhyZWZ9YCk7XHJcbiAgICAgICAgaWYoeTw9MCl7XHJcbiAgICAgICAgICAgIHk9MDtcclxuICAgICAgICAgICAgYnRuQW50ZXJpb3Iuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7YW50ZXJpb3JbeV19YClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYW50ZXJpb3IucHVzaChkYXRhLl9saW5rcy5uZXh0LmhyZWYpO1xyXG4gICAgICAgICAgICBidG5BbnRlcmlvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHthbnRlcmlvclt5LTFdfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdvbG9sbz09PXRydWUpe1xyXG4gICAgICAgICAgICB5Kys7XHJcbiAgICAgICAgICAgIHBhZ2luYS5pbm5lckhUTUwgPSB5O1xyXG4gICAgICAgIH1lbHNlIGlmKHdvbG9sbz09PWZhbHNlKXtcclxuICAgICAgICAgICAgeS0tO1xyXG4gICAgICAgICAgICBpZih5PDApe1xyXG4gICAgICAgICAgICAgICAgeT0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhZ2luYS5pbm5lckhUTUwgPSB5O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGNvbmV4aW9uIH0gZnJvbSAnLi9qcy9hcHAnO1xyXG5pbXBvcnQgaW1nIGZyb20gXCIuLi9zcmMvaW1nLzIucG5nXCI7XHJcbmNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXJ5Jyk7XHJcbmNvbnN0IGFkZWxhbnRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZWxhbnRlJyk7XHJcbmNvbnN0IGJ0bkFudGVyaW9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FudGVyaW9yJyk7XHJcbmNvbnN0IGJ1bmRsZVBvc2l0aW9uID0gaW1nLmluZGV4T2YoJ2J1bmRsZS8nKTtcclxuY29uc3QgdXJsSW1nID0gaW1nLnN1YnN0cmluZyhidW5kbGVQb3NpdGlvbiwgaW1nLmxlbmdodCk7XHJcbmNvbnN0IGltZ0xvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG5pbWdMb2dvLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7aW1nfWApO1xyXG5xdWVyeS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCk9PntcclxuICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJyl7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCAwKTtcclxuICAgICAgICBjb25leGlvbihxdWVyeS52YWx1ZSwgZmFsc2UsICcnKTtcclxuICAgIH1cclxufSlcclxuYWRlbGFudGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcclxuICAgIGNvbnN0IHVybCA9IGFkZWxhbnRlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgYWRlbGFudGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgYnRuQW50ZXJpb3Iuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgY29uZXhpb24odXJsLCB0cnVlLCB0cnVlKTtcclxuICAgIGFkZWxhbnRlLmRpc2FibGVkPWZhbHNlO1xyXG4gICAgYnRuQW50ZXJpb3IuZGlzYWJsZWQ9ZmFsc2U7XHJcbn0pXHJcbmJ0bkFudGVyaW9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHdpbmRvdy5zY3JvbGwoMCwwKTtcclxuICAgIGNvbnN0IHVybCA9IGJ0bkFudGVyaW9yLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgYWRlbGFudGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgYnRuQW50ZXJpb3Iuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgY29uZXhpb24odXJsLCB0cnVlLCBmYWxzZSk7XHJcbiAgICBhZGVsYW50ZS5kaXNhYmxlZD1mYWxzZTtcclxuICAgIGJ0bkFudGVyaW9yLmRpc2FibGVkPWZhbHNlO1xyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=