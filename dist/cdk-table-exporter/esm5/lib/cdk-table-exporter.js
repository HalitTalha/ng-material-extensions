/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { ExportType } from './export-type';
import { FileUtil } from './file-util';
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 * @abstract
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBVXZDO0lBcUZFLDBCQUFzQixRQUFtQixFQUNyQixjQUFxQyxFQUNyQyxhQUFtQyxFQUNqQyxLQUFVLEVBQ1YsZ0JBQWtDO1FBSmxDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXBGOUMsb0JBQWUsR0FBSSxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVDLGtCQUFhLEdBQUksSUFBSSxZQUFZLEVBQVEsQ0FBQztRQW9GbEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFqRkQsc0JBQUksc0NBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBRUg7O1dBRUc7Ozs7OztRQUNELFVBQ2EsS0FBVTtZQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BVEE7SUFhRCxzQkFBSSw0Q0FBYzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDO1FBRUQ7O1dBRUc7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QTZCOzs7OztJQUM3QiwwQ0FBNkM7Ozs7O0lBQzdDLHlDQUEyQzs7Ozs7SUFDM0MsaUNBQW9COzs7OztJQUNwQiw0Q0FBNEM7Ozs7OztJQU94RCwwREFBdUM7Ozs7OztJQUt2QyxpRUFBOEM7Ozs7Ozs7SUFNOUMsMkRBQThDOzs7Ozs7SUFLOUMscUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi9leHBvcnQtdHlwZSc7XHJcbmltcG9ydCB7IEZpbGVVdGlsIH0gZnJvbSAnLi9maWxlLXV0aWwnO1xyXG5pbXBvcnQgeyBFeGNlbE9wdGlvbnMsIE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBEYXRhRXh0cmFjdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1leHRyYWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cG9ydGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9leHBvcnRlcnMvZXhwb3J0ZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlTG9jYXRvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2UtbG9jYXRvci5zZXJ2aWNlJztcclxuXHJcblxyXG4vKipcclxuICogRXhwb3J0ZXIgY2xhc3MgZm9yIENka1RhYmxlLiBBYnN0cmFjdHMgdGhlIHZhcnlpbmcgYmVoYXZpb3JzIGFtb25nIGRpZmZlcmVudCBDZGtUYWJsZSBpbXBsZW1lbnRhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2RrVGFibGVFeHBvcnRlciB7XHJcblxyXG5cclxuICBASW5wdXQoKSBoaWRkZW5Db2x1bW5zPzogQXJyYXk8bnVtYmVyPjtcclxuICBASW5wdXQoKSBleHBvcnRlcj86IEV4cG9ydGVyPE9wdGlvbnM+O1xyXG4gIEBPdXRwdXQoKSBleHBvcnRDb21wbGV0ZWQgPz0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBleHBvcnRTdGFydGVkID89IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfY2RrVGFibGU6IGFueTtcclxuXHJcbiAgZ2V0IGNka1RhYmxlKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2RrVGFibGU7XHJcbiAgfVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNka1RhYmxlKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUud2FybignY2RrVGFibGUgaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcclxuICAgIHRoaXMuX2Nka1RhYmxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9leHBvcnRlckJ1dHRvbjogYW55O1xyXG5cclxuICBnZXQgZXhwb3J0ZXJCdXR0b24oKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9leHBvcnRlckJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgZXhwb3J0ZXJCdXR0b24odmFsdWU6IGFueSkge1xyXG4gICAgY29uc29sZS53YXJuKCdleHBvcnRlckJ1dHRvbiBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xyXG4gICAgdGhpcy5fZXhwb3J0ZXJCdXR0b24gPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0QnV0dG9uTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIGdldCBmaWxlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVOYW1lO1xyXG4gIH1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBmaWxlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ2ZpbGVOYW1lIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XHJcbiAgICB0aGlzLl9maWxlTmFtZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2hlZXROYW1lOiBzdHJpbmc7XHJcblxyXG4gIGdldCBzaGVldE5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zaGVldE5hbWU7XHJcbiAgfVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNoZWV0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ3NoZWV0TmFtZSBpbnB1dCBpcyBkZXByZWNhdGVkIScpO1xyXG4gICAgdGhpcy5fc2hlZXROYW1lID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBhcnJheSB3aGljaCBpcyBleHRyYWN0ZWQgZnJvbSBuYXRpdmVUYWJsZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RhdGE6IEFycmF5PGFueT47XHJcblxyXG4gIHByaXZhdGUgX2lzSXRlcmF0aW5nOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9pbml0aWFsUGFnZUluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2lzRXhwb3J0aW5nOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfb3B0aW9ucz86IE9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VydmljZUxvY2F0b3I6IFNlcnZpY2VMb2NhdG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGRhdGFFeHRyYWN0b3I6IERhdGFFeHRyYWN0b3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCB0YWJsZTogYW55LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLmluaXRDZGtUYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIG51bWJlciBvZiBwYWdlcyBvZiB0aGUgdGFibGVcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCdzIGRpc3BsYXllZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBjYWxsZWQsIHRoZSBDZGtUYWJsZSBzaG91bGQgcmVuZGVyIHRoZSByb3dzIGluc2lkZSB0aGUgcGFnZSB3aG9zZSBpbmRleCBnaXZlbiBhcyBwYXJhbWV0ZXJcclxuICAgKiBAcGFyYW0gaW5kZXggcGFnZSBpbmRleFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogTXVzdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHRoZSBzdWJzY3JpYmVycyBhYm91dCBwYWdlIGNoYW5nZXNcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBwcml2YXRlIGluaXRDZGtUYWJsZSgpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxyXG4gICAgY29uc3QgdGFibGUgPSB0aGlzLnZpZXdDb250YWluZXJSZWZbJ19kYXRhJ10uY29tcG9uZW50Vmlldy5jb21wb25lbnQ7XHJcbiAgICBpZiAodGFibGUpIHtcclxuICAgICAgdGhpcy5fY2RrVGFibGUgPSB0YWJsZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZSkge1xyXG4gICAgICB0aGlzLl9jZGtUYWJsZSA9IHRoaXMudGFibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIEFuZ3VsYXIgdmVyc2lvbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RXhwb3J0ZXJTZXJ2aWNlKGV4cG9ydFR5cGU/OiBFeHBvcnRUeXBlKSB7XHJcbiAgICBpZiAoZXhwb3J0VHlwZSAhPT0gRXhwb3J0VHlwZS5PVEhFUikge1xyXG4gICAgICB0aGlzLmV4cG9ydGVyID0gdGhpcy5zZXJ2aWNlTG9jYXRvci5nZXRTZXJ2aWNlKGV4cG9ydFR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRCdXR0b25MaXN0ZW5lcigpIHtcclxuICAgIGlmICh0aGlzLl9leHBvcnRlckJ1dHRvbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLl9leHBvcnRlckJ1dHRvbi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtmaWxlTmFtZTogdGhpcy5fZmlsZU5hbWUsIHNoZWV0OiB0aGlzLl9zaGVldE5hbWV9IGFzIEV4Y2VsT3B0aW9ucztcclxuICAgICAgICB0aGlzLmV4cG9ydFRhYmxlKEZpbGVVdGlsLmlkZW50aWZ5RXhwb3J0VHlwZSh0aGlzLl9maWxlTmFtZSksIG9wdGlvbnMpOyAvLyB0aGlzIGlzIHRvIHN1cHBvcnQgZGVwcmVjYXRlZCB3YXkgb2YgZXhwb3J0aW5nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcnMgcGFnZSBldmVudCBjaGFpbiB0aHVzIGV4dHJhY3RpbmcgYW5kIGV4cG9ydGluZyBhbGwgdGhlIHJvd3MgaW4gbmF0aXZldGFibGVzIGluIHBhZ2VzXHJcbiAgICovXHJcbiAgZXhwb3J0VGFibGUoZXhwb3J0VHlwZT86IEV4cG9ydFR5cGUsIG9wdGlvbnM/OiBPcHRpb25zKSB7XHJcbiAgICB0aGlzLmluaXRFeHBvcnRlclNlcnZpY2UoZXhwb3J0VHlwZSk7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5lbWl0KCk7XHJcbiAgICB0aGlzLl9pc0l0ZXJhdGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9pc0V4cG9ydGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIHRoaXMuZW5hYmxlRXhwb3J0QnV0dG9uKGZhbHNlKTtcclxuICAgIHRoaXMuZXh0cmFjdFRhYmxlSGVhZGVyKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmV4cG9ydFdpdGhQYWdpbmF0aW9uKCk7XHJcbiAgICB9IGNhdGNoIChub3RQYWdpbmF0ZWQpIHtcclxuICAgICAgdGhpcy5leHBvcnRTaW5nbGVQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydFdpdGhQYWdpbmF0aW9uKCkge1xyXG4gICAgdGhpcy5faW5pdGlhbFBhZ2VJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpO1xyXG4gICAgdGhpcy5pbml0UGFnZUhhbmRsZXIoKTtcclxuICAgIHRoaXMuZ29Ub1BhZ2UoMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cG9ydFNpbmdsZVBhZ2UoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3REYXRhT25DdXJyZW50UGFnZSgpO1xyXG4gICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcclxuICAgIHRoaXMuZXhwb3J0RXh0cmFjdGVkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQodGhpcy5kYXRhRXh0cmFjdG9yLmV4dHJhY3RSb3dzKHRoaXMuX2Nka1RhYmxlLCB0aGlzLmhpZGRlbkNvbHVtbnMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFBhZ2VIYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5nZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5faXNJdGVyYXRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5leHRyYWN0RGF0YU9uQ3VycmVudFBhZ2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzTmV4dFBhZ2UoKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubmV4dFBhZ2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLl9pc0l0ZXJhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5faW5pdGlhbFBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXNFeHBvcnRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNFeHBvcnRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5leHBvcnRFeHRyYWN0ZWREYXRhKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBvcnRFeHRyYWN0ZWREYXRhKCkge1xyXG4gICAgdGhpcy5leHBvcnRlci5leHBvcnQodGhpcy5fZGF0YSwgdGhpcy5fb3B0aW9ucyk7XHJcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIHRoaXMuZW5hYmxlRXhwb3J0QnV0dG9uKHRydWUpO1xyXG4gICAgdGhpcy5leHBvcnRDb21wbGV0ZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0U3BlY2lhbFJvdyhvdXRsZXQ6IERhdGFSb3dPdXRsZXQpIHtcclxuICAgIGNvbnN0IHJvdyA9IHRoaXMuZGF0YUV4dHJhY3Rvci5leHRyYWN0Um93KHRoaXMuX2Nka1RhYmxlLCB0aGlzLmhpZGRlbkNvbHVtbnMsIG91dGxldCk7XHJcbiAgICBpZiAocm93KSB7XHJcbiAgICAgIHRoaXMuX2RhdGEucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVIZWFkZXIoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93KHRoaXMuX2Nka1RhYmxlLl9oZWFkZXJSb3dPdXRsZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0VGFibGVGb290ZXIoKSB7XHJcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93KHRoaXMuX2Nka1RhYmxlLl9mb290ZXJSb3dPdXRsZXQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc05leHRQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpIDwgdGhpcy5nZXRQYWdlQ291bnQoKSAtIDEpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvVG9QYWdlKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZUV4cG9ydEJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuX2V4cG9ydGVyQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZXhwb3J0ZXJCdXR0b24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgdmFsdWUgPyBudWxsIDogJ3RydWUnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==