/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Service/service.ts":
/*!********************************!*\
  !*** ./src/Service/service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericService: () => (/* binding */ GenericService),
/* harmony export */   UserService: () => (/* binding */ UserService)
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
var GenericService = /** @class */ (function () {
    function GenericService() {
    }
    GenericService.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.URL)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        list = _a.sent();
                        this.items = list;
                        return [2 /*return*/, list];
                }
            });
        });
    };
    ;
    return GenericService;
}());

var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.URL = 'http://localhost:5011/users';
        return _this;
    }
    UserService.prototype.getItemByName = function (name) {
        return this.items ? this.items.find(function (item) { return (item.fullName = name); }) : undefined;
    };
    ;
    UserService.prototype.getItemById = function (id) {
        return this.items ? this.items.find(function (item) { return (item.register = id); }) : undefined;
    };
    ;
    return UserService;
}(GenericService));



/***/ }),

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
/* harmony import */ var _Service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service/service */ "./src/Service/service.ts");
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
            var service, users;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = new _Service_service__WEBPACK_IMPORTED_MODULE_1__.UserService();
                        return [4 /*yield*/, service.getItems()];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoQixDQUFDLENBQUMsMEVBQ3VCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUN6QztZQUNMLENBQUMsQ0FBQyxFQUFFLG9HQUdJLE1BQU0sbUNBRWIsQ0FBQztJQUNaLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxJQUFJLGNBQWMsRUFBQzs7Ozs7OztVQ3JHbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQztBQUV0QywrQ0FBYyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2Uvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dHB1dC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIGdlbmVyaWNJdGVtIHtcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIHJlZ2lzdGVyPzogc3RyaW5nIHwgbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlPFQ+IHtcclxuICBpdGVtczogVFtdO1xyXG4gIGdldEl0ZW1zOiAoKSA9PiBQcm9taXNlPFRbXT47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljU2VydmljZTxUPiBpbXBsZW1lbnRzIElTZXJ2aWNlPFQ+e1xyXG4gIHB1YmxpYyBpdGVtczogVFtdO1xyXG4gIHByb3RlY3RlZCBVUkw6IHN0cmluZztcclxuXHJcbiAgYXN5bmMgZ2V0SXRlbXMoKTogUHJvbWlzZTxUW10+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuVVJMKTtcclxuICAgIGNvbnN0IGxpc3Q6IFRbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHRoaXMuaXRlbXMgPSBsaXN0O1xyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlPFQgZXh0ZW5kcyBnZW5lcmljSXRlbT4gZXh0ZW5kcyBHZW5lcmljU2VydmljZTxUPiB7XHJcbiAgVVJMOiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDExL3VzZXJzJztcclxuXHJcbiAgZ2V0SXRlbUJ5TmFtZShuYW1lOiBzdHJpbmcpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5maW5kKChpdGVtKSA9PiAoaXRlbS5mdWxsTmFtZSA9IG5hbWUpKSA6IHVuZGVmaW5lZFxyXG4gIH07XHJcblxyXG4gIGdldEl0ZW1CeUlkKGlkOiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5maW5kKChpdGVtKSA9PiAoaXRlbS5yZWdpc3RlciA9IGlkKSkgOiB1bmRlZmluZWRcclxuICB9O1xyXG59IiwiZXhwb3J0IGVudW0gYWNjZXNzT3B0aW9ucyB7XHJcbiAgYWRtaW5pc3RyYXRvciA9ICdhZG1pbmlzdHJhZG9yJyxcclxuICBtYW5hZ2VyID0gJ2dlcmVudGUnLFxyXG4gIGVtcGxveWVlID0gJ2Z1bmNpb27DoXJpbycsXHJcbiAgdW5kZWZpbmVkID0gJ07Do28gRGVmaW5pZG8nXHJcbn1cclxuXHJcbmNsYXNzIFBlcnNvbiB7XHJcbiAgcHVibGljIGFkZHJlc3M/OiBzdHJpbmdbXVxyXG4gIC8vIENvbnN0cnV0b3JcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBmdWxsTmFtZTogc3RyaW5nLCBcclxuICApIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgUGVyc29uIHtcclxuICBhY2Nlc3M/OiBhY2Nlc3NPcHRpb25zO1xyXG4gIGFjdGl2ZT86IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZ1bGxOYW1lOiBzdHJpbmcsIFxyXG4gICAgcHVibGljIHJlZ2lzdGVyPzogc3RyaW5nIHwgbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihmdWxsTmFtZSlcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBhY2Nlc3NPcHRpb25zLCBVc2VyIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgSVNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vU2VydmljZS9zZXJ2aWNlXCI7XHJcblxyXG5cclxuY2xhc3MgVXNlckNvbnRyb2xsZXIge1xyXG4gIC8vcHJvcHJpZWRhZGVzXHJcbiAgY29udGVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoJyNjb250ZW50Jyk7XHJcbiAgYWNjZXNzUmFkaW86IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCcjYWNjZXNzUmFkaW8nKTtcclxuICBhY2Nlc3NPcHRpb25zVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhY2Nlc3NPcHRpb25zKTtcclxuICBidXR0b246IEhUTUxGb3JtRWxlbWVudCA9IHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJyNpbnNlcnQnKTtcclxuXHJcbiAgLy9jb25zdHJ1dG9yXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYWRkRW1wbG95ZWUoKSk7XHJcbiAgICB0aGlzLnVzZXJMYXlvdXQoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEVsZW1lbnRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rm9ybUVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxGb3JtRWxlbWVudCB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEZvcm1FbGVtZW50XHJcbiAgfVxyXG5cclxuICAvL2Z1bmNpb25hbGlkYWRlc1xyXG4gIGFzeW5jIHVzZXJMYXlvdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBzZXJ2aWNlOiBJU2VydmljZTxVc2VyPiA9IG5ldyBVc2VyU2VydmljZTxVc2VyPigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBzZXJ2aWNlLmdldEl0ZW1zKCk7XHJcblxyXG4gICAgdXNlcnMubWFwKCh1c2VyOiBVc2VyKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgKz0gPHN0cmluZz50aGlzLmNyZWF0ZUxpbmUodXNlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFjY2Vzc09wdGlvbnNWYWx1ZXMuZm9yRWFjaCgodmFsdWU6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuYWNjZXNzUmFkaW8uaW5uZXJIVE1MICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFjY2Vzc1wiIGlkPVwiYWNjZXNzUmFkaW8ke2l9XCIgdmFsdWU9XCIke3ZhbHVlfVwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgY2FwaXRhbExldHRlclwiIGZvcj1cIm5vXCI+XHJcbiAgICAgICAgICAke3ZhbHVlfVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSk7XHJcbiAgICAodGhpcy5nZXRGb3JtRWxlbWVudCgnI2FjY2Vzc1JhZGlvMCcpKS5jaGVja2VkID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBhZGRFbXBsb3llZSAoKTogdm9pZCB7XHJcbiAgICBsZXQgZm9ybUZpZWxkcyA9IFtcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI2Z1bGxOYW1lJyksXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJyNyZWdpc3RlcicpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCdpbnB1dFtuYW1lPVwiYWNjZXNzXCJdOmNoZWNrZWQnKSxcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI2FjdGl2ZScpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCcjYWRkcmVzc0hvbWUnKSxcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI2FkZHJlc3NXb3JrJyksXHJcbiAgICBdO1xyXG4gIFxyXG4gICAgY29uc3QgW2Z1bGxOYW1lLCByZWdpc3RlciwgYWRtaW4sIGFjdGl2ZSwgYWRkcmVzc0hvbWUsIGFkZHJlc3NXb3JrXSA9IGZvcm1GaWVsZHM7XHJcbiAgXHJcbiAgICBsZXQgdXNlcjogVXNlciA9IHtcclxuICAgICAgZnVsbE5hbWU6IGZ1bGxOYW1lIS52YWx1ZSxcclxuICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLnZhbHVlICE9ICcnID8gcmVnaXN0ZXIudmFsdWUgOiB1bmRlZmluZWQsXHJcbiAgICAgIGFjdGl2ZTogYWN0aXZlLmNoZWNrZWQsXHJcbiAgICAgIGFjY2VzczogPGFjY2Vzc09wdGlvbnM+YWRtaW4udmFsdWUsXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgdGhpcy5jb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPnRoaXMuY3JlYXRlTGluZSh1c2VyLCBhZGRyZXNzSG9tZS52YWx1ZSwgYWRkcmVzc1dvcmsudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGluZShcclxuICAgIHtcclxuICAgICAgZnVsbE5hbWUsXHJcbiAgICAgIHJlZ2lzdGVyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIGFjdGl2ZSA9IGZhbHNlLFxyXG4gICAgICBhY2Nlc3MgPSBhY2Nlc3NPcHRpb25zLnVuZGVmaW5lZCxcclxuICAgIH06IFVzZXIsXHJcbiAgICAuLi5hZGRyZXNzOiBzdHJpbmdbXVxyXG4gICk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0xXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAke3JlZ2lzdGVyfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2Z1bGxOYW1lfTwvaDU+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+JHthY3RpdmUgPyAnQXRpdm8nIDogJ0luYXRpdm8nfTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAke1xyXG4gICAgICAgICAgYWRkcmVzcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7YWRkcmVzcy5qb2luKCc8YnIvPicpfTwvaDY+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgIDogJydcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1zdWNjZXNzXCI+XHJcbiAgICAgICAgICBBY2Vzc286ICR7YWNjZXNzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJDb250cm9sbGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4vb3V0cHV0JztcclxuXHJcblVzZXJDb250cm9sbGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==