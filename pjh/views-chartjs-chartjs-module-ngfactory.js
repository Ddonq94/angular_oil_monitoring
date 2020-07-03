(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chartjs-chartjs-module-ngfactory"],{

/***/ "./src/app/views/chartjs/chartjs-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/chartjs/chartjs-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ChartJSRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSRoutingModule", function() { return ChartJSRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chartjs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs.component */ "./src/app/views/chartjs/chartjs.component.ts");


var ɵ0 = {
    title: 'Charts'
};
var routes = [
    {
        path: '',
        component: _chartjs_component__WEBPACK_IMPORTED_MODULE_1__["ChartJSComponent"],
        data: ɵ0
    }
];
var ChartJSRoutingModule = /** @class */ (function () {
    function ChartJSRoutingModule() {
    }
    return ChartJSRoutingModule;
}());




/***/ }),

/***/ "./src/app/views/chartjs/chartjs.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ChartJSComponent, View_ChartJSComponent_0, View_ChartJSComponent_Host_0, ChartJSComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChartJSComponent", function() { return RenderType_ChartJSComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChartJSComponent_0", function() { return View_ChartJSComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChartJSComponent_Host_0", function() { return View_ChartJSComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSComponentNgFactory", function() { return ChartJSComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var _chartjs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjs.component */ "./src/app/views/chartjs/chartjs.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_ChartJSComponent = [];
var RenderType_ChartJSComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ChartJSComponent, data: {} });

function View_ChartJSComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 67, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 66, "div", [["class", "card-columns cols-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 5, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Line Chart "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 3, "div", [["class", "card-header-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "a", [["href", "http://www.chartjs.org"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["docs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "div", [["class", "chart-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "canvas", [["baseChart", ""], ["class", "chart"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("chartHover" === en)) {
        var pd_0 = (_co.chartHovered($event) !== false);
        ad = (pd_0 && ad);
    } if (("chartClick" === en)) {
        var pd_1 = (_co.chartClicked($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], { datasets: [0, "datasets"], labels: [1, "labels"], options: [2, "options"], chartType: [3, "chartType"], colors: [4, "colors"], legend: [5, "legend"] }, { chartClick: "chartClick", chartHover: "chartHover" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 5, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Bar Chart "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 3, "div", [["class", "card-header-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "a", [["href", "http://www.chartjs.org"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["docs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "div", [["class", "chart-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "canvas", [["baseChart", ""], ["class", "chart"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("chartHover" === en)) {
        var pd_0 = (_co.chartHovered($event) !== false);
        ad = (pd_0 && ad);
    } if (("chartClick" === en)) {
        var pd_1 = (_co.chartClicked($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], { datasets: [0, "datasets"], labels: [1, "labels"], options: [2, "options"], chartType: [3, "chartType"], legend: [4, "legend"] }, { chartClick: "chartClick", chartHover: "chartHover" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 5, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Doughnut Chart "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 3, "div", [["class", "card-header-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 2, "a", [["href", "http://www.chartjs.org"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["docs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 2, "div", [["class", "chart-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "canvas", [["baseChart", ""], ["class", "chart"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("chartHover" === en)) {
        var pd_0 = (_co.chartHovered($event) !== false);
        ad = (pd_0 && ad);
    } if (("chartClick" === en)) {
        var pd_1 = (_co.chartClicked($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], { data: [0, "data"], labels: [1, "labels"], chartType: [2, "chartType"] }, { chartClick: "chartClick", chartHover: "chartHover" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 5, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Radar Chart "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 3, "div", [["class", "card-header-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "a", [["href", "http://www.chartjs.org"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["docs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 2, "div", [["class", "chart-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "canvas", [["baseChart", ""], ["class", "chart"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("chartHover" === en)) {
        var pd_0 = (_co.chartHovered($event) !== false);
        ad = (pd_0 && ad);
    } if (("chartClick" === en)) {
        var pd_1 = (_co.chartClicked($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], { datasets: [0, "datasets"], labels: [1, "labels"], chartType: [2, "chartType"] }, { chartClick: "chartClick", chartHover: "chartHover" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 5, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Pie Chart "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 3, "div", [["class", "card-header-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 2, "a", [["href", "http://www.chartjs.org"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["docs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 2, "div", [["class", "chart-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 1, "canvas", [["baseChart", ""], ["class", "chart"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("chartHover" === en)) {
        var pd_0 = (_co.chartHovered($event) !== false);
        ad = (pd_0 && ad);
    } if (("chartClick" === en)) {
        var pd_1 = (_co.chartClicked($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], { data: [0, "data"], labels: [1, "labels"], chartType: [2, "chartType"] }, { chartClick: "chartClick", chartHover: "chartHover" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 10, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 5, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Polar Area Chart "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 3, "div", [["class", "card-header-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 2, "a", [["href", "http://www.chartjs.org"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 1, "small", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["docs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 2, "div", [["class", "chart-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 1, "canvas", [["baseChart", ""], ["class", "chart"]], null, [[null, "chartHover"], [null, "chartClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("chartHover" === en)) {
        var pd_0 = (_co.chartHovered($event) !== false);
        ad = (pd_0 && ad);
    } if (("chartClick" === en)) {
        var pd_1 = (_co.chartClicked($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](67, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]], { data: [0, "data"], labels: [1, "labels"], chartType: [2, "chartType"], legend: [3, "legend"] }, { chartClick: "chartClick", chartHover: "chartHover" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.lineChartData; var currVal_1 = _co.lineChartLabels; var currVal_2 = _co.lineChartOptions; var currVal_3 = _co.lineChartType; var currVal_4 = _co.lineChartColours; var currVal_5 = _co.lineChartLegend; _ck(_v, 12, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.barChartData; var currVal_7 = _co.barChartLabels; var currVal_8 = _co.barChartOptions; var currVal_9 = _co.barChartType; var currVal_10 = _co.barChartLegend; _ck(_v, 23, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = _co.doughnutChartData; var currVal_12 = _co.doughnutChartLabels; var currVal_13 = _co.doughnutChartType; _ck(_v, 34, 0, currVal_11, currVal_12, currVal_13); var currVal_14 = _co.radarChartData; var currVal_15 = _co.radarChartLabels; var currVal_16 = _co.radarChartType; _ck(_v, 45, 0, currVal_14, currVal_15, currVal_16); var currVal_17 = _co.pieChartData; var currVal_18 = _co.pieChartLabels; var currVal_19 = _co.pieChartType; _ck(_v, 56, 0, currVal_17, currVal_18, currVal_19); var currVal_20 = _co.polarAreaChartData; var currVal_21 = _co.polarAreaChartLabels; var currVal_22 = _co.polarAreaChartType; var currVal_23 = _co.polarAreaLegend; _ck(_v, 67, 0, currVal_20, currVal_21, currVal_22, currVal_23); }, null); }
function View_ChartJSComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ChartJSComponent_0, RenderType_ChartJSComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _chartjs_component__WEBPACK_IMPORTED_MODULE_2__["ChartJSComponent"], [], null, null)], null, null); }
var ChartJSComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _chartjs_component__WEBPACK_IMPORTED_MODULE_2__["ChartJSComponent"], View_ChartJSComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/chartjs/chartjs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.component.ts ***!
  \****************************************************/
/*! exports provided: ChartJSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSComponent", function() { return ChartJSComponent; });
var ChartJSComponent = /** @class */ (function () {
    function ChartJSComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // events
    ChartJSComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartJSComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return ChartJSComponent;
}());



/***/ }),

/***/ "./src/app/views/chartjs/chartjs.module.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.module.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: ChartJSModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSModuleNgFactory", function() { return ChartJSModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chartjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs.module */ "./src/app/views/chartjs/chartjs.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _chartjs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjs.component.ngfactory */ "./src/app/views/chartjs/chartjs.component.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartjs-routing.module */ "./src/app/views/chartjs/chartjs-routing.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var _chartjs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chartjs.component */ "./src/app/views/chartjs/chartjs.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 








var ChartJSModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_chartjs_module__WEBPACK_IMPORTED_MODULE_1__["ChartJSModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _chartjs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ChartJSComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartJSRoutingModule"], _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartJSRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _chartjs_module__WEBPACK_IMPORTED_MODULE_1__["ChartJSModule"], _chartjs_module__WEBPACK_IMPORTED_MODULE_1__["ChartJSModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_4__["ROUTES"], function () { return [[{ path: "", component: _chartjs_component__WEBPACK_IMPORTED_MODULE_7__["ChartJSComponent"], data: _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_5__["ɵ0"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/views/chartjs/chartjs.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.module.ts ***!
  \*************************************************/
/*! exports provided: ChartJSModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSModule", function() { return ChartJSModule; });
var ChartJSModule = /** @class */ (function () {
    function ChartJSModule() {
    }
    return ChartJSModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-chartjs-chartjs-module-ngfactory.js.map