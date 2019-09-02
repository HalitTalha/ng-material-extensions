(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/table'), require('file-saver'), require('xlsx'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('cdk-table-exporter', ['exports', '@angular/cdk/table', 'file-saver', 'xlsx', '@angular/core'], factory) :
    (factory((global['cdk-table-exporter'] = {}),global.ng.cdk.table,global.FileSaver,global.XLSX,global.ng.core));
}(this, (function (exports,table,FileSaver,XLSX,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CdkTableExporterModule = /** @class */ (function () {
        function CdkTableExporterModule() {
        }
        CdkTableExporterModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [],
                        imports: [
                            table.CdkTableModule
                        ],
                        exports: []
                    },] }
        ];
        return CdkTableExporterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ExportType = {
        XLS: 'xls',
        XLSX: 'xlsx',
        CSV: 'csv',
        TXT: 'txt',
        JSON: 'json',
        OTHER: 'other',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Mime = /** @class */ (function () {
        function Mime(extension, contentTypeHeader) {
            this.extension = extension;
            this.contentTypeHeader = contentTypeHeader;
        }
        return Mime;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAT_TABLE_EXPORTER = 'mat-table-exporter';
    /** @type {?} */
    var TYPE_ARRAY = 'array';
    /** @type {?} */
    var CHAR_SET_UTF = ';charset=utf-';
    /** @type {?} */
    var CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
    /** @type {?} */
    var CHAR_SET_UTF_16 = CHAR_SET_UTF + '16';
    /** @type {?} */
    var CONTENT_TYPE_TEXT = ExportType.TXT + '/';
    /** @type {?} */
    var CONTENT_TYPE_APPLICATION = 'application/';
    /** @type {?} */
    var CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
    /** @type {?} */
    var P = '.';
    /** @type {?} */
    var EXTENSION_XLS = P + ExportType.XLS;
    /** @type {?} */
    var EXTENSION_XLSX = P + ExportType.XLSX;
    /** @type {?} */
    var EXTENSION_CSV = P + ExportType.CSV;
    /** @type {?} */
    var EXTENSION_JSON = P + ExportType.JSON;
    /** @type {?} */
    var EXTENSION_TEXT = P + ExportType.TXT;
    /** @type {?} */
    var MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
    /** @type {?} */
    var MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
    /** @type {?} */
    var MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
    /** @type {?} */
    var MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_16);
    /** @type {?} */
    var MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
    /** @type {?} */
    var REF = '!ref';
    /** @type {?} */
    var XLS_REGEX = P + '*\.' + ExportType.XLS + '$';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FileUtil = /** @class */ (function () {
        function FileUtil() {
        }
        /**
         * @param {?} content
         * @param {?} mime
         * @param {?=} options
         * @return {?}
         */
        FileUtil.save = /**
         * @param {?} content
         * @param {?} mime
         * @param {?=} options
         * @return {?}
         */
            function (content, mime, options) {
                /** @type {?} */
                var blob = new Blob([content], { type: mime.contentTypeHeader });
                /** @type {?} */
                var fileName = MAT_TABLE_EXPORTER;
                if (options && options.fileName) {
                    fileName = options.fileName;
                }
                FileSaver.saveAs(blob, fileName + mime.extension);
            };
        /**
         * @param {?} fileName
         * @return {?}
         */
        FileUtil.isXls = /**
         * @param {?} fileName
         * @return {?}
         */
            function (fileName) {
                return fileName.toLowerCase().match(XLS_REGEX) != null;
            };
        /**
         * @param {?=} fileName
         * @return {?}
         */
        FileUtil.identifyExportType = /**
         * @param {?=} fileName
         * @return {?}
         */
            function (fileName) {
                if (fileName && FileUtil.isXls(fileName)) {
                    return ExportType.XLS;
                }
                else {
                    return ExportType.XLSX;
                }
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        FileUtil.removeExtension = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                options.fileName = options.fileName.split(P)[0];
            };
        return FileUtil;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
     * @abstract
     */
    var CdkTableExporter = /** @class */ (function () {
        function CdkTableExporter(renderer, serviceLocator, dataExtractor, table$$1, viewContainerRef) {
            this.renderer = renderer;
            this.serviceLocator = serviceLocator;
            this.dataExtractor = dataExtractor;
            this.table = table$$1;
            this.viewContainerRef = viewContainerRef;
            this.exportCompleted = new i0.EventEmitter();
            this.exportStarted = new i0.EventEmitter();
            this.initCdkTable();
        }
        Object.defineProperty(CdkTableExporter.prototype, "cdkTable", {
            get: /**
             * @return {?}
             */ function () {
                return this._cdkTable;
            },
            /**
             * @deprecated
             */
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */ function (value) {
                console.warn('cdkTable input is deprecated!');
                this._cdkTable = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTableExporter.prototype, "exporterButton", {
            get: /**
             * @return {?}
             */ function () {
                return this._exporterButton;
            },
            /**
             * @deprecated
             */
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */ function (value) {
                console.warn('exporterButton input is deprecated!');
                this._exporterButton = value;
                this.setButtonListener();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTableExporter.prototype, "fileName", {
            get: /**
             * @return {?}
             */ function () {
                return this._fileName;
            },
            /**
             * @deprecated
             */
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */ function (value) {
                console.warn('fileName input is deprecated!');
                this._fileName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTableExporter.prototype, "sheetName", {
            get: /**
             * @return {?}
             */ function () {
                return this._sheetName;
            },
            /**
             * @deprecated
             */
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */ function (value) {
                console.warn('sheetName input is deprecated!');
                this._sheetName = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.initCdkTable = /**
         * @private
         * @return {?}
         */
            function () {
                // tslint:disable-next-line:no-string-literal
                /** @type {?} */
                var table$$1 = this.viewContainerRef['_data'].componentView.component;
                if (table$$1) {
                    this._cdkTable = table$$1;
                }
                else if (this.table) {
                    this._cdkTable = this.table;
                }
                else {
                    throw new Error('Unsupported Angular version');
                }
            };
        /**
         * @private
         * @param {?=} exportType
         * @return {?}
         */
        CdkTableExporter.prototype.initExporterService = /**
         * @private
         * @param {?=} exportType
         * @return {?}
         */
            function (exportType) {
                if (exportType !== ExportType.OTHER) {
                    this.exporter = this.serviceLocator.getService(exportType);
                }
            };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.setButtonListener = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._exporterButton) {
                    this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', ( /**
                     * @param {?} evt
                     * @return {?}
                     */function (evt) {
                        /** @type {?} */
                        var options = ( /** @type {?} */({ fileName: _this._fileName, sheet: _this._sheetName }));
                        _this.exportTable(FileUtil.identifyExportType(_this._fileName), options); // this is to support deprecated way of exporting
                    }));
                }
            };
        /**
         * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
         */
        /**
         * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
         * @param {?=} exportType
         * @param {?=} options
         * @return {?}
         */
        CdkTableExporter.prototype.exportTable = /**
         * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
         * @param {?=} exportType
         * @param {?=} options
         * @return {?}
         */
            function (exportType, options) {
                this.initExporterService(exportType);
                this._options = options;
                this.exportStarted.emit();
                this._isIterating = true;
                this._isExporting = true;
                this._data = new Array();
                this.enableExportButton(false);
                this.extractTableHeader();
                try {
                    this.exportWithPagination();
                }
                catch (notPaginated) {
                    this.exportSinglePage();
                }
            };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.exportWithPagination = /**
         * @private
         * @return {?}
         */
            function () {
                this._initialPageIndex = this.getCurrentPageIndex();
                this.initPageHandler();
                this.goToPage(0);
            };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.exportSinglePage = /**
         * @private
         * @return {?}
         */
            function () {
                this.extractDataOnCurrentPage();
                this.extractTableFooter();
                this.exportExtractedData();
            };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.extractDataOnCurrentPage = /**
         * @private
         * @return {?}
         */
            function () {
                this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
            };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.initPageHandler = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._subscription) {
                    this._subscription = this.getPageChangeObservable().subscribe(( /**
                     * @return {?}
                     */function () {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            if (_this._isIterating) {
                                _this.extractDataOnCurrentPage();
                                if (_this.hasNextPage()) {
                                    _this.nextPage();
                                }
                                else {
                                    _this._isIterating = false;
                                    _this.goToPage(_this._initialPageIndex);
                                }
                            }
                            else if (_this._isExporting) {
                                _this._isExporting = false;
                                _this.extractTableFooter();
                                _this.exportExtractedData();
                            }
                        }));
                    }));
                }
            };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.exportExtractedData = /**
         * @private
         * @return {?}
         */
            function () {
                this.exporter.export(this._data, this._options);
                this._data = new Array();
                this.enableExportButton(true);
                this.exportCompleted.emit();
            };
        /**
         * @private
         * @param {?} outlet
         * @return {?}
         */
        CdkTableExporter.prototype.extractSpecialRow = /**
         * @private
         * @param {?} outlet
         * @return {?}
         */
            function (outlet) {
                /** @type {?} */
                var row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
                if (row) {
                    this._data.push(row);
                }
            };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.extractTableHeader = /**
         * @private
         * @return {?}
         */
            function () {
                this.extractSpecialRow(this._cdkTable._headerRowOutlet);
            };
        /**
         * @private
         * @return {?}
         */
        CdkTableExporter.prototype.extractTableFooter = /**
         * @private
         * @return {?}
         */
            function () {
                this.extractSpecialRow(this._cdkTable._footerRowOutlet);
            };
        /**
         * @return {?}
         */
        CdkTableExporter.prototype.hasNextPage = /**
         * @return {?}
         */
            function () {
                if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @return {?}
         */
        CdkTableExporter.prototype.nextPage = /**
         * @return {?}
         */
            function () {
                this.goToPage(this.getCurrentPageIndex() + 1);
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        CdkTableExporter.prototype.enableExportButton = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this._exporterButton) {
                    this.renderer.setProperty(this._exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
                }
            };
        CdkTableExporter.propDecorators = {
            hiddenColumns: [{ type: i0.Input }],
            exporter: [{ type: i0.Input }],
            exportCompleted: [{ type: i0.Output }],
            exportStarted: [{ type: i0.Output }],
            cdkTable: [{ type: i0.Input }],
            exporterButton: [{ type: i0.Input }],
            fileName: [{ type: i0.Input }],
            sheetName: [{ type: i0.Input }]
        };
        return CdkTableExporter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JsonExporterService = /** @class */ (function () {
        function JsonExporterService() {
        }
        /**
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
        JsonExporterService.prototype.export = /**
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
            function (rows, options) {
                /** @type {?} */
                var jsonContent = JSON.stringify(rows);
                FileUtil.save(jsonContent, MIME_JSON, options);
            };
        JsonExporterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        JsonExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ JsonExporterService.ngInjectableDef = i0.defineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
        return JsonExporterService;
    }());

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
    /**
     * An angular service class that is used to create files out of json object arrays.
     * @abstract
     * @template T
     */
    var /**
     * An angular service class that is used to create files out of json object arrays.
     * @abstract
     * @template T
     */ WorksheetExporter = /** @class */ (function () {
        function WorksheetExporter() {
        }
        /**
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
        WorksheetExporter.prototype.export = /**
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
            function (rows, options) {
                if (!rows) {
                    throw new Error('Empty json array is provided, rows parameter is mandatory!');
                }
                /** @type {?} */
                var worksheet = XLSX.utils.json_to_sheet(rows, {
                    skipHeader: true // we don't want to see object properties as our headers
                });
                this.writeToFile(worksheet, options);
            };
        /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        WorksheetExporter.prototype.writeToFile = /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
            function (worksheet, options) {
                /** @type {?} */
                var content = this.createContent(worksheet, options);
                /** @type {?} */
                var mimeType = this.getMimeType();
                FileUtil.save(content, mimeType, options);
            };
        return WorksheetExporter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TxtExporterService = /** @class */ (function (_super) {
        __extends(TxtExporterService, _super);
        function TxtExporterService() {
            return _super.call(this) || this;
        }
        /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        TxtExporterService.prototype.createContent = /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
            function (worksheet, options) {
                return XLSX.utils.sheet_to_txt(worksheet);
            };
        /**
         * @return {?}
         */
        TxtExporterService.prototype.getMimeType = /**
         * @return {?}
         */
            function () {
                return MIME_TXT;
            };
        TxtExporterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TxtExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ TxtExporterService.ngInjectableDef = i0.defineInjectable({ factory: function TxtExporterService_Factory() { return new TxtExporterService(); }, token: TxtExporterService, providedIn: "root" });
        return TxtExporterService;
    }(WorksheetExporter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var XlsExporterService = /** @class */ (function (_super) {
        __extends(XlsExporterService, _super);
        function XlsExporterService() {
            return _super.call(this) || this;
        }
        /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        XlsExporterService.prototype.createContent = /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
            function (worksheet, options) {
                /** @type {?} */
                var workBook = XLSX.utils.book_new();
                if (!options) {
                    options = ( /** @type {?} */({}));
                }
                this.correctType(options);
                XLSX.utils.book_append_sheet(workBook, worksheet, options.sheet);
                return XLSX.write(workBook, options);
            };
        /**
         * @return {?}
         */
        XlsExporterService.prototype.getMimeType = /**
         * @return {?}
         */
            function () {
                return MIME_EXCEL_XLS;
            };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        XlsExporterService.prototype.correctType = /**
         * @private
         * @param {?} options
         * @return {?}
         */
            function (options) {
                if (!options.type) {
                    options.type = TYPE_ARRAY;
                }
            };
        XlsExporterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        XlsExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ XlsExporterService.ngInjectableDef = i0.defineInjectable({ factory: function XlsExporterService_Factory() { return new XlsExporterService(); }, token: XlsExporterService, providedIn: "root" });
        return XlsExporterService;
    }(WorksheetExporter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var XlsxExporterService = /** @class */ (function (_super) {
        __extends(XlsxExporterService, _super);
        function XlsxExporterService() {
            return _super.call(this) || this;
        }
        // override
        // override
        /**
         * @return {?}
         */
        XlsxExporterService.prototype.getMimeType =
            // override
            /**
             * @return {?}
             */
            function () {
                return MIME_EXCEL_XLSX;
            };
        XlsxExporterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        XlsxExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ XlsxExporterService.ngInjectableDef = i0.defineInjectable({ factory: function XlsxExporterService_Factory() { return new XlsxExporterService(); }, token: XlsxExporterService, providedIn: "root" });
        return XlsxExporterService;
    }(XlsExporterService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CsvExporterService = /** @class */ (function (_super) {
        __extends(CsvExporterService, _super);
        function CsvExporterService() {
            return _super.call(this) || this;
        }
        /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
        CsvExporterService.prototype.createContent = /**
         * @param {?} worksheet
         * @param {?=} options
         * @return {?}
         */
            function (worksheet, options) {
                return XLSX.utils.sheet_to_csv(worksheet);
            };
        /**
         * @return {?}
         */
        CsvExporterService.prototype.getMimeType = /**
         * @return {?}
         */
            function () {
                return MIME_CSV;
            };
        CsvExporterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CsvExporterService.ctorParameters = function () { return []; };
        /** @nocollapse */ CsvExporterService.ngInjectableDef = i0.defineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
        return CsvExporterService;
    }(WorksheetExporter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServiceLocatorService = /** @class */ (function () {
        function ServiceLocatorService(injector) {
            this.injector = injector;
        }
        /**
         * @param {?} exportType
         * @return {?}
         */
        ServiceLocatorService.prototype.getService = /**
         * @param {?} exportType
         * @return {?}
         */
            function (exportType) {
                switch (exportType) {
                    case ExportType.XLS:
                        return this.injector.get(XlsExporterService);
                    case ExportType.XLSX:
                        return this.injector.get(XlsxExporterService);
                    case ExportType.JSON:
                        return this.injector.get(JsonExporterService);
                    case ExportType.TXT:
                        return this.injector.get(TxtExporterService);
                    case ExportType.CSV:
                        return this.injector.get(CsvExporterService);
                    default:
                        return this.injector.get(XlsxExporterService);
                }
            };
        ServiceLocatorService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ServiceLocatorService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ ServiceLocatorService.ngInjectableDef = i0.defineInjectable({ factory: function ServiceLocatorService_Factory() { return new ServiceLocatorService(i0.inject(i0.INJECTOR)); }, token: ServiceLocatorService, providedIn: "root" });
        return ServiceLocatorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataExtractorService = /** @class */ (function () {
        function DataExtractorService() {
        }
        /**
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @return {?}
         */
        DataExtractorService.prototype.extractRows = /**
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @return {?}
         */
            function (cdkTable, hiddenColumns) {
                return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
            };
        /**
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @param {?} outlet
         * @return {?}
         */
        DataExtractorService.prototype.extractRow = /**
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @param {?} outlet
         * @return {?}
         */
            function (cdkTable, hiddenColumns, outlet) {
                return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
            };
        /**
         * @private
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @param {?} outlet
         * @return {?}
         */
        DataExtractorService.prototype.getRowsAsJsonArray = /**
         * @private
         * @param {?} cdkTable
         * @param {?} hiddenColumns
         * @param {?} outlet
         * @return {?}
         */
            function (cdkTable, hiddenColumns, outlet) {
                /** @type {?} */
                var renderedRows = this.getRenderedRows(cdkTable, outlet);
                return this.convertToJsonArray(hiddenColumns, renderedRows);
            };
        /**
         * @private
         * @param {?} cdkTable
         * @param {?} outlet
         * @return {?}
         */
        DataExtractorService.prototype.getRenderedRows = /**
         * @private
         * @param {?} cdkTable
         * @param {?} outlet
         * @return {?}
         */
            function (cdkTable, outlet) {
                return ( /** @type {?} */(cdkTable._getRenderedRows(outlet)));
            };
        /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} rows
         * @return {?}
         */
        DataExtractorService.prototype.convertToJsonArray = /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} rows
         * @return {?}
         */
            function (hiddenColumns, rows) {
                /** @type {?} */
                var result = new Array();
                // tslint:disable-next-line:prefer-for-of
                for (var i = 0; i < rows.length; i++) {
                    /** @type {?} */
                    var row = this.convertRow(hiddenColumns, rows[i]);
                    result.push(this.createExcelItem(row));
                }
                return result;
            };
        /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} row
         * @return {?}
         */
        DataExtractorService.prototype.convertRow = /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} row
         * @return {?}
         */
            function (hiddenColumns, row) {
                /** @type {?} */
                var result = new Array();
                /** @type {?} */
                var cells = row.children;
                for (var i = 0; i < cells.length; i++) {
                    if (!this.shouldHide(hiddenColumns, i)) {
                        /** @type {?} */
                        var element = cells.item(i).innerText;
                        result.push(element);
                    }
                }
                return result;
            };
        /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} columnIndex
         * @return {?}
         */
        DataExtractorService.prototype.shouldHide = /**
         * @private
         * @param {?} hiddenColumns
         * @param {?} columnIndex
         * @return {?}
         */
            function (hiddenColumns, columnIndex) {
                if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} row
         * @return {?}
         */
        DataExtractorService.prototype.createExcelItem = /**
         * @private
         * @param {?} row
         * @return {?}
         */
            function (row) {
                return Object.assign({}, row);
            };
        DataExtractorService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DataExtractorService.ctorParameters = function () { return []; };
        /** @nocollapse */ DataExtractorService.ngInjectableDef = i0.defineInjectable({ factory: function DataExtractorService_Factory() { return new DataExtractorService(); }, token: DataExtractorService, providedIn: "root" });
        return DataExtractorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CdkTableExporter = CdkTableExporter;
    exports.JsonExporterService = JsonExporterService;
    exports.TxtExporterService = TxtExporterService;
    exports.XlsExporterService = XlsExporterService;
    exports.XlsxExporterService = XlsxExporterService;
    exports.CsvExporterService = CsvExporterService;
    exports.ExportType = ExportType;
    exports.ServiceLocatorService = ServiceLocatorService;
    exports.DataExtractorService = DataExtractorService;
    exports.Mime = Mime;
    exports.FileUtil = FileUtil;
    exports.CdkTableExporterModule = CdkTableExporterModule;
    exports.MAT_TABLE_EXPORTER = MAT_TABLE_EXPORTER;
    exports.TYPE_ARRAY = TYPE_ARRAY;
    exports.CHAR_SET_UTF = CHAR_SET_UTF;
    exports.CHAR_SET_UTF_8 = CHAR_SET_UTF_8;
    exports.CHAR_SET_UTF_16 = CHAR_SET_UTF_16;
    exports.CONTENT_TYPE_TEXT = CONTENT_TYPE_TEXT;
    exports.CONTENT_TYPE_APPLICATION = CONTENT_TYPE_APPLICATION;
    exports.CONTENT_TYPE_EXCEL = CONTENT_TYPE_EXCEL;
    exports.P = P;
    exports.EXTENSION_XLS = EXTENSION_XLS;
    exports.EXTENSION_XLSX = EXTENSION_XLSX;
    exports.EXTENSION_CSV = EXTENSION_CSV;
    exports.EXTENSION_JSON = EXTENSION_JSON;
    exports.EXTENSION_TEXT = EXTENSION_TEXT;
    exports.MIME_EXCEL_XLS = MIME_EXCEL_XLS;
    exports.MIME_EXCEL_XLSX = MIME_EXCEL_XLSX;
    exports.MIME_JSON = MIME_JSON;
    exports.MIME_TXT = MIME_TXT;
    exports.MIME_CSV = MIME_CSV;
    exports.REF = REF;
    exports.XLS_REGEX = XLS_REGEX;
    exports.ɵa = WorksheetExporter;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=cdk-table-exporter.umd.js.map