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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQVd2QztJQXFGRSwwQkFBc0IsUUFBbUIsRUFDckIsY0FBcUMsRUFDckMsYUFBbUMsRUFDakMsS0FBVSxFQUNWLGdCQUFrQztRQUpsQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFwRjlDLG9CQUFlLEdBQUksSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM1QyxrQkFBYSxHQUFJLElBQUksWUFBWSxFQUFRLENBQUM7UUFvRmxELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBakZELHNCQUFJLHNDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQztRQUVIOztXQUVHOzs7Ozs7UUFDRCxVQUNhLEtBQVU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQVRBO0lBYUQsc0JBQUksNENBQWM7Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQztRQUVEOztXQUVH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S0FBYztRQUN2QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUc7SUFDSCxDQUFDOztnQ0E5UEEsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLE1BQU07Z0NBQ04sTUFBTTsyQkFXTixLQUFLO2lDQWVMLEtBQUs7MkJBZ0JMLEtBQUs7NEJBZUwsS0FBSzs7SUFtTVIsdUJBQUM7Q0FBQSxBQWxRRCxJQWtRQztTQWxRcUIsZ0JBQWdCOzs7SUFHcEMseUNBQXVDOztJQUN2QyxvQ0FBc0M7O0lBQ3RDLDJDQUFzRDs7SUFDdEQseUNBQW9EOzs7OztJQUVwRCxxQ0FBdUI7Ozs7O0lBZXZCLDJDQUE2Qjs7Ozs7SUFnQjdCLHFDQUEwQjs7Ozs7SUFlMUIsc0NBQTJCOzs7Ozs7SUFtQjNCLGlDQUEwQjs7Ozs7SUFFMUIsd0NBQThCOzs7OztJQUU5Qiw2Q0FBa0M7Ozs7O0lBRWxDLHdDQUE4Qjs7Ozs7SUFFOUIseUNBQW9DOzs7OztJQUVwQyxvQ0FBMkI7Ozs7O0lBRWYsb0NBQTZCOzs7OztJQUM3QiwwQ0FBNkM7Ozs7O0lBQzdDLHlDQUEyQzs7Ozs7SUFDM0MsaUNBQW9COzs7OztJQUNwQiw0Q0FBNEM7Ozs7OztJQU94RCwwREFBdUM7Ozs7OztJQUt2QyxpRUFBOEM7Ozs7Ozs7SUFNOUMsMkRBQThDOzs7Ozs7SUFLOUMscUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi9leHBvcnQtdHlwZSc7XG5pbXBvcnQgeyBGaWxlVXRpbCB9IGZyb20gJy4vZmlsZS11dGlsJztcbmltcG9ydCB7IEV4Y2VsT3B0aW9ucywgT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBEYXRhRXh0cmFjdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1leHRyYWN0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBFeHBvcnRlciB9IGZyb20gJy4vc2VydmljZXMvZXhwb3J0ZXJzL2V4cG9ydGVyJztcbmltcG9ydCB7IFNlcnZpY2VMb2NhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZS1sb2NhdG9yLnNlcnZpY2UnO1xuXG5cbi8qKlxuICogRXhwb3J0ZXIgY2xhc3MgZm9yIENka1RhYmxlLiBBYnN0cmFjdHMgdGhlIHZhcnlpbmcgYmVoYXZpb3JzIGFtb25nIGRpZmZlcmVudCBDZGtUYWJsZSBpbXBsZW1lbnRhdGlvbnMuXG4gKi9cbi8vIEBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENka1RhYmxlRXhwb3J0ZXIge1xuXG5cbiAgQElucHV0KCkgaGlkZGVuQ29sdW1ucz86IEFycmF5PG51bWJlcj47XG4gIEBJbnB1dCgpIGV4cG9ydGVyPzogRXhwb3J0ZXI8T3B0aW9ucz47XG4gIEBPdXRwdXQoKSBleHBvcnRDb21wbGV0ZWQgPz0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZXhwb3J0U3RhcnRlZCA/PSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBfY2RrVGFibGU6IGFueTtcblxuICBnZXQgY2RrVGFibGUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY2RrVGFibGU7XG4gIH1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG4gIEBJbnB1dCgpXG4gIHNldCBjZGtUYWJsZSh2YWx1ZTogYW55KSB7XG4gICAgY29uc29sZS53YXJuKCdjZGtUYWJsZSBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xuICAgIHRoaXMuX2Nka1RhYmxlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9leHBvcnRlckJ1dHRvbjogYW55O1xuXG4gIGdldCBleHBvcnRlckJ1dHRvbigpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9leHBvcnRlckJ1dHRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGV4cG9ydGVyQnV0dG9uKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zb2xlLndhcm4oJ2V4cG9ydGVyQnV0dG9uIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XG4gICAgdGhpcy5fZXhwb3J0ZXJCdXR0b24gPSB2YWx1ZTtcbiAgICB0aGlzLnNldEJ1dHRvbkxpc3RlbmVyKCk7XG4gIH1cblxuICBwcml2YXRlIF9maWxlTmFtZTogc3RyaW5nO1xuXG4gIGdldCBmaWxlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWxlTmFtZTtcbiAgfVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbiAgQElucHV0KClcbiAgc2V0IGZpbGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLndhcm4oJ2ZpbGVOYW1lIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XG4gICAgdGhpcy5fZmlsZU5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NoZWV0TmFtZTogc3RyaW5nO1xuXG4gIGdldCBzaGVldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXROYW1lO1xuICB9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuICBASW5wdXQoKVxuICBzZXQgc2hlZXROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLndhcm4oJ3NoZWV0TmFtZSBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xuICAgIHRoaXMuX3NoZWV0TmFtZSA9IHZhbHVlO1xuICB9XG5cblxuICAvKipcbiAgICogRGF0YSBhcnJheSB3aGljaCBpcyBleHRyYWN0ZWQgZnJvbSBuYXRpdmVUYWJsZVxuICAgKi9cbiAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PjtcblxuICBwcml2YXRlIF9pc0l0ZXJhdGluZzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9pbml0aWFsUGFnZUluZGV4OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfaXNFeHBvcnRpbmc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfb3B0aW9ucz86IE9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VydmljZUxvY2F0b3I6IFNlcnZpY2VMb2NhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHRhYmxlOiBhbnksXG4gICAgICAgICAgICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5pbml0Q2RrVGFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdXN0IHJldHVybiB0aGUgbnVtYmVyIG9mIHBhZ2VzIG9mIHRoZSB0YWJsZVxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDb3VudCgpOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE11c3QgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBwYWdlIHRoYXQncyBkaXNwbGF5ZWRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlcjtcblxuICAvKipcbiAgICogV2hlbiBjYWxsZWQsIHRoZSBDZGtUYWJsZSBzaG91bGQgcmVuZGVyIHRoZSByb3dzIGluc2lkZSB0aGUgcGFnZSB3aG9zZSBpbmRleCBnaXZlbiBhcyBwYXJhbWV0ZXJcbiAgICogQHBhcmFtIGluZGV4IHBhZ2UgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogTXVzdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHRoZSBzdWJzY3JpYmVycyBhYm91dCBwYWdlIGNoYW5nZXNcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHJpdmF0ZSBpbml0Q2RrVGFibGUoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgY29uc3QgdGFibGUgPSB0aGlzLnZpZXdDb250YWluZXJSZWZbJ19kYXRhJ10uY29tcG9uZW50Vmlldy5jb21wb25lbnQ7XG4gICAgaWYgKHRhYmxlKSB7XG4gICAgICB0aGlzLl9jZGtUYWJsZSA9IHRhYmxlO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZSkge1xuICAgICAgdGhpcy5fY2RrVGFibGUgPSB0aGlzLnRhYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIEFuZ3VsYXIgdmVyc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdEV4cG9ydGVyU2VydmljZShleHBvcnRUeXBlPzogRXhwb3J0VHlwZSkge1xuICAgIGlmIChleHBvcnRUeXBlICE9PSBFeHBvcnRUeXBlLk9USEVSKSB7XG4gICAgICB0aGlzLmV4cG9ydGVyID0gdGhpcy5zZXJ2aWNlTG9jYXRvci5nZXRTZXJ2aWNlKGV4cG9ydFR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0QnV0dG9uTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX2V4cG9ydGVyQnV0dG9uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLl9leHBvcnRlckJ1dHRvbi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7ZmlsZU5hbWU6IHRoaXMuX2ZpbGVOYW1lLCBzaGVldDogdGhpcy5fc2hlZXROYW1lfSBhcyBFeGNlbE9wdGlvbnM7XG4gICAgICAgIHRoaXMuZXhwb3J0VGFibGUoRmlsZVV0aWwuaWRlbnRpZnlFeHBvcnRUeXBlKHRoaXMuX2ZpbGVOYW1lKSwgb3B0aW9ucyk7IC8vIHRoaXMgaXMgdG8gc3VwcG9ydCBkZXByZWNhdGVkIHdheSBvZiBleHBvcnRpbmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBwYWdlIGV2ZW50IGNoYWluIHRodXMgZXh0cmFjdGluZyBhbmQgZXhwb3J0aW5nIGFsbCB0aGUgcm93cyBpbiBuYXRpdmV0YWJsZXMgaW4gcGFnZXNcbiAgICovXG4gIGV4cG9ydFRhYmxlKGV4cG9ydFR5cGVQYXJhbT86IEV4cG9ydFR5cGUgfCAneGxzJyB8ICd4bHN4JyB8ICdjc3YnIHwgJ3R4dCcgfCAnanNvbicgfCAnb3RoZXInLCBvcHRpb25zPzogT3B0aW9ucykge1xuICAgIGNvbnN0IGV4cG9ydFR5cGU6IEV4cG9ydFR5cGUgPSB0aGlzLmNvcnJlY3RFeHBvcnRUeXBlKGV4cG9ydFR5cGVQYXJhbSk7XG4gICAgdGhpcy5pbml0RXhwb3J0ZXJTZXJ2aWNlKGV4cG9ydFR5cGUpO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5lbWl0KCk7XG4gICAgdGhpcy5faXNJdGVyYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2lzRXhwb3J0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICB0aGlzLmVuYWJsZUV4cG9ydEJ1dHRvbihmYWxzZSk7XG4gICAgdGhpcy5leHRyYWN0VGFibGVIZWFkZXIoKTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5leHBvcnRXaXRoUGFnaW5hdGlvbigpO1xuICAgIH0gY2F0Y2ggKG5vdFBhZ2luYXRlZCkge1xuICAgICAgdGhpcy5leHBvcnRTaW5nbGVQYWdlKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgY29ycmVjdEV4cG9ydFR5cGUoZXhwb3J0VHlwZVBhcmFtPzogYW55KTogRXhwb3J0VHlwZSB7XG4gICAgaWYgKGV4cG9ydFR5cGVQYXJhbSAmJiB0eXBlb2YgZXhwb3J0VHlwZVBhcmFtID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChleHBvcnRUeXBlUGFyYW0pIHtcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLkNTVjpcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLkNTVjtcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLkpTT046XG4gICAgICAgICAgICByZXR1cm4gRXhwb3J0VHlwZS5KU09OO1xuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuT1RIRVI6XG4gICAgICAgICAgICByZXR1cm4gRXhwb3J0VHlwZS5PVEhFUjtcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlRYVDpcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLlRYVDtcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhMUzpcbiAgICAgICAgICAgIHJldHVybiBFeHBvcnRUeXBlLlhMUztcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlhMU1g6XG4gICAgICAgICAgICByZXR1cm4gRXhwb3J0VHlwZS5YTFNYO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXhwb3J0VHlwZVBhcmFtIGFzIEV4cG9ydFR5cGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBleHBvcnRXaXRoUGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLl9pbml0aWFsUGFnZUluZGV4ID0gdGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCk7XG4gICAgdGhpcy5pbml0UGFnZUhhbmRsZXIoKTtcbiAgICB0aGlzLmdvVG9QYWdlKDApO1xuICB9XG5cbiAgcHJpdmF0ZSBleHBvcnRTaW5nbGVQYWdlKCkge1xuICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XG4gICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcbiAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCkge1xuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCh0aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvd3ModGhpcy5fY2RrVGFibGUsIHRoaXMuaGlkZGVuQ29sdW1ucykpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UGFnZUhhbmRsZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faXNJdGVyYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNOZXh0UGFnZSgpKSB7XG4gICAgICAgICAgICAgIHRoaXMubmV4dFBhZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5faW5pdGlhbFBhZ2VJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0V4cG9ydGluZykge1xuICAgICAgICAgICAgdGhpcy5faXNFeHBvcnRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdFRhYmxlRm9vdGVyKCk7XG4gICAgICAgICAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBleHBvcnRFeHRyYWN0ZWREYXRhKCkge1xuICAgIHRoaXMuZXhwb3J0ZXIuZXhwb3J0KHRoaXMuX2RhdGEsIHRoaXMuX29wdGlvbnMpO1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgIHRoaXMuZW5hYmxlRXhwb3J0QnV0dG9uKHRydWUpO1xuICAgIHRoaXMuZXhwb3J0Q29tcGxldGVkLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFNwZWNpYWxSb3cob3V0bGV0OiBEYXRhUm93T3V0bGV0KSB7XG4gICAgY29uc3Qgcm93ID0gdGhpcy5kYXRhRXh0cmFjdG9yLmV4dHJhY3RSb3codGhpcy5fY2RrVGFibGUsIHRoaXMuaGlkZGVuQ29sdW1ucywgb3V0bGV0KTtcbiAgICBpZiAocm93KSB7XG4gICAgICB0aGlzLl9kYXRhLnB1c2gocm93KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RUYWJsZUhlYWRlcigpIHtcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93KHRoaXMuX2Nka1RhYmxlLl9oZWFkZXJSb3dPdXRsZXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVGb290ZXIoKSB7XG4gICAgdGhpcy5leHRyYWN0U3BlY2lhbFJvdyh0aGlzLl9jZGtUYWJsZS5fZm9vdGVyUm93T3V0bGV0KTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNOZXh0UGFnZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCkgPCB0aGlzLmdldFBhZ2VDb3VudCgpIC0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5nb1RvUGFnZSh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSArIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmFibGVFeHBvcnRCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fZXhwb3J0ZXJCdXR0b24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZXhwb3J0ZXJCdXR0b24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgdmFsdWUgPyBudWxsIDogJ3RydWUnKTtcbiAgICB9XG4gIH1cbn1cblxuIl19