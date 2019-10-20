/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { ExportType } from './export-type';
import { FileUtil } from './file-util';
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 * @abstract
 */
// @Directive()
var CdkTableExporter = /** @class */ (function () {
    function CdkTableExporter(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
        this.renderer = renderer;
        this.serviceLocator = serviceLocator;
        this.dataExtractor = dataExtractor;
        this.table = table;
        this.viewContainerRef = viewContainerRef;
        this.exportCompleted = new EventEmitter();
        this.exportStarted = new EventEmitter();
        this.initCdkTable();
    }
    Object.defineProperty(CdkTableExporter.prototype, "cdkTable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cdkTable;
        },
        /**
         * @deprecated
         */
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.warn('cdkTable input is deprecated!');
            this._cdkTable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTableExporter.prototype, "exporterButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._exporterButton;
        },
        /**
         * @deprecated
         */
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            return this._fileName;
        },
        /**
         * @deprecated
         */
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.warn('fileName input is deprecated!');
            this._fileName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTableExporter.prototype, "sheetName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sheetName;
        },
        /**
         * @deprecated
         */
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        var table = this.viewContainerRef['_data'].componentView.component;
        if (table) {
            this._cdkTable = table;
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
            this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) {
                /** @type {?} */
                var options = (/** @type {?} */ ({ fileName: _this._fileName, sheet: _this._sheetName }));
                _this.exportTable(FileUtil.identifyExportType(_this._fileName), options); // this is to support deprecated way of exporting
            }));
        }
    };
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     * @param {?=} exportTypeParam
     * @param {?=} options
     * @return {?}
     */
    CdkTableExporter.prototype.exportTable = /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     * @param {?=} exportTypeParam
     * @param {?=} options
     * @return {?}
     */
    function (exportTypeParam, options) {
        /** @type {?} */
        var exportType = this.correctExportType(exportTypeParam);
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
     * @param {?=} exportTypeParam
     * @return {?}
     */
    CdkTableExporter.prototype.correctExportType = /**
     * @private
     * @param {?=} exportTypeParam
     * @return {?}
     */
    function (exportTypeParam) {
        if (exportTypeParam && typeof exportTypeParam === 'string') {
            switch (exportTypeParam) {
                case ExportType.CSV:
                    return ExportType.CSV;
                case ExportType.JSON:
                    return ExportType.JSON;
                case ExportType.OTHER:
                    return ExportType.OTHER;
                case ExportType.TXT:
                    return ExportType.TXT;
                case ExportType.XLS:
                    return ExportType.XLS;
                case ExportType.XLSX:
                    return ExportType.XLSX;
            }
        }
        else {
            return (/** @type {?} */ (exportTypeParam));
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
            this._subscription = this.getPageChangeObservable().subscribe((/**
             * @return {?}
             */
            function () {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
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
        hiddenColumns: [{ type: Input }],
        exporter: [{ type: Input }],
        exportCompleted: [{ type: Output }],
        exportStarted: [{ type: Output }],
        cdkTable: [{ type: Input }],
        exporterButton: [{ type: Input }],
        fileName: [{ type: Input }],
        sheetName: [{ type: Input }]
    };
    return CdkTableExporter;
}());
export { CdkTableExporter };
if (false) {
    /** @type {?} */
    CdkTableExporter.prototype.hiddenColumns;
    /** @type {?} */
    CdkTableExporter.prototype.exporter;
    /** @type {?} */
    CdkTableExporter.prototype.exportCompleted;
    /** @type {?} */
    CdkTableExporter.prototype.exportStarted;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._cdkTable;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._exporterButton;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._fileName;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._sheetName;
    /**
     * Data array which is extracted from nativeTable
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._data;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._isIterating;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._initialPageIndex;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._isExporting;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype._options;
    /**
     * @type {?}
     * @protected
     */
    CdkTableExporter.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype.serviceLocator;
    /**
     * @type {?}
     * @private
     */
    CdkTableExporter.prototype.dataExtractor;
    /**
     * @type {?}
     * @protected
     */
    CdkTableExporter.prototype.table;
    /**
     * @type {?}
     * @protected
     */
    CdkTableExporter.prototype.viewContainerRef;
    /**
     * Must return the number of pages of the table
     * @abstract
     * @return {?}
     */
    CdkTableExporter.prototype.getPageCount = function () { };
    /**
     * Must return the index of the current page that's displayed
     * @abstract
     * @return {?}
     */
    CdkTableExporter.prototype.getCurrentPageIndex = function () { };
    /**
     * When called, the CdkTable should render the rows inside the page whose index given as parameter
     * @abstract
     * @param {?} index page index
     * @return {?}
     */
    CdkTableExporter.prototype.goToPage = function (index) { };
    /**
     * Must return an observable that notifies the subscribers about page changes
     * @abstract
     * @return {?}
     */
    CdkTableExporter.prototype.getPageChangeObservable = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQVd2QztJQXFGRSwwQkFBc0IsUUFBbUIsRUFDckIsY0FBcUMsRUFDckMsYUFBbUMsRUFDakMsS0FBVSxFQUNWLGdCQUFrQztRQUpsQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFwRjlDLG9CQUFlLEdBQUksSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM1QyxrQkFBYSxHQUFJLElBQUksWUFBWSxFQUFRLENBQUM7UUFvRmxELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBakZELHNCQUFJLHNDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQztRQUVIOztXQUVHOzs7Ozs7UUFDRCxVQUNhLEtBQVU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQVRBO0lBYUQsc0JBQUksNENBQWM7Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQztRQUVEOztXQUVH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S0FBYztRQUN2QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUc7SUFDSCxDQUFDOztnQ0E5UEEsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLE1BQU07Z0NBQ04sTUFBTTsyQkFXTixLQUFLO2lDQWVMLEtBQUs7MkJBZ0JMLEtBQUs7NEJBZUwsS0FBSzs7SUFtTVIsdUJBQUM7Q0FBQSxBQWxRRCxJQWtRQztTQWxRcUIsZ0JBQWdCOzs7SUFHcEMseUNBQXVDOztJQUN2QyxvQ0FBc0M7O0lBQ3RDLDJDQUFzRDs7SUFDdEQseUNBQW9EOzs7OztJQUVwRCxxQ0FBdUI7Ozs7O0lBZXZCLDJDQUE2Qjs7Ozs7SUFnQjdCLHFDQUEwQjs7Ozs7SUFlMUIsc0NBQTJCOzs7Ozs7SUFtQjNCLGlDQUEwQjs7Ozs7SUFFMUIsd0NBQThCOzs7OztJQUU5Qiw2Q0FBa0M7Ozs7O0lBRWxDLHdDQUE4Qjs7Ozs7SUFFOUIseUNBQW9DOzs7OztJQUVwQyxvQ0FBMkI7Ozs7O0lBRWYsb0NBQTZCOzs7OztJQUM3QiwwQ0FBNkM7Ozs7O0lBQzdDLHlDQUEyQzs7Ozs7SUFDM0MsaUNBQW9COzs7OztJQUNwQiw0Q0FBNEM7Ozs7OztJQU94RCwwREFBdUM7Ozs7OztJQUt2QyxpRUFBOEM7Ozs7Ozs7SUFNOUMsMkRBQThDOzs7Ozs7SUFLOUMscUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi9leHBvcnQtdHlwZSc7XHJcbmltcG9ydCB7IEZpbGVVdGlsIH0gZnJvbSAnLi9maWxlLXV0aWwnO1xyXG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMsIE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBEYXRhRXh0cmFjdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1leHRyYWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9leHBvcnRlcnMvZXhwb3J0ZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlTG9jYXRvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2UtbG9jYXRvci5zZXJ2aWNlJztcclxuXHJcblxyXG4vKipcclxuICogRXhwb3J0ZXIgY2xhc3MgZm9yIENka1RhYmxlLiBBYnN0cmFjdHMgdGhlIHZhcnlpbmcgYmVoYXZpb3JzIGFtb25nIGRpZmZlcmVudCBDZGtUYWJsZSBpbXBsZW1lbnRhdGlvbnMuXHJcbiAqL1xyXG4vLyBARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENka1RhYmxlRXhwb3J0ZXIge1xyXG5cclxuXHJcbiAgQElucHV0KCkgaGlkZGVuQ29sdW1ucz86IEFycmF5PG51bWJlcj47XHJcbiAgQElucHV0KCkgZXhwb3J0ZXI/OiBFeHBvcnRlcjxPcHRpb25zPjtcclxuICBAT3V0cHV0KCkgZXhwb3J0Q29tcGxldGVkID89IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZXhwb3J0U3RhcnRlZCA/PSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX2Nka1RhYmxlOiBhbnk7XHJcblxyXG4gIGdldCBjZGtUYWJsZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nka1RhYmxlO1xyXG4gIH1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBjZGtUYWJsZSh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ2Nka1RhYmxlIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XHJcbiAgICB0aGlzLl9jZGtUYWJsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZXhwb3J0ZXJCdXR0b246IGFueTtcclxuXHJcbiAgZ2V0IGV4cG9ydGVyQnV0dG9uKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhwb3J0ZXJCdXR0b247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGV4cG9ydGVyQnV0dG9uKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUud2FybignZXhwb3J0ZXJCdXR0b24gaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcclxuICAgIHRoaXMuX2V4cG9ydGVyQnV0dG9uID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldEJ1dHRvbkxpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWxlTmFtZTogc3RyaW5nO1xyXG5cclxuICBnZXQgZmlsZU5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9maWxlTmFtZTtcclxuICB9XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWRcclxuICovXHJcbiAgQElucHV0KClcclxuICBzZXQgZmlsZU5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc29sZS53YXJuKCdmaWxlTmFtZSBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xyXG4gICAgdGhpcy5fZmlsZU5hbWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NoZWV0TmFtZTogc3RyaW5nO1xyXG5cclxuICBnZXQgc2hlZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hlZXROYW1lO1xyXG4gIH1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBzaGVldE5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc29sZS53YXJuKCdzaGVldE5hbWUgaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcclxuICAgIHRoaXMuX3NoZWV0TmFtZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgYXJyYXkgd2hpY2ggaXMgZXh0cmFjdGVkIGZyb20gbmF0aXZlVGFibGVcclxuICAgKi9cclxuICBwcml2YXRlIF9kYXRhOiBBcnJheTxhbnk+O1xyXG5cclxuICBwcml2YXRlIF9pc0l0ZXJhdGluZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBhZ2VJbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9pc0V4cG9ydGluZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgX29wdGlvbnM/OiBPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBwcml2YXRlIHNlcnZpY2VMb2NhdG9yOiBTZXJ2aWNlTG9jYXRvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgdGFibGU6IGFueSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgdGhpcy5pbml0Q2RrVGFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSBudW1iZXIgb2YgcGFnZXMgb2YgdGhlIHRhYmxlXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDb3VudCgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBwYWdlIHRoYXQncyBkaXNwbGF5ZWRcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0Q3VycmVudFBhZ2VJbmRleCgpOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gY2FsbGVkLCB0aGUgQ2RrVGFibGUgc2hvdWxkIHJlbmRlciB0aGUgcm93cyBpbnNpZGUgdGhlIHBhZ2Ugd2hvc2UgaW5kZXggZ2l2ZW4gYXMgcGFyYW1ldGVyXHJcbiAgICogQHBhcmFtIGluZGV4IHBhZ2UgaW5kZXhcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ29Ub1BhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIE11c3QgcmV0dXJuIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB0aGUgc3Vic2NyaWJlcnMgYWJvdXQgcGFnZSBjaGFuZ2VzXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDaGFuZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgcHJpdmF0ZSBpbml0Q2RrVGFibGUoKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcclxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy52aWV3Q29udGFpbmVyUmVmWydfZGF0YSddLmNvbXBvbmVudFZpZXcuY29tcG9uZW50O1xyXG4gICAgaWYgKHRhYmxlKSB7XHJcbiAgICAgIHRoaXMuX2Nka1RhYmxlID0gdGFibGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFibGUpIHtcclxuICAgICAgdGhpcy5fY2RrVGFibGUgPSB0aGlzLnRhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBBbmd1bGFyIHZlcnNpb24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdEV4cG9ydGVyU2VydmljZShleHBvcnRUeXBlPzogRXhwb3J0VHlwZSkge1xyXG4gICAgaWYgKGV4cG9ydFR5cGUgIT09IEV4cG9ydFR5cGUuT1RIRVIpIHtcclxuICAgICAgdGhpcy5leHBvcnRlciA9IHRoaXMuc2VydmljZUxvY2F0b3IuZ2V0U2VydmljZShleHBvcnRUeXBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QnV0dG9uTGlzdGVuZXIoKSB7XHJcbiAgICBpZiAodGhpcy5fZXhwb3J0ZXJCdXR0b24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5fZXhwb3J0ZXJCdXR0b24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7ZmlsZU5hbWU6IHRoaXMuX2ZpbGVOYW1lLCBzaGVldDogdGhpcy5fc2hlZXROYW1lfSBhcyBFeGNlbE9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5leHBvcnRUYWJsZShGaWxlVXRpbC5pZGVudGlmeUV4cG9ydFR5cGUodGhpcy5fZmlsZU5hbWUpLCBvcHRpb25zKTsgLy8gdGhpcyBpcyB0byBzdXBwb3J0IGRlcHJlY2F0ZWQgd2F5IG9mIGV4cG9ydGluZ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXJzIHBhZ2UgZXZlbnQgY2hhaW4gdGh1cyBleHRyYWN0aW5nIGFuZCBleHBvcnRpbmcgYWxsIHRoZSByb3dzIGluIG5hdGl2ZXRhYmxlcyBpbiBwYWdlc1xyXG4gICAqL1xyXG4gIGV4cG9ydFRhYmxlKGV4cG9ydFR5cGVQYXJhbT86IEV4cG9ydFR5cGUgfCAneGxzJyB8ICd4bHN4JyB8ICdjc3YnIHwgJ3R4dCcgfCAnanNvbicgfCAnb3RoZXInLCBvcHRpb25zPzogT3B0aW9ucykge1xyXG4gICAgY29uc3QgZXhwb3J0VHlwZTogRXhwb3J0VHlwZSA9IHRoaXMuY29ycmVjdEV4cG9ydFR5cGUoZXhwb3J0VHlwZVBhcmFtKTtcclxuICAgIHRoaXMuaW5pdEV4cG9ydGVyU2VydmljZShleHBvcnRUeXBlKTtcclxuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5leHBvcnRTdGFydGVkLmVtaXQoKTtcclxuICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2lzRXhwb3J0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgdGhpcy5lbmFibGVFeHBvcnRCdXR0b24oZmFsc2UpO1xyXG4gICAgdGhpcy5leHRyYWN0VGFibGVIZWFkZXIoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0V2l0aFBhZ2luYXRpb24oKTtcclxuICAgIH0gY2F0Y2ggKG5vdFBhZ2luYXRlZCkge1xyXG4gICAgICB0aGlzLmV4cG9ydFNpbmdsZVBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBjb3JyZWN0RXhwb3J0VHlwZShleHBvcnRUeXBlUGFyYW0/OiBhbnkpOiBFeHBvcnRUeXBlIHtcclxuICAgIGlmIChleHBvcnRUeXBlUGFyYW0gJiYgdHlwZW9mIGV4cG9ydFR5cGVQYXJhbSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgc3dpdGNoIChleHBvcnRUeXBlUGFyYW0pIHtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuQ1NWOlxyXG4gICAgICAgICAgICByZXR1cm4gRXhwb3J0VHlwZS5DU1Y7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLkpTT046XHJcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLkpTT047XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLk9USEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gRXhwb3J0VHlwZS5PVEhFUjtcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuVFhUOlxyXG4gICAgICAgICAgICByZXR1cm4gRXhwb3J0VHlwZS5UWFQ7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhMUzpcclxuICAgICAgICAgICAgcmV0dXJuIEV4cG9ydFR5cGUuWExTO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5YTFNYOlxyXG4gICAgICAgICAgICByZXR1cm4gRXhwb3J0VHlwZS5YTFNYO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZXhwb3J0VHlwZVBhcmFtIGFzIEV4cG9ydFR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydFdpdGhQYWdpbmF0aW9uKCkge1xyXG4gICAgdGhpcy5faW5pdGlhbFBhZ2VJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpO1xyXG4gICAgdGhpcy5pbml0UGFnZUhhbmRsZXIoKTtcclxuICAgIHRoaXMuZ29Ub1BhZ2UoMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydFNpbmdsZVBhZ2UoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpO1xyXG4gICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcclxuICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQodGhpcy5kYXRhRXh0cmFjdG9yLmV4dHJhY3RSb3dzKHRoaXMuX2Nka1RhYmxlLCB0aGlzLmhpZGRlbkNvbHVtbnMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFBhZ2VIYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5nZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5faXNJdGVyYXRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzTmV4dFBhZ2UoKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubmV4dFBhZ2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLl9pc0l0ZXJhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5faW5pdGlhbFBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXNFeHBvcnRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNFeHBvcnRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5leHBvcnRFeHRyYWN0ZWREYXRhKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRFeHRyYWN0ZWREYXRhKCkge1xyXG4gICAgdGhpcy5leHBvcnRlci5leHBvcnQodGhpcy5fZGF0YSwgdGhpcy5fb3B0aW9ucyk7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIHRoaXMuZW5hYmxlRXhwb3J0QnV0dG9uKHRydWUpO1xyXG4gICAgdGhpcy5leHBvcnRDb21wbGV0ZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0U3BlY2lhbFJvdyhvdXRsZXQ6IERhdGFSb3dPdXRsZXQpIHtcclxuICAgIGNvbnN0IHJvdyA9IHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93KHRoaXMuX2Nka1RhYmxlLCB0aGlzLmhpZGRlbkNvbHVtbnMsIG91dGxldCk7XHJcbiAgICBpZiAocm93KSB7XHJcbiAgICAgIHRoaXMuX2RhdGEucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVIZWFkZXIoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93KHRoaXMuX2Nka1RhYmxlLl9oZWFkZXJSb3dPdXRsZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVGb290ZXIoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93KHRoaXMuX2Nka1RhYmxlLl9mb290ZXJSb3dPdXRsZXQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc05leHRQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpIDwgdGhpcy5nZXRQYWdlQ291bnQoKSAtIDEpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG9QYWdlKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUV4cG9ydEJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuX2V4cG9ydGVyQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZXhwb3J0ZXJCdXR0b24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgdmFsdWUgPyBudWxsIDogJ3RydWUnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==