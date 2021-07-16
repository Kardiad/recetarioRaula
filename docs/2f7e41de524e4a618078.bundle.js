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
    window.scroll(0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNldGFzLy4vc3JjL2ltZy8yLnBuZyIsIndlYnBhY2s6Ly9yZWNldGFzLy4vc3JjL2Nzcy9zdHlsZS5jc3M/NmI3YiIsIndlYnBhY2s6Ly9yZWNldGFzLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9yZWNldGFzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlY2V0YXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlY2V0YXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZWNldGFzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVjZXRhcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlY2V0YXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVjZXRhcy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7QUNBL0U7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYSxJQUFJLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxxQkFBcUI7QUFDNUUsb0NBQW9DLHFCQUFxQixrQkFBa0IsbUJBQW1CO0FBQzlGLGtCQUFrQixtQ0FBbUM7QUFDckQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5Q0FBeUMsc0JBQXNCO0FBQy9EO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RCxTQUFTO0FBQ1Q7QUFDQSxnREFBZ0QsY0FBYztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0EsQzs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7OztBQ2Z5QjtBQUNXO0FBQ0Q7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJEQUFXO0FBQ2xDLGVBQWUsNkRBQWEsaUJBQWlCLDBEQUFVO0FBQ3ZEO0FBQ0EsK0JBQStCLG1EQUFHLENBQUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1o7QUFDQTtBQUNBLENBQUMsQyIsImZpbGUiOiIyZjdlNDFkZTUyNGU0YTYxODA3OC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTliMGZlZTdmOTY3YjYyYTFlYTQ2N2E2MDg2ZGJlYWUucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgaHR0cFByb3ZpZGVyID0gJ2h0dHBzOi8vYXBpLmVkYW1hbS5jb20vYXBpL3JlY2lwZXMvdjI/dHlwZT1wdWJsaWMmJztcclxuY29uc3QgcmVzdWx0YWRvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRhZG9zJyk7XHJcbmNvbnN0IHRhYmxhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlJyk7XHJcbmNvbnN0IHJlc3VsdGFkbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRhZG8nKTtcclxuY29uc3QgYWRlbGFudGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRlbGFudGUnKTtcclxuY29uc3QgYnRuQW50ZXJpb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW50ZXJpb3InKTtcclxuY29uc3QgcGFnaW5hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYScpO1xyXG5sZXQgYW50ZXJpb3IgPSBbXTtcclxubGV0IHkgPSAwO1xyXG5leHBvcnQgY29uc3QgY29uZXhpb24gPSBhc3luYyhxdWVyeSwgcGVwZSwgd29sb2xvKSA9PntcclxuICAgIGxldCByZXNwID0gJyc7XHJcbiAgICBsZXQgZGF0YSA9ICcnO1xyXG4gICAgaWYocGVwZSA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHk9MDtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtodHRwUHJvdmlkZXJ9cT0ke3F1ZXJ5fSZhcHBfaWQ9MzE5MTMxYjMmYXBwX2tleT1jYjA4ZGY1MmY4NjMxNzcyMmJhNmUyYWNhMjE1M2QwZGA7XHJcbiAgICAgICAgcmVzcCA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgICAgIGFudGVyaW9yLnB1c2godXJsKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJlc3AgPSBhd2FpdCBmZXRjaChxdWVyeSk7XHJcbiAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgfSAgICBcclxuICAgIHJlc3VsdGFkb3MuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZihkYXRhLmhpdHMubGVuZ3RoID09PSAwKXtcclxuICAgICAgICB0YWJsYS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICByZXN1bHRhZG8uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgcmVzdWx0YWRvLmlubmVySFRNTD0nTGEgY29uc3VsdGEgbm8gaGEgb2ZyZWNpZG8gbmluZ8O6biByZXN1bHRhZG8sIHBvciBmYXZvciBlc2NyaWJhIG90cm8gaW5ncmVkaWVudGUsIG8gcHVlZGUgcXVlIGxvIHF1ZSBoYXlhIHB1ZXN0byBubyBzZWEgdW4gaW5ncmVkaWVudGUnO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYm90b25lcmEuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgYm90b25lcmEuY2xhc3NMaXN0LmFkZCgnZC1mbGV4Jyk7XHJcbiAgICAgICAgcmVzdWx0YWRvLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHRhYmxhLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHRhYmxhLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2stZmxleCcpOyAgIFxyXG4gICAgICAgIGRhdGEuaGl0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHRhZG9zLmlubmVySFRNTCArPSBgPHRyPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj48aW1nIGNsYXNzPVwiaW1hZ2VuXCIgc3JjPVwiJHtlbGVtZW50LnJlY2lwZS5pbWFnZX1cIj48L3RoPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJtLWF1dG9cIj48cD4ke2VsZW1lbnQucmVjaXBlLmxhYmVsfTwvcD48cD48YSBocmVmPVwiJHtlbGVtZW50LnJlY2lwZS51cmx9XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5QaW5jaGEgYXF1w60gcGFyYSB2ZXIgcmVjZXRhPC9wPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4ke2VsZW1lbnQucmVjaXBlLmNhbG9yaWVzLnRvRml4ZWQoMil9IGtjYWw8L3RkPlxyXG4gICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhZ2luYS5pbm5lckhUTUwgPSB5O1xyXG4gICAgICAgIGFkZWxhbnRlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAke2RhdGEuX2xpbmtzLm5leHQuaHJlZn1gKTtcclxuICAgICAgICBpZih5PD0wKXtcclxuICAgICAgICAgICAgeT0wO1xyXG4gICAgICAgICAgICBidG5BbnRlcmlvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHthbnRlcmlvclt5XX1gKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbnRlcmlvci5wdXNoKGRhdGEuX2xpbmtzLm5leHQuaHJlZik7XHJcbiAgICAgICAgICAgIGJ0bkFudGVyaW9yLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAke2FudGVyaW9yW3ktMV19YClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod29sb2xvPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHkrKztcclxuICAgICAgICAgICAgcGFnaW5hLmlubmVySFRNTCA9IHk7XHJcbiAgICAgICAgfWVsc2UgaWYod29sb2xvPT09ZmFsc2Upe1xyXG4gICAgICAgICAgICB5LS07XHJcbiAgICAgICAgICAgIHBhZ2luYS5pbm5lckhUTUwgPSB5O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGNvbmV4aW9uIH0gZnJvbSAnLi9qcy9hcHAnO1xyXG5pbXBvcnQgaW1nIGZyb20gXCIuLi9zcmMvaW1nLzIucG5nXCI7XHJcbmNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXJ5Jyk7XHJcbmNvbnN0IGFkZWxhbnRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZWxhbnRlJyk7XHJcbmNvbnN0IGJ0bkFudGVyaW9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FudGVyaW9yJyk7XHJcbmNvbnN0IGJ1bmRsZVBvc2l0aW9uID0gaW1nLmluZGV4T2YoJ2J1bmRsZS8nKTtcclxuY29uc3QgdXJsSW1nID0gaW1nLnN1YnN0cmluZyhidW5kbGVQb3NpdGlvbiwgaW1nLmxlbmdodCk7XHJcbmNvbnN0IGltZ0xvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG5pbWdMb2dvLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7aW1nfWApO1xyXG5xdWVyeS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCk9PntcclxuICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XHJcbiAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpe1xyXG4gICAgICAgIGNvbmV4aW9uKHF1ZXJ5LnZhbHVlLCBmYWxzZSwgJycpO1xyXG4gICAgfVxyXG59KVxyXG5hZGVsYW50ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xyXG4gICAgY29uc3QgdXJsID0gYWRlbGFudGUuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICBhZGVsYW50ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBidG5BbnRlcmlvci5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBjb25leGlvbih1cmwsIHRydWUsIHRydWUpO1xyXG4gICAgYWRlbGFudGUuZGlzYWJsZWQ9ZmFsc2U7XHJcbiAgICBidG5BbnRlcmlvci5kaXNhYmxlZD1mYWxzZTtcclxufSlcclxuYnRuQW50ZXJpb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93LnNjcm9sbCgwLDApO1xyXG4gICAgY29uc3QgdXJsID0gYnRuQW50ZXJpb3IuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICBhZGVsYW50ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBidG5BbnRlcmlvci5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBjb25leGlvbih1cmwsIHRydWUsIGZhbHNlKTtcclxuICAgIGFkZWxhbnRlLmRpc2FibGVkPWZhbHNlO1xyXG4gICAgYnRuQW50ZXJpb3IuZGlzYWJsZWQ9ZmFsc2U7XHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==