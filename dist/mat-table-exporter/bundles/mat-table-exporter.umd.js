(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material'), require('@angular/core'), require('cdk-table-exporter')) :
    typeof define === 'function' && define.amd ? define('mat-table-exporter', ['exports', '@angular/material', '@angular/core', 'cdk-table-exporter'], factory) :
    (factory((global['mat-table-exporter'] = {}),global.ng.material,global.ng.core,global.cdkTableExporter));
}(this, (function (exports,material,core,cdkTableExporter) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatTableExporterDirective = /** @class */ (function (_super) {
        __extends(MatTableExporterDirective, _super);
        function MatTableExporterDirective(renderer, jsonExporter) {
            var _this = _super.call(this, renderer, jsonExporter) || this;
            _this.renderer = renderer;
            _this.jsonExporter = jsonExporter;
            return _this;
        }
        /**
         * Overriding ngAfterViewInit of TableExporter
         */
        /**
         * Overriding ngAfterViewInit of TableExporter
         * @return {?}
         */
        MatTableExporterDirective.prototype.ngAfterViewInit = /**
         * Overriding ngAfterViewInit of TableExporter
         * @return {?}
         */
            function () {
                var _this = this;
                _super.prototype.ngAfterViewInit.call(this);
                if (this.getPaginator()) {
                    this.exportStarted.subscribe(( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) {
                        _this.enablePaginator(false);
                    }));
                    this.exportCompleted.subscribe(( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) {
                        _this.enablePaginator(true);
                    }));
                }
            };
        /**
         * MatTable implementation of getPageCount
         * @override
         */
        /**
         * MatTable implementation of getPageCount
         * @override
         * @return {?}
         */
        MatTableExporterDirective.prototype.getPageCount = /**
         * MatTable implementation of getPageCount
         * @override
         * @return {?}
         */
            function () {
                return this.getPaginator().getNumberOfPages();
            };
        /**
         * MatTable implementation of getCurrentPageIndex
         * @override
         */
        /**
         * MatTable implementation of getCurrentPageIndex
         * @override
         * @return {?}
         */
        MatTableExporterDirective.prototype.getCurrentPageIndex = /**
         * MatTable implementation of getCurrentPageIndex
         * @override
         * @return {?}
         */
            function () {
                return this.getPaginator().pageIndex;
            };
        /**
         * MatTable implementation of goToPage
         * @override
         */
        /**
         * MatTable implementation of goToPage
         * @override
         * @param {?} index
         * @return {?}
         */
        MatTableExporterDirective.prototype.goToPage = /**
         * MatTable implementation of goToPage
         * @override
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.getPaginator().pageIndex = index;
                this.getPaginator()._changePageSize(this.getPaginator().pageSize);
            };
        /**
         * MatTable implementation of getPageChangeObservable
         * @override
         */
        /**
         * MatTable implementation of getPageChangeObservable
         * @override
         * @return {?}
         */
        MatTableExporterDirective.prototype.getPageChangeObservable = /**
         * MatTable implementation of getPageChangeObservable
         * @override
         * @return {?}
         */
            function () {
                return this.getPaginator().page;
            };
        /**
         * @private
         * @return {?}
         */
        MatTableExporterDirective.prototype.getPaginator = /**
         * @private
         * @return {?}
         */
            function () {
                return (( /** @type {?} */(this.cdkTable.dataSource))).paginator;
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        MatTableExporterDirective.prototype.enablePaginator = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.getPaginator().disabled = !value;
                this.getPaginator()._changePageSize(this.getPaginator().pageSize);
            };
        MatTableExporterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngxMatTableExporter]'
                    },] }
        ];
        /** @nocollapse */
        MatTableExporterDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: cdkTableExporter.JsonExporterService }
            ];
        };
        return MatTableExporterDirective;
    }(cdkTableExporter.CdkTableExporter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatTableExporterModule = /** @class */ (function () {
        function MatTableExporterModule() {
        }
        MatTableExporterModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MatTableExporterDirective],
                        imports: [
                            material.MatTableModule
                        ],
                        exports: [MatTableExporterDirective]
                    },] }
        ];
        return MatTableExporterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.JsonExporterService = cdkTableExporter.JsonExporterService;
    exports.MatTableExporterDirective = MatTableExporterDirective;
    exports.MatTableExporterModule = MatTableExporterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mat-table-exporter.umd.js.map