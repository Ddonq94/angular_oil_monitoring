(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-transmgt-transmgt-module-ngfactory"],{

/***/ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js ***!
  \************************************************************************/
/*! exports provided: NgSelectComponent, NgSelectConfig, NgSelectModule, SELECTION_MODEL_FACTORY, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function() { return NgSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function() { return NgSelectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectModule", function() { return NgSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function() { return SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DefaultSelectionModelFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DefaultSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgDropdownPanelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgItemLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgOptionTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgOptgroupTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgMultiLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NgFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgNotFoundTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return NgTypeToSearchTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgLoadingTextTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgTagTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return NgLoadingSpinnerTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgDropdownPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return ConsoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * Generated from: lib/value-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var unescapedHTMLExp = /[&<>"']/g;
/** @type {?} */
var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
/** @type {?} */
var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;'
};
/**
 * @param {?} string
 * @return {?}
 */
function escapeHTML(string) {
    return (string && hasUnescapedHTMLExp.test(string)) ?
        string.replace(unescapedHTMLExp, (/**
         * @param {?} chr
         * @return {?}
         */
        function (chr) { return htmlEscapes[chr]; })) :
        string;
}
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isPromise(value) {
    return value instanceof Promise;
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return value instanceof Function;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-templates.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgItemLabelDirective = /** @class */ (function () {
    function NgItemLabelDirective(element) {
        this.element = element;
        this.escape = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgItemLabelDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.element.nativeElement.innerHTML = this.escape ?
            escapeHTML(this.ngItemLabel) :
            this.ngItemLabel;
    };
    NgItemLabelDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ngItemLabel]' },] }
    ];
    /** @nocollapse */
    NgItemLabelDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NgItemLabelDirective.propDecorators = {
        ngItemLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return NgItemLabelDirective;
}());
if (false) {}
var NgOptionTemplateDirective = /** @class */ (function () {
    function NgOptionTemplateDirective(template) {
        this.template = template;
    }
    NgOptionTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-option-tmp]' },] }
    ];
    /** @nocollapse */
    NgOptionTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgOptionTemplateDirective;
}());
if (false) {}
var NgOptgroupTemplateDirective = /** @class */ (function () {
    function NgOptgroupTemplateDirective(template) {
        this.template = template;
    }
    NgOptgroupTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-optgroup-tmp]' },] }
    ];
    /** @nocollapse */
    NgOptgroupTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgOptgroupTemplateDirective;
}());
if (false) {}
var NgLabelTemplateDirective = /** @class */ (function () {
    function NgLabelTemplateDirective(template) {
        this.template = template;
    }
    NgLabelTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-label-tmp]' },] }
    ];
    /** @nocollapse */
    NgLabelTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgLabelTemplateDirective;
}());
if (false) {}
var NgMultiLabelTemplateDirective = /** @class */ (function () {
    function NgMultiLabelTemplateDirective(template) {
        this.template = template;
    }
    NgMultiLabelTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-multi-label-tmp]' },] }
    ];
    /** @nocollapse */
    NgMultiLabelTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgMultiLabelTemplateDirective;
}());
if (false) {}
var NgHeaderTemplateDirective = /** @class */ (function () {
    function NgHeaderTemplateDirective(template) {
        this.template = template;
    }
    NgHeaderTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-header-tmp]' },] }
    ];
    /** @nocollapse */
    NgHeaderTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgHeaderTemplateDirective;
}());
if (false) {}
var NgFooterTemplateDirective = /** @class */ (function () {
    function NgFooterTemplateDirective(template) {
        this.template = template;
    }
    NgFooterTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-footer-tmp]' },] }
    ];
    /** @nocollapse */
    NgFooterTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgFooterTemplateDirective;
}());
if (false) {}
var NgNotFoundTemplateDirective = /** @class */ (function () {
    function NgNotFoundTemplateDirective(template) {
        this.template = template;
    }
    NgNotFoundTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-notfound-tmp]' },] }
    ];
    /** @nocollapse */
    NgNotFoundTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgNotFoundTemplateDirective;
}());
if (false) {}
var NgTypeToSearchTemplateDirective = /** @class */ (function () {
    function NgTypeToSearchTemplateDirective(template) {
        this.template = template;
    }
    NgTypeToSearchTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-typetosearch-tmp]' },] }
    ];
    /** @nocollapse */
    NgTypeToSearchTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgTypeToSearchTemplateDirective;
}());
if (false) {}
var NgLoadingTextTemplateDirective = /** @class */ (function () {
    function NgLoadingTextTemplateDirective(template) {
        this.template = template;
    }
    NgLoadingTextTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-loadingtext-tmp]' },] }
    ];
    /** @nocollapse */
    NgLoadingTextTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgLoadingTextTemplateDirective;
}());
if (false) {}
var NgTagTemplateDirective = /** @class */ (function () {
    function NgTagTemplateDirective(template) {
        this.template = template;
    }
    NgTagTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-tag-tmp]' },] }
    ];
    /** @nocollapse */
    NgTagTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgTagTemplateDirective;
}());
if (false) {}
var NgLoadingSpinnerTemplateDirective = /** @class */ (function () {
    function NgLoadingSpinnerTemplateDirective(template) {
        this.template = template;
    }
    NgLoadingSpinnerTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng-loadingspinner-tmp]' },] }
    ];
    /** @nocollapse */
    NgLoadingSpinnerTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgLoadingSpinnerTemplateDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/console.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConsoleService = /** @class */ (function () {
    function ConsoleService() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    ConsoleService.prototype.warn = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.warn(message);
    };
    ConsoleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ ConsoleService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
    return ConsoleService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/id.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        // tslint:disable-next-line:no-bitwise
        /** @type {?} */
        var val = Math.random() * 16 | 0;
        return val.toString(16);
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/search-helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
/**
 * @param {?} text
 * @return {?}
 */
function stripSpecialChars(text) {
    /** @type {?} */
    var match = (/**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return diacritics[a] || a;
    });
    return text.replace(/[^\u0000-\u007E]/g, match);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/items-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ItemsList = /** @class */ (function () {
    function ItemsList(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    Object.defineProperty(ItemsList.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "filteredItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "selectedItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectionModel.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems[this._markedIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = this.selectedItems.length - 1;
            for (; i >= 0; i--) {
                /** @type {?} */
                var item = this.selectedItems[i];
                if (!item.disabled) {
                    return item;
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} items
     * @return {?}
     */
    ItemsList.prototype.setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this._items = items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) { return _this.mapItem(item, index); }));
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._items);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        /** @type {?} */
        var multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.unselect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ItemsList.prototype.findItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var findBy;
        if (this._ngSelect.compareWith) {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this._ngSelect.compareWith(item.value, value); });
        }
        else if (this._ngSelect.bindValue) {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !item.children && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; });
        }
        else {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value === value ||
                !item.children && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel); });
        }
        return this._items.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return findBy(item); }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.addItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    };
    /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    ItemsList.prototype.clearSelected = /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    function (keepDisabled) {
        if (keepDisabled === void 0) { keepDisabled = false; }
        this._selectionModel.clear(keepDisabled);
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        }));
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    };
    /**
     * @param {?} term
     * @return {?}
     */
    ItemsList.prototype.findByLabel = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        }));
    };
    /**
     * @param {?} term
     * @return {?}
     */
    ItemsList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var e_1, _a;
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        /** @type {?} */
        var match = this._ngSelect.searchFn || this._defaultSearchFn;
        /** @type {?} */
        var hideSelected = this._ngSelect.hideSelected;
        var _loop_1 = function (key) {
            var e_2, _a, _b;
            /** @type {?} */
            var matchedItems = [];
            try {
                for (var _c = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this_1._groups.get(key))), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                        continue;
                    }
                    /** @type {?} */
                    var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                    if (match(term, searchItem)) {
                        matchedItems.push(item);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (matchedItems.length > 0) {
                var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(matchedItems.slice(-1), 1), last_1 = _e[0];
                if (last_1.parent) {
                    /** @type {?} */
                    var head = this_1._items.find((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x === last_1.parent; }));
                    this_1._filteredItems.push(head);
                }
                (_b = this_1._filteredItems).push.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(matchedItems));
            }
        };
        var this_1 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_1(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.resetFilteredItems = /**
     * @return {?}
     */
    function () {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return !x.selected; }));
        }
        else {
            this._filteredItems = this._items;
        }
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.unmarkItem = /**
     * @return {?}
     */
    function () {
        this._markedIndex = -1;
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.markNextItem = /**
     * @return {?}
     */
    function () {
        this._stepToItem(+1);
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.markPreviousItem = /**
     * @return {?}
     */
    function () {
        this._stepToItem(-1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.markItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    };
    /**
     * @param {?=} markDefault
     * @return {?}
     */
    ItemsList.prototype.markSelectedOrDefault = /**
     * @param {?=} markDefault
     * @return {?}
     */
    function (markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        /** @type {?} */
        var lastMarkedIndex = this._getLastMarkedIndex();
        if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
        }
        else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return !x.disabled; })) : -1;
        }
    };
    /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    ItemsList.prototype.resolveNested = /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    function (option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */
            var value = option;
            for (var i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    ItemsList.prototype.mapItem = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        /** @type {?} */
        var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        /** @type {?} */
        var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: this._ngSelect.dropdownId + "-" + index,
        };
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.mapSelectedItems = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        var _this = this;
        /** @type {?} */
        var multiple = this._ngSelect.multiple;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selected = _c.value;
                /** @type {?} */
                var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                /** @type {?} */
                var item = isDefined(value) ? this.findItem(value) : null;
                this._selectionModel.unselect(selected, multiple);
                this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return _this.selectedItems.indexOf(x) === -1; }));
        }
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype._showSelected = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_4, _a;
        this._filteredItems.push(item);
        if (item.parent) {
            /** @type {?} */
            var parent_1 = item.parent;
            /** @type {?} */
            var parentExists = this._filteredItems.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x === parent_1; }));
            if (!parentExists) {
                this._filteredItems.push(parent_1);
            }
        }
        else if (item.children) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(item.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.selected = false;
                    this._filteredItems.push(child);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._filteredItems.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return (a.index - b.index); })));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype._hideSelected = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._filteredItems = this._filteredItems.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== item; }));
        if (item.parent) {
            /** @type {?} */
            var children = item.parent.children;
            if (children.every((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.selected; }))) {
                this._filteredItems = this._filteredItems.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x !== item.parent; }));
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.parent !== item; }));
        }
    };
    /**
     * @private
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    ItemsList.prototype._defaultSearchFn = /**
     * @private
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    function (search, opt) {
        /** @type {?} */
        var label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    };
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    ItemsList.prototype._getNextItemIndex = /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    function (steps) {
        if (steps > 0) {
            return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    };
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    ItemsList.prototype._stepToItem = /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    function (steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.disabled; }))) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ItemsList.prototype._getLastMarkedIndex = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._ngSelect.hideSelected) {
            return -1;
        }
        if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
        }
        /** @type {?} */
        var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
        }
        return Math.max(this.markedIndex, selectedIndex);
    };
    /**
     * @private
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    ItemsList.prototype._groupBy = /**
     * @private
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    function (items, prop) {
        var e_5, _a, e_6, _b;
        var _this = this;
        /** @type {?} */
        var groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[(/** @type {?} */ (prop))])) {
            try {
                for (var items_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    /** @type {?} */
                    var children = (item.value[(/** @type {?} */ (prop))] || []).map((/**
                     * @param {?} x
                     * @param {?} index
                     * @return {?}
                     */
                    function (x, index) { return _this.mapItem(x, index); }));
                    groups.set(item, children);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return groups;
        }
        /** @type {?} */
        var isFnKey = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        var keyFn = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var key = isFnKey ? ((/** @type {?} */ (prop)))(item.value) : item.value[(/** @type {?} */ (prop))];
            return isDefined(key) ? key : undefined;
        });
        try {
            // Group items by key.
            for (var items_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                var item = items_2_1.value;
                /** @type {?} */
                var key = keyFn(item);
                /** @type {?} */
                var group = groups.get(key);
                if (group) {
                    group.push(item);
                }
                else {
                    groups.set(key, [item]);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (items_2_1 && !items_2_1.done && (_b = items_2.return)) _b.call(items_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return groups;
    };
    /**
     * @private
     * @param {?} groups
     * @return {?}
     */
    ItemsList.prototype._flatten = /**
     * @private
     * @param {?} groups
     * @return {?}
     */
    function (groups) {
        var e_7, _a;
        /** @type {?} */
        var isGroupByFn = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        var items = [];
        var _loop_2 = function (key) {
            /** @type {?} */
            var i = items.length;
            if (key === undefined) {
                /** @type {?} */
                var withoutGroup = groups.get(undefined) || [];
                items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(withoutGroup.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, x), { index: i++ })); }))));
                return "continue";
            }
            /** @type {?} */
            var isObjectKey = isObject(key);
            /** @type {?} */
            var parent_2 = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this_2._ngSelect.selectableGroup,
                htmlId: newId(),
            };
            /** @type {?} */
            var groupKey = isGroupByFn ? this_2._ngSelect.bindLabel : (/** @type {?} */ (this_2._ngSelect.groupBy));
            /** @type {?} */
            var groupValue = this_2._ngSelect.groupValue || ((/**
             * @return {?}
             */
            function () {
                var _a;
                if (isObjectKey) {
                    return ((/** @type {?} */ (key))).value;
                }
                return _a = {}, _a[groupKey] = key, _a;
            }));
            /** @type {?} */
            var children = groups.get(key).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                x.parent = parent_2;
                x.children = undefined;
                x.index = i++;
                return x;
            }));
            parent_2.children = children;
            parent_2.value = groupValue(key, children.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value; })));
            items.push(parent_2);
            items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(children));
        };
        var this_2 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_2(key);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return items;
    };
    return ItemsList;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgOption() { }
if (false) {}
/** @enum {number} */
var KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-dropdown-panel.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ItemsRangeResult() { }
if (false) {}
/**
 * @record
 */
function PanelDimensions() { }
if (false) {}
var NgDropdownPanelService = /** @class */ (function () {
    function NgDropdownPanelService() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    Object.defineProperty(NgDropdownPanelService.prototype, "dimensions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dimensions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    NgDropdownPanelService.prototype.calculateItems = /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    function (scrollPos, itemsLength, buffer) {
        /** @type {?} */
        var d = this._dimensions;
        /** @type {?} */
        var scrollHeight = d.itemHeight * itemsLength;
        /** @type {?} */
        var scrollTop = Math.max(0, scrollPos);
        /** @type {?} */
        var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        /** @type {?} */
        var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        /** @type {?} */
        var maxStartEnd = end;
        /** @type {?} */
        var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        /** @type {?} */
        var start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        var topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    };
    /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    NgDropdownPanelService.prototype.setDimensions = /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    function (itemHeight, panelHeight) {
        /** @type {?} */
        var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight: itemHeight,
            panelHeight: panelHeight,
            itemsPerViewport: itemsPerViewport
        };
    };
    /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    NgDropdownPanelService.prototype.getScrollTo = /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    function (itemTop, itemHeight, lastScroll) {
        var panelHeight = this.dimensions.panelHeight;
        /** @type {?} */
        var itemBottom = itemTop + itemHeight;
        /** @type {?} */
        var top = lastScroll;
        /** @type {?} */
        var bottom = top + panelHeight;
        if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
        }
        if (itemBottom > bottom) {
            return top + itemBottom - bottom;
        }
        else if (itemTop <= top) {
            return itemTop;
        }
        return null;
    };
    NgDropdownPanelService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return NgDropdownPanelService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-dropdown-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
var BOTTOM_CSS_CLASS = 'ng-select-bottom';
/** @type {?} */
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_4__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"];
var NgDropdownPanelComponent = /** @class */ (function () {
    function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
    }
    Object.defineProperty(NgDropdownPanelComponent.prototype, "currentPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgDropdownPanelComponent.prototype, "itemsLength", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._itemsLength;
        },
        set: /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._itemsLength) {
                this._itemsLength = value;
                this._onItemsLengthChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgDropdownPanelComponent.prototype, "_startOffset", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (this.markedItem) {
                var _a = this._panelService.dimensions, itemHeight = _a.itemHeight, panelHeight = _a.panelHeight;
                /** @type {?} */
                var offset = this.markedItem.index * itemHeight;
                return panelHeight > offset ? 0 : offset;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = (/** @type {?} */ ($event.target));
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._select = this._dropdown.parentElement;
        this._virtualPadding = this.paddingElementRef.nativeElement;
        this._scrollablePanel = this.scrollElementRef.nativeElement;
        this._contentPanel = this.contentElementRef.nativeElement;
        this._handleScroll();
        this._handleOutsideClick();
        this._appendDropdown();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.items) {
            /** @type {?} */
            var change = changes.items;
            this._onItemsChange(change.currentValue, change.firstChange);
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    };
    /**
     * @param {?} option
     * @param {?=} startFromOption
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollTo = /**
     * @param {?} option
     * @param {?=} startFromOption
     * @return {?}
     */
    function (option, startFromOption) {
        if (startFromOption === void 0) { startFromOption = false; }
        if (!option) {
            return;
        }
        /** @type {?} */
        var index = this.items.indexOf(option);
        if (index < 0 || index >= this.itemsLength) {
            return;
        }
        /** @type {?} */
        var scrollTo;
        if (this.virtualScroll) {
            /** @type {?} */
            var itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
        }
        else {
            /** @type {?} */
            var item = this._dropdown.querySelector("#" + option.htmlId);
            /** @type {?} */
            var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
        }
        if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollToTag = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var panel = this._scrollablePanel;
        panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.adjustPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        var select = this._select.getBoundingClientRect();
        this._setOffset(parent, select);
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleDropdownPosition = /**
     * @private
     * @return {?}
     */
    function () {
        this._currentPosition = this._calculateCurrentPosition(this._dropdown);
        if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.addClass(this._select, TOP_CSS_CLASS);
            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updatePosition();
        }
        this._dropdown.style.opacity = '1';
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleScroll = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this.scrollElementRef.nativeElement, 'scroll')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this._onContentScrolled(e.target.scrollTop); }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleOutsideClick = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._document) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this._document, 'touchstart', { capture: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this._document, 'mousedown', { capture: true })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroy$))
                .subscribe((/**
             * @param {?} $event
             * @return {?}
             */
            function ($event) { return _this._checkToClose($event); }));
        }));
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._checkToClose = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
        }
        /** @type {?} */
        var path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this._zone.run((/**
         * @return {?}
         */
        function () { return _this.outsideClick.emit(); }));
    };
    /**
     * @private
     * @param {?} items
     * @param {?} firstChange
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._onItemsChange = /**
     * @private
     * @param {?} items
     * @param {?} firstChange
     * @return {?}
     */
    function (items, firstChange) {
        this.items = items || [];
        this._scrollToEndFired = false;
        this.itemsLength = items.length;
        if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
        }
        else {
            this._updateItems(firstChange);
        }
    };
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateItems = /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    function (firstChange) {
        var _this = this;
        this.update.emit(this.items);
        if (firstChange === false) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var panelHeight = _this._scrollablePanel.clientHeight;
                _this._panelService.setDimensions(0, panelHeight);
                _this._handleDropdownPosition();
                _this.scrollTo(_this.markedItem, firstChange);
            }));
        }));
    };
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateItemsRange = /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    function (firstChange) {
        var _this = this;
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._measureDimensions().then((/**
             * @return {?}
             */
            function () {
                if (firstChange) {
                    _this._renderItemsRange(_this._startOffset);
                    _this._handleDropdownPosition();
                }
                else {
                    _this._renderItemsRange();
                }
            }));
        }));
    };
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._onContentScrolled = /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
        }
        this._lastScrollPosition = scrollTop;
        this._fireScrollToEnd(scrollTop);
    };
    /**
     * @private
     * @param {?} height
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateVirtualHeight = /**
     * @private
     * @param {?} height
     * @return {?}
     */
    function (height) {
        if (this._updateScrollHeight) {
            this._virtualPadding.style.height = height + "px";
            this._updateScrollHeight = false;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._onItemsLengthChanged = /**
     * @private
     * @return {?}
     */
    function () {
        this._updateScrollHeight = true;
    };
    /**
     * @private
     * @param {?=} scrollTop
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._renderItemsRange = /**
     * @private
     * @param {?=} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        var _this = this;
        if (scrollTop === void 0) { scrollTop = null; }
        if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
        }
        scrollTop = scrollTop || this._scrollablePanel.scrollTop;
        /** @type {?} */
        var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
        this._updateVirtualHeight(range.scrollHeight);
        this._contentPanel.style.transform = "translateY(" + range.topPadding + "px)";
        this._zone.run((/**
         * @return {?}
         */
        function () {
            _this.update.emit(_this.items.slice(range.start, range.end));
            _this.scroll.emit({ start: range.start, end: range.end });
        }));
        if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._measureDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
        }
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.items, 1), first = _a[0];
        this.update.emit([first]);
        return Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var option = _this._dropdown.querySelector("#" + first.htmlId);
            /** @type {?} */
            var optionHeight = option.clientHeight;
            _this._virtualPadding.style.height = optionHeight * _this.itemsLength + "px";
            /** @type {?} */
            var panelHeight = _this._scrollablePanel.clientHeight;
            _this._panelService.setDimensions(optionHeight, panelHeight);
            return _this._panelService.dimensions;
        }));
    };
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        var _this = this;
        if (this._scrollToEndFired || scrollTop === 0) {
            return;
        }
        /** @type {?} */
        var padding = this.virtualScroll ?
            this._virtualPadding :
            this._contentPanel;
        if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run((/**
             * @return {?}
             */
            function () { return _this.scrollToEnd.emit(); }));
            this._scrollToEndFired = true;
        }
    };
    /**
     * @private
     * @param {?} dropdownEl
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
     * @private
     * @param {?} dropdownEl
     * @return {?}
     */
    function (dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        var selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        var offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        var height = selectRect.height;
        /** @type {?} */
        var dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._appendDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.appendTo) {
            return;
        }
        this._parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
        }
        this._parent.appendChild(this._dropdown);
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var select = this._select.getBoundingClientRect();
        /** @type {?} */
        var parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        var offsetLeft = select.left - parent.left;
        this._setOffset(parent, select);
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = select.width + 'px';
        this._dropdown.style.minWidth = select.width + 'px';
    };
    /**
     * @private
     * @param {?} parent
     * @param {?} select
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._setOffset = /**
     * @private
     * @param {?} parent
     * @param {?} select
     * @return {?}
     */
    function (parent, select) {
        /** @type {?} */
        var delta = select.height;
        if (this._currentPosition === 'top') {
            /** @type {?} */
            var offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
        }
        else if (this._currentPosition === 'bottom') {
            /** @type {?} */
            var offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
        }
    };
    NgDropdownPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    selector: 'ng-dropdown-panel',
                    template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    NgDropdownPanelComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: NgDropdownPanelService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    NgDropdownPanelComponent.propDecorators = {
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        markedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        filterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }],
        scrollElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }],
        paddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }],
        handleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mousedown', ['$event'],] }]
    };
    return NgDropdownPanelComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-option.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgOptionComponent = /** @class */ (function () {
    function NgOptionComponent(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._disabled = false;
    }
    Object.defineProperty(NgOptionComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = this._isDisabled(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgOptionComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.elementRef.nativeElement.textContent || '').trim();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgOptionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabled) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    };
    /**
     * @return {?}
     */
    NgOptionComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML
            });
        }
    };
    /**
     * @return {?}
     */
    NgOptionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChange$.complete();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NgOptionComponent.prototype._isDisabled = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value != null && "" + value !== 'false';
    };
    NgOptionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ng-option',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NgOptionComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NgOptionComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return NgOptionComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgSelectConfig = /** @class */ (function () {
    function NgSelectConfig() {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
    }
    NgSelectConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgSelectConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
    return NgSelectConfig;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ng-select-selection-model');
var NgSelectComponent = /** @class */ (function () {
    function NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        var _this = this;
        this.classes = classes;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;
        this.keyDownFn = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return true; });
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this.useDefaultClass = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this.clearItem = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var option = _this.selectedItems.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value === item; }));
            _this.unselect(option);
        });
        this.trackByOption = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        function (_, item) {
            if (_this.trackByFn) {
                return _this.trackByFn(item.value);
            }
            return item;
        });
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    Object.defineProperty(NgSelectComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () { return this._items; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemsAreUsed = true;
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
        get: /**
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (!isFunction(fn)) {
                throw Error('`compareWith` must be a function.');
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "clearSearchOnAdd", {
        get: /**
         * @return {?}
         */
        function () { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clearSearchOnAdd = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NgSelectComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this.readonly || this._disabled; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgSelectComponent.prototype, "filtered", {
        get: /**
         * @return {?}
         */
        function () { return (!!this.searchTerm && this.searchable || this._isComposing); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgSelectComponent.prototype, "_editableSearchTerm", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.editableSearchTerm && !this.multiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemsList.selectedItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedItems.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedItems.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "currentPanelPosition", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dropdownPanel) {
                return this.dropdownPanel.currentPosition;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._handleKeyPresses();
        this._setInputAttributes();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.multiple) {
            this.itemsList.clearSelected();
        }
        if (changes.items) {
            this._setItems(changes.items.currentValue || []);
        }
        if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this._itemsAreUsed) {
            this.escapeHTML = false;
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleKeyDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var keyCode = KeyCode[$event.which];
        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            this.handleKeyCode($event);
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleKeyCode = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        switch ($event.which) {
            case KeyCode.ArrowDown:
                this._handleArrowDown($event);
                break;
            case KeyCode.ArrowUp:
                this._handleArrowUp($event);
                break;
            case KeyCode.Space:
                this._handleSpace($event);
                break;
            case KeyCode.Enter:
                this._handleEnter($event);
                break;
            case KeyCode.Tab:
                this._handleTab($event);
                break;
            case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;
            case KeyCode.Backspace:
                this._handleBackspace();
                break;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = (/** @type {?} */ ($event.target));
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.handleArrowClick = /**
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.handleClearClick = /**
     * @return {?}
     */
    function () {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        this.clearEvent.emit();
        this._onSelectionChanged();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.clearModel = /**
     * @return {?}
     */
    function () {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    NgSelectComponent.prototype.setDisabledState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._disabled = state;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.searchTerm) {
            this.focus();
        }
        this.detectChanges();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        if (!this._editableSearchTerm) {
            this._clearSearch();
        }
        else {
            this.itemsList.resetFilteredItems();
        }
        this.itemsList.unmarkItem();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.toggleItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this._onSelectionChanged();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
            }
            this._updateNgModel();
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.searchInput.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.searchInput.nativeElement.blur();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.unselect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.selectTag = /**
     * @return {?}
     */
    function () {
        var _a;
        var _this = this;
        /** @type {?} */
        var tag;
        if (isFunction(this.addTag)) {
            tag = ((/** @type {?} */ (this.addTag)))(this.searchTerm);
        }
        else {
            tag = this._primitive ? this.searchTerm : (_a = {}, _a[this.bindLabel] = this.searchTerm, _a);
        }
        /** @type {?} */
        var handleTag = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this._isTypeahead || !_this.isOpen ? _this.itemsList.mapItem(item, null) : _this.itemsList.addItem(item); });
        if (isPromise(tag)) {
            tag.then((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.select(handleTag(item)); })).catch((/**
             * @return {?}
             */
            function () { }));
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showClear = /**
     * @return {?}
     */
    function () {
        return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
    };
    Object.defineProperty(NgSelectComponent.prototype, "showAddTag", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._validTerm) {
                return false;
            }
            /** @type {?} */
            var term = this.searchTerm.toLowerCase().trim();
            return this.addTag &&
                (!this.itemsList.filteredItems.some((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.label.toLowerCase() === term; })) &&
                    (!this.hideSelected && this.isOpen || !this.selectedItems.some((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.label.toLowerCase() === term; })))) &&
                !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showNoItemsFound = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this._validTerm && !this.loading)) &&
            !this.showAddTag;
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showTypeToSearch = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this._validTerm && !this.loading;
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.onCompositionStart = /**
     * @return {?}
     */
    function () {
        this._isComposing = true;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    NgSelectComponent.prototype.onCompositionEnd = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this._isComposing = false;
        if (this.searchWhileComposing) {
            return;
        }
        this.filter(term);
    };
    /**
     * @param {?} term
     * @return {?}
     */
    NgSelectComponent.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (this._isComposing && !this.searchWhileComposing) {
            return;
        }
        this.searchTerm = term;
        if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
        }
        if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term: term, items: this.itemsList.filteredItems.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value; })) });
        this.open();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.onInputFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.focused) {
            return;
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.onInputBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.focused = false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.onItemHover = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        if (!((/** @type {?} */ (this._cd))).destroyed) {
            this._cd.detectChanges();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._setSearchTermFromItems = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selected = this.selectedItems && this.selectedItems[0];
        this.searchTerm = (selected && selected.label) || null;
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    NgSelectComponent.prototype._setItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        /** @type {?} */
        var firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._setItemsFromNgOptions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mapNgOptions = (/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            _this.items = options.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }); }));
            _this.itemsList.setItems(_this.items);
            if (_this.hasValue) {
                _this.itemsList.mapSelectedItems();
            }
            _this.detectChanges();
        });
        /** @type {?} */
        var handleOptionChange = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this.ngOptions.changes, _this._destroy$);
            rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.ngOptions.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.stateChange$; })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(changedOrDestroyed))
                .subscribe((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var item = _this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                item.label = option.label || item.label;
                _this._cd.detectChanges();
            }));
        });
        this.ngOptions.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
            .subscribe((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            _this.bindLabel = _this._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
        }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NgSelectComponent.prototype._isValidWriteValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        /** @type {?} */
        var validateBinding = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!isDefined(_this.compareWith) && isObject(item) && _this.bindValue) {
                _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                return false;
            }
            return true;
        });
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return validateBinding(item); }));
        }
        else {
            return validateBinding(value);
        }
    };
    /**
     * @private
     * @param {?} ngModel
     * @return {?}
     */
    NgSelectComponent.prototype._handleWriteValue = /**
     * @private
     * @param {?} ngModel
     * @return {?}
     */
    function (ngModel) {
        var _this = this;
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        /** @type {?} */
        var select = (/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _a;
            /** @type {?} */
            var item = _this.itemsList.findItem(val);
            if (item) {
                _this.itemsList.select(item);
            }
            else {
                /** @type {?} */
                var isValObject = isObject(val);
                /** @type {?} */
                var isPrimitive = !isValObject && !_this.bindValue;
                if ((isValObject || isPrimitive)) {
                    _this.itemsList.select(_this.itemsList.mapItem(val, null));
                }
                else if (_this.bindValue) {
                    item = (_a = {},
                        _a[_this.bindLabel] = null,
                        _a[_this.bindValue] = val,
                        _a);
                    _this.itemsList.select(_this.itemsList.mapItem(item, null));
                }
            }
        });
        if (this.multiple) {
            ((/** @type {?} */ (ngModel))).forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return select(item); }));
        }
        else {
            select(ngModel);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._handleKeyPresses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @param {?} letter
         * @return {?}
         */
        function (letter) { return _this._pressedKeys.push(letter); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @return {?}
         */
        function () { return _this._pressedKeys.length > 0; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @return {?}
         */
        function () { return _this._pressedKeys.join(''); })))
            .subscribe((/**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            /** @type {?} */
            var item = _this.itemsList.findByLabel(term);
            if (item) {
                if (_this.isOpen) {
                    _this.itemsList.markItem(item);
                    _this._cd.markForCheck();
                }
                else {
                    _this.select(item);
                }
            }
            _this._pressedKeys = [];
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._setInputAttributes = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var input = this.searchInput.nativeElement;
        /** @type {?} */
        var attributes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: 'text', autocorrect: 'off', autocapitalize: 'off', autocomplete: this.labelForId ? 'off' : this.dropdownId }, this.inputAttrs);
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                input.setAttribute(key, attributes[key]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._updateNgModel = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var model = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (this.bindValue) {
                    /** @type {?} */
                    var value = null;
                    if (item.children) {
                        /** @type {?} */
                        var groupKey = this.groupValue ? this.bindValue : (/** @type {?} */ (this.groupBy));
                        value = item.value[groupKey || (/** @type {?} */ (this.groupBy))];
                    }
                    else {
                        value = this.itemsList.resolveNested(item.value, this.bindValue);
                    }
                    model.push(value);
                }
                else {
                    model.push(item.value);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        /** @type {?} */
        var selected = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.value; }));
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._clearSearch = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.searchTerm) {
            return;
        }
        this._changeSearch(null);
        this.itemsList.resetFilteredItems();
    };
    /**
     * @private
     * @param {?} searchTerm
     * @return {?}
     */
    NgSelectComponent.prototype._changeSearch = /**
     * @private
     * @param {?} searchTerm
     * @return {?}
     */
    function (searchTerm) {
        this.searchTerm = searchTerm;
        if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._scrollToMarked = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._scrollToTag = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollToTag();
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._onSelectionChanged = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();
            this.dropdownPanel.adjustPosition();
        }
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleTab = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen === false && !this.addTag) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleEnter = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleSpace = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleArrowDown = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleArrowUp = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} nextStep
     * @return {?}
     */
    NgSelectComponent.prototype._nextItemIsTag = /**
     * @private
     * @param {?} nextStep
     * @return {?}
     */
    function (nextStep) {
        /** @type {?} */
        var nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.searchTerm
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._handleBackspace = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    };
    Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.typeahead && this.typeahead.observers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "_validTerm", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var term = this.searchTerm && this.searchTerm.trim();
            return term && term.length >= this.minTermLength;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    NgSelectComponent.prototype._mergeGlobalConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
        this.appendTo = this.appendTo || config.appendTo;
        this.bindValue = this.bindValue || config.bindValue;
        this.appearance = this.appearance || config.appearance;
    };
    NgSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ng-select',
                    template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return NgSelectComponent; })),
                            multi: true
                        }, NgDropdownPanelService],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'role': 'listbox',
                        '[class.ng-select]': 'useDefaultClass',
                        '[class.ng-select-single]': '!multiple',
                    },
                    styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
                }] }
    ];
    /** @nocollapse */
    NgSelectComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['class',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['autofocus',] }] },
        { type: NgSelectConfig },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [SELECTION_MODEL_FACTORY,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: ConsoleService }
    ]; };
    NgSelectComponent.propDecorators = {
        bindLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bindValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        markFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeToSearchText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        addTagText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        clearAllText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dropdownPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        closeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        hideSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        openOnEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        maxSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        groupBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        groupValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectableGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectableGroupAsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        searchFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        trackByFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        clearOnBackspace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        labelForId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inputAttrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        searchWhileComposing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        minTermLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        editableSearchTerm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        keyDownFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-typeahead',] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-multiple',] }],
        addTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-taggable',] }],
        searchable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-searchable',] }],
        clearable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-clearable',] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-opened',] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        clearSearchOnAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['blur',] }],
        focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['focus',] }],
        changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['change',] }],
        openEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['open',] }],
        closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['close',] }],
        searchEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['search',] }],
        clearEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['clear',] }],
        addEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['add',] }],
        removeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['remove',] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['scroll',] }],
        scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['scrollToEnd',] }],
        optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        optgroupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        labelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        multiLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        typeToSearchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        loadingTextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        tagTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        loadingSpinnerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        dropdownPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return NgDropdownPanelComponent; })),] }],
        searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['searchInput', { static: true },] }],
        ngOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NgOptionComponent, { descendants: true },] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-disabled',] }],
        filtered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-filtered',] }],
        handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] }]
    };
    return NgSelectComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/selection-model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
/**
 * @record
 */
function SelectionModel() { }
if (false) {}
var DefaultSelectionModel = /** @class */ (function () {
    function DefaultSelectionModel() {
        this._selected = [];
    }
    Object.defineProperty(DefaultSelectionModel.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    DefaultSelectionModel.prototype.select = /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    function (item, multiple, groupAsModel) {
        item.selected = true;
        if (!item.children || (!multiple && groupAsModel)) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                /** @type {?} */
                var childrenCount = item.parent.children.length;
                /** @type {?} */
                var selectedCount = item.parent.children.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.selected; })).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (groupAsModel && this._activeChildren(item)) {
                    this._selected = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._selected.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.parent !== item; })), [item]);
                }
                else {
                    this._selected = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._selected, item.children.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return !x.disabled; })));
                }
            }
        }
    };
    /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    DefaultSelectionModel.prototype.unselect = /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    function (item, multiple) {
        var _a;
        this._selected = this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== item; }));
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                /** @type {?} */
                var children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                (_a = this._selected).push.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(children.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x !== item && !x.disabled; }))));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    };
    /**
     * @param {?} keepDisabled
     * @return {?}
     */
    DefaultSelectionModel.prototype.clear = /**
     * @param {?} keepDisabled
     * @return {?}
     */
    function (keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.disabled; })) : [];
    };
    /**
     * @private
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    DefaultSelectionModel.prototype._setChildrenSelectedState = /**
     * @private
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    function (children, selected) {
        var e_1, _a;
        try {
            for (var children_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.disabled) {
                    continue;
                }
                child.selected = selected;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
    };
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    DefaultSelectionModel.prototype._removeChildren = /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        this._selected = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.parent !== parent; })), parent.children.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.parent === parent && x.disabled && x.selected; })));
    };
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    DefaultSelectionModel.prototype._removeParent = /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        this._selected = this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== parent; }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    DefaultSelectionModel.prototype._activeChildren = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.children.every((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.disabled || x.selected; }));
    };
    return DefaultSelectionModel;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = DefaultSelectionModelFactory;
var NgSelectModule = /** @class */ (function () {
    function NgSelectModule() {
    }
    NgSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        NgDropdownPanelComponent,
                        NgOptionComponent,
                        NgSelectComponent,
                        NgOptgroupTemplateDirective,
                        NgOptionTemplateDirective,
                        NgLabelTemplateDirective,
                        NgMultiLabelTemplateDirective,
                        NgHeaderTemplateDirective,
                        NgFooterTemplateDirective,
                        NgNotFoundTemplateDirective,
                        NgTypeToSearchTemplateDirective,
                        NgLoadingTextTemplateDirective,
                        NgTagTemplateDirective,
                        NgLoadingSpinnerTemplateDirective,
                        NgItemLabelDirective
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                    ],
                    exports: [
                        NgSelectComponent,
                        NgOptionComponent,
                        NgOptgroupTemplateDirective,
                        NgOptionTemplateDirective,
                        NgLabelTemplateDirective,
                        NgMultiLabelTemplateDirective,
                        NgHeaderTemplateDirective,
                        NgFooterTemplateDirective,
                        NgNotFoundTemplateDirective,
                        NgTypeToSearchTemplateDirective,
                        NgLoadingTextTemplateDirective,
                        NgTagTemplateDirective,
                        NgLoadingSpinnerTemplateDirective
                    ],
                    providers: [
                        { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                    ]
                },] }
    ];
    return NgSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-select-ng-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng-select-ng-select.js.map


/***/ }),

/***/ "./src/app/views/transmgt/deptruckout.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/views/transmgt/deptruckout.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_DeptruckoutComponent, View_DeptruckoutComponent_0, View_DeptruckoutComponent_Host_0, DeptruckoutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DeptruckoutComponent", function() { return RenderType_DeptruckoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DeptruckoutComponent_0", function() { return View_DeptruckoutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DeptruckoutComponent_Host_0", function() { return View_DeptruckoutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeptruckoutComponentNgFactory", function() { return DeptruckoutComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ng-multiselect-dropdown/ng-multiselect-dropdown.ngfactory */ "./node_modules/ng-multiselect-dropdown/ng-multiselect-dropdown.ngfactory.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory */ "./node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony import */ var _deptruckout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deptruckout.component */ "./src/app/views/transmgt/deptruckout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../global-service.service */ "./src/app/global-service.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 













var styles_DeptruckoutComponent = [];
var RenderType_DeptruckoutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DeptruckoutComponent, data: {} });

function View_DeptruckoutComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 53), _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0New Transaction"]))], null, null); }
function View_DeptruckoutComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.policy["dp2tk-txns"].create; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.owner; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.volume_discharge, "1.2-2")); _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.depot_name; _ck(_v, 7, 0, currVal_2); }); }
function View_DeptruckoutComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes2; _ck(_v, 2, 0, currVal_0); }, null); }
function View_DeptruckoutComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "td", [["class", "no-data-available"], ["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No data!"]))], null, null); }
function View_DeptruckoutComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-primary btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editModal(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 54), _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-pencil"]], null, null, null, null, null))], null, null); }
function View_DeptruckoutComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-danger btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.del(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-trash"]], null, null, null, null, null))], null, null); }
function View_DeptruckoutComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.policy["dp2tk-txns"].update; _ck(_v, 10, 0, currVal_3); var currVal_4 = _co.policy["dp2tk-txns"].delete; _ck(_v, 12, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.oil_marketer; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.volume, "1.2-2")); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.parseNode(_v.context.$implicit); _ck(_v, 7, 0, currVal_2); }); }
function View_DeptruckoutComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; _ck(_v, 2, 0, currVal_0); }, null); }
function View_DeptruckoutComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "td", [["class", "no-data-available"], ["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No data!"]))], null, null); }
function View_DeptruckoutComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputErr; _ck(_v, 1, 0, currVal_0); }); }
function View_DeptruckoutComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputSuccess; _ck(_v, 1, 0, currVal_0); }); }
function View_DeptruckoutComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" Please Ensure Total Volume is Less or Equal to Volume Available (", ") "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.parentVol; _ck(_v, 1, 0, currVal_0); }); }
function View_DeptruckoutComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "button", [["class", "btn btn-danger "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeBreak(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["X"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.statBreak[_v.context.index]; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume_allocated, "1.2-2")); _ck(_v, 6, 0, currVal_1); }); }
function View_DeptruckoutComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 11, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Station"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Allocated"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Remove"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.volBreak; _ck(_v, 12, 0, currVal_0); }, null); }
function View_DeptruckoutComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-snowflake-o fa-2x fa-spin mt-4"], ["style", "margin-bottom: 15px"]], null, null, null, null, null))], null, null); }
function View_DeptruckoutComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Create Transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 75, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 70, "form", [["class", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 12, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 11, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 10, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 6, "input", [["class", "form-control"], ["name", "owner"], ["placeholder", "Enter Oil Marketer Name "], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.owner = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 6, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "truck"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.truckd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "tr") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "tr") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "tr") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 15, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 14, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 13, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tot. Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 7, "input", [["class", "form-control"], ["name", "totvol"], ["placeholder", "Enter Total Volume In Truck"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.totvol = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 2, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "h6", [["style", "margin-top:10px; border-bottom: 1px #c8ced3 solid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Breakdown (Click + button to add new entry)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 6, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "stat"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.statd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "stat") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "stat") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "stat") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 13, "div", [["class", "form-group col-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 7, "input", [["class", "form-control"], ["name", "statvol"], ["placeholder", "Volume Allocated"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.statvol = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](75, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 3, "div", [["class", "form-group col-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 2, "button", [["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addBreak() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](78, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveNew() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](86, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.inputErr != ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.inputSuccess != ""); _ck(_v, 10, 0, currVal_1); var currVal_16 = "form-control"; var currVal_17 = ((_co.owner.length >= 2) ? "is-valid" : ""); _ck(_v, 23, 0, currVal_16, currVal_17); var currVal_18 = "owner"; var currVal_19 = _co.owner; _ck(_v, 26, 0, currVal_18, currVal_19); var currVal_27 = "Select Truck"; var currVal_28 = _co.dropdownSettings; var currVal_29 = _co.allTr; _ck(_v, 31, 0, currVal_27, currVal_28, currVal_29); var currVal_30 = "truck"; var currVal_31 = _co.truckd; _ck(_v, 33, 0, currVal_30, currVal_31); var currVal_39 = "form-control"; var currVal_40 = (((_co.totvol > 0) && (_co.parentVol >= _co.totvol)) ? "is-valid" : ""); _ck(_v, 43, 0, currVal_39, currVal_40); var currVal_41 = "totvol"; var currVal_42 = _co.totvol; _ck(_v, 47, 0, currVal_41, currVal_42); var currVal_43 = (_co.parentVol < _co.totvol); _ck(_v, 51, 0, currVal_43); var currVal_51 = "Select Station"; var currVal_52 = _co.dropdownSettings; var currVal_53 = _co.allStat; _ck(_v, 57, 0, currVal_51, currVal_52, currVal_53); var currVal_54 = "stat"; var currVal_55 = _co.statd; _ck(_v, 59, 0, currVal_54, currVal_55); var currVal_63 = "form-control"; var currVal_64 = ((_co.statvol > 0) ? "is-valid" : ""); _ck(_v, 69, 0, currVal_63, currVal_64); var currVal_65 = "statvol"; var currVal_66 = _co.statvol; _ck(_v, 73, 0, currVal_65, currVal_66); var currVal_68 = (_co.validateAddBtn() ? "btn btn-warning" : "btn btn-outline-danger"); _ck(_v, 78, 0, currVal_68); var currVal_69 = (((_co.volBreak == null) ? null : _co.volBreak.length) > 0); _ck(_v, 81, 0, currVal_69); var currVal_70 = _co.load; _ck(_v, 84, 0, currVal_70); var currVal_72 = "btn btn-outline-primary"; var currVal_73 = (_co.validateNew() ? "btn btn-outline-primary" : "btn btn-outline-danger"); _ck(_v, 86, 0, currVal_72, currVal_73); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPending; _ck(_v, 22, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 30, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassUntouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassTouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassPristine; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassDirty; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassValid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassInvalid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassPending; _ck(_v, 42, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassUntouched; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassTouched; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassPristine; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassDirty; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassValid; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassInvalid; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassPending; _ck(_v, 56, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassUntouched; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassTouched; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassPristine; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassDirty; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassValid; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassInvalid; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassPending; _ck(_v, 68, 0, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62); var currVal_67 = !_co.validateAddBtn(); _ck(_v, 77, 0, currVal_67); var currVal_71 = !_co.validateNew(); _ck(_v, 85, 0, currVal_71); }); }
function View_DeptruckoutComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputErr; _ck(_v, 1, 0, currVal_0); }); }
function View_DeptruckoutComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputSuccess; _ck(_v, 1, 0, currVal_0); }); }
function View_DeptruckoutComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "button", [["class", "btn btn-danger "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeBreak(_v.context.index, 1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["X"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.estatBreak[_v.context.index]; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume_allocated, "1.2-2")); _ck(_v, 6, 0, currVal_1); }); }
function View_DeptruckoutComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 11, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Station"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Allocated"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Remove"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.evolBreak; _ck(_v, 12, 0, currVal_0); }, null); }
function View_DeptruckoutComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-snowflake-o fa-2x fa-spin mt-4"], ["style", "margin-bottom: 15px"]], null, null, null, null, null))], null, null); }
function View_DeptruckoutComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit Transaction "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 73, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 68, "form", [["class", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 12, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 11, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 10, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 6, "input", [["class", "form-control"], ["name", "owner"], ["placeholder", "Enter Oil Marketer Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.eowner = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 6, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "truck"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.etruckd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "etr") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "etr") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "etr") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 13, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tot. Vol. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 7, "input", [["class", "form-control"], ["name", "totvol"], ["placeholder", "Enter Total Volume in Truck"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.etotvol = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 2, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "h6", [["style", "margin-top:10px; border-bottom: 1px #c8ced3 solid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Breakdown (Click + button to add new entry)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 6, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "stat"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.estatd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "estat") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "estat") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "estat") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 13, "div", [["class", "form-group col-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 7, "input", [["class", "form-control"], ["name", "statvol"], ["placeholder", "Volume Allocated"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.estatvol = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](67, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 3, "div", [["class", "form-group col-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 2, "button", [["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addBreak(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](76, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](79, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](82, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.edit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.inputErr != ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.inputSuccess != ""); _ck(_v, 10, 0, currVal_1); var currVal_16 = "form-control"; var currVal_17 = ((_co.eowner.length >= 2) ? "is-valid" : ""); _ck(_v, 23, 0, currVal_16, currVal_17); var currVal_18 = "owner"; var currVal_19 = _co.eowner; _ck(_v, 26, 0, currVal_18, currVal_19); var currVal_27 = _co.trEdName; var currVal_28 = _co.dropdownSettings; var currVal_29 = _co.allTr; _ck(_v, 31, 0, currVal_27, currVal_28, currVal_29); var currVal_30 = "truck"; var currVal_31 = _co.etruckd; _ck(_v, 33, 0, currVal_30, currVal_31); var currVal_39 = "form-control"; var currVal_40 = ((_co.etotvol > 0) ? "is-valid" : ""); _ck(_v, 43, 0, currVal_39, currVal_40); var currVal_41 = "totvol"; var currVal_42 = _co.etotvol; _ck(_v, 47, 0, currVal_41, currVal_42); var currVal_50 = "Select Station"; var currVal_51 = _co.dropdownSettings; var currVal_52 = _co.allStat; _ck(_v, 55, 0, currVal_50, currVal_51, currVal_52); var currVal_53 = "stat"; var currVal_54 = _co.estatd; _ck(_v, 57, 0, currVal_53, currVal_54); var currVal_62 = "form-control"; var currVal_63 = ((_co.estatvol > 0) ? "is-valid" : ""); _ck(_v, 67, 0, currVal_62, currVal_63); var currVal_64 = "statvol"; var currVal_65 = _co.estatvol; _ck(_v, 71, 0, currVal_64, currVal_65); var currVal_67 = (_co.validateEditBtn() ? "btn btn-warning" : "btn btn-outline-danger"); _ck(_v, 76, 0, currVal_67); var currVal_68 = (((_co.evolBreak == null) ? null : _co.evolBreak.length) > 0); _ck(_v, 79, 0, currVal_68); var currVal_69 = _co.eload; _ck(_v, 82, 0, currVal_69); var currVal_71 = "btn btn-outline-primary"; var currVal_72 = (_co.validateEdit() ? "btn btn-outline-primary" : "btn btn-outline-danger"); _ck(_v, 84, 0, currVal_71, currVal_72); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPending; _ck(_v, 22, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 30, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassUntouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassTouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassPristine; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassDirty; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassValid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassInvalid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).ngClassPending; _ck(_v, 42, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassUntouched; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassTouched; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassPristine; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassDirty; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassValid; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassInvalid; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassPending; _ck(_v, 54, 0, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassUntouched; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassTouched; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassPristine; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassDirty; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassValid; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassInvalid; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassPending; _ck(_v, 66, 0, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61); var currVal_66 = !_co.validateEditBtn(); _ck(_v, 75, 0, currVal_66); var currVal_70 = !_co.validateEdit(); _ck(_v, 83, 0, currVal_70); }); }
function View_DeptruckoutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 53, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 52, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 51, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 50, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 4, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "div", [["class", "float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "button", [["class", "btn btn-outline-warning"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.refresh() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-refresh"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0Refresh"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 44, "div", [["class", "card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 41, "tabset", [], [[2, "tab-container", null]], null, null, _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TabsetComponent_0"], _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TabsetComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 180224, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, 0, 19, "tab", [["heading", "Parent Transaction"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { heading: [0, "heading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 17, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 16, "table", [["class", "table table-striped"], ["datatable", ""], ["style", "width:100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 212992, null, 0, angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { dtOptions: [0, "dtOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Discharged"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Depot Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 0, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, 0, 19, "tab", [["heading", "Transaction"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { heading: [0, "heading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 17, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 16, "table", [["class", "table table-striped"], ["datatable", ""], ["style", "width:100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 212992, null, 0, angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { dtOptions: [0, "dtOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Truck"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DeptruckoutComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 0, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["content", 2]], null, 0, null, View_DeptruckoutComponent_10)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["edContent", 2]], null, 0, null, View_DeptruckoutComponent_17))], function (_ck, _v) { var _co = _v.component; var currVal_6 = "Parent Transaction"; _ck(_v, 14, 0, currVal_6); var currVal_7 = _co.dtOptions2; _ck(_v, 17, 0, currVal_7); var currVal_8 = (((_co.nodes2 == null) ? null : _co.nodes2.length) != 0); _ck(_v, 29, 0, currVal_8); var currVal_9 = (((_co.nodes2 == null) ? null : _co.nodes2.length) == 0); _ck(_v, 31, 0, currVal_9); var currVal_15 = "Transaction"; _ck(_v, 34, 0, currVal_15); var currVal_16 = _co.dtOptions; _ck(_v, 37, 0, currVal_16); var currVal_17 = (((_co.nodes == null) ? null : _co.nodes.length) != 0); _ck(_v, 49, 0, currVal_17); var currVal_18 = (((_co.nodes == null) ? null : _co.nodes.length) == 0); _ck(_v, 51, 0, currVal_18); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).clazz; _ck(_v, 11, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).id; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).active; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).addClass; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).role; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ariaLabelledby; _ck(_v, 13, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).id; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).active; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).addClass; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).role; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).ariaLabelledby; _ck(_v, 33, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); }); }
function View_DeptruckoutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-deptruckout", [], null, null, null, View_DeptruckoutComponent_0, RenderType_DeptruckoutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _deptruckout_component__WEBPACK_IMPORTED_MODULE_8__["DeptruckoutComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _global_service_service__WEBPACK_IMPORTED_MODULE_12__["GlobalServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DeptruckoutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-deptruckout", _deptruckout_component__WEBPACK_IMPORTED_MODULE_8__["DeptruckoutComponent"], View_DeptruckoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/transmgt/deptruckout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/transmgt/deptruckout.component.ts ***!
  \*********************************************************/
/*! exports provided: DeptruckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeptruckoutComponent", function() { return DeptruckoutComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global-service.service */ "./src/app/global-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
var Node2 = /** @class */ (function () {
    function Node2() {
    }
    return Node2;
}());
var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var DeptruckoutComponent = /** @class */ (function () {
    function DeptruckoutComponent(http, modalService, router, globalservice) {
        var _this = this;
        this.http = http;
        this.modalService = modalService;
        this.router = router;
        this.globalservice = globalservice;
        this.dtOptions = {};
        this.dtOptions2 = {};
        this.ph = [
            { id: 0, name: 'No Values Found. Try Again' }
        ];
        this.jSON = JSON;
        this.searchStatTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchTrTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.esearchStatTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.esearchTrTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.owner = '';
        this.eowner = '';
        this.policy = JSON.parse(localStorage.getItem('sessionData')) ? JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;
        // add new modal
        this.closeResult = '';
        this.dropdownSettings = {};
        this.stat = '';
        this.statname = '';
        this.truck = '';
        this.statvol = 0;
        this.statd = [];
        this.truckd = '';
        this.volBreak = [];
        this.statBreak = [];
        this.totvol = 0;
        this.estat = '';
        this.estatname = '';
        this.etruck = '';
        this.estatd = [];
        this.etruckd = '';
        this.evolBreak = [];
        this.estatBreak = [];
        this.etotvol = 0;
        this.addbtn = false;
        this.res = null;
        this.load = false;
        this.eload = false;
        this.inputSuccess = "";
        this.inputErr = "";
        this.edID = '';
        this.scurl = '';
        this.escurl = '';
        var trres = null;
        var statres = null;
        this.globalservice.search('trucks', this.searchTrTerm$)
            .subscribe(function (results) {
            trres = results;
            if (trres.data.trucks.data.length < 1) {
                console.log(trres.data.trucks.data);
                _this.searchTrTerm$.next('');
            }
            else {
                _this.allTr = trres.data.trucks.data;
            }
            console.log(_this.allTr);
        });
        this.globalservice.search('stations', this.searchStatTerm$)
            .subscribe(function (results) {
            statres = results;
            // this.allStat = statres.data.stations.data;
            if (statres.data.stations.data.length < 1) {
                _this.searchStatTerm$.next('');
            }
            else {
                _this.allStat = statres.data.stations.data;
            }
            console.log(_this.allStat);
        });
        this.globalservice.search('trucks', this.esearchTrTerm$)
            .subscribe(function (results) {
            trres = results;
            if (trres.data.trucks.data.length < 1) {
                // console.log(trres.data.trucks.data);
                _this.esearchTrTerm$.next('');
            }
            else {
                _this.allTr = trres.data.trucks.data;
            }
            console.log(_this.allTr);
        });
        this.globalservice.search('stations', this.esearchStatTerm$)
            .subscribe(function (results) {
            statres = results;
            if (statres.data.stations.data.length < 1) {
                _this.esearchStatTerm$.next('');
            }
            else {
                _this.allStat = statres.data.stations.data;
            }
            // this.allStat = statres.data.stations.data;
            console.log(_this.allStat);
        });
    }
    DeptruckoutComponent.prototype.refresh = function () {
        window.location.reload();
        // this.ngOnInit();
        // this.router.navigate(['/usermgt/']);
    };
    DeptruckoutComponent.prototype.getAllNode = function (node) {
        var _this = this;
        // this.globalservice.getAllEntityFilt(node,filt)
        this.globalservice.getAllEntity(node)
            .then(function (data) {
            // this.load= false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                if (node == 'trucks') {
                    _this.allTr = _this.res.data.trucks.data;
                }
                if (node == 'stations') {
                    _this.allStat = _this.res.data.stations.data;
                }
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    DeptruckoutComponent.prototype.onItemSelect = function (item, nodekey) {
        console.log(item);
        if (nodekey == 'tr') {
            // this.mvd = item;
            this.truck = item.id;
        }
        if (nodekey == 'stat') {
            // this.depotd = item;
            this.stat = item.id;
            this.statname = item.name;
            console.log('stat');
        }
        if (nodekey == 'etr') {
            // this.mvd = item;
            this.etruck = item.id;
        }
        if (nodekey == 'estat') {
            // this.depotd = item;
            this.estat = item.id;
            this.estatname = item.name;
        }
    };
    DeptruckoutComponent.prototype.onItemDeSelect = function (item, nodekey) {
        console.log(item);
        if (nodekey == 'tr') {
            // this.mvd = item;
            this.truck = "";
        }
        if (nodekey == 'stat') {
            // this.depotd = item;
            this.stat = "";
            this.statname = "";
            console.log('stat');
        }
        if (nodekey == 'etr') {
            // this.mvd = item;
            this.etruck = "";
        }
        if (nodekey == 'estat') {
            // this.depotd = item;
            this.estat = "";
            this.estatname = "";
        }
    };
    DeptruckoutComponent.prototype.onFilterChange = function (item, nodekey) {
        console.log(item);
        if (nodekey == 'tr') {
            this.searchTrTerm$.next(item);
        }
        if (nodekey == 'stat') {
            this.searchStatTerm$.next(item);
        }
        if (nodekey == 'etr') {
            this.esearchTrTerm$.next(item);
        }
        if (nodekey == 'estat') {
            this.esearchStatTerm$.next(item);
        }
    };
    DeptruckoutComponent.prototype.ngOnInit = function () {
        var that = this;
        this.getAllNode("trucks");
        this.getAllNode("stations");
        // =========================================
        this.dropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            closeDropDownOnSelection: true,
            itemsShowLimit: 3,
            allowSearchFilter: true,
            clearSearchFilter: true
        };
        // this.depdropdownSettings = {
        //   singleSelection: true,
        //   idField: 'id',
        //   textField: 'name',
        //   selectAllText: 'Select All',
        //   unSelectAllText: 'UnSelect All',
        //   itemsShowLimit: 3,
        //   allowSearchFilter: true,
        //   clearSearchFilter: true
        // };
        // =========================================
        // this.dtOptions = {
        //   pageLength: 5,
        //   pagingType: 'full_numbers'
        // };
        console.log('resp');
        this.dtOptions = {
            lengthMenu: [[1, 10, 25, 50, 100, 500, 1000], [1, 10, 25, 50, 100, 500, 1000]],
            pagingType: 'full_numbers',
            pageLength: 25,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                that.http
                    .post(
                // 'https://angular-datatables-demo-server.herokuapp.com/',
                'https://app05.sahara-group.com/pjh-api/public/api/dt/dp2tk-txns', dataTablesParameters, 
                // {Authorization: `Bearer ${that.globalservice.sessionToken}`}
                {
                    // params: params,
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', "Bearer " + localStorage.getItem('sessionToken'))
                }).subscribe(function (resp) {
                    that.nodes = resp.data;
                    console.log(resp);
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: []
                    });
                }, function (err) { console.log(err); });
            },
            columns: [{ data: 'id' },
                { data: 'oil_marketer' },
                { data: 'truck_id' },
                { data: 'volume' }]
        };
        // --------------------------------------------
        this.dtOptions2 = {
            lengthMenu: [[1, 10, 25, 50, 100, 500, 1000], [1, 10, 25, 50, 100, 500, 1000]],
            pagingType: 'full_numbers',
            pageLength: 25,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                that.http
                    .post(
                // 'https://angular-datatables-demo-server.herokuapp.com/',
                'https://app05.sahara-group.com/pjh-api/public/api/dt/depot-dv2dp-txn-views', dataTablesParameters, 
                // {Authorization: `Bearer ${that.globalservice.sessionToken}`}
                {
                    // params: params,
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', "Bearer " + localStorage.getItem('sessionToken'))
                }).subscribe(function (resp2) {
                    that.nodes2 = resp2.data;
                    console.log(resp2);
                    callback({
                        recordsTotal: resp2.recordsTotal,
                        recordsFiltered: resp2.recordsFiltered,
                        data: []
                    });
                }, function (err) { console.log(err); });
            },
            columns: [
                // { data: 'id' },
                { data: 'owner' },
                { data: 'volume_discharge' },
                { data: 'depot_name' }
            ]
        };
    };
    DeptruckoutComponent.prototype.validateEditBtn = function () {
        var voter = 0;
        if (this.estat.length >= 2) {
            voter++;
        }
        if (this.estatvol > 0) {
            voter++;
        }
        if (voter < 2) {
            return false;
        }
        else {
            return true;
        }
    };
    DeptruckoutComponent.prototype.validateAddBtn = function () {
        var voter = 0;
        if (this.stat.length >= 2) {
            voter++;
        }
        if (this.statvol > 0) {
            voter++;
        }
        // console.log(this.stat);
        if (voter < 2) {
            return false;
        }
        else {
            return true;
        }
    };
    DeptruckoutComponent.prototype.removeBreak = function (ind, ed) {
        if (ed == 1) {
            this.evolBreak.splice(ind, 1);
            this.estatBreak.splice(ind, 1);
        }
        else {
            this.volBreak.splice(ind, 1);
            this.statBreak.splice(ind, 1);
        }
    };
    DeptruckoutComponent.prototype.addBreak = function (ed) {
        if (ed == 1) {
            var breakObj = {
                station_id: this.estat,
                volume_allocated: this.estatvol
            };
            this.evolBreak.push(breakObj);
            this.estatBreak.push(this.estatname);
            this.estat = '';
            this.estatd = [];
            this.estatvol = null;
        }
        else {
            var breakObj = {
                station_id: this.stat,
                volume_allocated: this.statvol
            };
            this.volBreak.push(breakObj);
            this.statBreak.push(this.statname);
            this.stat = '';
            this.statd = [];
            this.statvol = null;
        }
    };
    DeptruckoutComponent.prototype.volSum = function (ed) {
        // console.log(this.volBreak.reduce((prev, cur) => prev + cur.volume, 0));
        if (ed == 1) {
            return this.evolBreak.reduce(function (prev, cur) { return prev + cur.volume_allocated; }, 0);
        }
        else {
            return this.volBreak.reduce(function (prev, cur) { return prev + cur.volume_allocated; }, 0);
        }
    };
    DeptruckoutComponent.prototype.validateNew = function () {
        var voter = 0;
        if (this.totvol > 0) {
            voter++;
        }
        if (this.parentVol >= this.totvol) {
            voter++;
        }
        if (this.volSum() == this.totvol) {
            voter++;
        }
        if (this.owner.length > 0) {
            voter++;
        }
        if (this.truck.length > 0) {
            voter++;
        }
        // console.log(voter);
        // console.log(this.volSum());
        if (voter < 5) {
            this.inputErr = "Please Ensure All Fields Are Correctly Filled";
            return false;
        }
        else {
            this.inputErr = "";
            return true;
        }
    };
    DeptruckoutComponent.prototype.validateEdit = function () {
        var voter = 0;
        if (this.etotvol > 0) {
            voter++;
        }
        // if(this.eparentVol >= this.etotvol){
        //   voter++;
        // }
        if (this.volSum(1) == this.etotvol) {
            voter++;
        }
        if (this.eowner.length > 0) {
            voter++;
        }
        if (this.etruck.length > 0) {
            voter++;
        }
        // console.log(voter);
        if (voter < 4) {
            this.inputErr = "Please Ensure All Fields Are Correctly Filled";
            return false;
        }
        else {
            this.inputErr = "";
            return true;
        }
    };
    DeptruckoutComponent.prototype.parseNode = function (node) {
        return node.truck ? node.truck.name : 'Not found';
    };
    DeptruckoutComponent.prototype.editModal = function (edContent, node) {
        this.inputErr = "";
        this.inputSuccess = "";
        var evolbr = JSON.parse(this.globalservice.decodeHtml(node.volume_breakdown));
        console.log(evolbr);
        this.eowner = node.oil_marketer;
        this.evolBreak = evolbr;
        this.etotvol = parseInt(node.volume);
        this.etruck = node.truck_id;
        this.trEdName = node.truck ? node.truck.name : 'Not found';
        this.eparentID = node.dv2dp_txn_id;
        this.eparentVol = parseInt(node.volume);
        console.log(this.eparentID);
        var that = this;
        this.evolBreak.forEach(function (part, index, theArray) {
            that.getByID(theArray[index].station_id, 'stations', index);
        });
        console.log(this.evolBreak);
        console.log(this.estatBreak);
        this.edID = node.id;
        console.log(node);
        this.modalService.open(edContent, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    DeptruckoutComponent.prototype.getByID = function (id, node, ind, i) {
        var _this = this;
        var that = this;
        this.globalservice.getNodeByID(id, node)
            .then(function (data) {
            _this.eload = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status === 'success') {
                if (node === 'stations') {
                    if (_this.res.data.station) {
                        _this.estatBreak[ind] = _this.res.data.station.name;
                    }
                    else {
                        _this.estatBreak[ind] = 'Not Found';
                    }
                }
                else {
                    return _this.res.data[node].name ? _this.res.data[node].name : 'Not Found';
                }
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .finally(function () {
            _this.eload = false;
        });
    };
    DeptruckoutComponent.prototype.edit = function () {
        var _this = this;
        var that = this;
        console.log(this.edID);
        var nodeObj = {
            dv2dp_txn_id: this.eparentID,
            oil_marketer: this.eowner,
            truck_id: this.etruck,
            volume: this.etotvol,
            volume_breakdown: JSON.stringify(this.evolBreak)
        };
        console.log(nodeObj);
        // return;
        this.eload = true;
        this.globalservice.editNode(this.edID, nodeObj, 'dp2tk-txns')
            .then(function (data) {
            _this.eload = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.inputSuccess = "Transaction Edited Successfully";
                setTimeout(function () {
                    that.modalService.dismissAll();
                    window.location.reload();
                }, 1000);
                //   this.globalservice.sessionToken = this.res.data.token;
                //   this.router.navigate(['/usermgt/']);
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .finally(function () {
            _this.eload = false;
        });
    };
    DeptruckoutComponent.prototype.del = function (node) {
        var _this = this;
        var r = confirm('Confirm this operation. It cannot be undone');
        if (r == false) {
            return false;
        }
        ;
        console.log(node);
        this.globalservice.delNode(node.id, "dp2tk-txns")
            .then(function (data) {
            // this.load= false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.inputSuccess = "Transaction Deleted Successfully";
                setTimeout(function () {
                    alert("Transaction Deleted Successfully");
                    window.location.reload();
                }, 1000);
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    DeptruckoutComponent.prototype.saveNew = function () {
        var _this = this;
        var nodeObj = {
            dv2dp_txn_id: this.parentID,
            oil_marketer: this.owner,
            truck_id: this.truck,
            volume: this.totvol,
            volume_breakdown: JSON.stringify(this.volBreak)
        };
        console.log(nodeObj);
        var that = this;
        // return;
        this.load = true;
        this.globalservice.newNode(nodeObj, 'dp2tk-txns')
            .then(function (data) {
            _this.load = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.inputSuccess = "Transaction Created Successfully";
                setTimeout(function () {
                    that.modalService.dismissAll();
                    window.location.reload();
                }, 1000);
                //   this.globalservice.sessionToken = this.res.data.token;
                //   this.router.navigate(['/usermgt/']);
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.load = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.load = false;
        })
            .finally(function () {
            _this.load = false;
        });
    };
    DeptruckoutComponent.prototype.open = function (content, node) {
        // this.modalService.open(content, { size: 'lg' });
        this.parentID = node.dv2dp_txn_id;
        this.parentVol = parseInt(node.volume_discharge);
        console.log(this.parentID);
        this.inputErr = "";
        this.inputSuccess = "";
        this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    return DeptruckoutComponent;
}());



/***/ }),

/***/ "./src/app/views/transmgt/dvtodep.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/views/transmgt/dvtodep.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_DvtodepComponent, View_DvtodepComponent_0, View_DvtodepComponent_Host_0, DvtodepComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DvtodepComponent", function() { return RenderType_DvtodepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DvtodepComponent_0", function() { return View_DvtodepComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DvtodepComponent_Host_0", function() { return View_DvtodepComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DvtodepComponentNgFactory", function() { return DvtodepComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ng-multiselect-dropdown/ng-multiselect-dropdown.ngfactory */ "./node_modules/ng-multiselect-dropdown/ng-multiselect-dropdown.ngfactory.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory */ "./node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony import */ var _dvtodep_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dvtodep.component */ "./src/app/views/transmgt/dvtodep.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../global-service.service */ "./src/app/global-service.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 













var styles_DvtodepComponent = [];
var RenderType_DvtodepComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DvtodepComponent, data: {} });

function View_DvtodepComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 57), _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0New Transaction"]))], null, null); }
function View_DvtodepComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.policy["dv2dp-txns"].create; _ck(_v, 14, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.parseMV(_v.context.$implicit); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.parseDV(_v.context.$implicit); _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.volume, "1.2-2")); _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.owner; _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.getInspector(_v.context.$implicit); _ck(_v, 11, 0, currVal_4); }); }
function View_DvtodepComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes2; _ck(_v, 2, 0, currVal_0); }, null); }
function View_DvtodepComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "td", [["class", "no-data-available"], ["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No data!"]))], null, null); }
function View_DvtodepComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-primary btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editModal(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 58), _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-pencil"]], null, null, null, null, null))], null, null); }
function View_DvtodepComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-danger btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.del(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-trash"]], null, null, null, null, null))], null, null); }
function View_DvtodepComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.policy["dv2dp-txns"].update; _ck(_v, 10, 0, currVal_3); var currVal_4 = _co.policy["dv2dp-txns"].delete; _ck(_v, 12, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.shore_cert_url; _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.volume_discharged, "1.2-2")); _ck(_v, 6, 0, currVal_2); }); }
function View_DvtodepComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; _ck(_v, 2, 0, currVal_0); }, null); }
function View_DvtodepComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "td", [["class", "no-data-available"], ["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No data!"]))], null, null); }
function View_DvtodepComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputErr; _ck(_v, 1, 0, currVal_0); }); }
function View_DvtodepComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputSuccess; _ck(_v, 1, 0, currVal_0); }); }
function View_DvtodepComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" Please Ensure Total Volume is Less or Equal to Volume Available (", ") "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.parentVol; _ck(_v, 1, 0, currVal_0); }); }
function View_DvtodepComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](11, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](15, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-danger "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeBreak(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["X"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.depBreak[_v.context.index]; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume_discharge, "1.2-2")); _ck(_v, 6, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume_before_discharge, "1.2-2")); _ck(_v, 10, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume_after_discharge, "1.2-2")); _ck(_v, 14, 0, currVal_3); }); }
function View_DvtodepComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 15, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Depot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Discharged"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Before Discharge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume After Discharge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Remove"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.volBreak; _ck(_v, 16, 0, currVal_0); }, null); }
function View_DvtodepComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-snowflake-o fa-2x fa-spin mt-4"], ["style", "margin-bottom: 15px"]], null, null, null, null, null))], null, null); }
function View_DvtodepComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Create Transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 87, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 82, "form", [["class", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 3, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "input", [["type", "button"], ["value", "Upload Shore Cert. Image"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).click() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, [["imageInput", 1]], null, 0, "input", [["accept", "image/*"], ["class", "form-control"], ["name", "scurl"], ["placeholder", "Enter Shore Cert. Url "], ["style", "display:none"], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.processFile(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 15, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 14, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 13, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tot. Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 7, "input", [["class", "form-control"], ["name", "voldis"], ["placeholder", "Enter Volume Discharged"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.voldis = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 2, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 1, "h6", [["style", "margin-top:10px; border-bottom: 1px #c8ced3 solid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Breakdown (Click + button to add new entry)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 6, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "depot"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.depotd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "dep") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "dep") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "dep") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 7, "input", [["class", "form-control"], ["name", "depvol"], ["placeholder", "Volume Discharged"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.depvol = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Pre-Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 7, "input", [["class", "form-control"], ["name", "volbef"], ["placeholder", "Volume Before"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.volbef = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](67, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 13, "div", [["class", "form-group col-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Post-Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 7, "input", [["class", "form-control"], ["name", "volaft"], ["placeholder", "Volume After"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 83).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 83).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 83).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.volaft = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](82, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](85, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](87, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 3, "div", [["class", "form-group col-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 2, "button", [["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addBreak() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](90, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](93, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](96, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](97, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveNew() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](98, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.inputErr != ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.inputSuccess != ""); _ck(_v, 10, 0, currVal_1); var currVal_9 = ((_co.scurl != "") ? "btn btn-outline-primary btn-block" : "btn btn-outline-danger btn-block"); _ck(_v, 18, 0, currVal_9); var currVal_17 = "form-control"; var currVal_18 = (((_co.voldis > 0) && (_co.parentVol >= _co.voldis)) ? "is-valid" : ""); _ck(_v, 27, 0, currVal_17, currVal_18); var currVal_19 = "voldis"; var currVal_20 = _co.voldis; _ck(_v, 31, 0, currVal_19, currVal_20); var currVal_21 = (_co.parentVol < _co.voldis); _ck(_v, 35, 0, currVal_21); var currVal_29 = "Select Depot"; var currVal_30 = _co.depdropdownSettings; var currVal_31 = _co.allDep; _ck(_v, 41, 0, currVal_29, currVal_30, currVal_31); var currVal_32 = "depot"; var currVal_33 = _co.depotd; _ck(_v, 43, 0, currVal_32, currVal_33); var currVal_41 = "form-control"; var currVal_42 = ((_co.depvol > 0) ? "is-valid" : ""); _ck(_v, 53, 0, currVal_41, currVal_42); var currVal_43 = "depvol"; var currVal_44 = _co.depvol; _ck(_v, 57, 0, currVal_43, currVal_44); var currVal_52 = "form-control"; var currVal_53 = ((_co.volbef > 0) ? "is-valid" : ""); _ck(_v, 67, 0, currVal_52, currVal_53); var currVal_54 = "volbef"; var currVal_55 = _co.volbef; _ck(_v, 71, 0, currVal_54, currVal_55); var currVal_63 = "form-control"; var currVal_64 = (((_co.volbef + _co.depvol) == _co.volaft) ? "is-valid" : ""); _ck(_v, 81, 0, currVal_63, currVal_64); var currVal_65 = "volaft"; var currVal_66 = _co.volaft; _ck(_v, 85, 0, currVal_65, currVal_66); var currVal_68 = (_co.validateAddBtn() ? "btn btn-warning" : "btn btn-outline-danger"); _ck(_v, 90, 0, currVal_68); var currVal_69 = (((_co.volBreak == null) ? null : _co.volBreak.length) > 0); _ck(_v, 93, 0, currVal_69); var currVal_70 = _co.load; _ck(_v, 96, 0, currVal_70); var currVal_72 = "btn btn-outline-primary"; var currVal_73 = (_co.validateNew() ? "btn btn-outline-primary" : "btn btn-outline-danger"); _ck(_v, 98, 0, currVal_72, currVal_73); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassPending; _ck(_v, 26, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 40, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassUntouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassTouched; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassPristine; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassDirty; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassValid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassInvalid; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).ngClassPending; _ck(_v, 52, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassUntouched; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassTouched; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassPristine; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassDirty; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassValid; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassInvalid; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).ngClassPending; _ck(_v, 66, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87).ngClassUntouched; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87).ngClassTouched; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87).ngClassPristine; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87).ngClassDirty; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87).ngClassValid; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87).ngClassInvalid; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87).ngClassPending; _ck(_v, 80, 0, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62); var currVal_67 = !_co.validateAddBtn(); _ck(_v, 89, 0, currVal_67); var currVal_71 = !_co.validateNew(); _ck(_v, 97, 0, currVal_71); }); }
function View_DvtodepComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputErr; _ck(_v, 1, 0, currVal_0); }); }
function View_DvtodepComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputSuccess; _ck(_v, 1, 0, currVal_0); }); }
function View_DvtodepComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](11, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](15, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-danger "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeBreak(_v.context.index, 1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["X"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.edepBreak[_v.context.index]; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume_discharge, "1.2-2")); _ck(_v, 6, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume_before_discharge, "1.2-2")); _ck(_v, 10, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume_after_discharge, "1.2-2")); _ck(_v, 14, 0, currVal_3); }); }
function View_DvtodepComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 15, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Depot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Discharged"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Before Discharge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume After Discharge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Remove"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.evolBreak; _ck(_v, 16, 0, currVal_0); }, null); }
function View_DvtodepComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-snowflake-o fa-2x fa-spin mt-4"], ["style", "margin-bottom: 15px"]], null, null, null, null, null))], null, null); }
function View_DvtodepComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit Transaction "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 82, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 77, "form", [["class", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "div", [["class", "form-group col-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tot. Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 7, "input", [["class", "form-control"], ["name", "voldis"], ["placeholder", "Enter Volume Discharged"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.evoldis = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 2, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 1, "h6", [["style", "margin-top:10px; border-bottom: 1px #c8ced3 solid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Breakdown (Click + button to add new entry)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 6, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "depot"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.edepotd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "edep") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "edep") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "edep") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 7, "input", [["class", "form-control"], ["name", "depvol"], ["placeholder", "Volume Discharged"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.edepvol = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](48, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](52, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Pre-Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 7, "input", [["class", "form-control"], ["name", "volbef"], ["placeholder", "Volume Before"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.evolbef = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](66, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 13, "div", [["class", "form-group col-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Post-Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 7, "input", [["class", "form-control"], ["name", "volaft"], ["placeholder", "Volume After"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 77)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 77).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 77)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 77)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 78).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 78).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 78).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.evolaft = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](76, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](77, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](78, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](80, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](82, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 3, "div", [["class", "form-group col-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 2, "button", [["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addBreak(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](85, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](88, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](91, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.edit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](93, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.inputErr != ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.inputSuccess != ""); _ck(_v, 10, 0, currVal_1); var currVal_16 = "form-control"; var currVal_17 = ((_co.evoldis > 0) ? "is-valid" : ""); _ck(_v, 24, 0, currVal_16, currVal_17); var currVal_18 = "voldis"; var currVal_19 = _co.evoldis; _ck(_v, 28, 0, currVal_18, currVal_19); var currVal_27 = "Select Depot"; var currVal_28 = _co.depdropdownSettings; var currVal_29 = _co.allDep; _ck(_v, 36, 0, currVal_27, currVal_28, currVal_29); var currVal_30 = "depot"; var currVal_31 = _co.edepotd; _ck(_v, 38, 0, currVal_30, currVal_31); var currVal_39 = "form-control"; var currVal_40 = ((_co.edepvol > 0) ? "is-valid" : ""); _ck(_v, 48, 0, currVal_39, currVal_40); var currVal_41 = "depvol"; var currVal_42 = _co.edepvol; _ck(_v, 52, 0, currVal_41, currVal_42); var currVal_50 = "form-control"; var currVal_51 = ((_co.evolbef > 0) ? "is-valid" : ""); _ck(_v, 62, 0, currVal_50, currVal_51); var currVal_52 = "volbef"; var currVal_53 = _co.evolbef; _ck(_v, 66, 0, currVal_52, currVal_53); var currVal_61 = "form-control"; var currVal_62 = (((_co.evolbef + _co.edepvol) == _co.evolaft) ? "is-valid" : ""); _ck(_v, 76, 0, currVal_61, currVal_62); var currVal_63 = "volaft"; var currVal_64 = _co.evolaft; _ck(_v, 80, 0, currVal_63, currVal_64); var currVal_66 = (_co.validateEditBtn() ? "btn btn-warning" : "btn btn-outline-danger"); _ck(_v, 85, 0, currVal_66); var currVal_67 = (((_co.evolBreak == null) ? null : _co.evolBreak.length) > 0); _ck(_v, 88, 0, currVal_67); var currVal_68 = _co.eload; _ck(_v, 91, 0, currVal_68); var currVal_70 = "btn btn-outline-primary"; var currVal_71 = (_co.validateEdit() ? "btn btn-outline-primary" : "btn btn-outline-danger"); _ck(_v, 93, 0, currVal_70, currVal_71); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassPending; _ck(_v, 23, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassPending; _ck(_v, 35, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassUntouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassTouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassPristine; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassDirty; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassValid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassInvalid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassPending; _ck(_v, 47, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassUntouched; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassTouched; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassPristine; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassDirty; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassValid; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassInvalid; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassPending; _ck(_v, 61, 0, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).ngClassUntouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).ngClassTouched; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).ngClassPristine; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).ngClassDirty; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).ngClassValid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).ngClassInvalid; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).ngClassPending; _ck(_v, 75, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60); var currVal_65 = !_co.validateEditBtn(); _ck(_v, 84, 0, currVal_65); var currVal_69 = !_co.validateEdit(); _ck(_v, 92, 0, currVal_69); }); }
function View_DvtodepComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 57, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 56, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 55, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 54, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 4, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "div", [["class", "float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "button", [["class", "btn btn-outline-warning"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.refresh() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-refresh"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0Refresh"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 48, "div", [["class", "card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 45, "tabset", [], [[2, "tab-container", null]], null, null, _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TabsetComponent_0"], _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TabsetComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 180224, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, 0, 23, "tab", [["heading", "Parent Transaction"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { heading: [0, "heading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 21, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 20, "table", [["class", "table table-striped"], ["datatable", ""], ["style", "width:100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 212992, null, 0, angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { dtOptions: [0, "dtOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 13, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MV(MBLD)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DV(DBLD)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Inspector Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 0, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, 0, 19, "tab", [["heading", "Transaction"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { heading: [0, "heading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 17, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 16, "table", [["class", "table table-striped"], ["datatable", ""], ["style", "width:100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 212992, null, 0, angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { dtOptions: [0, "dtOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ID"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Shore Cert."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Discharged"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](53, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DvtodepComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 0, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["content", 2]], null, 0, null, View_DvtodepComponent_10)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["edContent", 2]], null, 0, null, View_DvtodepComponent_17))], function (_ck, _v) { var _co = _v.component; var currVal_6 = "Parent Transaction"; _ck(_v, 14, 0, currVal_6); var currVal_7 = _co.dtOptions2; _ck(_v, 17, 0, currVal_7); var currVal_8 = (((_co.nodes2 == null) ? null : _co.nodes2.length) != 0); _ck(_v, 33, 0, currVal_8); var currVal_9 = (((_co.nodes == null) ? null : _co.nodes.length) == 0); _ck(_v, 35, 0, currVal_9); var currVal_15 = "Transaction"; _ck(_v, 38, 0, currVal_15); var currVal_16 = _co.dtOptions; _ck(_v, 41, 0, currVal_16); var currVal_17 = (((_co.nodes == null) ? null : _co.nodes.length) != 0); _ck(_v, 53, 0, currVal_17); var currVal_18 = (((_co.nodes == null) ? null : _co.nodes.length) == 0); _ck(_v, 55, 0, currVal_18); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).clazz; _ck(_v, 11, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).id; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).active; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).addClass; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).role; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ariaLabelledby; _ck(_v, 13, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).id; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).active; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).addClass; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).role; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).ariaLabelledby; _ck(_v, 37, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); }); }
function View_DvtodepComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-dvtodep", [], null, null, null, View_DvtodepComponent_0, RenderType_DvtodepComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _dvtodep_component__WEBPACK_IMPORTED_MODULE_8__["DvtodepComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _global_service_service__WEBPACK_IMPORTED_MODULE_12__["GlobalServiceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DvtodepComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-dvtodep", _dvtodep_component__WEBPACK_IMPORTED_MODULE_8__["DvtodepComponent"], View_DvtodepComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/transmgt/dvtodep.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/transmgt/dvtodep.component.ts ***!
  \*****************************************************/
/*! exports provided: DvtodepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DvtodepComponent", function() { return DvtodepComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global-service.service */ "./src/app/global-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
var Node2 = /** @class */ (function () {
    function Node2() {
    }
    return Node2;
}());
var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var DvtodepComponent = /** @class */ (function () {
    function DvtodepComponent(http, modalService, router, globalservice) {
        var _this = this;
        this.http = http;
        this.modalService = modalService;
        this.router = router;
        this.globalservice = globalservice;
        this.dtOptions = {};
        this.dtOptions2 = {};
        this.jSON = JSON;
        this.searchMVDVTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDepTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.esearchMVDVTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.esearchDepTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mvdv = '';
        this.emvdv = '';
        this.policy = JSON.parse(localStorage.getItem('sessionData')) ? JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;
        // add new modal
        this.closeResult = '';
        this.dropdownSettings = {};
        this.depdropdownSettings = {};
        this.depot = '';
        this.depname = '';
        this.depvol = 0;
        this.volbef = 0;
        this.volaft = 0;
        this.mvdvd = '';
        this.depotd = [];
        this.emvdvd = '';
        this.edepotd = [];
        this.voldis = 0;
        this.volBreak = [];
        this.depBreak = [];
        this.evoldis = 0;
        this.edepot = '';
        this.edepname = '';
        this.edepvol = 0;
        this.evolbef = 0;
        this.evolaft = 0;
        this.evolBreak = [];
        this.edepBreak = [];
        this.addbtn = false;
        this.res = null;
        this.load = false;
        this.eload = false;
        this.inputSuccess = "";
        this.inputErr = "";
        this.edID = '';
        this.scurl = '';
        this.escurl = '';
        var depres = null;
        var mvdvres = null;
        this.globalservice.search('depots', this.searchDepTerm$)
            .subscribe(function (results) {
            depres = results;
            if (depres.data.depots.data.length < 1) {
                _this.searchDepTerm$.next('');
            }
            else {
                _this.allDep = depres.data.depots.data;
            }
            // this.allDep = depres.data.depots.data;
            console.log(_this.allDep);
        });
        this.globalservice.search('mv2dv-txns', this.searchMVDVTerm$)
            .subscribe(function (results) {
            mvdvres = results;
            if (mvdvres.data.mv2dvTxns.data.length < 1) {
                _this.searchMVDVTerm$.next('');
            }
            else {
                // this.allStat = statres.data.stations.data;
                _this.allMvDv = mvdvres.data.mv2dvTxns.data;
            }
            console.log(_this.allDep);
        });
        this.globalservice.search('depots', this.esearchDepTerm$)
            .subscribe(function (results) {
            depres = results;
            if (depres.data.depots.data.length < 1) {
                _this.esearchDepTerm$.next('');
            }
            else {
                _this.allDep = depres.data.depots.data;
            }
            // this.allDep = depres.data.depots.data;
            console.log(_this.allDep);
        });
        this.globalservice.search('mv2dv-txns', this.esearchMVDVTerm$)
            .subscribe(function (results) {
            mvdvres = results;
            if (mvdvres.data.mv2dvTxns.data.length < 1) {
                _this.esearchMVDVTerm$.next('');
            }
            else {
                // this.allStat = statres.data.stations.data;
                _this.allMvDv = mvdvres.data.mv2dvTxns.data;
            }
            // this.allMvDv = mvdvres.data.mv2dvTxns.data;
            console.log(_this.allDep);
        });
    }
    DvtodepComponent.prototype.refresh = function () {
        window.location.reload();
        // this.ngOnInit();
        // this.router.navigate(['/usermgt/']);
    };
    DvtodepComponent.prototype.parseMV = function (node) {
        return node.m_name + " (" + node.mbl_date + ")";
    };
    DvtodepComponent.prototype.parseDV = function (node) {
        return node.d_name + " (" + node.dbl_date + ")";
    };
    DvtodepComponent.prototype.getInspector = function (node) {
        return node.inspector_name;
    };
    DvtodepComponent.prototype.getAllNode = function (node) {
        var _this = this;
        // this.globalservice.getAllEntityFilt(node,filt)
        this.globalservice.getAllEntity(node)
            .then(function (data) {
            // this.load= false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                if (node == 'depots') {
                    _this.allDep = _this.res.data.depots.data;
                }
                if (node == 'mv2dv-txns') {
                    _this.allMvDv = _this.res.data.mv2dvTxns.data;
                }
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    DvtodepComponent.prototype.onItemSelect = function (item, nodekey, inskey) {
        console.log(item);
        if (nodekey == 'mvdv') {
            // this.mvd = item;
            this.mvdv = item.id;
        }
        if (nodekey == 'dep') {
            // this.depotd = item;
            this.depot = item.id;
            this.depname = item.name;
        }
        if (nodekey == 'emvdv') {
            // this.emvd = item;
            this.emvdv = item.id;
        }
        if (nodekey == 'edep') {
            // this.edepotd = item;
            this.edepot = item.id;
            this.edepname = item.name;
        }
    };
    DvtodepComponent.prototype.onItemDeSelect = function (item, nodekey, inskey) {
        console.log(item);
        if (nodekey == 'mvdv') {
            // this.mvd = item;
            this.mvdv = "";
        }
        if (nodekey == 'dep') {
            // this.depotd = item;
            this.depot = "";
            this.depname = "";
        }
        if (nodekey == 'emvdv') {
            // this.emvd = item;
            this.emvdv = "";
        }
        if (nodekey == 'edep') {
            // this.edepotd = item;
            this.edepot = "";
            this.edepname = "";
        }
    };
    DvtodepComponent.prototype.onFilterChange = function (item, nodekey) {
        console.log(item);
        if (nodekey == 'mvdv') {
            this.searchMVDVTerm$.next(item);
        }
        if (nodekey == 'dep') {
            this.searchDepTerm$.next(item);
        }
        if (nodekey == 'emvdv') {
            this.esearchMVDVTerm$.next(item);
        }
        if (nodekey == 'edep') {
            this.esearchDepTerm$.next(item);
        }
    };
    DvtodepComponent.prototype.ngOnInit = function () {
        var that = this;
        this.getAllNode("depots");
        this.getAllNode("mv2dv-txns");
        // =========================================
        this.dropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'mbl_date',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            closeDropDownOnSelection: true,
            itemsShowLimit: 3,
            allowSearchFilter: true,
            clearSearchFilter: true
        };
        this.depdropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true,
            clearSearchFilter: true
        };
        // =========================================
        // this.dtOptions = {
        //   pageLength: 5,
        //   pagingType: 'full_numbers'
        // };
        console.log('resp');
        this.dtOptions = {
            lengthMenu: [[1, 10, 25, 50, 100, 500, 1000], [1, 10, 25, 50, 100, 500, 1000]],
            pagingType: 'full_numbers',
            pageLength: 25,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                that.http
                    .post(
                // 'https://angular-datatables-demo-server.herokuapp.com/',
                'https://app05.sahara-group.com/pjh-api/public/api/dt/dv2dp-txns', dataTablesParameters, 
                // {Authorization: `Bearer ${that.globalservice.sessionToken}`}
                {
                    // params: params,
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', "Bearer " + localStorage.getItem('sessionToken'))
                }).subscribe(function (resp) {
                    that.nodes = resp.data;
                    console.log(resp);
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: []
                    });
                }, function (err) { console.log(err); });
            },
            columns: [{ data: 'id' },
                { data: 'mv2dv_txn_id' },
                { data: 'volume_discharged' },
                { data: 'shore_cert_url' }]
        };
        // -------------------------------------------------------------------------
        this.dtOptions2 = {
            lengthMenu: [[1, 10, 25, 50, 100, 500, 1000], [1, 10, 25, 50, 100, 500, 1000]],
            pagingType: 'full_numbers',
            pageLength: 25,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                that.http
                    .post(
                // 'https://angular-datatables-demo-server.herokuapp.com/',
                'https://app05.sahara-group.com/pjh-api/public/api/dt/inspector-mv2dv-txn-views', dataTablesParameters, 
                // {Authorization: `Bearer ${that.globalservice.sessionToken}`}
                {
                    // params: params,
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', "Bearer " + localStorage.getItem('sessionToken'))
                }).subscribe(function (resp2) {
                    that.nodes2 = resp2.data;
                    console.log('parent');
                    console.log(resp2);
                    callback({
                        recordsTotal: resp2.recordsTotal,
                        recordsFiltered: resp2.recordsFiltered,
                        data: []
                    });
                }, function (err) { console.log(err); });
            },
            columns: [
                // { data: 'id' },
                { data: 'mbl_date' },
                { data: 'dbl_date' },
                { data: 'm_name' },
                { data: 'd_name' },
                { data: 'volume' },
                { data: 'owner' },
            ]
        };
        console.log('parentdone');
    };
    DvtodepComponent.prototype.validateEditBtn = function () {
        var voter = 0;
        if (this.edepot.length >= 2) {
            voter++;
        }
        if (this.evolbef > 0) {
            voter++;
        }
        if (this.evolaft > 0) {
            voter++;
        }
        if (this.edepvol > 0) {
            voter++;
        }
        if ((this.evolbef + this.edepvol) == this.evolaft) {
            voter++;
        }
        if (voter < 5) {
            return false;
        }
        else {
            return true;
        }
    };
    DvtodepComponent.prototype.validateAddBtn = function () {
        var voter = 0;
        if (this.depot.length >= 2) {
            voter++;
        }
        if (this.volbef > 0) {
            voter++;
        }
        if (this.volaft > 0) {
            voter++;
        }
        if (this.depvol > 0) {
            voter++;
        }
        if ((this.volbef + this.depvol) == this.volaft) {
            voter++;
        }
        if (voter < 5) {
            return false;
        }
        else {
            return true;
        }
    };
    DvtodepComponent.prototype.nameById = function (id) {
        // if(this.allDep.length > 0){
        // return this.allDep.find(o => o.id === id).name;
        return id;
        // }
        // console.log(this.allDep);
        // return ""
    };
    DvtodepComponent.prototype.removeBreak = function (ind, ed) {
        if (ed == 1) {
            this.evolBreak.splice(ind, 1);
            this.edepBreak.splice(ind, 1);
        }
        else {
            this.volBreak.splice(ind, 1);
            this.depBreak.splice(ind, 1);
        }
    };
    DvtodepComponent.prototype.addBreak = function (ed) {
        if (ed == 1) {
            var breakObj = {
                depot_id: this.edepot,
                volume_discharge: this.edepvol,
                volume_before_discharge: this.evolbef,
                volume_after_discharge: this.evolaft
            };
            this.evolBreak.push(breakObj);
            this.edepBreak.push(this.edepname);
            this.evolbef = null;
            this.evolaft = null;
            this.edepot = '';
            this.edepotd = [];
            this.edepvol = null;
        }
        else {
            var breakObj = {
                depot_id: this.depot,
                volume_discharge: this.depvol,
                volume_before_discharge: this.volbef,
                volume_after_discharge: this.volaft
            };
            this.volBreak.push(breakObj);
            this.depBreak.push(this.depname);
            this.volbef = null;
            this.volaft = null;
            this.depot = '';
            this.depotd = [];
            this.depvol = null;
        }
    };
    DvtodepComponent.prototype.volSum = function (ed) {
        // console.log(this.volBreak.reduce((prev, cur) => prev + cur.volume, 0));
        if (ed == 1) {
            return this.evolBreak.reduce(function (prev, cur) { return prev + cur.volume_discharge; }, 0);
        }
        else {
            return this.volBreak.reduce(function (prev, cur) { return prev + cur.volume_discharge; }, 0);
        }
    };
    DvtodepComponent.prototype.processFile = function (ev, ed) {
        console.log(ev);
        var that = this;
        var file = ev.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            if (ed) {
                that.escurl = reader.result;
            }
            else {
                that.scurl = reader.result;
            }
            console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    DvtodepComponent.prototype.validateNew = function () {
        var voter = 0;
        if (this.voldis > 0) {
            voter++;
        }
        if (this.parentVol >= this.voldis) {
            voter++;
        }
        if (this.volSum() == this.voldis) {
            voter++;
        }
        if (this.scurl.length > 0) {
            voter++;
        }
        if (this.parentID.length > 0) {
            voter++;
        }
        if (this.owner.length > 0) {
            voter++;
        }
        // console.log(voter);
        // console.log(this.volSum());
        if (voter < 6) {
            this.inputErr = "Please Ensure All Fields Are Correctly Filled";
            return false;
        }
        else {
            this.inputErr = "";
            return true;
        }
    };
    DvtodepComponent.prototype.validateEdit = function () {
        var voter = 0;
        if (this.evoldis > 0) {
            voter++;
        }
        // if(this.eparentVol >= this.evoldis){
        //   voter++;
        // }
        if (this.volSum(1) == this.evoldis) {
            voter++;
        }
        // if(this.escurl.length > 0){
        //   voter++;
        // }
        if (this.eparentID.length > 0) {
            voter++;
        }
        if (this.eowner.length > 0) {
            voter++;
        }
        // console.log(voter);
        if (voter < 4) {
            this.inputErr = "Please Ensure All Fields Are Correctly Filled";
            return false;
        }
        else {
            this.inputErr = "";
            return true;
        }
    };
    DvtodepComponent.prototype.editModal = function (edContent, node) {
        this.inputErr = "";
        this.inputSuccess = "";
        var evolbr = JSON.parse(this.globalservice.decodeHtml(node.volume_breakdown));
        console.log(evolbr);
        this.evoldis = node.volume_discharged;
        this.escurl = node.shore_cert_url;
        this.mvdvEdName = node.mv2dv_txn.mbl_date;
        this.evolBreak = evolbr;
        var that = this;
        this.evolBreak.forEach(function (part, index, theArray) {
            // that.edepBreak[index] = that.getByID(theArray[index].depot_id, 'depots');
            that.getByID(theArray[index].depot_id, 'depots', index);
        });
        console.log(this.evolBreak);
        console.log(this.edepBreak);
        this.edID = node.id;
        this.eparentID = node.mv2dv_txn_id;
        this.eowner = node.owner;
        this.eparentVol = parseInt(node.mv2dv_txn.volume);
        console.log(this.eparentID);
        console.log(this.eowner);
        console.log(node);
        this.modalService.open(edContent, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    DvtodepComponent.prototype.getByID = function (id, node, ind, i) {
        var _this = this;
        var that = this;
        this.globalservice.getNodeByID(id, node)
            .then(function (data) {
            _this.eload = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status === 'success') {
                if (node === 'depots') {
                    if (_this.res.data.depot) {
                        _this.edepBreak[ind] = _this.res.data.depot.name;
                    }
                    else {
                        _this.edepBreak[ind] = 'Not Found';
                    }
                }
                else {
                    return _this.res.data[node].name ? _this.res.data[node].name : 'Not Found';
                }
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .finally(function () {
            _this.eload = false;
        });
    };
    DvtodepComponent.prototype.edit = function () {
        var _this = this;
        var that = this;
        console.log(this.edID);
        var nodeObj = {
            mv2dv_txn_id: this.eparentID,
            owner: this.eowner,
            volume_discharged: this.evoldis,
            // shore_cert_url: this.escurl,
            volume_breakdown: JSON.stringify(this.evolBreak)
        };
        console.log(nodeObj);
        // return;
        this.eload = true;
        this.globalservice.editNode(this.edID, nodeObj, 'dv2dp-txns')
            .then(function (data) {
            _this.eload = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.inputSuccess = "Transaction Edited Successfully";
                setTimeout(function () {
                    that.modalService.dismissAll();
                    window.location.reload();
                }, 1000);
                //   this.globalservice.sessionToken = this.res.data.token;
                //   this.router.navigate(['/usermgt/']);
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .finally(function () {
            _this.eload = false;
        });
    };
    DvtodepComponent.prototype.del = function (node) {
        var _this = this;
        var r = confirm('Confirm this operation. It cannot be undone');
        if (r == false) {
            return false;
        }
        ;
        console.log(node);
        this.globalservice.delNode(node.id, "dv2dp-txns")
            .then(function (data) {
            // this.load= false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.inputSuccess = "Transaction Deleted Successfully";
                setTimeout(function () {
                    alert("Transaction Deleted Successfully");
                    window.location.reload();
                }, 1000);
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    DvtodepComponent.prototype.saveNew = function () {
        var _this = this;
        var nodeObj = {
            mv2dv_txn_id: this.parentID,
            owner: this.owner,
            // mv2dv_txn_id: this.mvdv,
            volume_discharged: this.voldis,
            shore_cert_url: this.scurl,
            volume_breakdown: JSON.stringify(this.volBreak)
        };
        console.log(nodeObj);
        var that = this;
        // return;
        this.load = true;
        this.globalservice.newNode(nodeObj, 'dv2dp-txns')
            .then(function (data) {
            _this.load = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.inputSuccess = "Transaction Created Successfully";
                setTimeout(function () {
                    that.modalService.dismissAll();
                    window.location.reload();
                }, 1000);
                //   this.globalservice.sessionToken = this.res.data.token;
                //   this.router.navigate(['/usermgt/']);
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.load = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.load = false;
        })
            .finally(function () {
            _this.load = false;
        });
    };
    DvtodepComponent.prototype.open = function (content, node) {
        // this.modalService.open(content, { size: 'lg' });
        this.parentID = node.mv2dv_txn_id;
        this.owner = node.owner;
        this.parentVol = parseInt(node.volume);
        console.log(this.parentID);
        console.log(this.owner);
        console.log(node);
        this.inputErr = "";
        this.inputSuccess = "";
        this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    return DvtodepComponent;
}());



/***/ }),

/***/ "./src/app/views/transmgt/mvtodv.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/views/transmgt/mvtodv.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_MvtodvComponent, View_MvtodvComponent_0, View_MvtodvComponent_Host_0, MvtodvComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MvtodvComponent", function() { return RenderType_MvtodvComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MvtodvComponent_0", function() { return View_MvtodvComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MvtodvComponent_Host_0", function() { return View_MvtodvComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvtodvComponentNgFactory", function() { return MvtodvComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ng-multiselect-dropdown/ng-multiselect-dropdown.ngfactory */ "./node_modules/ng-multiselect-dropdown/ng-multiselect-dropdown.ngfactory.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony import */ var _mvtodv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mvtodv.component */ "./src/app/views/transmgt/mvtodv.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../global-service.service */ "./src/app/global-service.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 











var styles_MvtodvComponent = [];
var RenderType_MvtodvComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_MvtodvComponent, data: {} });

function View_MvtodvComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 36)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0New Transaction"]))], null, null); }
function View_MvtodvComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-primary btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editModal(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 37), _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-pencil"]], null, null, null, null, null))], null, null); }
function View_MvtodvComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-primary btn-sm"], ["title", "Assign Inspectors"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.insModal(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 38), _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-file"]], null, null, null, null, null))], null, null); }
function View_MvtodvComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-danger btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.del(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-trash"]], null, null, null, null, null))], null, null); }
function View_MvtodvComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 22, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](10, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](13, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.policy["mv2dv-txns"].update; _ck(_v, 18, 0, currVal_6); var currVal_7 = _co.policy["mv2dv-txns"].update; _ck(_v, 20, 0, currVal_7); var currVal_8 = _co.policy["mv2dv-txns"].delete; _ck(_v, 22, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.parseMV(_v.context.$implicit); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.parseDV(_v.context.$implicit); _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.mbl_volume, "1.2-2")); _ck(_v, 6, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.dbl_volume, "1.2-2")); _ck(_v, 9, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.volume_discharged, "1.2-2")); _ck(_v, 12, 0, currVal_4); var currVal_5 = _co.parseProd(_v.context.$implicit); _ck(_v, 15, 0, currVal_5); }); }
function View_MvtodvComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; _ck(_v, 2, 0, currVal_0); }, null); }
function View_MvtodvComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "td", [["class", "no-data-available"], ["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No data!"]))], null, null); }
function View_MvtodvComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputErr; _ck(_v, 1, 0, currVal_0); }); }
function View_MvtodvComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputSuccess; _ck(_v, 1, 0, currVal_0); }); }
function View_MvtodvComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](10, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "button", [["class", "btn btn-danger "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeBreak(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["X"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.depBreak[_v.context.index]; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.owner; _ck(_v, 6, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume, "1.2-2")); _ck(_v, 9, 0, currVal_2); }); }
function View_MvtodvComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Depot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Remove"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.volBreak; _ck(_v, 14, 0, currVal_0); }, null); }
function View_MvtodvComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-snowflake-o fa-2x fa-spin mt-4"], ["style", "margin-bottom: 15px"]], null, null, null, null, null))], null, null); }
function View_MvtodvComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Create Transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 147, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 142, "form", [["class", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 6, "div", [["class", "form-group  col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "mv"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.mvd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "mv") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "mv") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "mv") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 6, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "dv"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.dvd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "dv") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "dv") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "dv") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 15, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 14, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 13, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MV BLDate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 16777216, null, null, 9, "input", [["class", "form-control"], ["name", "mvbld"], ["ngbDatepicker", ""], ["placeholder", "Enter MV BLDate (yyyy-mm-dd)"]], [[8, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).manualDateChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("change" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).manualDateChange($event.target.value, true) !== false);
        ad = (pd_5 && ad);
    } if (("focus" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).onFocus() !== false);
        ad = (pd_6 && ad);
    } if (("blur" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).onBlur() !== false);
        ad = (pd_7 && ad);
    } if (("ngModelChange" === en)) {
        var pd_8 = ((_co.mvbldMod = $event) !== false);
        ad = (pd_8 && ad);
    } if (("click" === en)) {
        var pd_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).toggle() !== false);
        ad = (pd_9 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerConfig"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 671744, [["dmv", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]], { maxDate: [0, "maxDate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 15, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 14, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 13, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DV BLDate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 16777216, null, null, 9, "input", [["class", "form-control"], ["name", "dvbld"], ["ngbDatepicker", ""], ["placeholder", "Enter DV BLDate (yyyy-mm-dd)"]], [[8, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).manualDateChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("change" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).manualDateChange($event.target.value, true) !== false);
        ad = (pd_5 && ad);
    } if (("focus" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).onFocus() !== false);
        ad = (pd_6 && ad);
    } if (("blur" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).onBlur() !== false);
        ad = (pd_7 && ad);
    } if (("ngModelChange" === en)) {
        var pd_8 = ((_co.dvbldMod = $event) !== false);
        ad = (pd_8 && ad);
    } if (("click" === en)) {
        var pd_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).toggle() !== false);
        ad = (pd_9 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerConfig"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 671744, [["ddv", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]], { maxDate: [0, "maxDate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MV Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 7, "input", [["class", "form-control"], ["name", "mvbldv"], ["placeholder", "Enter MV BLDate Volume"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.mvbldv = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](75, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DV Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 7, "input", [["class", "form-control"], ["name", "dvbldv"], ["placeholder", "Enter DV BLDate Volume"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 84)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 84).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 84)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 84)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 85).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 85).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 85).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.dvbldv = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](85, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](87, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](89, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tot. Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 7, "input", [["class", "form-control"], ["name", "voldis"], ["placeholder", "Enter Volume Discharged"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 98)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 98).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 98)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 98)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 99).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 99).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 99).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.voldis = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](97, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](98, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](99, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](101, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](103, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 6, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](105, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "prod"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.prodd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "prod") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "prod") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "prod") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](106, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](108, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](110, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 2, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](112, 0, null, null, 1, "h6", [["style", "margin-top:10px; border-bottom: 1px #c8ced3 solid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Breakdown (Click + button to add new entry)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 12, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 11, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, null, 10, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 6, "input", [["class", "form-control"], ["name", "own"], ["placeholder", "Product Owner"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.own = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](121, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](122, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](124, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](126, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 6, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](128, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "depot"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 129).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.depotd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "dep") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "dep") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "dep") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](129, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](131, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](133, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](134, 0, null, null, 13, "div", [["class", "form-group col-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](136, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](137, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](138, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](140, 0, null, null, 7, "input", [["class", "form-control"], ["name", "depvol"], ["placeholder", "Volume"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 142)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 142).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 142)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 142)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.depvol = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](141, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](142, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](143, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](145, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](147, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](148, 0, null, null, 3, "div", [["class", "form-group col-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](149, 0, null, null, 2, "button", [["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addBreak() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](150, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](153, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](154, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](156, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](157, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveNew() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](158, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](160, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.inputErr != ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.inputSuccess != ""); _ck(_v, 10, 0, currVal_1); var currVal_16 = "Select Mother Vessel"; var currVal_17 = _co.dropdownSettings; var currVal_18 = _co.allMv; _ck(_v, 18, 0, currVal_16, currVal_17, currVal_18); var currVal_19 = "mv"; var currVal_20 = _co.mvd; _ck(_v, 20, 0, currVal_19, currVal_20); var currVal_28 = "Select Daughter Vessel"; var currVal_29 = _co.dropdownSettings; var currVal_30 = _co.allDv; _ck(_v, 25, 0, currVal_28, currVal_29, currVal_30); var currVal_31 = "dv"; var currVal_32 = _co.dvd; _ck(_v, 27, 0, currVal_31, currVal_32); var currVal_41 = "form-control"; var currVal_42 = (((_co.mvbld.length >= 2) && _co.valdate) ? "is-valid" : ""); _ck(_v, 38, 0, currVal_41, currVal_42); var currVal_43 = _co.maxdate; _ck(_v, 40, 0, currVal_43); var currVal_44 = "mvbld"; var currVal_45 = _co.mvbldMod; _ck(_v, 43, 0, currVal_44, currVal_45); var currVal_54 = "form-control"; var currVal_55 = (((_co.dvbld.length >= 2) && _co.valdate) ? "is-valid" : ""); _ck(_v, 54, 0, currVal_54, currVal_55); var currVal_56 = _co.maxdate; _ck(_v, 56, 0, currVal_56); var currVal_57 = "dvbld"; var currVal_58 = _co.dvbldMod; _ck(_v, 59, 0, currVal_57, currVal_58); var currVal_66 = "form-control"; var currVal_67 = (((_co.mvbldv > 0) && (_co.mvbldv >= _co.dvbldv)) ? "is-valid" : ""); _ck(_v, 69, 0, currVal_66, currVal_67); var currVal_68 = "mvbldv"; var currVal_69 = _co.mvbldv; _ck(_v, 73, 0, currVal_68, currVal_69); var currVal_77 = "form-control"; var currVal_78 = ((((_co.dvbldv > 0) && (_co.mvbldv >= _co.dvbldv)) && (_co.dvbldv >= _co.voldis)) ? "is-valid" : ""); _ck(_v, 83, 0, currVal_77, currVal_78); var currVal_79 = "dvbldv"; var currVal_80 = _co.dvbldv; _ck(_v, 87, 0, currVal_79, currVal_80); var currVal_88 = "form-control"; var currVal_89 = (((_co.voldis > 0) && (_co.dvbldv >= _co.voldis)) ? "is-valid" : ""); _ck(_v, 97, 0, currVal_88, currVal_89); var currVal_90 = "voldis"; var currVal_91 = _co.voldis; _ck(_v, 101, 0, currVal_90, currVal_91); var currVal_99 = "Select Product"; var currVal_100 = _co.dropdownSettings; var currVal_101 = _co.allProd; _ck(_v, 106, 0, currVal_99, currVal_100, currVal_101); var currVal_102 = "prod"; var currVal_103 = _co.prodd; _ck(_v, 108, 0, currVal_102, currVal_103); var currVal_111 = "form-control"; var currVal_112 = ((_co.own.length >= 2) ? "is-valid" : ""); _ck(_v, 121, 0, currVal_111, currVal_112); var currVal_113 = "own"; var currVal_114 = _co.own; _ck(_v, 124, 0, currVal_113, currVal_114); var currVal_122 = "Select Depot"; var currVal_123 = _co.dropdownSettings; var currVal_124 = _co.allDep; _ck(_v, 129, 0, currVal_122, currVal_123, currVal_124); var currVal_125 = "depot"; var currVal_126 = _co.depotd; _ck(_v, 131, 0, currVal_125, currVal_126); var currVal_134 = "form-control"; var currVal_135 = ((_co.depvol > 0) ? "is-valid" : ""); _ck(_v, 141, 0, currVal_134, currVal_135); var currVal_136 = "depvol"; var currVal_137 = _co.depvol; _ck(_v, 145, 0, currVal_136, currVal_137); var currVal_139 = (_co.validateAddBtn() ? "btn btn-warning" : "btn btn-outline-danger"); _ck(_v, 150, 0, currVal_139); var currVal_140 = (((_co.volBreak == null) ? null : _co.volBreak.length) > 0); _ck(_v, 153, 0, currVal_140); var currVal_141 = _co.load; _ck(_v, 156, 0, currVal_141); var currVal_143 = "btn btn-outline-primary"; var currVal_144 = (_co.validateNew() ? "btn btn-outline-primary" : "btn btn-outline-danger"); _ck(_v, 158, 0, currVal_143, currVal_144); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassPending; _ck(_v, 17, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassUntouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassTouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPristine; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassDirty; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassValid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassInvalid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPending; _ck(_v, 24, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).disabled; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassUntouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassTouched; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassPristine; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassDirty; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassValid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassInvalid; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 36, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).disabled; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassUntouched; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassTouched; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassPristine; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassDirty; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassValid; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassInvalid; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassPending; _ck(_v, 52, 0, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53); var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassUntouched; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassTouched; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassPristine; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassDirty; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassValid; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassInvalid; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassPending; _ck(_v, 68, 0, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65); var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassUntouched; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassTouched; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassPristine; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassDirty; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassValid; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassInvalid; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassPending; _ck(_v, 82, 0, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76); var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassUntouched; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassTouched; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassPristine; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassDirty; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassValid; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassInvalid; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassPending; _ck(_v, 96, 0, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87); var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassUntouched; var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassTouched; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassPristine; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassDirty; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassValid; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassInvalid; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassPending; _ck(_v, 105, 0, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98); var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassUntouched; var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassTouched; var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassPristine; var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassDirty; var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassValid; var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassInvalid; var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassPending; _ck(_v, 120, 0, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110); var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassUntouched; var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassTouched; var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassPristine; var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassDirty; var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassValid; var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassInvalid; var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassPending; _ck(_v, 128, 0, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121); var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassUntouched; var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassTouched; var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassPristine; var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassDirty; var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassValid; var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassInvalid; var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassPending; _ck(_v, 140, 0, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133); var currVal_138 = !_co.validateAddBtn(); _ck(_v, 149, 0, currVal_138); var currVal_142 = !_co.validateNew(); _ck(_v, 157, 0, currVal_142); }); }
function View_MvtodvComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputErr; _ck(_v, 1, 0, currVal_0); }); }
function View_MvtodvComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputSuccess; _ck(_v, 1, 0, currVal_0); }); }
function View_MvtodvComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](10, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "button", [["class", "btn btn-danger "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeBreak(_v.context.index, 1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["X"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.edepBreak[_v.context.index]; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.owner; _ck(_v, 6, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume, "1.2-2")); _ck(_v, 9, 0, currVal_2); }); }
function View_MvtodvComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Depot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Remove"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.evolBreak; _ck(_v, 14, 0, currVal_0); }, null); }
function View_MvtodvComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-snowflake-o fa-2x fa-spin mt-4"], ["style", "margin-bottom: 15px"]], null, null, null, null, null))], null, null); }
function View_MvtodvComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit Transaction "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 147, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 142, "form", [["class", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 6, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "mv"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.emvd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "emv") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "emv") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "emv") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 6, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "dv"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.edvd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "edv") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "edv") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "edv") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 15, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 14, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 13, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MV BLDate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 16777216, null, null, 9, "input", [["class", "form-control"], ["name", "mvbld"], ["ngbDatepicker", ""]], [[8, "placeholder", 0], [8, "value", 0], [8, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "select"], [null, "ngModelChange"], [null, "click"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).manualDateChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("change" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).manualDateChange($event.target.value, true) !== false);
        ad = (pd_5 && ad);
    } if (("focus" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).onFocus() !== false);
        ad = (pd_6 && ad);
    } if (("blur" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).onBlur() !== false);
        ad = (pd_7 && ad);
    } if (("select" === en)) {
        var pd_8 = (_co.onDateSelected("em") !== false);
        ad = (pd_8 && ad);
    } if (("ngModelChange" === en)) {
        var pd_9 = ((_co.emvbldMod = $event) !== false);
        ad = (pd_9 && ad);
    } if (("click" === en)) {
        var pd_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).toggle() !== false);
        ad = (pd_10 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerConfig"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 671744, [["edmv", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]], { maxDate: [0, "maxDate"], startDate: [1, "startDate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 15, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 14, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 13, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DV BLDate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 16777216, null, null, 9, "input", [["class", "form-control"], ["name", "dvbld"], ["ngbDatepicker", ""]], [[8, "placeholder", 0], [8, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "select"], [null, "click"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).manualDateChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("change" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).manualDateChange($event.target.value, true) !== false);
        ad = (pd_5 && ad);
    } if (("focus" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).onFocus() !== false);
        ad = (pd_6 && ad);
    } if (("blur" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).onBlur() !== false);
        ad = (pd_7 && ad);
    } if (("ngModelChange" === en)) {
        var pd_8 = ((_co.edvbldMod = $event) !== false);
        ad = (pd_8 && ad);
    } if (("select" === en)) {
        var pd_9 = (_co.onDateSelected("ed") !== false);
        ad = (pd_9 && ad);
    } if (("click" === en)) {
        var pd_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).toggle() !== false);
        ad = (pd_10 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerConfig"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 671744, [["eddv", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]], { maxDate: [0, "maxDate"], startDate: [1, "startDate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MV Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 7, "input", [["class", "form-control"], ["name", "mvbldv"], ["placeholder", "Enter MV BLDate Volume"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.emvbldv = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](75, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DV Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 7, "input", [["class", "form-control"], ["name", "dvbldv"], ["placeholder", "Enter DV BLDate Volume"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 84)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 84).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 84)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 84)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 85).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 85).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 85).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.edvbldv = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](85, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](87, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](89, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 13, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tot. Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 7, "input", [["class", "form-control"], ["name", "voldis"], ["placeholder", "Enter Volume Discharged"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 98)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 98).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 98)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 98)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 99).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 99).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 99).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.evoldis = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](97, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](98, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](99, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](101, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](103, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 6, "div", [["class", "form-group col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](105, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "prod"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.eprodd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "eprod") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "eprod") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "eprod") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](106, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](108, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](110, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 2, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](112, 0, null, null, 1, "h6", [["style", "margin-top:10px; border-bottom: 1px #c8ced3 solid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Breakdown (Click + button to add new entry)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 12, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 11, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, null, 10, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 6, "input", [["class", "form-control"], ["name", "own"], ["placeholder", "Product Owner"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.eown = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](121, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](122, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](124, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](126, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 6, "div", [["class", "form-group col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](128, 0, null, null, 5, "ng-multiselect-dropdown", [["name", "depot"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 129).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.edepotd = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "edep") !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "edep") !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "edep") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](129, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](131, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](133, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](134, 0, null, null, 13, "div", [["class", "form-group col-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 12, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](136, 0, null, null, 11, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](137, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](138, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](140, 0, null, null, 7, "input", [["class", "form-control"], ["name", "depvol"], ["placeholder", "Volume"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 142)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 142).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 142)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 142)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.edepvol = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](141, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](142, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](143, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](145, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](147, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](148, 0, null, null, 3, "div", [["class", "form-group col-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](149, 0, null, null, 2, "button", [["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addBreak(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](150, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](153, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](154, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](156, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](157, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.edit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](158, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](160, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.inputErr != ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.inputSuccess != ""); _ck(_v, 10, 0, currVal_1); var currVal_16 = _co.mvEdName; var currVal_17 = _co.dropdownSettings; var currVal_18 = _co.allMv; _ck(_v, 18, 0, currVal_16, currVal_17, currVal_18); var currVal_19 = "mv"; var currVal_20 = _co.emvd; _ck(_v, 20, 0, currVal_19, currVal_20); var currVal_28 = _co.dvEdName; var currVal_29 = _co.dropdownSettings; var currVal_30 = _co.allDv; _ck(_v, 25, 0, currVal_28, currVal_29, currVal_30); var currVal_31 = "dv"; var currVal_32 = _co.edvd; _ck(_v, 27, 0, currVal_31, currVal_32); var currVal_43 = "form-control"; var currVal_44 = (((_co.emvbld.length >= 2) && _co.evaldate) ? "is-valid" : ""); _ck(_v, 38, 0, currVal_43, currVal_44); var currVal_45 = _co.maxdate; var currVal_46 = _co.edmvEd; _ck(_v, 40, 0, currVal_45, currVal_46); var currVal_47 = "mvbld"; var currVal_48 = _co.emvbldMod; _ck(_v, 43, 0, currVal_47, currVal_48); var currVal_58 = "form-control"; var currVal_59 = (((_co.edvbld.length >= 2) && _co.evaldate) ? "is-valid" : ""); _ck(_v, 54, 0, currVal_58, currVal_59); var currVal_60 = _co.maxdate; var currVal_61 = _co.eddvEd; _ck(_v, 56, 0, currVal_60, currVal_61); var currVal_62 = "dvbld"; var currVal_63 = _co.edvbldMod; _ck(_v, 59, 0, currVal_62, currVal_63); var currVal_71 = "form-control"; var currVal_72 = (((_co.emvbldv > 0) && (_co.emvbldv >= _co.edvbldv)) ? "is-valid" : ""); _ck(_v, 69, 0, currVal_71, currVal_72); var currVal_73 = "mvbldv"; var currVal_74 = _co.emvbldv; _ck(_v, 73, 0, currVal_73, currVal_74); var currVal_82 = "form-control"; var currVal_83 = ((((_co.edvbldv > 0) && (_co.emvbldv >= _co.edvbldv)) && (_co.edvbldv >= _co.evoldis)) ? "is-valid" : ""); _ck(_v, 83, 0, currVal_82, currVal_83); var currVal_84 = "dvbldv"; var currVal_85 = _co.edvbldv; _ck(_v, 87, 0, currVal_84, currVal_85); var currVal_93 = "form-control"; var currVal_94 = (((_co.evoldis > 0) && (_co.edvbldv >= _co.evoldis)) ? "is-valid" : ""); _ck(_v, 97, 0, currVal_93, currVal_94); var currVal_95 = "voldis"; var currVal_96 = _co.evoldis; _ck(_v, 101, 0, currVal_95, currVal_96); var currVal_104 = _co.prodEdName; var currVal_105 = _co.dropdownSettings; var currVal_106 = _co.allProd; _ck(_v, 106, 0, currVal_104, currVal_105, currVal_106); var currVal_107 = "prod"; var currVal_108 = _co.eprodd; _ck(_v, 108, 0, currVal_107, currVal_108); var currVal_116 = "form-control"; var currVal_117 = ((_co.eown.length >= 2) ? "is-valid" : ""); _ck(_v, 121, 0, currVal_116, currVal_117); var currVal_118 = "own"; var currVal_119 = _co.eown; _ck(_v, 124, 0, currVal_118, currVal_119); var currVal_127 = "Select Depot"; var currVal_128 = _co.dropdownSettings; var currVal_129 = _co.allDep; _ck(_v, 129, 0, currVal_127, currVal_128, currVal_129); var currVal_130 = "depot"; var currVal_131 = _co.edepotd; _ck(_v, 131, 0, currVal_130, currVal_131); var currVal_139 = "form-control"; var currVal_140 = ((_co.edepvol > 0) ? "is-valid" : ""); _ck(_v, 141, 0, currVal_139, currVal_140); var currVal_141 = "depvol"; var currVal_142 = _co.edepvol; _ck(_v, 145, 0, currVal_141, currVal_142); var currVal_144 = (_co.validateEditBtn() ? "btn btn-warning" : "btn btn-outline-danger"); _ck(_v, 150, 0, currVal_144); var currVal_145 = (((_co.evolBreak == null) ? null : _co.evolBreak.length) > 0); _ck(_v, 153, 0, currVal_145); var currVal_146 = _co.eload; _ck(_v, 156, 0, currVal_146); var currVal_148 = "btn btn-outline-primary"; var currVal_149 = (_co.validateEdit() ? "btn btn-outline-primary" : "btn btn-outline-danger"); _ck(_v, 158, 0, currVal_148, currVal_149); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassPending; _ck(_v, 17, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassUntouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassTouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPristine; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassDirty; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassValid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassInvalid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPending; _ck(_v, 24, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.edmvEd, ""); var currVal_34 = _co.emvbld; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).disabled; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassUntouched; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassTouched; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassPristine; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassDirty; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassValid; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassInvalid; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 36, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42); var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.eddvEd, ""); var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).disabled; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassUntouched; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassTouched; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassPristine; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassDirty; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassValid; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassInvalid; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassPending; _ck(_v, 52, 0, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassUntouched; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassTouched; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassPristine; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassDirty; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassValid; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassInvalid; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 75).ngClassPending; _ck(_v, 68, 0, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70); var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassUntouched; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassTouched; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassPristine; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassDirty; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassValid; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassInvalid; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 89).ngClassPending; _ck(_v, 82, 0, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81); var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassUntouched; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassTouched; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassPristine; var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassDirty; var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassValid; var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassInvalid; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).ngClassPending; _ck(_v, 96, 0, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92); var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassUntouched; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassTouched; var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassPristine; var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassDirty; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassValid; var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassInvalid; var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 110).ngClassPending; _ck(_v, 105, 0, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103); var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassUntouched; var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassTouched; var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassPristine; var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassDirty; var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassValid; var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassInvalid; var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassPending; _ck(_v, 120, 0, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115); var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassUntouched; var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassTouched; var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassPristine; var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassDirty; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassValid; var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassInvalid; var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 133).ngClassPending; _ck(_v, 128, 0, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126); var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassUntouched; var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassTouched; var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassPristine; var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassDirty; var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassValid; var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassInvalid; var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 147).ngClassPending; _ck(_v, 140, 0, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138); var currVal_143 = !_co.validateEditBtn(); _ck(_v, 149, 0, currVal_143); var currVal_147 = !_co.validateEdit(); _ck(_v, 157, 0, currVal_147); }); }
function View_MvtodvComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputErr; _ck(_v, 1, 0, currVal_0); }); }
function View_MvtodvComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputSuccess; _ck(_v, 1, 0, currVal_0); }); }
function View_MvtodvComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "input", [["name", "same"], ["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.handleSameIns() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "label", [["for", "same"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Same Inspector For All"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.same; _ck(_v, 1, 0, currVal_0); }); }
function View_MvtodvComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 21, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](10, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 7, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 5, "ng-multiselect-dropdown", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onSelect"], [null, "onDeSelect"], [null, "onFilterChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.insMod[_v.context.index] = $event) !== false);
        ad = (pd_1 && ad);
    } if (("onSelect" === en)) {
        var pd_2 = (_co.onItemSelect($event, "ins", _v.context.index) !== false);
        ad = (pd_2 && ad);
    } if (("onDeSelect" === en)) {
        var pd_3 = (_co.onItemDeSelect($event, "ins", _v.context.index) !== false);
        ad = (pd_3 && ad);
    } if (("onFilterChange" === en)) {
        var pd_4 = (_co.onFilterChange($event, "ins") !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MultiSelectComponent_0"], _node_modules_ng_multiselect_dropdown_ng_multiselect_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 49152, null, 0, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { placeholder: [0, "placeholder"], settings: [1, "settings"], data: [2, "data"] }, { onFilterChange: "onFilterChange", onSelect: "onSelect", onDeSelect: "onDeSelect" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.insEdName[_v.context.index]; var currVal_11 = _co.dropdownSettings; var currVal_12 = _co.allIns; _ck(_v, 14, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ("inspector" + _v.context.index), ""); var currVal_14 = _co.insMod[_v.context.index]; _ck(_v, 16, 0, currVal_13, currVal_14); var currVal_15 = ((_v.context.index == 0) && _co.ivolBreak[0].inspector_id); _ck(_v, 21, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.idepBreak[_v.context.index]; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.owner; _ck(_v, 6, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.volume, "1.2-2")); _ck(_v, 9, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassPending; _ck(_v, 13, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_MvtodvComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 15, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Depot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Inspector"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Action"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ivolBreak; _ck(_v, 16, 0, currVal_0); }, null); }
function View_MvtodvComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-snowflake-o fa-2x fa-spin mt-4"], ["style", "margin-bottom: 15px"]], null, null, null, null, null))], null, null); }
function View_MvtodvComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Assign Transaction Inspectors "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 11, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 6, "form", [["class", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveIns() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.inputErr != ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.inputSuccess != ""); _ck(_v, 10, 0, currVal_1); var currVal_9 = (((_co.ivolBreak == null) ? null : _co.ivolBreak.length) > 0); _ck(_v, 17, 0, currVal_9); var currVal_10 = _co.eload; _ck(_v, 20, 0, currVal_10); var currVal_12 = "btn btn-outline-primary"; var currVal_13 = (_co.validateIns() ? "btn btn-outline-primary" : "btn btn-outline-danger"); _ck(_v, 22, 0, currVal_12, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_11 = !_co.validateIns(); _ck(_v, 21, 0, currVal_11); }); }
function View_MvtodvComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 37, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 36, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 35, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 34, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 6, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 5, "div", [["class", "float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "button", [["class", "btn btn-outline-warning"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.refresh() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fa fa-refresh"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0Refresh"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 26, "div", [["class", "card-body table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 22, "table", [["class", "table table-striped"], ["datatable", ""], ["style", "width:100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 212992, null, 0, angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { dtOptions: [0, "dtOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 15, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 14, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MV(MBLD)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DV(DBLD)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MV Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DV Vol."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume Discharged"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Product"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MvtodvComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 0, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["content", 2]], null, 0, null, View_MvtodvComponent_8)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["edContent", 2]], null, 0, null, View_MvtodvComponent_14)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["insContent", 2]], null, 0, null, View_MvtodvComponent_20))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.policy["mv2dv-txns"].create; _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.dtOptions; _ck(_v, 14, 0, currVal_1); var currVal_2 = (((_co.nodes == null) ? null : _co.nodes.length) != 0); _ck(_v, 32, 0, currVal_2); var currVal_3 = (((_co.nodes == null) ? null : _co.nodes.length) == 0); _ck(_v, 34, 0, currVal_3); }, null); }
function View_MvtodvComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-mvtodv", [], null, null, null, View_MvtodvComponent_0, RenderType_MvtodvComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _mvtodv_component__WEBPACK_IMPORTED_MODULE_7__["MvtodvComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _global_service_service__WEBPACK_IMPORTED_MODULE_10__["GlobalServiceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MvtodvComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-mvtodv", _mvtodv_component__WEBPACK_IMPORTED_MODULE_7__["MvtodvComponent"], View_MvtodvComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/transmgt/mvtodv.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/transmgt/mvtodv.component.ts ***!
  \****************************************************/
/*! exports provided: MvtodvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvtodvComponent", function() { return MvtodvComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-service.service */ "./src/app/global-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var MvtodvComponent = /** @class */ (function () {
    function MvtodvComponent(http, router, globalservice, modalService, parserFormatter) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.globalservice = globalservice;
        this.modalService = modalService;
        this.parserFormatter = parserFormatter;
        this.dtOptions = {};
        this.jSON = JSON;
        this.maxdate = { year: new Date().getFullYear(), month: new Date().getMonth(), day: new Date().getDate() };
        this.searchInsTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchProdTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchMVTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchDVTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchDepTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.esearchProdTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.esearchMVTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.esearchDVTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.esearchDepTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.policy = JSON.parse(localStorage.getItem('sessionData')) ? JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;
        // add new modal
        this.closeResult = '';
        this.dropdownSettings = {};
        this.mv = '';
        this.dv = '';
        this.prod = '';
        this.depot = '';
        this.depname = '';
        this.mvd = '';
        this.dvd = '';
        this.prodd = '';
        this.depotd = [];
        this.emvd = '';
        this.edvd = '';
        this.eprodd = '';
        this.edepotd = [];
        this.mvbld = '';
        this.dvbld = '';
        this.mvbldv = 0;
        this.dvbldv = 0;
        this.voldis = 0;
        this.own = '';
        this.depvol = 0;
        this.volBreak = [];
        this.depBreak = [];
        this.emv = '';
        this.edv = '';
        this.emvbld = '';
        this.edvbld = '';
        this.emvbldv = 0;
        this.edvbldv = 0;
        this.evoldis = 0;
        this.eprod = '';
        this.eown = '';
        this.edepot = '';
        this.edepname = '';
        this.edepvol = 0;
        this.evolBreak = [];
        this.edepBreak = [];
        this.addbtn = false;
        this.res = null;
        this.load = false;
        this.eload = false;
        this.inputSuccess = '';
        this.inputErr = '';
        this.valdate = false;
        this.evaldate = false;
        this.edID = '';
        this.insID = '';
        this.insEdName = [];
        this.ivolBreak = [];
        this.idepBreak = [];
        this.same = false;
        this.insMod = [];
        var prodres = null;
        var mvres = null;
        var dvres = null;
        var depres = null;
        var insres = null;
        this.globalservice.search('products', this.searchProdTerm$)
            .subscribe(function (results) {
            prodres = results;
            if (prodres.data.products.data.length < 1) {
                _this.searchProdTerm$.next('');
            }
            else {
                // this.allStat = statres.data.stations.data;
                _this.allProd = prodres.data.products.data;
            }
            console.log(_this.allProd);
            console.log(prodres);
        });
        this.globalservice.search('mother', this.searchMVTerm$)
            .subscribe(function (results) {
            mvres = results;
            if (mvres.data.vessels.data.length < 1) {
                _this.searchMVTerm$.next('');
            }
            else {
                _this.allMv = mvres.data.vessels.data;
            }
            console.log(_this.allMv);
        });
        this.globalservice.search('daughter', this.searchDVTerm$)
            .subscribe(function (results) {
            dvres = results;
            if (dvres.data.vessels.data.length < 1) {
                _this.searchDVTerm$.next('');
            }
            else {
                _this.allDv = dvres.data.vessels.data;
            }
            console.log(_this.allDv);
        });
        this.globalservice.search('depots', this.searchDepTerm$)
            .subscribe(function (results) {
            depres = results;
            if (depres.data.depots.data.length < 1) {
                _this.searchDepTerm$.next('');
            }
            else {
                _this.allDep = depres.data.depots.data;
            }
            console.log(_this.allDep);
        });
        this.globalservice.search('inspectors', this.searchInsTerm$)
            .subscribe(function (results) {
            insres = results;
            if (insres.data.inspectors.data.length < 1) {
                _this.searchInsTerm$.next('');
            }
            else {
                _this.allIns = insres.data.inspectors.data;
            }
            console.log(_this.allIns);
        });
        // edit
        this.globalservice.search('products', this.esearchProdTerm$)
            .subscribe(function (results) {
            prodres = results;
            if (prodres.data.products.data.length < 1) {
                _this.esearchProdTerm$.next('');
            }
            else {
                _this.allProd = prodres.data.products.data;
            }
            console.log(_this.allProd);
            console.log(prodres);
        });
        this.globalservice.search('mother', this.esearchMVTerm$)
            .subscribe(function (results) {
            mvres = results;
            if (mvres.data.vessels.data.length < 1) {
                _this.esearchMVTerm$.next('');
            }
            else {
                _this.allMv = mvres.data.vessels.data;
            }
            console.log(_this.allMv);
        });
        this.globalservice.search('daughter', this.esearchDVTerm$)
            .subscribe(function (results) {
            dvres = results;
            if (dvres.data.vessels.data.length < 1) {
                _this.esearchDVTerm$.next('');
            }
            else {
                _this.allDv = dvres.data.vessels.data;
            }
            // this.allDv = dvres.data.vessels.data;
            console.log(_this.allDv);
        });
        this.globalservice.search('depots', this.esearchDepTerm$)
            .subscribe(function (results) {
            depres = results;
            if (depres.data.depots.data.length < 1) {
                _this.esearchDepTerm$.next('');
            }
            else {
                _this.allDep = depres.data.depots.data;
            }
            // this.allDep = depres.data.depots.data;
            console.log(_this.allDep);
        });
    }
    MvtodvComponent.prototype.refresh = function () {
        window.location.reload();
        // this.ngOnInit();
        // this.router.navigate(['/usermgt/']);
    };
    MvtodvComponent.prototype.parseMV = function (node) {
        return node.mother_vessel ? node.mother_vessel.name + " (" + node.mbl_date + ")" : "Not Found";
    };
    MvtodvComponent.prototype.parseDV = function (node) {
        return node.daughter_vessel ? node.daughter_vessel.name + " (" + node.dbl_date + ")" : "Not Found";
    };
    MvtodvComponent.prototype.parseProd = function (node) {
        return node.product ? node.product.name : "Not Found";
    };
    MvtodvComponent.prototype.getAllIns = function (node) {
        var _this = this;
        // this.globalservice.getAllEntityFilt(node,filt)
        this.globalservice.getAllEntity(node)
            .then(function (data) {
            // this.load= false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.allIns = _this.res.data.inspectors.data;
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    MvtodvComponent.prototype.getAllDep = function (node) {
        var _this = this;
        var query = {
            where: [
                { type: 'daugther', status: 'inactive' },
            ]
        };
        var filt = JSON.stringify(query);
        // this.globalservice.getAllEntityFilt(node,filt)
        this.globalservice.getAllEntity(node)
            .then(function (data) {
            // this.load= false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.allDep = _this.res.data.depots.data;
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    MvtodvComponent.prototype.getAllProd = function (node, filter) {
        var _this = this;
        // this.globalservice.getAllEntityFilt(node,filt)
        this.globalservice.getAllEntity(node)
            .then(function (data) {
            console.log('without filt');
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.allProd = _this.res.data.products.data;
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    MvtodvComponent.prototype.getAllMV = function (node) {
        var _this = this;
        var query = {
            where: [[["type", "=", "mother"]]]
        };
        var filt = JSON.stringify(query);
        this.globalservice.getAllEntityFilt(node, filt)
            // this.globalservice.getAllEntity(node)
            .then(function (data) {
            // this.load= false;
            console.log('mvfilter');
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.allMv = _this.res.data.vessels.data;
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    MvtodvComponent.prototype.getAllDV = function (node) {
        var _this = this;
        var query = {
            where: [[["type", "=", "daughter"]]]
        };
        var filt = JSON.stringify(query);
        this.globalservice.getAllEntityFilt(node, filt)
            // this.globalservice.getAllEntity(node)
            .then(function (data) {
            console.log('dvfilter');
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.allDv = _this.res.data.vessels.data;
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    MvtodvComponent.prototype.onItemSelect = function (item, nodekey, inskey) {
        console.log(item);
        if (nodekey == 'prod') {
            // this.prodd = item;
            this.prod = item.id;
        }
        if (nodekey == 'mv') {
            // this.mvd = item;
            this.mv = item.id;
        }
        if (nodekey == 'dv') {
            // this.dvd = item;
            this.dv = item.id;
        }
        if (nodekey == 'dep') {
            // this.depotd = item;
            this.depot = item.id;
            this.depname = item.name;
        }
        if (nodekey == 'ins') {
            // this.depotd = item;
            if (this.same) {
                if (inskey == 0) {
                    this.insEdName.length = 0;
                    var that_1 = this;
                    this.ivolBreak.forEach(function (part, index, theArray) {
                        theArray[index].inspector_id = item.id;
                        that_1.getByID(theArray[index].inspector_id, 'inspectors', index);
                    });
                }
                else {
                    this.same = !this.same;
                    this.ivolBreak[inskey].inspector_id = item.id;
                }
            }
            else {
                this.ivolBreak[inskey].inspector_id = item.id;
            }
            console.log(this.ivolBreak);
        }
        if (nodekey == 'eprod') {
            // this.eprodd = item;
            this.eprod = item.id;
        }
        if (nodekey == 'emv') {
            // this.emvd = item;
            this.emv = item.id;
        }
        if (nodekey == 'edv') {
            // this.edvd = item;
            this.edv = item.id;
        }
        if (nodekey == 'edep') {
            // this.edepotd = item;
            this.edepot = item.id;
            this.edepname = item.name;
        }
    };
    MvtodvComponent.prototype.onItemDeSelect = function (item, nodekey, inskey) {
        console.log(item);
        if (nodekey == 'prod') {
            // this.prodd = item;
            this.prod = '';
        }
        if (nodekey == 'mv') {
            // this.mvd = item;
            this.mv = '';
        }
        if (nodekey == 'dv') {
            // this.dvd = item;
            this.dv = '';
        }
        if (nodekey == 'dep') {
            // this.depotd = item;
            this.depot = '';
            this.depname = '';
        }
        // if(nodekey == 'ins') {
        //   // this.depotd = item;
        //   if(this.same ){
        //     if( inskey == 0){
        //       this.insEdName.length = 0;
        //       const that = this;
        //       this.ivolBreak.forEach(function(part, index, theArray) {
        //         theArray[index].inspector_id = item.id;
        //     that.getByID(theArray[index].inspector_id, 'inspectors',index);
        //       });
        //     }
        //     else{
        //       this.same = !this.same;
        //       this.ivolBreak[inskey].inspector_id = item.id;
        //     }
        //   } else {
        //     this.ivolBreak[inskey].inspector_id = item.id;
        //   }
        //     console.log(this.ivolBreak);
        // }
        if (nodekey == 'eprod') {
            // this.eprodd = item;
            this.eprod = '';
        }
        if (nodekey == 'emv') {
            // this.emvd = item;
            this.emv = '';
        }
        if (nodekey == 'edv') {
            // this.edvd = item;
            this.edv = '';
        }
        if (nodekey == 'edep') {
            // this.edepotd = item;
            this.edepot = '';
            this.edepname = '';
        }
    };
    MvtodvComponent.prototype.onFilterChange = function (item, nodekey) {
        console.log(item);
        if (nodekey == 'prod') {
            this.searchProdTerm$.next(item);
        }
        if (nodekey == 'mv') {
            this.searchMVTerm$.next(item);
        }
        if (nodekey == 'dv') {
            this.searchDVTerm$.next(item);
        }
        if (nodekey == 'dep') {
            this.searchDepTerm$.next(item);
        }
        if (nodekey === 'ins') {
            this.searchInsTerm$.next(item);
        }
        if (nodekey == 'eprod') {
            this.esearchProdTerm$.next(item);
        }
        if (nodekey == 'emv') {
            this.esearchMVTerm$.next(item);
        }
        if (nodekey == 'edv') {
            this.esearchDVTerm$.next(item);
        }
        if (nodekey == 'edep') {
            this.esearchDepTerm$.next(item);
        }
    };
    MvtodvComponent.prototype.ngOnInit = function () {
        var that = this;
        this.getAllMV("vessels");
        this.getAllDV("vessels");
        this.getAllProd("products");
        this.getAllDep("depots");
        this.getAllIns("inspectors");
        // =========================================
        this.dropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            closeDropDownOnSelection: true,
            itemsShowLimit: 3,
            allowSearchFilter: true,
            clearSearchFilter: true
        };
        // =========================================
        // this.dtOptions = {
        //   pageLength: 5,
        //   pagingType: 'full_numbers'
        // };
        console.log('resp');
        this.dtOptions = {
            lengthMenu: [[1, 10, 25, 50, 100, 500, 1000], [1, 10, 25, 50, 100, 500, 1000]],
            pagingType: 'full_numbers',
            pageLength: 25,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                that.http
                    .post(
                // 'https://angular-datatables-demo-server.herokuapp.com/',
                'https://app05.sahara-group.com/pjh-api/public/api/dt/mv2dv-txns', dataTablesParameters, 
                // {Authorization: `Bearer ${that.globalservice.sessionToken}`}
                {
                    // params: params,
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', "Bearer " + localStorage.getItem('sessionToken'))
                }).subscribe(function (resp) {
                    that.nodes = resp.data;
                    console.log(resp);
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: []
                    });
                }, function (err) { console.log(err); });
            },
            columns: [{ data: 'id' },
                { data: 'mbl_volume' },
                { data: 'dbl_volume' },
                { data: 'volume_discharged' },
                { data: 'volume_breakdown' },
                { data: 'mbl_date' },
                { data: 'dbl_date' }]
        };
    };
    MvtodvComponent.prototype.validateEditBtn = function () {
        var voter = 0;
        if (this.edepot.length >= 2) {
            voter++;
        }
        if (this.eown.length >= 2) {
            voter++;
        }
        if (this.edepvol > 0) {
            voter++;
        }
        if (voter < 3) {
            return false;
        }
        else {
            return true;
        }
    };
    MvtodvComponent.prototype.validateAddBtn = function () {
        var voter = 0;
        if (this.depot.length >= 2) {
            voter++;
        }
        if (this.own.length >= 2) {
            voter++;
        }
        if (this.depvol > 0) {
            voter++;
        }
        if (voter < 3) {
            return false;
        }
        else {
            return true;
        }
    };
    MvtodvComponent.prototype.nameById = function (id) {
        // if(this.allDep.length > 0){
        // return this.allDep.find(o => o.id === id).name;
        return id;
        // }
        // console.log(this.allDep);
        // return ""
    };
    MvtodvComponent.prototype.removeBreak = function (ind, ed) {
        if (ed == 1) {
            this.evolBreak.splice(ind, 1);
            this.edepBreak.splice(ind, 1);
        }
        else {
            this.volBreak.splice(ind, 1);
            this.depBreak.splice(ind, 1);
        }
    };
    MvtodvComponent.prototype.addBreak = function (ed) {
        if (ed == 1) {
            var breakObj = {
                depot_id: this.edepot,
                owner: this.eown,
                volume: this.edepvol,
                inspector_id: ''
            };
            this.evolBreak.push(breakObj);
            this.edepBreak.push(this.edepname);
            this.eown = '';
            this.edepot = '';
            this.edepotd = [];
            this.edepvol = null;
        }
        else {
            var breakObj = {
                depot_id: this.depot,
                owner: this.own,
                volume: this.depvol,
                inspector_id: ''
            };
            this.volBreak.push(breakObj);
            this.depBreak.push(this.depname);
            this.own = '';
            this.depot = '';
            this.depotd = [];
            this.depvol = null;
        }
    };
    MvtodvComponent.prototype.volSum = function (ed) {
        // console.log(this.volBreak.reduce((prev, cur) => prev + cur.volume, 0));
        if (ed == 1) {
            return this.evolBreak.reduce(function (prev, cur) { return prev + cur.volume; }, 0);
        }
        else {
            return this.volBreak.reduce(function (prev, cur) { return prev + cur.volume; }, 0);
        }
    };
    MvtodvComponent.prototype.validateIns = function () {
        var voter = 0;
        this.ivolBreak.forEach(function (part, index, theArray) {
            // theArray[index].inspector_id = this.ivolBreak[0].inspector_id;
            if (theArray[index].inspector_id == '') {
                // return false;
            }
            else {
                voter++;
            }
        });
        // // console.log(voter);
        if (voter < this.ivolBreak.length) {
            return false;
        }
        else {
            return true;
        }
    };
    MvtodvComponent.prototype.validateNew = function () {
        var voter = 0;
        this.mvbld = this.parserFormatter.format(this.mvbldMod);
        this.dvbld = this.parserFormatter.format(this.dvbldMod);
        if (this.mv.length >= 2) {
            voter++;
        }
        if (this.dv.length >= 2) {
            voter++;
        }
        if (this.mvbld.length >= 2) {
            voter++;
        }
        if (this.dvbld.length >= 2) {
            voter++;
        }
        if (this.mvbldv > 0) {
            voter++;
        }
        if (this.dvbldv > 0) {
            voter++;
        }
        if (this.voldis > 0) {
            voter++;
        }
        if (this.prod.length >= 2) {
            voter++;
        }
        if (new Date(this.dvbld) >= new Date(this.mvbld)) {
            voter++;
            this.valdate = true;
        }
        else {
            this.valdate = false;
        }
        if (this.mvbldv >= this.dvbldv) {
            voter++;
        }
        if (this.dvbldv >= this.voldis) {
            voter++;
        }
        if (this.volSum() == this.voldis) {
            voter++;
        }
        // console.log(voter);
        if (voter < 12) {
            this.inputErr = 'Please Ensure All Fields Are Correctly Filled';
            return false;
        }
        else {
            this.inputErr = '';
            return true;
        }
    };
    MvtodvComponent.prototype.onDateSelected = function (val) {
        if (val == 'em') {
            this.emvbld = this.parserFormatter.format(this.emvbldMod);
        }
        if (val == 'ed') {
            this.edvbld = this.parserFormatter.format(this.edvbldMod);
        }
    };
    MvtodvComponent.prototype.validateEdit = function () {
        var voter = 0;
        if (this.emv.length >= 2) {
            voter++;
        }
        if (this.edv.length >= 2) {
            voter++;
        }
        if (this.emvbld.length >= 2) {
            voter++;
        }
        if (this.edvbld.length >= 2) {
            voter++;
        }
        if (this.emvbldv > 0) {
            voter++;
        }
        if (this.edvbldv > 0) {
            voter++;
        }
        if (this.evoldis > 0) {
            voter++;
        }
        if (this.eprod.length >= 2) {
            voter++;
        }
        if (new Date(this.edvbld) >= new Date(this.emvbld)) {
            voter++;
            this.evaldate = true;
        }
        else {
            this.evaldate = false;
        }
        if (this.emvbldv >= this.edvbldv) {
            voter++;
        }
        if (this.edvbldv >= this.evoldis) {
            voter++;
        }
        if (this.volSum(1) == this.evoldis) {
            voter++;
        }
        // console.log(voter);
        if (voter < 12) {
            this.inputErr = 'Please Ensure All Fields Are Correctly Filled';
            return false;
        }
        else {
            this.inputErr = '';
            return true;
        }
    };
    MvtodvComponent.prototype.handleSameIns = function () {
        // console.log(this.same);
        this.same = !this.same;
        if (this.same) {
            this.insEdName.length = 0;
            var that_2 = this;
            this.ivolBreak.forEach(function (part, index, theArray) {
                theArray[index].inspector_id = theArray[0].inspector_id;
                that_2.getByID(theArray[index].inspector_id, 'inspectors', index);
            });
            console.log(this.ivolBreak);
        }
        // console.log(this.same);
    };
    MvtodvComponent.prototype.insModal = function (insContent, node) {
        this.inputErr = '';
        this.inputSuccess = '';
        var evolbr = JSON.parse(this.globalservice.decodeHtml(node.volume_breakdown));
        this.ivolBreak = evolbr;
        this.insID = node.id;
        // this.insEdName =
        var that = this;
        this.insEdName.length = 0;
        this.ivolBreak.forEach(function (part, index, theArray) {
            if (theArray[index].inspector_id) {
                that.getByID(theArray[index].inspector_id, 'inspectors', index);
            }
            that.getByID(theArray[index].depot_id, 'depots', index, 1);
        });
        console.log(this.insEdName);
        console.log(node);
        this.modalService.open(insContent, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    MvtodvComponent.prototype.editModal = function (edContent, node) {
        this.inputErr = '';
        this.inputSuccess = '';
        this.mvEdName = this.globalservice.decodeHtml(node.mother_vessel.name);
        this.dvEdName = this.globalservice.decodeHtml(node.daughter_vessel.name);
        this.prodEdName = this.globalservice.decodeHtml(node.product.name);
        var evolbr = JSON.parse(this.globalservice.decodeHtml(node.volume_breakdown));
        // console.log(evolbr);
        // edmv.navigateTo({year: 2013, month: 2})
        // let splitDate = node.mbl_date.substring(0, 10).split("-");
        // this.edmvEd = {'year':parseInt(splitDate[0]),'month':parseInt(splitDate[1]),'day':parseInt(splitDate[2])};
        this.edmvEd = node.mbl_date.substring(0, 10);
        console.log(this.edmvEd);
        //  splitDate = node.dbl_date.substring(0, 10).split("-");
        this.eddvEd = node.dbl_date.substring(0, 10);
        console.log(this.eddvEd);
        this.eprod = node.product_id;
        this.emv = node.mother_vessel_id;
        this.edv = node.daughter_vessel_id;
        this.emvbld = node.mbl_date;
        this.edvbld = node.dbl_date;
        this.emvbldv = node.mbl_volume;
        this.edvbldv = node.dbl_volume;
        this.evoldis = node.volume_discharged;
        this.evolBreak = evolbr;
        var that = this;
        this.evolBreak.forEach(function (part, index, theArray) {
            // that.edepBreak[index] = that.getByID(theArray[index].depot_id, 'depots');
            that.getByID(theArray[index].depot_id, 'depots', index);
        });
        console.log(this.evolBreak);
        console.log(this.edepBreak);
        this.edID = node.id;
        console.log(node);
        this.modalService.open(edContent, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    MvtodvComponent.prototype.getByID = function (id, node, ind, i) {
        var _this = this;
        var that = this;
        this.globalservice.getNodeByID(id, node)
            .then(function (data) {
            _this.eload = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status === 'success') {
                if (node === 'inspectors') {
                    if (_this.res.data.inspector) {
                        _this.insEdName[ind] = _this.res.data.inspector.name;
                    }
                    else {
                        _this.insEdName[ind] = 'Not Found';
                    }
                }
                else if (node === 'depots') {
                    if (_this.res.data.depot) {
                        if (i) {
                            _this.idepBreak[ind] = _this.res.data.depot.name;
                        }
                        else {
                            _this.edepBreak[ind] = _this.res.data.depot.name;
                        }
                    }
                    else {
                        if (i) {
                            _this.idepBreak[ind] = 'Not Found';
                        }
                        else {
                            _this.edepBreak[ind] = 'Not Found';
                        }
                    }
                }
                else {
                    return _this.res.data[node].name ? _this.res.data[node].name : 'Not Found';
                }
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .finally(function () {
            _this.eload = false;
        });
    };
    MvtodvComponent.prototype.edit = function () {
        var _this = this;
        var that = this;
        console.log(this.edID);
        var nodeObj = {
            product_id: this.eprod,
            mother_vessel_id: this.emv,
            daughter_vessel_id: this.edv,
            mbl_date: this.emvbld,
            dbl_date: this.edvbld,
            mbl_volume: this.emvbldv,
            dbl_volume: this.edvbldv,
            volume_discharged: this.evoldis,
            subsidy: 0,
            volume_breakdown: JSON.stringify(this.evolBreak)
        };
        console.log(nodeObj);
        // return;
        this.eload = true;
        this.globalservice.editNode(this.edID, nodeObj, 'mv2dv-txns')
            .then(function (data) {
            _this.eload = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status === 'success') {
                _this.inputSuccess = 'Transaction Edited Successfully';
                setTimeout(function () {
                    that.modalService.dismissAll();
                    window.location.reload();
                }, 1000);
                //   this.globalservice.sessionToken = this.res.data.token;
                //   this.router.navigate(['/usermgt/']);
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .finally(function () {
            _this.eload = false;
        });
    };
    MvtodvComponent.prototype.saveIns = function () {
        var _this = this;
        var that = this;
        console.log(this.edID);
        var nodeObj = {
            volume_breakdown: JSON.stringify(this.ivolBreak)
        };
        console.log(nodeObj);
        // return;
        this.eload = true;
        this.globalservice.editNode(this.insID, nodeObj, 'mv2dv-txns')
            .then(function (data) {
            _this.eload = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status === 'success') {
                _this.inputSuccess = 'Transaction Edited Successfully';
                setTimeout(function () {
                    that.modalService.dismissAll();
                    window.location.reload();
                }, 1000);
                //   this.globalservice.sessionToken = this.res.data.token;
                //   this.router.navigate(['/usermgt/']);
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .finally(function () {
            _this.eload = false;
        });
    };
    MvtodvComponent.prototype.del = function (node) {
        var _this = this;
        console.log(node);
        this.globalservice.delNode(node.id, 'mv2dv-txns')
            .then(function (data) {
            // this.load= false;
            console.log(data);
            _this.res = data;
            if (_this.res.status === 'success') {
                _this.inputSuccess = 'Transaction Deleted Successfully';
                setTimeout(function () {
                    alert('Transaction Deleted Successfully');
                    window.location.reload();
                }, 1000);
            }
            else {
                alert('Something Failed');
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    MvtodvComponent.prototype.saveNew = function () {
        // if(this.fname.length < 2){
        //   this.inputErr = "Invalid First Name";
        //   return;
        // }
        var _this = this;
        // if(this.lname.length < 2){
        //   this.inputErr = "Invalid Last Name";
        //   return;
        // }
        // if(!this.globalservice.IsEmail(this.email)){
        //   this.inputErr = "Invalid Email Address";
        //   return;
        // }
        // if(this.pword.length < 7){
        //   this.inputErr = "Password Must be Atleast 7 Characters";
        //   return;
        // }
        // if(this.pword != this.cpword){
        //   this.inputErr = "Passwords do not Match";
        //   return;
        // }
        var nodeObj = {
            product_id: this.prod,
            mother_vessel_id: this.mv,
            daughter_vessel_id: this.dv,
            mbl_date: this.mvbld,
            dbl_date: this.dvbld,
            mbl_volume: this.mvbldv,
            dbl_volume: this.dvbldv,
            volume_discharged: this.voldis,
            subsidy: 0,
            volume_breakdown: JSON.stringify(this.volBreak)
        };
        console.log(nodeObj);
        var that = this;
        // return;
        this.load = true;
        this.globalservice.newNode(nodeObj, 'mv2dv-txns')
            .then(function (data) {
            _this.load = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status === 'success') {
                _this.inputSuccess = 'Transaction Created Successfully';
                setTimeout(function () {
                    that.modalService.dismissAll();
                    window.location.reload();
                }, 1000);
                //   this.globalservice.sessionToken = this.res.data.token;
                //   this.router.navigate(['/usermgt/']);
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.load = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.load = false;
        })
            .finally(function () {
            _this.load = false;
        });
    };
    MvtodvComponent.prototype.open = function (content) {
        // this.modalService.open(content, { size: 'lg' });
        this.inputErr = '';
        this.inputSuccess = '';
        this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    return MvtodvComponent;
}());



/***/ }),

/***/ "./src/app/views/transmgt/statreceipt.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/views/transmgt/statreceipt.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_StatreceiptComponent, View_StatreceiptComponent_0, View_StatreceiptComponent_Host_0, StatreceiptComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_StatreceiptComponent", function() { return RenderType_StatreceiptComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StatreceiptComponent_0", function() { return View_StatreceiptComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StatreceiptComponent_Host_0", function() { return View_StatreceiptComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatreceiptComponentNgFactory", function() { return StatreceiptComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory */ "./node_modules/ngx-bootstrap/tabs/ngx-bootstrap-tabs.ngfactory.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony import */ var _statreceipt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statreceipt.component */ "./src/app/views/transmgt/statreceipt.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../global-service.service */ "./src/app/global-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 











var styles_StatreceiptComponent = [];
var RenderType_StatreceiptComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_StatreceiptComponent, data: {} });

function View_StatreceiptComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 51), _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0New Transaction"]))], null, null); }
function View_StatreceiptComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.policy["tk2st-txns"].create; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.oil_marketer; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.volume_allocated, "1.2-2")); _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.station_name; _ck(_v, 7, 0, currVal_2); }); }
function View_StatreceiptComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes2; _ck(_v, 2, 0, currVal_0); }, null); }
function View_StatreceiptComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "td", [["class", "no-data-available"], ["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No data!"]))], null, null); }
function View_StatreceiptComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-primary btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editModal(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 52), _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-pencil"]], null, null, null, null, null))], null, null); }
function View_StatreceiptComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-outline-danger btn-sm"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.del(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-trash"]], null, null, null, null, null))], null, null); }
function View_StatreceiptComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.policy["tk2st-txns"].update; _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.policy["tk2st-txns"].delete; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.parseStat(_v.context.$implicit); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.volume, "1.2-2")); _ck(_v, 4, 0, currVal_1); }); }
function View_StatreceiptComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; _ck(_v, 2, 0, currVal_0); }, null); }
function View_StatreceiptComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "td", [["class", "no-data-available"], ["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No data!"]))], null, null); }
function View_StatreceiptComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputErr; _ck(_v, 1, 0, currVal_0); }); }
function View_StatreceiptComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputSuccess; _ck(_v, 1, 0, currVal_0); }); }
function View_StatreceiptComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" Please Ensure Total Volume is Less or Equal to Volume Available (", ") "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.parentVol; _ck(_v, 1, 0, currVal_0); }); }
function View_StatreceiptComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-snowflake-o fa-2x fa-spin mt-4"], ["style", "margin-bottom: 15px"]], null, null, null, null, null))], null, null); }
function View_StatreceiptComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Create Transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 27, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 22, "form", [["class", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "div", [["class", "form-group col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 15, "div", [["class", "form-group col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 14, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 13, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 6, "input", [["class", "form-control"], ["name", "lname"], ["placeholder", "Enter Station Receipt"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.num = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 0, "div", [["class", "form-group col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveNew() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.inputErr != ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.inputSuccess != ""); _ck(_v, 10, 0, currVal_1); var currVal_16 = "form-control"; var currVal_17 = (((_co.num > 0) && (_co.parentVol >= _co.num)) ? "is-valid" : ""); _ck(_v, 24, 0, currVal_16, currVal_17); var currVal_18 = "lname"; var currVal_19 = _co.num; _ck(_v, 27, 0, currVal_18, currVal_19); var currVal_20 = (_co.parentVol < _co.num); _ck(_v, 32, 0, currVal_20); var currVal_21 = _co.load; _ck(_v, 36, 0, currVal_21); var currVal_23 = "btn btn-outline-primary"; var currVal_24 = (_co.validateNew() ? "btn btn-outline-primary" : "btn btn-outline-danger"); _ck(_v, 38, 0, currVal_23, currVal_24); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPending; _ck(_v, 23, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_22 = !_co.validateNew(); _ck(_v, 37, 0, currVal_22); }); }
function View_StatreceiptComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputErr; _ck(_v, 1, 0, currVal_0); }); }
function View_StatreceiptComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success alert-dismissible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputSuccess; _ck(_v, 1, 0, currVal_0); }); }
function View_StatreceiptComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-snowflake-o fa-2x fa-spin mt-4"], ["style", "margin-bottom: 15px"]], null, null, null, null, null))], null, null); }
function View_StatreceiptComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Edit Transaction "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 24, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 19, "form", [["class", "row"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "div", [["class", "form-group col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 12, "div", [["class", "form-group col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 11, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 10, "div", [["class", "input-prepend input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 6, "input", [["class", "form-control"], ["name", "lname"], ["placeholder", "Enter Station Receipt"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.enum = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 0, "div", [["class", "form-group col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.edit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 1, "button", [["class", "btn btn-outline-dark"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Save click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.inputErr != ""); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.inputSuccess != ""); _ck(_v, 10, 0, currVal_1); var currVal_16 = "form-control"; var currVal_17 = ((_co.enum > 0) ? "is-valid" : ""); _ck(_v, 24, 0, currVal_16, currVal_17); var currVal_18 = "lname"; var currVal_19 = _co.enum; _ck(_v, 27, 0, currVal_18, currVal_19); var currVal_20 = _co.eload; _ck(_v, 33, 0, currVal_20); var currVal_22 = "btn btn-outline-primary"; var currVal_23 = (_co.validateEdit() ? "btn btn-outline-primary" : "btn btn-outline-danger"); _ck(_v, 35, 0, currVal_22, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPending; _ck(_v, 23, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_21 = !_co.validateEdit(); _ck(_v, 34, 0, currVal_21); }); }
function View_StatreceiptComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 51, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 50, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 49, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 48, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 4, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "div", [["class", "float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "button", [["class", "btn btn-outline-warning"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.refresh() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-refresh"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0Refresh"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 42, "div", [["class", "card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 39, "tabset", [], [[2, "tab-container", null]], null, null, _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TabsetComponent_0"], _node_modules_ngx_bootstrap_tabs_ngx_bootstrap_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TabsetComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 180224, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsetConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, 0, 19, "tab", [["heading", "Parent Transaction"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { heading: [0, "heading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 17, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 16, "table", [["class", "table table-striped"], ["datatable", ""], ["style", "width:100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 212992, null, 0, angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { dtOptions: [0, "dtOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Owner"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Station Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 0, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, 0, 17, "tab", [["heading", "Transaction"]], [[1, "id", 0], [2, "active", null], [2, "tab-pane", null], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 212992, null, 0, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabDirective"], [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { heading: [0, "heading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 15, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 14, "table", [["class", "table table-striped"], ["datatable", ""], ["style", "width:100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 212992, null, 0, angular_datatables_src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { dtOptions: [0, "dtOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Volume"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StatreceiptComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 0, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["content", 2]], null, 0, null, View_StatreceiptComponent_10)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["edContent", 2]], null, 0, null, View_StatreceiptComponent_15))], function (_ck, _v) { var _co = _v.component; var currVal_6 = "Parent Transaction"; _ck(_v, 14, 0, currVal_6); var currVal_7 = _co.dtOptions2; _ck(_v, 17, 0, currVal_7); var currVal_8 = (((_co.nodes2 == null) ? null : _co.nodes2.length) != 0); _ck(_v, 29, 0, currVal_8); var currVal_9 = (((_co.nodes2 == null) ? null : _co.nodes2.length) == 0); _ck(_v, 31, 0, currVal_9); var currVal_15 = "Transaction"; _ck(_v, 34, 0, currVal_15); var currVal_16 = _co.dtOptions; _ck(_v, 37, 0, currVal_16); var currVal_17 = (((_co.nodes == null) ? null : _co.nodes.length) != 0); _ck(_v, 47, 0, currVal_17); var currVal_18 = (((_co.nodes == null) ? null : _co.nodes.length) == 0); _ck(_v, 49, 0, currVal_18); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).clazz; _ck(_v, 11, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).id; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).active; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).addClass; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).role; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ariaLabelledby; _ck(_v, 13, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).id; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).active; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).addClass; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).role; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).ariaLabelledby; _ck(_v, 33, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); }); }
function View_StatreceiptComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-statreceipt", [], null, null, null, View_StatreceiptComponent_0, RenderType_StatreceiptComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _statreceipt_component__WEBPACK_IMPORTED_MODULE_6__["StatreceiptComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _global_service_service__WEBPACK_IMPORTED_MODULE_9__["GlobalServiceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var StatreceiptComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-statreceipt", _statreceipt_component__WEBPACK_IMPORTED_MODULE_6__["StatreceiptComponent"], View_StatreceiptComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/transmgt/statreceipt.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/transmgt/statreceipt.component.ts ***!
  \*********************************************************/
/*! exports provided: StatreceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatreceiptComponent", function() { return StatreceiptComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global-service.service */ "./src/app/global-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var node = /** @class */ (function () {
    function node() {
    }
    return node;
}());
var Node2 = /** @class */ (function () {
    function Node2() {
    }
    return Node2;
}());
var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var StatreceiptComponent = /** @class */ (function () {
    function StatreceiptComponent(http, router, globalservice, modalService) {
        this.http = http;
        this.router = router;
        this.globalservice = globalservice;
        this.modalService = modalService;
        this.dtOptions = {};
        this.dtOptions2 = {};
        this.policy = JSON.parse(localStorage.getItem('sessionData')) ? JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;
        // add new modal
        this.closeResult = '';
        this.num = 0;
        this.enum = 0;
        this.res = null;
        this.load = false;
        this.eload = false;
        this.inputSuccess = "";
        this.inputErr = "";
        this.edID = '';
    }
    StatreceiptComponent.prototype.refresh = function () {
        window.location.reload();
        // this.ngOnInit();
        // this.router.navigate(['/assetmgt/mvmgt']);
    };
    StatreceiptComponent.prototype.parseStat = function (node) {
        return node.station ? node.station.name : 'Not Found';
    };
    StatreceiptComponent.prototype.parseTruck = function (node) {
        return node.truck ? node.truck.name : 'Not found';
    };
    StatreceiptComponent.prototype.ngOnInit = function () {
        var that = this;
        console.log('resp');
        this.dtOptions = {
            lengthMenu: [[1, 10, 25, 50, 100, 500, 1000], [1, 10, 25, 50, 100, 500, 1000]],
            pagingType: 'full_numbers',
            pageLength: 25,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                that.http
                    .post(
                // 'https://angular-datatables-demo-server.herokuapp.com/',
                'https://app05.sahara-group.com/pjh-api/public/api/dt/tk2st-txns', dataTablesParameters, 
                // {Authorization: `Bearer ${that.globalservice.sessionToken}`}
                {
                    // params: params,
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + localStorage.getItem('sessionToken'))
                }).subscribe(function (resp) {
                    that.nodes = resp.data;
                    console.log(resp);
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'id' }, { data: 'station_id' }, { data: 'volume' }]
        };
        // -----------------------------------------------------
        this.dtOptions2 = {
            lengthMenu: [[1, 10, 25, 50, 100, 500, 1000], [1, 10, 25, 50, 100, 500, 1000]],
            pagingType: 'full_numbers',
            pageLength: 25,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                that.http
                    .post(
                // 'https://angular-datatables-demo-server.herokuapp.com/',
                'https://app05.sahara-group.com/pjh-api/public/api/dt/station-dp2tk-txn-views', dataTablesParameters, 
                // {Authorization: `Bearer ${that.globalservice.sessionToken}`}
                {
                    // params: params,
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + localStorage.getItem('sessionToken'))
                }).subscribe(function (resp2) {
                    that.nodes2 = resp2.data;
                    console.log(resp2);
                    callback({
                        recordsTotal: resp2.recordsTotal,
                        recordsFiltered: resp2.recordsFiltered,
                        data: []
                    });
                }, function (err) { console.log(err); });
            },
            columns: [
                // { data: 'id' },
                { data: 'oil_marketer' },
                { data: 'volume_allocated' },
                { data: 'station_name' },
            ]
        };
    };
    StatreceiptComponent.prototype.validateNew = function () {
        var voter = 0;
        if (this.num >= 1) {
            voter++;
        }
        if (this.parentVol >= this.num) {
            voter++;
        }
        // console.log(voter);
        if (voter < 2) {
            this.inputErr = "Please Ensure All Fields Are Correctly Filled";
            return false;
        }
        else {
            this.inputErr = "";
            return true;
        }
    };
    StatreceiptComponent.prototype.validateEdit = function () {
        var voter = 0;
        if (this.enum >= 1) {
            voter++;
        }
        // if(this.eparentVol >= this.enum){
        //   voter++;
        // }
        // console.log(voter);
        if (voter < 1) {
            this.inputErr = "Please Ensure All Fields Are Correctly Filled";
            return false;
        }
        else {
            this.inputErr = "";
            return true;
        }
    };
    StatreceiptComponent.prototype.editModal = function (edContent, node) {
        this.inputErr = "";
        this.inputSuccess = "";
        this.enum = node.volume;
        this.eparentID = node.dp2tk_txn_id;
        this.estatID = node.station_id;
        this.eparentVol = parseInt(node.volume_allocated);
        console.log(this.parentID);
        this.edID = node.id;
        console.log(node);
        this.modalService.open(edContent, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    StatreceiptComponent.prototype.edit = function () {
        var _this = this;
        var that = this;
        console.log(this.edID);
        var nodeObj = {
            dp2tk_txn_id: this.eparentID,
            volume: this.enum,
            volume_breakdown: '[]',
            station_id: this.estatID
        };
        console.log(nodeObj);
        // return;
        this.eload = true;
        this.globalservice.editNode(this.edID, nodeObj, "tk2st-txns")
            .then(function (data) {
            _this.eload = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.inputSuccess = "Transaction Edited Successfully";
                setTimeout(function () {
                    that.modalService.dismissAll();
                    window.location.reload();
                }, 1000);
                //   this.globalservice.sessionToken = this.res.data.token;
                //   this.router.navigate(['/usermgt/']);
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.eload = false;
        })
            .finally(function () {
            _this.eload = false;
        });
    };
    StatreceiptComponent.prototype.del = function (node) {
        var _this = this;
        var r = confirm('Confirm this operation. It cannot be undone');
        if (r == false) {
            return false;
        }
        ;
        console.log(node);
        this.globalservice.delNode(node.id, "tk2st-txns")
            .then(function (data) {
            // this.load= false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.inputSuccess = "Transaction Deleted Successfully";
                setTimeout(function () {
                    alert("Transaction Deleted Successfully");
                    window.location.reload();
                }, 1000);
            }
            else {
                alert("Something Failed");
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
        })
            .finally(function () {
            // this.eload= false;
        });
    };
    StatreceiptComponent.prototype.saveNew = function () {
        var _this = this;
        var nodeObj = {
            dp2tk_txn_id: this.parentID,
            volume: this.num,
            volume_breakdown: '[]',
            station_id: this.statID
        };
        console.log(nodeObj);
        var that = this;
        // return;
        this.load = true;
        this.globalservice.newNode(nodeObj, "tk2st-txns")
            .then(function (data) {
            _this.load = false;
            console.log(data);
            _this.res = data;
            if (_this.res.status == "success") {
                _this.inputSuccess = "Transaction Created Successfully";
                setTimeout(function () {
                    that.modalService.dismissAll();
                    window.location.reload();
                }, 1000);
                //   this.globalservice.sessionToken = this.res.data.token;
                //   this.router.navigate(['/usermgt/']);
            }
            else {
                _this.inputErr = _this.res.mesage;
                //   console.log("something failed in api", data);
            }
        }, function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.load = false;
        })
            .catch(function (err) {
            _this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
            console.log(err);
            console.log('err');
            _this.load = false;
        })
            .finally(function () {
            _this.load = false;
        });
    };
    StatreceiptComponent.prototype.open = function (content, node) {
        // this.modalService.open(content, { size: 'lg' });
        this.parentID = node.dp2tk_txn_id;
        this.statID = node.station_id;
        console.log(this.parentID);
        this.parentVol = parseInt(node.volume_allocated);
        this.inputErr = "";
        this.inputSuccess = "";
        this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    return StatreceiptComponent;
}());



/***/ }),

/***/ "./src/app/views/transmgt/transmgt-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/transmgt/transmgt-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TransmgtRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmgtRoutingModule", function() { return TransmgtRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony import */ var _statreceipt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statreceipt.component */ "./src/app/views/transmgt/statreceipt.component.ts");
/* harmony import */ var _deptruckout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deptruckout.component */ "./src/app/views/transmgt/deptruckout.component.ts");
/* harmony import */ var _dvtodep_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dvtodep.component */ "./src/app/views/transmgt/dvtodep.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mvtodv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mvtodv.component */ "./src/app/views/transmgt/mvtodv.component.ts");





var ɵ0 = {
    title: 'Transaction Management'
}, ɵ1 = {
    title: 'MV to DV Trans'
}, ɵ2 = {
    title: 'DV to Depot'
}, ɵ3 = {
    title: 'Depot Truckout'
}, ɵ4 = {
    title: 'Station Receipt'
};
var routes = [
    {
        path: '',
        // component: TransmgtComponent,
        data: ɵ0,
        children: [
            // {
            //   path: '',
            //   redirectTo: '/dashboard'
            // },
            {
                path: 'mvtodv',
                component: _mvtodv_component__WEBPACK_IMPORTED_MODULE_4__["MvtodvComponent"],
                data: ɵ1
            },
            {
                path: 'dvtodep',
                component: _dvtodep_component__WEBPACK_IMPORTED_MODULE_2__["DvtodepComponent"],
                data: ɵ2
            },
            {
                path: 'deptruckout',
                component: _deptruckout_component__WEBPACK_IMPORTED_MODULE_1__["DeptruckoutComponent"],
                data: ɵ3
            },
            {
                path: 'statreceipt',
                component: _statreceipt_component__WEBPACK_IMPORTED_MODULE_0__["StatreceiptComponent"],
                data: ɵ4
            },
        ]
    }
];
var TransmgtRoutingModule = /** @class */ (function () {
    function TransmgtRoutingModule() {
    }
    return TransmgtRoutingModule;
}());




/***/ }),

/***/ "./src/app/views/transmgt/transmgt.module.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/views/transmgt/transmgt.module.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: TransmgtModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmgtModuleNgFactory", function() { return TransmgtModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transmgt_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transmgt.module */ "./src/app/views/transmgt/transmgt.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _mvtodv_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mvtodv.component.ngfactory */ "./src/app/views/transmgt/mvtodv.component.ngfactory.js");
/* harmony import */ var _dvtodep_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dvtodep.component.ngfactory */ "./src/app/views/transmgt/dvtodep.component.ngfactory.js");
/* harmony import */ var _deptruckout_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deptruckout.component.ngfactory */ "./src/app/views/transmgt/deptruckout.component.ngfactory.js");
/* harmony import */ var _statreceipt_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statreceipt.component.ngfactory */ "./src/app/views/transmgt/statreceipt.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory */ "./node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transmgt_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./transmgt-routing.module */ "./src/app/views/transmgt/transmgt-routing.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _mvtodv_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mvtodv.component */ "./src/app/views/transmgt/mvtodv.component.ts");
/* harmony import */ var _dvtodep_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dvtodep.component */ "./src/app/views/transmgt/dvtodep.component.ts");
/* harmony import */ var _deptruckout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./deptruckout.component */ "./src/app/views/transmgt/deptruckout.component.ts");
/* harmony import */ var _statreceipt_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./statreceipt.component */ "./src/app/views/transmgt/statreceipt.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

























var TransmgtModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_transmgt_module__WEBPACK_IMPORTED_MODULE_1__["TransmgtModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _mvtodv_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MvtodvComponentNgFactory"], _dvtodep_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["DvtodepComponentNgFactory"], _deptruckout_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["DeptruckoutComponentNgFactory"], _statreceipt_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["StatreceiptComponentNgFactory"], _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_7__["BsDropdownContainerComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵsNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _transmgt_routing_module__WEBPACK_IMPORTED_MODULE_13__["TransmgtRoutingModule"], _transmgt_routing_module__WEBPACK_IMPORTED_MODULE_13__["TransmgtRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__["TabsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__["TabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_17__["DataTablesModule"], angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_17__["DataTablesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__["BsDropdownModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__["BsDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_20__["ButtonsModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_20__["ButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _transmgt_module__WEBPACK_IMPORTED_MODULE_1__["TransmgtModule"], _transmgt_module__WEBPACK_IMPORTED_MODULE_1__["TransmgtModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () { return [[{ path: "", data: _transmgt_routing_module__WEBPACK_IMPORTED_MODULE_13__["ɵ0"], children: [{ path: "mvtodv", component: _mvtodv_component__WEBPACK_IMPORTED_MODULE_21__["MvtodvComponent"], data: _transmgt_routing_module__WEBPACK_IMPORTED_MODULE_13__["ɵ1"] }, { path: "dvtodep", component: _dvtodep_component__WEBPACK_IMPORTED_MODULE_22__["DvtodepComponent"], data: _transmgt_routing_module__WEBPACK_IMPORTED_MODULE_13__["ɵ2"] }, { path: "deptruckout", component: _deptruckout_component__WEBPACK_IMPORTED_MODULE_23__["DeptruckoutComponent"], data: _transmgt_routing_module__WEBPACK_IMPORTED_MODULE_13__["ɵ3"] }, { path: "statreceipt", component: _statreceipt_component__WEBPACK_IMPORTED_MODULE_24__["StatreceiptComponent"], data: _transmgt_routing_module__WEBPACK_IMPORTED_MODULE_13__["ɵ4"] }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["SELECTION_MODEL_FACTORY"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵb"], [])]); });



/***/ }),

/***/ "./src/app/views/transmgt/transmgt.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/transmgt/transmgt.module.ts ***!
  \***************************************************/
/*! exports provided: TransmgtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmgtModule", function() { return TransmgtModule; });
var TransmgtModule = /** @class */ (function () {
    function TransmgtModule() {
    }
    return TransmgtModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-transmgt-transmgt-module-ngfactory.js.map