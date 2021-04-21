(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rn0":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../alert/alert.service */ "lN3x");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");







class LoginComponent {
    constructor(fb, alert, authService, router) {
        this.fb = fb;
        this.alert = alert;
        this.authService = authService;
        this.router = router;
        this.model = {};
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['/menu']);
        }
    }
    login() {
        this.authService.login(this.model)
            .subscribe(() => {
            this.router.navigate(['/menu']);
            this.alert.success('Logado com Sucesso');
        }, error => {
            this.alert.error('Falha ao tentar Logar');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 3, consts: [["data-gr-c-s-loaded", "true", 1, "text-center"], [1, "form-signin", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "h3", "mb-3", "font-weight-normal"], ["for", "username", 1, "sr-only"], ["type", "email", "id", "username", "placeholder", "Usu\u00E1rio", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "sr-only"], ["type", "password", "id", "password", "placeholder", "Senha", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"], [1, "mt-5", "mb-3", "text-muted"], [1, "btn", "btn-lg", "btn-link", "btn-block", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Por favor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.model.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "N\u00E3o tem login? Cadastre-se abaixo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.router.navigate(["/user/registration"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quero me cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵe"]], styles: [".form-signin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Z+Z\meurepo\gestao-precos\concorrencia-app\src\main.ts */"zUnb");


/***/ }),

/***/ "1SBD":
/*!**************************************!*\
  !*** ./src/app/alert/alert.model.ts ***!
  \**************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "3iUB":
/*!*************************************************!*\
  !*** ./src/app/_services/precoVenda.service.ts ***!
  \*************************************************/
/*! exports provided: PrecoVendaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecoVendaService", function() { return PrecoVendaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class PrecoVendaService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/precoVenda';
    }
    getPrecoVenda() {
        return this.http.get(this.baseURL);
    }
    postPrecoVenda(precoVenda) {
        return this.http.post(this.baseURL, precoVenda);
    }
}
PrecoVendaService.ɵfac = function PrecoVendaService_Factory(t) { return new (t || PrecoVendaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PrecoVendaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrecoVendaService, factory: PrecoVendaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrecoVendaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 3, vars: 0, consts: [[1, "container"], [1, "col-md-8", "offset-md-2"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4E9S":
/*!***********************************************!*\
  !*** ./src/app/_services/bandeira.service.ts ***!
  \***********************************************/
/*! exports provided: BandeiraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandeiraService", function() { return BandeiraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class BandeiraService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/bandeira';
    }
    getBandeira() {
        return this.http.get(this.baseURL);
    }
    postBandeira(bandeira) {
        return this.http.post(this.baseURL, bandeira);
    }
}
BandeiraService.ɵfac = function BandeiraService_Factory(t) { return new (t || BandeiraService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BandeiraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BandeiraService, factory: BandeiraService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandeiraService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4WgE":
/*!*************************************************!*\
  !*** ./src/app/_services/financeiro.service.ts ***!
  \*************************************************/
/*! exports provided: FinanceiroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroService", function() { return FinanceiroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class FinanceiroService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/financeiro';
    }
    getFinanceiro() {
        return this.http.get(this.baseURL);
    }
    postFinanceiro(financeiro) {
        return this.http.post(this.baseURL, financeiro);
    }
}
FinanceiroService.ɵfac = function FinanceiroService_Factory(t) { return new (t || FinanceiroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FinanceiroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FinanceiroService, factory: FinanceiroService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinanceiroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4hj4":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.model */ "1SBD");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "lN3x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");







function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeAlert(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            this.alerts.find(x => x === alert).fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissable'];
        const alertTypeClass = {
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success]: 'alert alert-success',
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error]: 'alert alert-danger',
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info]: 'alert alert-info',
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], inputs: { id: "id", fade: "fade" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [3, "innerHTML"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'alert', templateUrl: 'alert.component.html' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class AuthService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/user/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
    }
    // tslint:disable-next-line:typedef
    login(model) {
        console.log(`${this.baseURL}login`);
        return this.http
            .post(`${this.baseURL}login`, model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                this.decodedToken = this.jwtHelper.decodeToken(user.token);
                sessionStorage.setItem('username', this.decodedToken.unique_name);
            }
        }));
    }
    // tslint:disable-next-line:typedef
    register(model) {
        console.log(`${this.baseURL}register`);
        return this.http.post(`${this.baseURL}register`, model);
    }
    // tslint:disable-next-line:typedef
    loggedIn() {
        const token = localStorage.getItem('token');
        return this.jwtHelper.isTokenExpired(token);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cajl":
/*!********************************************!*\
  !*** ./src/app/regiao/regiao.component.ts ***!
  \********************************************/
/*! exports provided: RegiaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegiaoComponent", function() { return RegiaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _services_regiao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/regiao.service */ "qi3L");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert */ "lwC2");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");









function RegiaoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome da Regi\u00E3o \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegiaoComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome do Estado \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegiaoComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome da Cidade \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegiaoComponent_tbody_30_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const regiao_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](regiao_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](regiao_r6.nomeRegiao);
} }
function RegiaoComponent_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegiaoComponent_tbody_30_tr_1_Template, 9, 2, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.regioes);
} }
function RegiaoComponent_tfoot_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Nenhuma bandeira encontrado! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegiaoComponent {
    constructor(fb, http, regiaoService, 
    // tslint:disable-next-line:align
    alert) {
        this.fb = fb;
        this.http = http;
        this.regiaoService = regiaoService;
        this.alert = alert;
        this.modoSalvar = 'post';
    }
    ngOnInit() {
        this.validation();
        this.getRegioes();
    }
    validation() {
        this.registerForm = this.fb.group({
            nomeRegiao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    novaRegiao(template) {
        this.modoSalvar = 'post';
        this.regiao = Object.assign({}, this.registerForm.value);
        this.regiaoService.postRegiao(this.regiao).subscribe(() => {
            this.getRegioes();
            this.alert.success('Inserido com Sucesso!');
        }, error => {
            this.alert.error(`Erro ao Inserir: ${error}`);
        });
    }
    getRegioes() {
        this.regiaoService.getRegioes().subscribe(
        // tslint:disable-next-line: variable-name
        (_regiao) => {
            this.regioes = _regiao;
        }, error => {
            this.alert.error(`Erro ao tentar carregar os regiões: ${error}`);
        });
    }
}
RegiaoComponent.ɵfac = function RegiaoComponent_Factory(t) { return new (t || RegiaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_regiao_service__WEBPACK_IMPORTED_MODULE_3__["RegiaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
RegiaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegiaoComponent, selectors: [["app-regiao"]], decls: 32, vars: 16, consts: [[1, "container"], [3, "formGroup"], [1, "form-row", 2, "width", "auto"], [1, "form-group", 2, "width", "60%", "text-align", "left"], ["type", "text", "formControlName", "nomeRegiao", "placeholder", "Nome da Regi\u00E3o", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "estado", "placeholder", "Nome do Estado", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "cidade", "placeholder", "Nome da Cidade", 1, "form-control", 3, "ngClass"], [1, "form-group", 2, "width", "200px"], ["id", "btnSalvar", 1, "form-control", "btnSalvar", 3, "disabled", "click"], [1, "table", 2, "width", "auto"], [1, "thead-light"], ["id", "id", 2, "width", "5%"], ["id", "bandeira", 2, "width", "75%"], ["id", "op\u00E7\u00F5es", 2, "width", "10%"], [4, "ngIf"], [1, "invalid-feedback"], [4, "ngFor", "ngForOf"], [1, "btn-group"], ["tooltip", "Excluir", 1, "btn", "btn-sm", "btn-danger"], [1, "fa", "fa-eraser"], ["colspan", "7", 1, "text-center"]], template: function RegiaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Regiao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegiaoComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegiaoComponent_div_12_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegiaoComponent_div_17_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegiaoComponent_Template_button_click_19_listener() { return ctx.novaRegiao(ctx.regiao); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bandeira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Excluir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegiaoComponent_tbody_30_Template, 2, 1, "tbody", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegiaoComponent_tfoot_31_Template, 5, 0, "tfoot", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.registerForm.get("nomeRegiao").errors && ctx.registerForm.get("nomeRegiao").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("nomeRegiao").hasError("required") && ctx.registerForm.get("nomeRegiao").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.registerForm.get("estado").errors && ctx.registerForm.get("estado").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("estado").hasError("required") && ctx.registerForm.get("estado").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.registerForm.get("cidade").errors && ctx.registerForm.get("cidade").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("cidade").hasError("required") && ctx.registerForm.get("cidade").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regioes && ctx.regioes.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.regioes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵe"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lhby9yZWdpYW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegiaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-regiao',
                templateUrl: './regiao.component.html',
                styleUrls: ['./regiao.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_regiao_service__WEBPACK_IMPORTED_MODULE_3__["RegiaoService"] }, { type: _alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "D/Jk":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "pWCv");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        if (localStorage.getItem('token') !== null) {
            const cloneReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
            });
            return next.handle(cloneReq).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__["tap"])(succ => { }, err => {
                if (err.status === 401) {
                    this.router.navigateByUrl('user/login');
                }
            }));
        }
        else {
            return next.handle(req.clone());
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "EGA/":
/*!****************************************************!*\
  !*** ./src/app/precoVenda/precoVenda.component.ts ***!
  \****************************************************/
/*! exports provided: PrecoVendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecoVendaComponent", function() { return PrecoVendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _models_PrecoVenda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/PrecoVenda */ "U0rg");
/* harmony import */ var _services_posto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/posto.service */ "N3MU");
/* harmony import */ var _services_precoVenda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/precoVenda.service */ "3iUB");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert/alert.service */ "lN3x");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-currency */ "TT0I");











function PrecoVendaComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const posto_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](posto_r4.nomePosto);
} }
function PrecoVendaComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selecione uma op\u00E7\u00E3o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrecoVendaComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pagamento_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pagamento_r6.descricao);
} }
function PrecoVendaComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selecione uma op\u00E7\u00E3o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return { thousands: ".", decimal: "," }; };
class PrecoVendaComponent {
    constructor(fb, postoService, precoService, alert) {
        this.fb = fb;
        this.postoService = postoService;
        this.precoService = precoService;
        this.alert = alert;
        this.lstCombustivel = [
            { id: 1, descricao: 'Gasolina Comum' },
            { id: 2, descricao: 'Gasolina Aditivada' },
            { id: 3, descricao: 'Etanol Comum' },
            { id: 3, descricao: 'Etanol Aditivado' },
            { id: 3, descricao: 'Diesel S10 Comum' },
            { id: 3, descricao: 'Etanol S500 Comum' }
        ];
        this.lstPagamento = [
            { id: 1, descricao: 'A vista' },
            { id: 2, descricao: 'A prazo' },
            { id: 3, descricao: 'App' }
        ];
    }
    ngOnInit() {
        this.validation();
        this.getPostos();
    }
    onChangeposto(i) {
        this.indexPosto = i;
    }
    validation() {
        this.registerForm = this.fb.group({
            postoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pagamento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    getPostos() {
        this.postoService.getPostos().subscribe(
        // tslint:disable-next-line: variable-name
        (_posto) => {
            this.postos = _posto;
            if (this.postos.length <= 0) {
                this.alert.warn('Por favor, realizar o cadastro de postos!!!');
            }
        }, error => {
            this.alert.error(`Erro ao tentar carregar os Postos: ${error}`);
        });
    }
    salvarPreco(tipo) {
        const precoVenda = new _models_PrecoVenda__WEBPACK_IMPORTED_MODULE_2__["PrecoVenda"]();
        const pr = Object.assign({}, this.registerForm.value);
        precoVenda.postoId = this.postos[this.indexPosto].id;
        if (tipo === 'GC') {
            precoVenda.combustivel = 'Gasolina Comum';
            precoVenda.preco = this.precogc;
        }
        else if (tipo === 'GA') {
            precoVenda.combustivel = 'Gasolina Aditivada';
        }
        else if (tipo === 'EC') {
            precoVenda.combustivel = 'Etanol Comum';
        }
        else if (tipo === 'EA') {
            precoVenda.combustivel = 'Etanol Aditivado';
        }
        else if (tipo === 'D1') {
            precoVenda.combustivel = 'Diesel 100';
        }
        else {
            precoVenda.combustivel = 'Diesel 500';
        }
        if (precoVenda.preco === undefined) {
            precoVenda.preco = 0;
        }
        precoVenda.pagamento = pr.pagamento;
        precoVenda.data = new Date();
        this.novoPreco(precoVenda);
    }
    novoPreco(precoVenda) {
        this.precoService.postPrecoVenda(precoVenda).subscribe(() => {
            this.alert.success('Inserido com sucesso!!!');
        }, error => {
            this.alert.error(`Erro ao inserir: ${error}`);
        });
    }
}
PrecoVendaComponent.ɵfac = function PrecoVendaComponent_Factory(t) { return new (t || PrecoVendaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posto_service__WEBPACK_IMPORTED_MODULE_3__["PostoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_precoVenda_service__WEBPACK_IMPORTED_MODULE_4__["PrecoVendaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
PrecoVendaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrecoVendaComponent, selectors: [["app-precovenda"]], decls: 96, vars: 35, consts: [[3, "formGroup"], [1, "form-group", 2, "width", "60%", "text-align", "lef"], [2, "text-align", "left"], ["formControlName", "postoId", 1, "form-control", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "pagamento", 1, "form-control", 3, "ngClass"], [4, "ngFor", "ngForOf"], [2, "width", "100%"], [1, "table", 2, "width", "100%"], [1, "thead-light"], [2, "justify-content", "center"], ["id", "id", 2, "width", "5%"], ["id", "combustivel", 2, "width", "40%"], ["id", "Pre\u00E7o", 2, "width", "20%", "text-align", "right"], ["id", "op\u00E7\u00F5es", 2, "width", "10%"], [1, "header-align-right"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precogc", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], [1, "btn-group"], ["tooltip", "Salvar", 1, "btn", "btn-sm", "btn-success", 3, "disabled", "click"], [1, "fa", "fa-edit"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precoga", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precoec", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precoea", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precod1", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precod5", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], [3, "value"], [1, "invalid-feedback"]], template: function PrecoVendaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Posto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PrecoVendaComponent_Template_select_change_4_listener($event) { return ctx.onChangeposto($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Selecione o posto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PrecoVendaComponent_option_7_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PrecoVendaComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Forma de Pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Selecione Pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PrecoVendaComponent_option_15_Template, 2, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PrecoVendaComponent_div_16_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Combust\u00EDvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Pre\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gasolina Comum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoVendaComponent_Template_input_ngModelChange_36_listener($event) { return ctx.precogc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoVendaComponent_Template_button_click_39_listener() { return ctx.salvarPreco("GC"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Gasolina Aditivada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoVendaComponent_Template_input_ngModelChange_47_listener($event) { return ctx.precoga = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoVendaComponent_Template_button_click_50_listener() { return ctx.salvarPreco("GA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Etanol Comum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoVendaComponent_Template_input_ngModelChange_58_listener($event) { return ctx.precoec = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoVendaComponent_Template_button_click_61_listener() { return ctx.salvarPreco("EC"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Etanol Aditivada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoVendaComponent_Template_input_ngModelChange_69_listener($event) { return ctx.precoea = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoVendaComponent_Template_button_click_72_listener() { return ctx.salvarPreco("EA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Diesel S10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoVendaComponent_Template_input_ngModelChange_80_listener($event) { return ctx.precod1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoVendaComponent_Template_button_click_83_listener() { return ctx.salvarPreco("D1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Diesel S500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoVendaComponent_Template_input_ngModelChange_91_listener($event) { return ctx.precod5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoVendaComponent_Template_button_click_94_listener() { return ctx.salvarPreco("D5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.registerForm.get("postoId").errors && ctx.registerForm.get("postoId").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("postoId").hasError("required") && ctx.registerForm.get("postoId").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.registerForm.get("pagamento").errors && ctx.registerForm.get("pagamento").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstPagamento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("pagamento").hasError("required") && ctx.registerForm.get("pagamento").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1))("ngModel", ctx.precogc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c1))("ngModel", ctx.precoga);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c1))("ngModel", ctx.precoec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c1))("ngModel", ctx.precoea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c1))("ngModel", ctx.precod1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c1))("ngModel", ctx.precod5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["ɵe"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_currency__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".txtPreco[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  font-size: small;\r\n}\r\n.header-align-right[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlY29WZW5kYS9wcmVjb1ZlbmRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJlY29WZW5kYS9wcmVjb1ZlbmRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0UHJlY297XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLmhlYWRlci1hbGlnbi1yaWdodHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrecoVendaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-precovenda',
                templateUrl: './precoVenda.component.html',
                styleUrls: ['./precoVenda.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_posto_service__WEBPACK_IMPORTED_MODULE_3__["PostoService"] }, { type: _services_precoVenda_service__WEBPACK_IMPORTED_MODULE_4__["PrecoVendaService"] }, { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "G0bL":
/*!************************************************!*\
  !*** ./src/app/bandeira/bandeira.component.ts ***!
  \************************************************/
/*! exports provided: BandeiraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandeiraComponent", function() { return BandeiraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_bandeira_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/bandeira.service */ "4E9S");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/alert.service */ "lN3x");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");








function BandeiraComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bandeira \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BandeiraComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bandeira deve ter no m\u00EDnimo 4 Caracters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BandeiraComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bandeira deve ter no m\u00E1ximo 50 Caracters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BandeiraComponent_tbody_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bandeira_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bandeira_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bandeira_r6.nomeBandeira);
} }
function BandeiraComponent_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BandeiraComponent_tbody_22_tr_1_Template, 9, 2, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.bandeiras);
} }
function BandeiraComponent_tfoot_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Nenhuma bandeira encontrado! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class BandeiraComponent {
    constructor(bandeiraService, alert, fb) {
        this.bandeiraService = bandeiraService;
        this.alert = alert;
        this.fb = fb;
        this.modoSalvar = 'post';
    }
    ngOnInit() {
        this.validation();
        this.getBandeira();
    }
    novoBandeira(template) {
        this.modoSalvar = 'post';
        this.bandeira = Object.assign({}, this.registerForm.value);
        this.bandeiraService.postBandeira(this.bandeira).subscribe(() => {
            this.alert.success('Inserido com Sucesso!');
            this.getBandeira();
        }, error => {
            this.alert.error(`Erro ao Inserir: ${error}`);
        });
    }
    validation() {
        this.registerForm = this.fb.group({
            nomeBandeira: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]]
        });
    }
    getBandeira() {
        this.bandeiraService.getBandeira().subscribe(
        // tslint:disable-next-line: variable-name
        (_bandeira) => {
            this.bandeiras = _bandeira;
        }, error => {
            this.alert.error(`Erro ao tentar carregar os bandeiras: ${error}`);
        });
    }
}
BandeiraComponent.ɵfac = function BandeiraComponent_Factory(t) { return new (t || BandeiraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bandeira_service__WEBPACK_IMPORTED_MODULE_2__["BandeiraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
BandeiraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandeiraComponent, selectors: [["app-bandeira"]], decls: 24, vars: 10, consts: [[1, "container"], [3, "formGroup"], [1, "form-row", 2, "width", "auto"], [1, "form-group", 2, "width", "70%", "text-align", "left"], ["type", "text", "formControlName", "nomeBandeira", "placeholder", "Nome da Bandeira", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", 2, "width", "auto"], ["id", "btnSalvar", 1, "form-control", "btnSalvar", 2, "width", "150px", 3, "disabled", "click"], [1, "table", 2, "width", "auto"], [1, "thead-light"], ["id", "id", 2, "width", "5%"], ["id", "bandeira", 2, "width", "75%"], ["id", "op\u00E7\u00F5es", 2, "width", "10%"], [4, "ngIf"], [1, "invalid-feedback"], [4, "ngFor", "ngForOf"], [1, "btn-group"], ["tooltip", "Excluir", 1, "btn", "btn-sm", "btn-danger"], [1, "fa", "fa-eraser"], ["colspan", "7", 1, "text-center"]], template: function BandeiraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bandeira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BandeiraComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BandeiraComponent_div_8_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BandeiraComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandeiraComponent_Template_button_click_11_listener() { return ctx.novoBandeira(ctx.bandeira); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bandeira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Excluir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BandeiraComponent_tbody_22_Template, 2, 1, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BandeiraComponent_tfoot_23_Template, 5, 0, "tfoot", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.registerForm.get("nomeBandeira").errors && ctx.registerForm.get("nomeBandeira").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("nomeBandeira").hasError("required") && ctx.registerForm.get("nomeBandeira").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("nomeBandeira").hasError("minlength") && ctx.registerForm.get("nomeBandeira").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("nomeBandeira").hasError("maxlength") && ctx.registerForm.get("nomeBandeira").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bandeiras && ctx.bandeiras.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bandeiras);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_4__["ɵe"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhbmRlaXJhL2JhbmRlaXJhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandeiraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bandeira',
                templateUrl: './bandeira.component.html',
                styleUrls: ['./bandeira.component.css']
            }]
    }], function () { return [{ type: _services_bandeira_service__WEBPACK_IMPORTED_MODULE_2__["BandeiraService"] }, { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "Gshu":
/*!******************************************!*\
  !*** ./src/app/posto/posto.component.ts ***!
  \******************************************/
/*! exports provided: PostoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostoComponent", function() { return PostoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_bandeira_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/bandeira.service */ "4E9S");
/* harmony import */ var _services_regiao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/regiao.service */ "qi3L");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert/alert.service */ "lN3x");
/* harmony import */ var _services_posto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/posto.service */ "N3MU");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");










function PostoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome do Posto \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostoComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipo_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tipo_r7.descricao);
} }
function PostoComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selecione uma op\u00E7\u00E3o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostoComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bandeira_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bandeira_r9.nomeBandeira);
} }
function PostoComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selecione uma op\u00E7\u00E3o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostoComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const regiao_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](regiao_r11.nomeRegiao);
} }
function PostoComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selecione uma op\u00E7\u00E3o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class PostoComponent {
    constructor(bandeiraService, regiaoService, 
    // tslint:disable-next-line:align
    alert, fb, postoService) {
        this.bandeiraService = bandeiraService;
        this.regiaoService = regiaoService;
        this.alert = alert;
        this.fb = fb;
        this.postoService = postoService;
        this.modoSalvar = 'post';
        this.selectedItem = 0;
        this.lstTipo = [
            { id: 0, descricao: 'Rede Z+Z' },
            { id: 1, descricao: 'Concorrente' }
        ];
    }
    ngOnInit() {
        this.validation();
        this.getRegioes();
        this.getBandeiras();
    }
    getRegioes() {
        this.regiaoService.getRegioes().subscribe(
        // tslint:disable-next-line: variable-name
        (_regioes) => {
            this.regioes = _regioes;
            if (this.regioes.length <= 0) {
                this.alert.warn('Por favor, realizar o cadastro de regiões!!!');
            }
        }, error => {
            this.alert.error(`Erro ao tentar carregar os regiões: ${error}`);
        });
    }
    getBandeiras() {
        this.bandeiraService.getBandeira().subscribe(
        // tslint:disable-next-line: variable-name
        (_bandeira) => {
            this.bandeiras = _bandeira;
            if (this.bandeiras.length <= 0) {
                this.alert.warn('Por favor, realizar o cadastro de bandeiras!!!');
            }
        }, error => {
            this.alert.error(`Erro ao tentar carregar os clientes: ${error}`);
        });
    }
    onChangeRegiao(i) {
        this.indexRegiao = i;
    }
    onChangeBandeira(i) {
        this.indexBandeira = i;
    }
    onChangeTipo(i) {
        this.indexTipo = i;
    }
    validation() {
        this.registerForm = this.fb.group({
            nomePosto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bandeiraId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regiaoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    novoPosto(template) {
        this.modoSalvar = 'post';
        this.posto = Object.assign({}, this.registerForm.value);
        this.posto.bandeiraId = this.bandeiras[this.indexBandeira].id;
        this.posto.regiaoId = this.regioes[this.indexRegiao].id;
        this.posto.tipo = this.lstTipo[this.indexTipo].descricao;
        console.log(this.lstTipo[this.indexTipo].descricao);
        this.postoService.postPostos(this.posto).subscribe(() => {
            this.alert.success('Inserido com Sucesso!');
        }, error => {
            this.alert.error(`Erro ao Inserir: ${error}`);
        });
    }
}
PostoComponent.ɵfac = function PostoComponent_Factory(t) { return new (t || PostoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bandeira_service__WEBPACK_IMPORTED_MODULE_2__["BandeiraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_regiao_service__WEBPACK_IMPORTED_MODULE_3__["RegiaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posto_service__WEBPACK_IMPORTED_MODULE_5__["PostoService"])); };
PostoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostoComponent, selectors: [["app-posto"]], decls: 36, vars: 21, consts: [[1, "container"], [3, "formGroup"], [1, "form-group", 2, "width", "80%", "text-align", "left"], ["type", "text", "formControlName", "nomePosto", "placeholder", "Nome do Posto", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", 2, "width", "60%", "text-align", "left"], ["formControlName", "tipo", 1, "browser-default", "custom-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-row", 2, "width", "60%"], ["formControlName", "bandeiraId", 1, "browser-default", "custom-select", 3, "ngClass", "change"], ["formControlName", "regiaoId", 1, "browser-default", "custom-select", 3, "ngClass", "change"], [1, "form-group", 2, "width", "200px"], ["id", "btnSalvar", 1, "form-control", "btnSalvar", 3, "disabled", "click"], [1, "invalid-feedback"], [3, "value"]], template: function PostoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Posto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostoComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tipo de Posto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostoComponent_Template_select_change_10_listener($event) { return ctx.onChangeTipo($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Selecione o tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostoComponent_option_13_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostoComponent_div_14_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bandeira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostoComponent_Template_select_change_18_listener($event) { return ctx.onChangeBandeira($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Selecione a Bandeira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PostoComponent_option_21_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostoComponent_div_22_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Regiao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostoComponent_Template_select_change_26_listener($event) { return ctx.onChangeRegiao($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Selecione a Regi\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PostoComponent_option_30_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PostoComponent_div_31_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostoComponent_Template_button_click_34_listener() { return ctx.novoPosto(ctx.posto); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.registerForm.get("nomePosto").hasError("required") && ctx.registerForm.get("nomePosto").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("nomePosto").hasError("required") && ctx.registerForm.get("nomePosto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.registerForm.get("tipo").errors && ctx.registerForm.get("tipo").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstTipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("tipo").hasError("required") && ctx.registerForm.get("tipo").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.registerForm.get("bandeiraId").errors && ctx.registerForm.get("bandeiraId").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bandeiras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("bandeiraId").hasError("required") && ctx.registerForm.get("regiaoId").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.registerForm.get("regiaoId").errors && ctx.registerForm.get("regiaoId").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.regioes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("regiaoId").hasError("required") && ctx.registerForm.get("regiaoId").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["ɵe"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RvL3Bvc3RvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posto',
                templateUrl: './posto.component.html',
                styleUrls: ['./posto.component.scss']
            }]
    }], function () { return [{ type: _services_bandeira_service__WEBPACK_IMPORTED_MODULE_2__["BandeiraService"] }, { type: _services_regiao_service__WEBPACK_IMPORTED_MODULE_3__["RegiaoService"] }, { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_posto_service__WEBPACK_IMPORTED_MODULE_5__["PostoService"] }]; }, null); })();


/***/ }),

/***/ "N3MU":
/*!********************************************!*\
  !*** ./src/app/_services/posto.service.ts ***!
  \********************************************/
/*! exports provided: PostoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostoService", function() { return PostoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class PostoService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/posto';
    }
    getPostos() {
        return this.http.get(this.baseURL);
    }
    postPostos(posto) {
        return this.http.post(this.baseURL, posto);
    }
}
PostoService.ɵfac = function PostoService_Factory(t) { return new (t || PostoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostoService, factory: PostoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AuthGuard {
    /**
     *
     */
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('token') !== null) {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "PPYe":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../alert/alert.service */ "lN3x");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");









function RegistrationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome Completo \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " E-mail \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Usu\u00E1rio \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Grupo \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deve conter no m\u00EDnimo 4 caracters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Senha \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirme a Senha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirma\u00E7\u00E3o n\u00E3o confere ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegistrationComponent {
    constructor(fb, router, authService, alert) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.alert = alert;
    }
    ngOnInit() {
        this.validation();
    }
    validation() {
        this.registerForm = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwords: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, { validator: this.compararSenhas })
        });
    }
    // tslint:disable-next-line:typedef
    compararSenhas(fb) {
        const confirmSenhasCrtl = fb.get('confirmPassword');
        if (confirmSenhasCrtl.errors == null || 'mismatch' in confirmSenhasCrtl.errors) {
            if (fb.get('password').value !== confirmSenhasCrtl.value) {
                confirmSenhasCrtl.setErrors({ mismatch: true });
            }
            else {
                confirmSenhasCrtl.setErrors(null);
            }
        }
    }
    cadastrarUsuario() {
        if (this.registerForm.valid) {
            this.user = Object.assign({ password: this.registerForm.get('passwords.password').value }, this.registerForm.value);
            this.authService.register(this.user).subscribe(() => {
                this.router.navigate(['/user/login']);
                this.alert.success('Cadastro Realizado');
            }, error => {
                const erro = error.error;
                erro.forEach(element => {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            this.alert.error('Cadastro Duplicado!');
                            break;
                        default:
                            this.alert.error(`Erro no Cadatro! CODE: ${element.code}`);
                            break;
                    }
                });
            });
        }
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 42, vars: 28, consts: [[1, "container", 2, "width", "fit-content", "padding-top", "50px"], [1, "row"], [3, "formGroup"], [1, "form-group", "required", 2, "text-align", "left"], ["for", ""], ["type", "text", "formControlName", "fullName", "placeholder", "Insira o Nome Completo", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "email", "placeholder", "Insira o Nome Completo", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "userName", "placeholder", "Insira o nome de Usu\u00E1rio", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "role", "placeholder", "Insira o nome de Usu\u00E1rio", 1, "form-control", 3, "ngClass"], ["formGroupName", "passwords"], ["type", "password", "formControlName", "password", "placeholder", "Digite uma Senha", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirme a Senha", 1, "form-control", 3, "ngClass"], [1, "form-row", 2, "width", "100%", "align-content", "center"], [1, "form-group", "col-md-8", "offset-md-2"], [1, "btn", "btn-lg", "btn-success", "btn-block", 3, "disabled", "click"], [1, "invalid-feedback"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cadastro de Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nome Completo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegistrationComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegistrationComponent_div_14_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegistrationComponent_div_19_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Grupo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegistrationComponent_div_24_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Senha:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegistrationComponent_div_30_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegistrationComponent_div_31_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Confirmar Senha:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegistrationComponent_div_36_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegistrationComponent_div_37_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_40_listener() { return ctx.cadastrarUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Registar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.registerForm.get("fullName").errors && ctx.registerForm.get("fullName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("fullName").hasError("required") && ctx.registerForm.get("fullName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.registerForm.get("email").errors && ctx.registerForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").hasError("required") && ctx.registerForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.registerForm.get("userName").errors && ctx.registerForm.get("userName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("userName").hasError("required") && ctx.registerForm.get("userName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.registerForm.get("role").errors && ctx.registerForm.get("role").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("role").hasError("required") && ctx.registerForm.get("role").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.registerForm.get("passwords.password").errors && ctx.registerForm.get("passwords.password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwords.password").hasError("minlength") && ctx.registerForm.get("passwords.password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwords.password").hasError("required") && ctx.registerForm.get("passwords.password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.registerForm.get("passwords.confirmPassword").errors && ctx.registerForm.get("passwords.confirmPassword").touched || ctx.registerForm.get("passwords.confirmPassword").hasError("mismatch") && ctx.registerForm.get("passwords.confirmPassword").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwords.confirmPassword").hasError("required") && ctx.registerForm.get("passwords.confirmPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwords.confirmPassword").hasError("mismatch") && ctx.registerForm.get("passwords.confirmPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵe"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert/alert.component */ "4hj4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class AppComponent {
    constructor() {
        this.title = 'concorrencia-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".table-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class MenuComponent {
    constructor(router) {
        this.router = router;
        this.active = 'top';
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 54, vars: 0, consts: [[1, "row", 2, "text-align", "center", "align-items", "center"], [1, "col", 2, "width", "33%"], [1, "card"], [1, "card-header", 2, "font-size", "2.2vw"], [1, "card-body"], ["href", "#", "routerLink", "../bandeira", 1, "btn", "btn-sm", "btn-success", 2, "font-size", "2.2vw"], ["href", "#", "routerLink", "../regiao", 1, "btn", "btn-sm", "btn-success", 2, "font-size", "2.2vw"], ["href", "#", "routerLink", "../financeiro", 1, "btn", "btn-sm", "btn-success", 2, "font-size", "2.2vw"], [1, "row", 2, "text-align", "center", "padding-top", "5px"], ["href", "#", "routerLink", "../posto", 1, "btn", "btn-sm", "btn-success", 2, "font-size", "2.2vw"], ["href", "#", "routerLink", "../compra", 1, "btn", "btn-sm", "btn-success", 2, "font-size", "2.2vw"], ["href", "#", "routerLink", "../venda", 1, "btn", "btn-sm", "btn-success", 2, "font-size", "2.2vw"], ["href", "#", "routerLink", "../precoDistribuidora", 1, "btn", "btn-sm", "btn-success", 2, "font-size", "2.2vw"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Bandeira ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Regi\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Resultado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Posto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Compra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Venda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Distribuidora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "U0rg":
/*!***************************************!*\
  !*** ./src/app/_models/PrecoVenda.ts ***!
  \***************************************/
/*! exports provided: PrecoVenda */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecoVenda", function() { return PrecoVenda; });
class PrecoVenda {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _regiao_regiao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./regiao/regiao.component */ "Cajl");
/* harmony import */ var _posto_posto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posto/posto.component */ "Gshu");
/* harmony import */ var _bandeira_bandeira_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bandeira/bandeira.component */ "G0bL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _precoBandeira_precoBandeira_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./precoBandeira/precoBandeira.component */ "yJzM");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var _precoVenda_precoVenda_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./precoVenda/precoVenda.component */ "EGA/");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-currency */ "TT0I");
/* harmony import */ var _precoCompra_precoCompra_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./precoCompra/precoCompra.component */ "mRk4");
/* harmony import */ var _alert_alert_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./alert/alert.module */ "lSoZ");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/registration/registration.component */ "PPYe");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _services_bandeira_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/bandeira.service */ "4E9S");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/auth.interceptor */ "D/Jk");
/* harmony import */ var _services_posto_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_services/posto.service */ "N3MU");
/* harmony import */ var _services_regiao_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_services/regiao.service */ "qi3L");
/* harmony import */ var _services_precoVenda_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_services/precoVenda.service */ "3iUB");
/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "zSTt");
/* harmony import */ var _gestaoPrecos_gestaoPrecos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./gestaoPrecos/gestaoPrecos.component */ "fwNP");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_bandeira_service__WEBPACK_IMPORTED_MODULE_23__["BandeiraService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
            multi: true
        },
        _services_posto_service__WEBPACK_IMPORTED_MODULE_25__["PostoService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
            multi: true
        },
        _services_regiao_service__WEBPACK_IMPORTED_MODULE_26__["RegiaoService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
            multi: true
        },
        _services_precoVenda_service__WEBPACK_IMPORTED_MODULE_27__["PrecoVendaService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({ timeOut: 100,
                positionClass: 'toast-top-right' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_16__["NgxCurrencyModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_14__["RxReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _alert_alert_module__WEBPACK_IMPORTED_MODULE_18__["AlertModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _regiao_regiao_component__WEBPACK_IMPORTED_MODULE_8__["RegiaoComponent"],
        _posto_posto_component__WEBPACK_IMPORTED_MODULE_9__["PostoComponent"],
        _bandeira_bandeira_component__WEBPACK_IMPORTED_MODULE_10__["BandeiraComponent"],
        _precoBandeira_precoBandeira_component__WEBPACK_IMPORTED_MODULE_13__["PrecoBandeiraComponent"],
        _precoVenda_precoVenda_component__WEBPACK_IMPORTED_MODULE_15__["PrecoVendaComponent"],
        _precoCompra_precoCompra_component__WEBPACK_IMPORTED_MODULE_17__["PrecoCompraComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
        _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_21__["RegistrationComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_22__["NavComponent"],
        _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_28__["FinanceiroComponent"],
        _gestaoPrecos_gestaoPrecos_component__WEBPACK_IMPORTED_MODULE_29__["GestaoPrecosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        ngx_currency__WEBPACK_IMPORTED_MODULE_16__["NgxCurrencyModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_14__["RxReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _alert_alert_module__WEBPACK_IMPORTED_MODULE_18__["AlertModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _regiao_regiao_component__WEBPACK_IMPORTED_MODULE_8__["RegiaoComponent"],
                    _posto_posto_component__WEBPACK_IMPORTED_MODULE_9__["PostoComponent"],
                    _bandeira_bandeira_component__WEBPACK_IMPORTED_MODULE_10__["BandeiraComponent"],
                    _precoBandeira_precoBandeira_component__WEBPACK_IMPORTED_MODULE_13__["PrecoBandeiraComponent"],
                    _precoVenda_precoVenda_component__WEBPACK_IMPORTED_MODULE_15__["PrecoVendaComponent"],
                    _precoCompra_precoCompra_component__WEBPACK_IMPORTED_MODULE_17__["PrecoCompraComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                    _user_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                    _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_21__["RegistrationComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_22__["NavComponent"],
                    _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_28__["FinanceiroComponent"],
                    _gestaoPrecos_gestaoPrecos_component__WEBPACK_IMPORTED_MODULE_29__["GestaoPrecosComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({ timeOut: 100,
                        positionClass: 'toast-top-right' }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_16__["NgxCurrencyModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_14__["RxReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _alert_alert_module__WEBPACK_IMPORTED_MODULE_18__["AlertModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
                ],
                providers: [
                    _services_bandeira_service__WEBPACK_IMPORTED_MODULE_23__["BandeiraService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
                        multi: true
                    },
                    _services_posto_service__WEBPACK_IMPORTED_MODULE_25__["PostoService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
                        multi: true
                    },
                    _services_regiao_service__WEBPACK_IMPORTED_MODULE_26__["RegiaoService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
                        multi: true
                    },
                    _services_precoVenda_service__WEBPACK_IMPORTED_MODULE_27__["PrecoVendaService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "caEz":
/*!*********************************************************!*\
  !*** ./src/app/_services/precoDistribuidora.service.ts ***!
  \*********************************************************/
/*! exports provided: PrecoDistribuidoraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecoDistribuidoraService", function() { return PrecoDistribuidoraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class PrecoDistribuidoraService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/precoDistribuidora';
    }
    getPrecoDistribuidora() {
        return this.http.get(this.baseURL);
    }
    postPrecoDistribuidora(precoDistribuidora) {
        console.log('Passou');
        console.log(precoDistribuidora);
        console.log(this.baseURL);
        return this.http.post(this.baseURL, precoDistribuidora);
    }
}
PrecoDistribuidoraService.ɵfac = function PrecoDistribuidoraService_Factory(t) { return new (t || PrecoDistribuidoraService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PrecoDistribuidoraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrecoDistribuidoraService, factory: PrecoDistribuidoraService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrecoDistribuidoraService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fwNP":
/*!********************************************************!*\
  !*** ./src/app/gestaoPrecos/gestaoPrecos.component.ts ***!
  \********************************************************/
/*! exports provided: GestaoPrecosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestaoPrecosComponent", function() { return GestaoPrecosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class GestaoPrecosComponent {
    constructor() { }
    ngOnInit() {
    }
}
GestaoPrecosComponent.ɵfac = function GestaoPrecosComponent_Factory(t) { return new (t || GestaoPrecosComponent)(); };
GestaoPrecosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GestaoPrecosComponent, selectors: [["app-gestaoPrecos"]], decls: 2, vars: 0, template: function GestaoPrecosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " gestaoPrecos works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rhb1ByZWNvcy9nZXN0YW9QcmVjb3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GestaoPrecosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gestaoPrecos',
                templateUrl: './gestaoPrecos.component.html',
                styleUrls: ['./gestaoPrecos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/alert.service */ "lN3x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function NavComponent_nav_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Regi\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bandeira");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Posto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Venda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_nav_0_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_nav_0_ul_5_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sair");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_nav_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_nav_0_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.entrar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Entrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gest\u00E3o de Pre\u00E7os");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavComponent_nav_0_div_4_Template, 17, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_nav_0_ul_5_Template, 4, 0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavComponent_nav_0_button_6_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loggedIn());
} }
class NavComponent {
    constructor(authService, router, alert) {
        this.authService = authService;
        this.router = router;
        this.alert = alert;
    }
    ngOnInit() {
    }
    loggedIn() {
        return !this.authService.loggedIn();
    }
    showMenu() {
        return this.router.url !== '/user/login';
    }
    entrar() {
        this.router.navigate(['/user/login']);
    }
    userName() {
        return sessionStorage.getItem('username');
    }
    logout() {
        localStorage.removeItem('token');
        this.alert.info('Log Out');
        this.router.navigate(['/user/login']);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 1, vars: 1, consts: [["class", "navbar navbar-expand-md navbar-light bg-light", 4, "ngIf"], [1, "navbar", "navbar-expand-md", "navbar-light", "bg-light"], [1, "container"], ["routerLink", "menu", 1, "nav-link"], ["class", "collapse navbar-collapse", "id", "navbarsExampleDefault", 4, "ngIf"], ["class", "navbar-nav navbar-dark", 4, "ngIf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "regiao", 1, "nav-link"], ["routerLink", "bandeira", 1, "nav-link"], ["routerLink", "posto", 1, "nav-link"], ["routerLink", "venda", 1, "nav-link"], ["routerLink", "compra", 1, "nav-link"], [1, "navbar-nav", "navbar-dark"], [1, "nav-item"], ["href", "#", 1, "nav-link", 3, "click"], [1, "btn", "btn-success", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_nav_0_Template, 7, 3, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "lN3x":
/*!****************************************!*\
  !*** ./src/app/alert/alert.service.ts ***!
  \****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.model */ "1SBD");





class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, message })));
    }
    // main alert method
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ id }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "lSoZ":
/*!***************************************!*\
  !*** ./src/app/alert/alert.module.ts ***!
  \***************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component */ "4hj4");




class AlertModule {
}
AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, { declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
                exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lwC2":
/*!********************************!*\
  !*** ./src/app/alert/index.ts ***!
  \********************************/
/*! exports provided: AlertModule, AlertService, Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.module */ "lSoZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "lN3x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.model */ "1SBD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert_model__WEBPACK_IMPORTED_MODULE_2__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"]; });






/***/ }),

/***/ "mRk4":
/*!******************************************************!*\
  !*** ./src/app/precoCompra/precoCompra.component.ts ***!
  \******************************************************/
/*! exports provided: PrecoCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecoCompraComponent", function() { return PrecoCompraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _models_PrecoCompra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/PrecoCompra */ "xEHb");
/* harmony import */ var _services_posto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/posto.service */ "N3MU");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../alert/alert.service */ "lN3x");
/* harmony import */ var _services_precoCompra_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/precoCompra.service */ "s4xG");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-currency */ "TT0I");











function PrecoCompraComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const posto_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](posto_r2.nomePosto);
} }
function PrecoCompraComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selecione uma op\u00E7\u00E3o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return { thousands: ".", decimal: "," }; };
class PrecoCompraComponent {
    constructor(fb, postoService, alert, precoService) {
        this.fb = fb;
        this.postoService = postoService;
        this.alert = alert;
        this.precoService = precoService;
        this.options = {
            autoclose: true,
            keepAfterRouteChange: false
        };
        this.lstCombustivel = [
            { id: 1, descricao: 'Gasolina Comum' },
            { id: 2, descricao: 'Gasolina Aditivada' },
            { id: 3, descricao: 'Etanol Comum' },
            { id: 3, descricao: 'Etanol Aditivado' },
            { id: 3, descricao: 'Diesel S10 Comum' },
            { id: 3, descricao: 'Etanol S500 Comum' }
        ];
    }
    ngOnInit() {
        this.validation();
        this.getPostos();
    }
    onChangeposto(i) {
        this.indexPosto = i;
    }
    validation() {
        this.registerForm = this.fb.group({
            postoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    getPostos() {
        this.postoService.getPostos().subscribe(
        // tslint:disable-next-line: variable-name
        (_posto) => {
            this.postos = _posto;
        }, error => {
            this.alert.error(`Erro ao tentar carregar os Postos: ${error}`);
        });
    }
    salvarPreco(tipo) {
        const precoCompra = new _models_PrecoCompra__WEBPACK_IMPORTED_MODULE_2__["PrecoCompra"]();
        const pr = Object.assign({}, this.registerForm.value);
        precoCompra.postoId = this.postos[this.indexPosto].id;
        if (tipo === 'GC') {
            precoCompra.combustivel = 'Gasolina Comum';
            precoCompra.preco = this.precogc;
        }
        else if (tipo === 'GA') {
            precoCompra.combustivel = 'Gasolina Aditivada';
        }
        else if (tipo === 'EC') {
            precoCompra.combustivel = 'Etanol Comum';
        }
        else if (tipo === 'EA') {
            precoCompra.combustivel = 'Etanol Aditivado';
        }
        else if (tipo === 'D1') {
            precoCompra.combustivel = 'Diesel 100';
        }
        else {
            precoCompra.combustivel = 'Diesel 500';
        }
        if (precoCompra.preco === undefined) {
            precoCompra.preco = 0;
        }
        precoCompra.data = new Date();
        console.log(precoCompra);
        this.novoPreco(precoCompra);
    }
    novoPreco(precoCompra) {
        this.precoService.postPrecoCompra(precoCompra).subscribe(() => {
            this.alert.success('Preço inserido com sucesso!!!', this.options);
        }, error => {
            this.alert.error(`Erro ao inserir: ${error}`, this.options);
        });
    }
}
PrecoCompraComponent.ɵfac = function PrecoCompraComponent_Factory(t) { return new (t || PrecoCompraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posto_service__WEBPACK_IMPORTED_MODULE_3__["PostoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_precoCompra_service__WEBPACK_IMPORTED_MODULE_5__["PrecoCompraService"])); };
PrecoCompraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrecoCompraComponent, selectors: [["app-precocompra"]], decls: 88, vars: 30, consts: [[3, "formGroup"], [1, "form-group", 2, "width", "100%"], ["formControlName", "postoId", 1, "form-control", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [2, "width", "90%"], [1, "table"], ["id", "id", 2, "width", "5%"], ["id", "Combust\u00EDvel", 2, "width", "40%"], ["id", "Pre\u00E7o", 2, "width", "20%", "text-align", "right"], ["id", "op\u00E7\u00F5es", 2, "width", "10%"], [2, "text-align", "left"], [1, "header-align-right"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precogc", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], [1, "btn-group", 2, "width", "80%"], ["tooltip", "Salvar", 1, "btn", "btn-sm", "btn-success", 3, "disabled", "click"], [1, "fa", "fa-edit"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precoga", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precoec", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precoea", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precod1", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], ["type", "text", "currencyMask", "", "ng-model", "money", "ui-money-mask", "3", "name", "precod5", "placeholder", "R$ 0,00", 1, "form-control", "txtPreco", 3, "options", "ngModel", "ngModelChange"], [3, "value"], [1, "invalid-feedback"]], template: function PrecoCompraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Posto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PrecoCompraComponent_Template_select_change_4_listener($event) { return ctx.onChangeposto($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Selecione o posto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PrecoCompraComponent_option_7_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PrecoCompraComponent_div_8_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Combust\u00EDvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pre\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gasolina Comum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoCompraComponent_Template_input_ngModelChange_28_listener($event) { return ctx.precogc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoCompraComponent_Template_button_click_31_listener() { return ctx.salvarPreco("GC"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Gasolina Aditivada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoCompraComponent_Template_input_ngModelChange_39_listener($event) { return ctx.precoga = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoCompraComponent_Template_button_click_42_listener() { return ctx.salvarPreco("GA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Etanol Comum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoCompraComponent_Template_input_ngModelChange_50_listener($event) { return ctx.precoec = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoCompraComponent_Template_button_click_53_listener() { return ctx.salvarPreco("EC"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Etanol Aditivado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoCompraComponent_Template_input_ngModelChange_61_listener($event) { return ctx.precoea = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoCompraComponent_Template_button_click_64_listener() { return ctx.salvarPreco("EA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Diesel S10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoCompraComponent_Template_input_ngModelChange_72_listener($event) { return ctx.precod1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoCompraComponent_Template_button_click_75_listener() { return ctx.salvarPreco("D1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Diesel S500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrecoCompraComponent_Template_input_ngModelChange_83_listener($event) { return ctx.precod5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoCompraComponent_Template_button_click_86_listener() { return ctx.salvarPreco("D5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.registerForm.get("postoId").errors && ctx.registerForm.get("postoId").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("postoId").hasError("required") && ctx.registerForm.get("postoId").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1))("ngModel", ctx.precogc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1))("ngModel", ctx.precoga);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1))("ngModel", ctx.precoec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1))("ngModel", ctx.precoea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1))("ngModel", ctx.precod1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1))("ngModel", ctx.precod5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_6__["ɵe"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_currency__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".txtPreco[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  font-size: small;\r\n}\r\n.header-align-right[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlY29Db21wcmEvcHJlY29Db21wcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcmVjb0NvbXByYS9wcmVjb0NvbXByYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR4dFByZWNve1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5oZWFkZXItYWxpZ24tcmlnaHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrecoCompraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-precocompra',
                templateUrl: './precoCompra.component.html',
                styleUrls: ['./precoCompra.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_posto_service__WEBPACK_IMPORTED_MODULE_3__["PostoService"] }, { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _services_precoCompra_service__WEBPACK_IMPORTED_MODULE_5__["PrecoCompraService"] }]; }, null); })();


/***/ }),

/***/ "qi3L":
/*!*********************************************!*\
  !*** ./src/app/_services/regiao.service.ts ***!
  \*********************************************/
/*! exports provided: RegiaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegiaoService", function() { return RegiaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class RegiaoService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/regiao';
    }
    getRegioes() {
        return this.http.get(this.baseURL);
    }
    postRegiao(regiao) {
        return this.http.post(this.baseURL, regiao);
    }
}
RegiaoService.ɵfac = function RegiaoService_Factory(t) { return new (t || RegiaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RegiaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegiaoService, factory: RegiaoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegiaoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "s4xG":
/*!**************************************************!*\
  !*** ./src/app/_services/precoCompra.service.ts ***!
  \**************************************************/
/*! exports provided: PrecoCompraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecoCompraService", function() { return PrecoCompraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class PrecoCompraService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/precoCompra';
    }
    getPrecoCompra() {
        return this.http.get(this.baseURL);
    }
    postPrecoCompra(precoCompra) {
        console.log(precoCompra);
        return this.http.post(this.baseURL, precoCompra);
    }
}
PrecoCompraService.ɵfac = function PrecoCompraService_Factory(t) { return new (t || PrecoCompraService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PrecoCompraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrecoCompraService, factory: PrecoCompraService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrecoCompraService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/registration/registration.component */ "PPYe");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _bandeira_bandeira_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bandeira/bandeira.component */ "G0bL");
/* harmony import */ var _regiao_regiao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./regiao/regiao.component */ "Cajl");
/* harmony import */ var _posto_posto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posto/posto.component */ "Gshu");
/* harmony import */ var _precoVenda_precoVenda_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./precoVenda/precoVenda.component */ "EGA/");
/* harmony import */ var _precoCompra_precoCompra_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./precoCompra/precoCompra.component */ "mRk4");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "zSTt");















const routes = [
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
        ]
    },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'bandeira', component: _bandeira_bandeira_component__WEBPACK_IMPORTED_MODULE_6__["BandeiraComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'regiao', component: _regiao_regiao_component__WEBPACK_IMPORTED_MODULE_7__["RegiaoComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'posto', component: _posto_posto_component__WEBPACK_IMPORTED_MODULE_8__["PostoComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'venda', component: _precoVenda_precoVenda_component__WEBPACK_IMPORTED_MODULE_9__["PrecoVendaComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'compra', component: _precoCompra_precoCompra_component__WEBPACK_IMPORTED_MODULE_10__["PrecoCompraComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'financeiro', component: _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_12__["FinanceiroComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: '**', redirectTo: 'menu', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xEHb":
/*!****************************************!*\
  !*** ./src/app/_models/PrecoCompra.ts ***!
  \****************************************/
/*! exports provided: PrecoCompra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecoCompra", function() { return PrecoCompra; });
class PrecoCompra {
}


/***/ }),

/***/ "yJzM":
/*!**********************************************************!*\
  !*** ./src/app/precoBandeira/precoBandeira.component.ts ***!
  \**********************************************************/
/*! exports provided: PrecoBandeiraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecoBandeiraComponent", function() { return PrecoBandeiraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _services_bandeira_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/bandeira.service */ "4E9S");
/* harmony import */ var _services_precoDistribuidora_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/precoDistribuidora.service */ "caEz");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");











function PrecoBandeiraComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bandeira_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bandeira_r4.nomeBandeira);
} }
function PrecoBandeiraComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selecione uma op\u00E7\u00E3o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrecoBandeiraComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pre\u00E7o \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrecoBandeiraComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Data \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class PrecoBandeiraComponent {
    constructor(fb, http, bandeiraService, 
    // tslint:disable-next-line:align
    precoDistribuidoraService, toastr) {
        this.fb = fb;
        this.http = http;
        this.bandeiraService = bandeiraService;
        this.precoDistribuidoraService = precoDistribuidoraService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.validation();
        this.getBandeira();
    }
    onChange(i) {
        this.index = i;
        console.log(this.index);
    }
    novoPreco(template) {
        this.precoDistribuidora = Object.assign({}, this.registerForm.value);
        this.precoDistribuidora.bandeiraId = this.bandeiras[this.index].id;
        this.precoDistribuidoraService.postPrecoDistribuidora(this.precoDistribuidora).subscribe(() => {
            this.toastr.success('Inserido com Sucesso!');
        }, error => {
            this.toastr.error(`Erro ao Inserir: ${error}`);
        });
    }
    validation() {
        this.registerForm = this.fb.group({
            bandeiraId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            preco: ['', _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["RxwebValidators"].numeric({ acceptValue: _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["NumericValueType"].PositiveNumber, allowDecimal: true })],
            data: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    getPrecoDistribuidora() {
        this.precoDistribuidoraService.getPrecoDistribuidora().subscribe(
        // tslint:disable-next-line: variable-name
        (_precoDistribuidora) => {
            this.precoDistribuidoras = _precoDistribuidora;
        }, error => {
            this.toastr.error(`Erro ao tentar carregar os clientes: ${error}`);
        });
    }
    getBandeira() {
        this.bandeiraService.getBandeira().subscribe(
        // tslint:disable-next-line: variable-name
        (_bandeira) => {
            this.bandeiras = _bandeira;
        }, error => {
            this.toastr.error(`Erro ao tentar carregar os clientes: ${error}`);
        });
    }
}
PrecoBandeiraComponent.ɵfac = function PrecoBandeiraComponent_Factory(t) { return new (t || PrecoBandeiraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bandeira_service__WEBPACK_IMPORTED_MODULE_4__["BandeiraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_precoDistribuidora_service__WEBPACK_IMPORTED_MODULE_5__["PrecoDistribuidoraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
PrecoBandeiraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrecoBandeiraComponent, selectors: [["app-precoBandeira"]], decls: 26, vars: 17, consts: [[1, "container"], [3, "formGroup"], [1, "form-row", "col-md-6"], [1, "form-row", "w-50", "p-1"], ["formControlName", "bandeiraId", 1, "browser-default", "custom-select", 3, "ngClass", "change"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-md-6"], ["type", "number", "formControlName", "preco", "placeholder", "Pre\u00E7o de Custo", 1, "form-control", 3, "ngClass"], ["type", "date", "formControlName", "data", "placeholder", "Data", 1, "form-control", 3, "value", "ngClass"], [1, "form-group", "w-25", "p-3"], ["id", "btnSalvar", 1, "form-control", 3, "disabled", "click"], [3, "value"], [1, "invalid-feedback"]], template: function PrecoBandeiraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bandeira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PrecoBandeiraComponent_Template_select_change_6_listener($event) { return ctx.onChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Selecione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PrecoBandeiraComponent_option_9_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PrecoBandeiraComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pre\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PrecoBandeiraComponent_div_16_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PrecoBandeiraComponent_div_22_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrecoBandeiraComponent_Template_button_click_24_listener() { return ctx.novoPreco(ctx.preco); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.registerForm.get("bandeiraId").errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bandeiras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("bandeiraId").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.registerForm.get("preco").errors && ctx.registerForm.get("preco").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("preco").hasError("required") && ctx.registerForm.get("preco").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.preco);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.registerForm.get("data").errors && ctx.registerForm.get("data").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("data").hasError("required") && ctx.registerForm.get("data").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["ɵe"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZWNvQmFuZGVpcmEvcHJlY29CYW5kZWlyYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrecoBandeiraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'app-precoBandeira',
                templateUrl: './precoBandeira.component.html',
                styleUrls: ['./precoBandeira.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_bandeira_service__WEBPACK_IMPORTED_MODULE_4__["BandeiraService"] }, { type: _services_precoDistribuidora_service__WEBPACK_IMPORTED_MODULE_5__["PrecoDistribuidoraService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "zSTt":
/*!****************************************************!*\
  !*** ./src/app/financeiro/financeiro.component.ts ***!
  \****************************************************/
/*! exports provided: FinanceiroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroComponent", function() { return FinanceiroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_posto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/posto.service */ "N3MU");
/* harmony import */ var _services_financeiro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/financeiro.service */ "4WgE");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert */ "lwC2");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "XKlN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-currency */ "TT0I");










function FinanceiroComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const posto_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](posto_r5.nomePosto);
} }
function FinanceiroComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selecione uma op\u00E7\u00E3o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinanceiroComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo Lucro Bruto \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinanceiroComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo Despesa Atual \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinanceiroComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campo Meta de Despesas \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return { prefix: "R$", thousands: ".", decimal: "," }; };
class FinanceiroComponent {
    constructor(fb, postoService, financeiroService, alert) {
        this.fb = fb;
        this.postoService = postoService;
        this.financeiroService = financeiroService;
        this.alert = alert;
    }
    ngOnInit() {
        this.validation();
        this.getPostos();
    }
    onChangeposto(i) {
        this.indexPosto = i;
    }
    validation() {
        this.registerForm = this.fb.group({
            postoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lucroBruto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            despesa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            metaDespesa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    getPostos() {
        this.postoService.getPostos().subscribe(
        // tslint:disable-next-line: variable-name
        (_posto) => {
            this.postos = _posto;
            if (this.postos.length <= 0) {
                this.alert.warn('Por favor, realizar o cadastro de postos!!!');
            }
        }, error => {
            this.alert.error(`Erro ao tentar carregar os Postos: ${error}`);
        });
    }
    novoResultado() {
        this.resultado = Object.assign({}, this.registerForm.value);
        this.resultado.data = new Date();
        this.resultado.postoId = this.postos[this.indexPosto].id;
        this.financeiroService.postFinanceiro(this.resultado).subscribe(() => {
            this.alert.success('Informações inseridas com sucesso!!!');
        }, error => {
            this.alert.error(`Erro ao inserir: ${error}`);
        });
    }
}
FinanceiroComponent.ɵfac = function FinanceiroComponent_Factory(t) { return new (t || FinanceiroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posto_service__WEBPACK_IMPORTED_MODULE_2__["PostoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_financeiro_service__WEBPACK_IMPORTED_MODULE_3__["FinanceiroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
FinanceiroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinanceiroComponent, selectors: [["app-financeiro"]], decls: 27, vars: 25, consts: [[3, "formGroup"], [1, "form-group", 2, "width", "60%", "text-align", "lef"], [2, "text-align", "left"], ["formControlName", "postoId", 1, "form-control", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "required", 2, "text-align", "left"], ["for", ""], ["type", "text", "currencyMask", "", "formControlName", "lucroBruto", "ng-model", "money", "ui-money-mask", "3", 1, "form-control", "txtPreco", 3, "ngClass", "options"], ["type", "text", "currencyMask", "", "formControlName", "despesa", "ng-model", "money", "ui-money-mask", "3", 1, "form-control", "txtPreco", 3, "ngClass", "options"], ["type", "text", "currencyMask", "", "formControlName", "metaDespesa", "ng-model", "money", "ui-money-mask", "3", 1, "form-control", "txtPreco", 3, "ngClass", "options"], [1, "btn-group"], ["id", "btnSalvar", "tooltip", "Salvar", 1, "form-control", "btnSalvar", 2, "width", "150px", 3, "disabled", "click"], [3, "value"], [1, "invalid-feedback"]], template: function FinanceiroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Posto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FinanceiroComponent_Template_select_change_4_listener($event) { return ctx.onChangeposto($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Selecione o posto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FinanceiroComponent_option_7_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FinanceiroComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lucro Bruto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FinanceiroComponent_div_13_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Despesas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FinanceiroComponent_div_18_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Meta de Despesas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FinanceiroComponent_div_23_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinanceiroComponent_Template_button_click_25_listener() { return ctx.novoResultado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.registerForm.get("postoId").errors && ctx.registerForm.get("postoId").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("postoId").hasError("required") && ctx.registerForm.get("postoId").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.registerForm.get("lucroBruto").errors && ctx.registerForm.get("lucroBruto").touched))("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("lucroBruto").hasError("required") && ctx.registerForm.get("lucroBruto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.registerForm.get("despesa").errors && ctx.registerForm.get("despesa").touched))("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("despesa").hasError("required") && ctx.registerForm.get("despesa").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.registerForm.get("metaDespesa").errors && ctx.registerForm.get("metaDespesa").touched))("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("metaDespesa").hasError("required") && ctx.registerForm.get("metaDespesa").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_5__["ɵe"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_currency__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskDirective"]], styles: [".txtPreco[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  font-size: medium;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYW5jZWlyby9maW5hbmNlaXJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmluYW5jZWlyby9maW5hbmNlaXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0UHJlY297XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinanceiroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-financeiro',
                templateUrl: './financeiro.component.html',
                styleUrls: ['./financeiro.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_posto_service__WEBPACK_IMPORTED_MODULE_2__["PostoService"] }, { type: _services_financeiro_service__WEBPACK_IMPORTED_MODULE_3__["FinanceiroService"] }, { type: _alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map