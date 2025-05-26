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
/* harmony export */   User: () => (/* binding */ User),
/* harmony export */   accessOptions: () => (/* binding */ accessOptions)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrador";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcion\u00E1rio";
    accessOptions["undefined"] = "N\u00E3o Definido";
})(accessOptions || (accessOptions = {}));
var Person = /** @class */ (function () {
    // Construtor
    function Person(fullName) {
        this.fullName = fullName;
    }
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(fullName, register) {
        var _this = _super.call(this, fullName) || this;
        _this.fullName = fullName;
        _this.register = register;
        return _this;
    }
    return User;
}(Person));



/***/ }),

/***/ "./src/output.ts":
/*!***********************!*\
  !*** ./src/output.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

var UserController = /** @class */ (function () {
    //construtor
    function UserController() {
        var _this = this;
        //propriedades
        this.content = this.getElement('#content');
        this.accessRadio = this.getElement('#accessRadio');
        this.accessOptionsValues = Object.values(_model__WEBPACK_IMPORTED_MODULE_0__.accessOptions);
        this.button = this.getFormElement('#insert');
        this.button.addEventListener('click', function () { return _this.addEmployee(); });
        this.userLayout();
    }
    UserController.prototype.getElement = function (selector) {
        return document.querySelector(selector);
    };
    UserController.prototype.getFormElement = function (selector) {
        return document.querySelector(selector);
    };
    //funcionalidades
    UserController.prototype.userLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUser()];
                    case 1:
                        users = _a.sent();
                        users.map(function (user) {
                            _this.content.innerHTML += _this.createLine(user);
                        });
                        this.accessOptionsValues.forEach(function (value, i) {
                            _this.accessRadio.innerHTML += "\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n        <label class=\"form-check-label capitalLetter\" for=\"no\">\n          ").concat(value, "\n        </label>\n      </div>\n      ");
                        });
                        (this.getFormElement('#accessRadio0')).checked = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    UserController.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
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
        });
    };
    ;
    UserController.prototype.addEmployee = function () {
        var formFields = [
            this.getFormElement('#fullName'),
            this.getFormElement('#register'),
            this.getFormElement('input[name="access"]:checked'),
            this.getFormElement('#active'),
            this.getFormElement('#addressHome'),
            this.getFormElement('#addressWork'),
        ];
        var fullName = formFields[0], register = formFields[1], admin = formFields[2], active = formFields[3], addressHome = formFields[4], addressWork = formFields[5];
        var user = {
            fullName: fullName.value,
            register: register.value != '' ? register.value : undefined,
            active: active.checked,
            access: admin.value,
        };
        this.content.innerHTML += this.createLine(user, addressHome.value, addressWork.value);
    };
    UserController.prototype.createLine = function (_a) {
        var fullName = _a.fullName, _b = _a.register, register = _b === void 0 ? Math.random().toString(36).substring(7).toUpperCase() : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.access, access = _d === void 0 ? _model__WEBPACK_IMPORTED_MODULE_0__.accessOptions.undefined : _d;
        var address = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            address[_i - 1] = arguments[_i];
        }
        return "\n      <div class=\"card mb-1\">\n        <div class=\"card-header\">\n          ".concat(register, "\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(fullName, "</h5>\n          <a href=\"#\" class=\"btn btn-primary\">").concat(active ? 'Ativo' : 'Inativo', "</a>\n        </div>\n        ").concat(address.length > 0
            ? "<div class=\"card-body\">\n            <h6 class=\"card-title\">".concat(address.join('<br/>'), "</h6>\n          </div>")
            : '', "\n        <div class=\"card-footer bg-transparent border-success\">\n          Acesso: ").concat(access, "\n        </div>\n      </div>");
    };
    return UserController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserController);


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
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output */ "./src/output.ts");

_output__WEBPACK_IMPORTED_MODULE_0__["default"];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFTO1FBRWxDLGlCQUFvQjthQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7WUFBcEIsZ0NBQW9COztRQUVwQixPQUFPLDRGQUdDLFFBQVEscUdBR2UsUUFBUSxzRUFDSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUywyQ0FHbEUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ2hCLENBQUMsQ0FBQywwRUFDdUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQ3pDO1lBQ0wsQ0FBQyxDQUFDLEVBQUUsb0dBR0ksTUFBTSxtQ0FFYixDQUFDO0lBQ1osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQztBQUVELGlFQUFlLElBQUksY0FBYyxFQUFDOzs7Ozs7O1VDeEdsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNDO0FBRXRDLCtDQUFjLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dHB1dC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gYWNjZXNzT3B0aW9ucyB7XHJcbiAgYWRtaW5pc3RyYXRvciA9ICdhZG1pbmlzdHJhZG9yJyxcclxuICBtYW5hZ2VyID0gJ2dlcmVudGUnLFxyXG4gIGVtcGxveWVlID0gJ2Z1bmNpb27DoXJpbycsXHJcbiAgdW5kZWZpbmVkID0gJ07Do28gRGVmaW5pZG8nXHJcbn1cclxuXHJcbmNsYXNzIFBlcnNvbiB7XHJcbiAgcHVibGljIGFkZHJlc3M/OiBzdHJpbmdbXVxyXG4gIC8vIENvbnN0cnV0b3JcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBmdWxsTmFtZTogc3RyaW5nLCBcclxuICApIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgUGVyc29uIHtcclxuICBhY2Nlc3M/OiBhY2Nlc3NPcHRpb25zO1xyXG4gIGFjdGl2ZT86IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZ1bGxOYW1lOiBzdHJpbmcsIFxyXG4gICAgcHVibGljIHJlZ2lzdGVyPzogc3RyaW5nIHwgbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihmdWxsTmFtZSlcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBhY2Nlc3NPcHRpb25zLCBVc2VyIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmNsYXNzIFVzZXJDb250cm9sbGVyIHtcclxuICAvL3Byb3ByaWVkYWRlc1xyXG4gIGNvbnRlbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCcjY29udGVudCcpO1xyXG4gIGFjY2Vzc1JhZGlvOiBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgnI2FjY2Vzc1JhZGlvJyk7XHJcbiAgYWNjZXNzT3B0aW9uc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoYWNjZXNzT3B0aW9ucyk7XHJcbiAgYnV0dG9uOiBIVE1MRm9ybUVsZW1lbnQgPSB0aGlzLmdldEZvcm1FbGVtZW50KCcjaW5zZXJ0Jyk7XHJcblxyXG4gIC8vY29uc3RydXRvclxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFkZEVtcGxveWVlKCkpO1xyXG4gICAgdGhpcy51c2VyTGF5b3V0KClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZvcm1FbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRm9ybUVsZW1lbnQge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIGFzIEhUTUxGb3JtRWxlbWVudFxyXG4gIH1cclxuXHJcbiAgLy9mdW5jaW9uYWxpZGFkZXNcclxuICBhc3luYyB1c2VyTGF5b3V0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IGF3YWl0IHRoaXMuZ2V0VXNlcigpO1xyXG5cclxuICAgIHVzZXJzLm1hcCgodXNlcjogVXNlcikgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+dGhpcy5jcmVhdGVMaW5lKHVzZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hY2Nlc3NPcHRpb25zVmFsdWVzLmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLmFjY2Vzc1JhZGlvLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhY2Nlc3NcIiBpZD1cImFjY2Vzc1JhZGlvJHtpfVwiIHZhbHVlPVwiJHt2YWx1ZX1cIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIGNhcGl0YWxMZXR0ZXJcIiBmb3I9XCJub1wiPlxyXG4gICAgICAgICAgJHt2YWx1ZX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH0pO1xyXG4gICAgKHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJyNhY2Nlc3NSYWRpbzAnKSkuY2hlY2tlZCA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZ2V0VXNlcigpOiBQcm9taXNlPFVzZXJbXT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAxMS91c2VycycpO1xyXG4gICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiB1c2VycztcclxuICB9O1xyXG5cclxuICBhZGRFbXBsb3llZSAoKTogdm9pZCB7XHJcbiAgICBsZXQgZm9ybUZpZWxkcyA9IFtcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI2Z1bGxOYW1lJyksXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJyNyZWdpc3RlcicpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCdpbnB1dFtuYW1lPVwiYWNjZXNzXCJdOmNoZWNrZWQnKSxcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI2FjdGl2ZScpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCcjYWRkcmVzc0hvbWUnKSxcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI2FkZHJlc3NXb3JrJyksXHJcbiAgICBdO1xyXG4gIFxyXG4gICAgY29uc3QgW2Z1bGxOYW1lLCByZWdpc3RlciwgYWRtaW4sIGFjdGl2ZSwgYWRkcmVzc0hvbWUsIGFkZHJlc3NXb3JrXSA9IGZvcm1GaWVsZHM7XHJcbiAgXHJcbiAgICBsZXQgdXNlcjogVXNlciA9IHtcclxuICAgICAgZnVsbE5hbWU6IGZ1bGxOYW1lIS52YWx1ZSxcclxuICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLnZhbHVlICE9ICcnID8gcmVnaXN0ZXIudmFsdWUgOiB1bmRlZmluZWQsXHJcbiAgICAgIGFjdGl2ZTogYWN0aXZlLmNoZWNrZWQsXHJcbiAgICAgIGFjY2VzczogPGFjY2Vzc09wdGlvbnM+YWRtaW4udmFsdWUsXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgdGhpcy5jb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPnRoaXMuY3JlYXRlTGluZSh1c2VyLCBhZGRyZXNzSG9tZS52YWx1ZSwgYWRkcmVzc1dvcmsudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGluZShcclxuICAgIHtcclxuICAgICAgZnVsbE5hbWUsXHJcbiAgICAgIHJlZ2lzdGVyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIGFjdGl2ZSA9IGZhbHNlLFxyXG4gICAgICBhY2Nlc3MgPSBhY2Nlc3NPcHRpb25zLnVuZGVmaW5lZCxcclxuICAgIH06IFVzZXIsXHJcbiAgICAuLi5hZGRyZXNzOiBzdHJpbmdbXVxyXG4gICk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0xXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAke3JlZ2lzdGVyfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2Z1bGxOYW1lfTwvaDU+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+JHthY3RpdmUgPyAnQXRpdm8nIDogJ0luYXRpdm8nfTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAke1xyXG4gICAgICAgICAgYWRkcmVzcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7YWRkcmVzcy5qb2luKCc8YnIvPicpfTwvaDY+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgIDogJydcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1zdWNjZXNzXCI+XHJcbiAgICAgICAgICBBY2Vzc286ICR7YWNjZXNzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJDb250cm9sbGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4vb3V0cHV0JztcclxuXHJcblVzZXJDb250cm9sbGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==