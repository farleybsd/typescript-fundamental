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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxTQUFTLElBQVksVUFBVSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RixDQUFDO0FBRUQsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYSxFQUFFLENBQVM7SUFDbkQsV0FBVyxDQUFDLFNBQVMsSUFBSSwrSEFFcUQsQ0FBQyx3QkFBWSxLQUFLLHlGQUUxRixLQUFLLGlDQUdWO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBRTNFLFNBQVMsVUFBVSxDQUNqQixFQUtXO1FBSlQsUUFBUSxnQkFDUixnQkFBZ0UsRUFBaEUsUUFBUSxtQkFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FDaEUsY0FBYyxFQUFkLE1BQU0sbUJBQUcsS0FBSyxPQUNkLGNBQWdDLEVBQWhDLE1BQU0sbUJBQUcsaURBQWEsQ0FBQyxTQUFTO0lBRWxDLGlCQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIsZ0NBQW9COztJQUVwQixPQUFPLHNGQUdDLFFBQVEsK0ZBR2UsUUFBUSxvRUFDSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyx1Q0FHbEUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyx3RUFDdUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQ3pDO1FBQ0wsQ0FBQyxDQUFDLEVBQUUsZ0dBR0ksTUFBTSwrQkFFYixDQUFDO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gYWNjZXNzT3B0aW9ucyB7XHJcbiAgYWRtaW5pc3RyYXRvciA9ICdhZG1pbmlzdHJhZG9yJyxcclxuICBtYW5hZ2VyID0gJ2dlcmVudGUnLFxyXG4gIGVtcGxveWVlID0gJ2Z1bmNpb27DoXJpbycsXHJcbiAgdW5kZWZpbmVkID0gJ07Do28gRGVmaW5pZG8nXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIHVzZXJUeXBlID0ge1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmcsXHJcbiAgcmVnaXN0ZXI/OiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgYWNjZXNzPzogYWNjZXNzT3B0aW9ucyxcclxuICBhY3RpdmU/OiBib29sZWFuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFjY2Vzc09wdGlvbnMsIHVzZXJUeXBlIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBidXR0b24gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25baWQ9XCJhZGRcIl0nKTtcclxuY29uc3QgYWNjZXNzUmFkaW8gPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc1JhZGlvJyk7XHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEVtcGxveWVlKTtcclxuXHJcbmNvbnN0IGFjY2Vzc09wdGlvbnNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGFjY2Vzc09wdGlvbnMpXHJcblxyXG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKCk6IFByb21pc2U8dXNlclR5cGVbXT4gPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMTEvdXNlcnMnKTtcclxuICBjb25zdCB1c2VyczogdXNlclR5cGVbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gdXNlcnM7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVVc2VyTGF5b3V0ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gIGNvbnN0IHVzZXJzOiB1c2VyVHlwZVtdID0gYXdhaXQgZ2V0VXNlcigpO1xyXG5cclxuICB1c2Vycy5tYXAoKHVzZXI6IHVzZXJUeXBlKSA9PiB7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPmNyZWF0ZUxpbmUodXNlcik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG51cGRhdGVVc2VyTGF5b3V0KClcclxuXHJcbmZ1bmN0aW9uIGFkZEVtcGxveWVlICgpOiB2b2lkIHtcclxuICBsZXQgZm9ybUZpZWxkcyA9IFtcclxuICAgIDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmdWxsTmFtZScpLFxyXG4gICAgPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyJyksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYWNjZXNzXCJdOmNoZWNrZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcmVzc0hvbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3NXb3JrJykgYXMgSFRNTElucHV0RWxlbWVudCxcclxuICBdO1xyXG5cclxuICBjb25zdCBbZnVsbE5hbWUsIHJlZ2lzdGVyLCBhZG1pbiwgYWN0aXZlLCBhZGRyZXNzSG9tZSwgYWRkcmVzc1dvcmtdID0gZm9ybUZpZWxkcztcclxuXHJcbiAgbGV0IHVzZXI6IHVzZXJUeXBlID0ge1xyXG4gICAgZnVsbE5hbWU6IGZ1bGxOYW1lIS52YWx1ZSxcclxuICAgIHJlZ2lzdGVyOiByZWdpc3Rlci52YWx1ZSAhPSAnJyA/IHJlZ2lzdGVyLnZhbHVlIDogdW5kZWZpbmVkLFxyXG4gICAgYWN0aXZlOiBhY3RpdmUuY2hlY2tlZCxcclxuICAgIGFjY2VzczogPGFjY2Vzc09wdGlvbnM+YWRtaW4udmFsdWUsXHJcbiAgfTtcclxuXHJcbiAgY29udGVudC5pbm5lckhUTUwgKz0gPHN0cmluZz5jcmVhdGVMaW5lKHVzZXIsIGFkZHJlc3NIb21lLnZhbHVlLCBhZGRyZXNzV29yay52YWx1ZSk7XHJcbn1cclxuXHJcbmFjY2Vzc09wdGlvbnNWYWx1ZXMuZm9yRWFjaCgodmFsdWU6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XHJcbiAgYWNjZXNzUmFkaW8uaW5uZXJIVE1MICs9IGBcclxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhY2Nlc3NcIiBpZD1cImFjY2Vzc1JhZGlvJHtpfVwiIHZhbHVlPVwiJHt2YWx1ZX1cIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgY2FwaXRhbExldHRlclwiIGZvcj1cIm5vXCI+XHJcbiAgICAgICR7dmFsdWV9XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG4gIGBcclxufSk7XHJcbig8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzUmFkaW8wJykpLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGluZShcclxuICB7XHJcbiAgICBmdWxsTmFtZSxcclxuICAgIHJlZ2lzdGVyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnRvVXBwZXJDYXNlKCksXHJcbiAgICBhY3RpdmUgPSBmYWxzZSxcclxuICAgIGFjY2VzcyA9IGFjY2Vzc09wdGlvbnMudW5kZWZpbmVkLFxyXG4gIH06IHVzZXJUeXBlLFxyXG4gIC4uLmFkZHJlc3M6IHN0cmluZ1tdXHJcbik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgJHtyZWdpc3Rlcn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtmdWxsTmFtZX08L2g1PlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ke2FjdGl2ZSA/ICdBdGl2bycgOiAnSW5hdGl2byd9PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgJHtcclxuICAgICAgICBhZGRyZXNzLmxlbmd0aCA+IDBcclxuICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgIDxoNiBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2FkZHJlc3Muam9pbignPGJyLz4nKX08L2g2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgIDogJydcclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXN1Y2Nlc3NcIj5cclxuICAgICAgICBBY2Vzc286ICR7YWNjZXNzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=