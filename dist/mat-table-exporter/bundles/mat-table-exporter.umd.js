(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('cdk-table-exporter')) :
    typeof define === 'function' && define.amd ? define('mat-table-exporter', ['exports', '@angular/core', '@angular/material', 'cdk-table-exporter'], factory) :
    (factory((global['mat-table-exporter'] = {}),global.ng.core,global.ng.material,global.cdkTableExporter));
}(this, (function (exports,core,material,cdkTableExporter) { 'use strict';

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
        function MatTableExporterDirective(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
            return _super.call(this, renderer, serviceLocator, dataExtractor, table, viewContainerRef) || this;
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
                if (this.getPaginator()) {
                    this.getPaginator().disabled = !value;
                    this.getPaginator()._changePageSize(this.getPaginator().pageSize);
                }
            };
        MatTableExporterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngxMatTableExporter], [matTableExporter]',
                        // renamed selector but kept old version for backwards compat.
                        exportAs: 'matTableExporter'
                    },] }
        ];
        /** @nocollapse */
        MatTableExporterDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: cdkTableExporter.ServiceLocatorService },
                { type: cdkTableExporter.DataExtractorService },
                { type: material.MatTable, decorators: [{ type: core.Host }, { type: core.Self }, { type: core.Optional }] },
                { type: core.ViewContainerRef }
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
                            material.MatTableModule,
                            cdkTableExporter.CdkTableExporterModule
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

    exports.ɵa = cdkTableExporter.ɵa;
    exports.CdkTableExporter = cdkTableExporter.CdkTableExporter;
    exports.JsonExporterService = cdkTableExporter.JsonExporterService;
    exports.TxtExporterService = cdkTableExporter.TxtExporterService;
    exports.XlsExporterService = cdkTableExporter.XlsExporterService;
    exports.XlsxExporterService = cdkTableExporter.XlsxExporterService;
    exports.CsvExporterService = cdkTableExporter.CsvExporterService;
    exports.ExportType = cdkTableExporter.ExportType;
    exports.ServiceLocatorService = cdkTableExporter.ServiceLocatorService;
    exports.DataExtractorService = cdkTableExporter.DataExtractorService;
    exports.Mime = cdkTableExporter.Mime;
    exports.FileUtil = cdkTableExporter.FileUtil;
    exports.CdkTableExporterModule = cdkTableExporter.CdkTableExporterModule;
    exports.MAT_TABLE_EXPORTER = cdkTableExporter.MAT_TABLE_EXPORTER;
    exports.TYPE_ARRAY = cdkTableExporter.TYPE_ARRAY;
    exports.CHAR_SET_UTF = cdkTableExporter.CHAR_SET_UTF;
    exports.CHAR_SET_UTF_8 = cdkTableExporter.CHAR_SET_UTF_8;
    exports.CHAR_SET_UTF_16 = cdkTableExporter.CHAR_SET_UTF_16;
    exports.CONTENT_TYPE_TEXT = cdkTableExporter.CONTENT_TYPE_TEXT;
    exports.CONTENT_TYPE_APPLICATION = cdkTableExporter.CONTENT_TYPE_APPLICATION;
    exports.CONTENT_TYPE_EXCEL = cdkTableExporter.CONTENT_TYPE_EXCEL;
    exports.P = cdkTableExporter.P;
    exports.EXTENSION_XLS = cdkTableExporter.EXTENSION_XLS;
    exports.EXTENSION_XLSX = cdkTableExporter.EXTENSION_XLSX;
    exports.EXTENSION_CSV = cdkTableExporter.EXTENSION_CSV;
    exports.EXTENSION_JSON = cdkTableExporter.EXTENSION_JSON;
    exports.EXTENSION_TEXT = cdkTableExporter.EXTENSION_TEXT;
    exports.MIME_EXCEL_XLS = cdkTableExporter.MIME_EXCEL_XLS;
    exports.MIME_EXCEL_XLSX = cdkTableExporter.MIME_EXCEL_XLSX;
    exports.MIME_JSON = cdkTableExporter.MIME_JSON;
    exports.MIME_TXT = cdkTableExporter.MIME_TXT;
    exports.MIME_CSV = cdkTableExporter.MIME_CSV;
    exports.REF = cdkTableExporter.REF;
    exports.XLS_REGEX = cdkTableExporter.XLS_REGEX;
    exports.MatTableExporterDirective = MatTableExporterDirective;
    exports.MatTableExporterModule = MatTableExporterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mat-table-exporter.umd.js.map