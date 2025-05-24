/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessOptions: () => (/* binding */ accessOptions)
/* harmony export */ });
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrador";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcion\u00E1rio";
    accessOptions["undefined"] = "N\u00E3o Definido";
})(accessOptions || (accessOptions = {}));


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var content = document.getElementById('content');
var button = document.querySelector('button[id="add"]');
var accessRadio = document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);
var accessOptionsValues = Object.values(_model__WEBPACK_IMPORTED_MODULE_0__.accessOptions);
var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('http://localhost:5011/users')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                users = _a.sent();
                return [2 /*return*/, users];
        }
    });
}); };
var updateUserLayout = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getUser()];
            case 1:
                users = _a.sent();
                users.map(function (user) {
                    content.innerHTML += createLine(user);
                });
                return [2 /*return*/];
        }
    });
}); };
updateUserLayout();
function addEmployee() {
    var formFields = [
        document.querySelector('#fullName'),
        document.querySelector('#register'),
        document.querySelector('input[name="access"]:checked'),
        document.querySelector('#active'),
        document.querySelector('#addressHome'),
        document.querySelector('#addressWork'),
    ];
    var fullName = formFields[0], register = formFields[1], admin = formFields[2], active = formFields[3], addressHome = formFields[4], addressWork = formFields[5];
    var user = {
        fullName: fullName.value,
        register: register.value != '' ? register.value : undefined,
        active: active.checked,
        access: admin.value,
    };
    content.innerHTML += createLine(user, addressHome.value, addressWork.value);
}
accessOptionsValues.forEach(function (value, i) {
    accessRadio.innerHTML += "\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n    <label class=\"form-check-label capitalLetter\" for=\"no\">\n      ").concat(value, "\n    </label>\n  </div>\n  ");
});
document.getElementById('accessRadio0').checked = true;
function createLine(_a) {
    var fullName = _a.fullName, _b = _a.register, register = _b === void 0 ? Math.random().toString(36).substring(7).toUpperCase() : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.access, access = _d === void 0 ? _model__WEBPACK_IMPORTED_MODULE_0__.accessOptions.undefined : _d;
    var address = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        address[_i - 1] = arguments[_i];
    }
    return "\n    <div class=\"card mb-1\">\n      <div class=\"card-header\">\n        ".concat(register, "\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(fullName, "</h5>\n        <a href=\"#\" class=\"btn btn-primary\">").concat(active ? 'Ativo' : 'Inativo', "</a>\n      </div>\n      ").concat(address.length > 0
        ? "<div class=\"card-body\">\n          <h6 class=\"card-title\">".concat(address.join('<br/>'), "</h6>\n        </div>")
        : '', "\n      <div class=\"card-footer bg-transparent border-success\">\n        Acesso: ").concat(access, "\n      </div>\n    </div>");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxTQUFTLElBQVksVUFBVSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RixDQUFDO0FBRUQsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYSxFQUFFLENBQVM7SUFDbkQsV0FBVyxDQUFDLFNBQVMsSUFBSSwrSEFFcUQsQ0FBQyx3QkFBWSxLQUFLLHlGQUUxRixLQUFLLGlDQUdWO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBRTNFLFNBQVMsVUFBVSxDQUNqQixFQUtRO1FBSk4sUUFBUSxnQkFDUixnQkFBZ0UsRUFBaEUsUUFBUSxtQkFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FDaEUsY0FBYyxFQUFkLE1BQU0sbUJBQUcsS0FBSyxPQUNkLGNBQWdDLEVBQWhDLE1BQU0sbUJBQUcsaURBQWEsQ0FBQyxTQUFTO0lBRWxDLGlCQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIsZ0NBQW9COztJQUVwQixPQUFPLHNGQUdDLFFBQVEsK0ZBR2UsUUFBUSxvRUFDSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyx1Q0FHbEUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyx3RUFDdUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQ3pDO1FBQ0wsQ0FBQyxDQUFDLEVBQUUsZ0dBR0ksTUFBTSwrQkFFYixDQUFDO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gYWNjZXNzT3B0aW9ucyB7XHJcbiAgYWRtaW5pc3RyYXRvciA9ICdhZG1pbmlzdHJhZG9yJyxcclxuICBtYW5hZ2VyID0gJ2dlcmVudGUnLFxyXG4gIGVtcGxveWVlID0gJ2Z1bmNpb27DoXJpbycsXHJcbiAgdW5kZWZpbmVkID0gJ07Do28gRGVmaW5pZG8nXHJcbn1cclxuXHJcbmludGVyZmFjZSBJUGVyc29uIHtcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIGFkZHJlc3M/OiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVXNlciBleHRlbmRzIElQZXJzb24ge1xyXG4gIHJlZ2lzdGVyPzogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGFjY2Vzcz86IGFjY2Vzc09wdGlvbnM7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWNjZXNzT3B0aW9ucywgSVVzZXIgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGJ1dHRvbiA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpZD1cImFkZFwiXScpO1xyXG5jb25zdCBhY2Nlc3NSYWRpbyA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzUmFkaW8nKTtcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRW1wbG95ZWUpO1xyXG5cclxuY29uc3QgYWNjZXNzT3B0aW9uc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoYWNjZXNzT3B0aW9ucylcclxuXHJcbmNvbnN0IGdldFVzZXIgPSBhc3luYyAoKTogUHJvbWlzZTxJVXNlcltdPiA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAxMS91c2VycycpO1xyXG4gIGNvbnN0IHVzZXJzOiBJVXNlcltdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiB1c2VycztcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXJMYXlvdXQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgY29uc3QgdXNlcnM6IElVc2VyW10gPSBhd2FpdCBnZXRVc2VyKCk7XHJcblxyXG4gIHVzZXJzLm1hcCgodXNlcjogSVVzZXIpID0+IHtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+Y3JlYXRlTGluZSh1c2VyKTtcclxuICB9KTtcclxufTtcclxuXHJcbnVwZGF0ZVVzZXJMYXlvdXQoKVxyXG5cclxuZnVuY3Rpb24gYWRkRW1wbG95ZWUgKCk6IHZvaWQge1xyXG4gIGxldCBmb3JtRmllbGRzID0gW1xyXG4gICAgPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bGxOYW1lJyksXHJcbiAgICA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXInKSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJhY2Nlc3NcIl06Y2hlY2tlZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWN0aXZlJykgYXMgSFRNTElucHV0RWxlbWVudCxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRyZXNzSG9tZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcmVzc1dvcmsnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IFtmdWxsTmFtZSwgcmVnaXN0ZXIsIGFkbWluLCBhY3RpdmUsIGFkZHJlc3NIb21lLCBhZGRyZXNzV29ya10gPSBmb3JtRmllbGRzO1xyXG5cclxuICBsZXQgdXNlcjogSVVzZXIgPSB7XHJcbiAgICBmdWxsTmFtZTogZnVsbE5hbWUhLnZhbHVlLFxyXG4gICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLnZhbHVlICE9ICcnID8gcmVnaXN0ZXIudmFsdWUgOiB1bmRlZmluZWQsXHJcbiAgICBhY3RpdmU6IGFjdGl2ZS5jaGVja2VkLFxyXG4gICAgYWNjZXNzOiA8YWNjZXNzT3B0aW9ucz5hZG1pbi52YWx1ZSxcclxuICB9O1xyXG5cclxuICBjb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPmNyZWF0ZUxpbmUodXNlciwgYWRkcmVzc0hvbWUudmFsdWUsIGFkZHJlc3NXb3JrLnZhbHVlKTtcclxufVxyXG5cclxuYWNjZXNzT3B0aW9uc1ZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcclxuICBhY2Nlc3NSYWRpby5pbm5lckhUTUwgKz0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFjY2Vzc1wiIGlkPVwiYWNjZXNzUmFkaW8ke2l9XCIgdmFsdWU9XCIke3ZhbHVlfVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbCBjYXBpdGFsTGV0dGVyXCIgZm9yPVwibm9cIj5cclxuICAgICAgJHt2YWx1ZX1cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcbiAgYFxyXG59KTtcclxuKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3NSYWRpbzAnKSkuY2hlY2tlZCA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5lKFxyXG4gIHtcclxuICAgIGZ1bGxOYW1lLFxyXG4gICAgcmVnaXN0ZXIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykudG9VcHBlckNhc2UoKSxcclxuICAgIGFjdGl2ZSA9IGZhbHNlLFxyXG4gICAgYWNjZXNzID0gYWNjZXNzT3B0aW9ucy51bmRlZmluZWQsXHJcbiAgfTogSVVzZXIsXHJcbiAgLi4uYWRkcmVzczogc3RyaW5nW11cclxuKTogc3RyaW5nIHtcclxuICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQgbWItMVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAke3JlZ2lzdGVyfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2Z1bGxOYW1lfTwvaDU+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPiR7YWN0aXZlID8gJ0F0aXZvJyA6ICdJbmF0aXZvJ308L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAke1xyXG4gICAgICAgIGFkZHJlc3MubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7YWRkcmVzcy5qb2luKCc8YnIvPicpfTwvaDY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItc3VjY2Vzc1wiPlxyXG4gICAgICAgIEFjZXNzbzogJHthY2Nlc3N9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==