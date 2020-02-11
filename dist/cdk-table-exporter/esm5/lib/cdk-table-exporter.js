import { EventEmitter, Input, Output, Renderer2, ViewContainerRef, Directive } from '@angular/core';
import { ExportType } from './export-type';
import { FileUtil } from './file-util';
import { DataExtractorService } from './services/data-extractor.service';
import { ServiceLocatorService } from './services/service-locator.service';
import * as i0 from "@angular/core";
import * as i1 from "./services/service-locator.service";
import * as i2 from "./services/data-extractor.service";
/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
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
        get: function () {
            return this._cdkTable;
        },
        /**
         * @deprecated
         */
        set: function (value) {
            console.warn('cdkTable input is deprecated!');
            this._cdkTable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTableExporter.prototype, "exporterButton", {
        get: function () {
            return this._exporterButton;
        },
        /**
         * @deprecated
         */
        set: function (value) {
            console.warn('exporterButton input is deprecated!');
            this._exporterButton = value;
            this.setButtonListener();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTableExporter.prototype, "fileName", {
        get: function () {
            return this._fileName;
        },
        /**
         * @deprecated
         */
        set: function (value) {
            console.warn('fileName input is deprecated!');
            this._fileName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTableExporter.prototype, "sheetName", {
        get: function () {
            return this._sheetName;
        },
        /**
         * @deprecated
         */
        set: function (value) {
            console.warn('sheetName input is deprecated!');
            this._sheetName = value;
        },
        enumerable: true,
        configurable: true
    });
    CdkTableExporter.prototype.initCdkTable = function () {
        var _a, _b;
        // tslint:disable-next-line:no-string-literal
        var table = (_b = (_a = this.viewContainerRef['_data']) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
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
    CdkTableExporter.prototype.setButtonListener = function () {
        var _this = this;
        if (this._exporterButton) {
            this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', function (evt) {
                var options = { fileName: _this._fileName, sheet: _this._sheetName };
                _this.exportTable(FileUtil.identifyExportType(_this._fileName), options); // this is to support deprecated way of exporting
            });
        }
    };
    /**
     * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
     */
    CdkTableExporter.prototype.exportTable = function (exportType, options) {
        this.loadExporter(exportType);
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
    CdkTableExporter.prototype.loadExporter = function (exportType) {
        if (exportType === ExportType.OTHER.valueOf()) {
            this._exporterService = this.exporter;
        }
        else {
            this._exporterService = this.serviceLocator.getService(exportType);
        }
    };
    CdkTableExporter.prototype.exportWithPagination = function () {
        this._initialPageIndex = this.getCurrentPageIndex();
        this.initPageHandler();
        this.goToPage(0);
    };
    CdkTableExporter.prototype.exportSinglePage = function () {
        this.extractDataOnCurrentPage();
        this.extractTableFooter();
        this.exportExtractedData();
    };
    CdkTableExporter.prototype.extractDataOnCurrentPage = function () {
        this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
    };
    CdkTableExporter.prototype.initPageHandler = function () {
        var _this = this;
        if (!this._subscription) {
            this._subscription = this.getPageChangeObservable().subscribe(function () {
                setTimeout(function () {
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
                });
            });
        }
    };
    CdkTableExporter.prototype.exportExtractedData = function () {
        this._exporterService.export(this._data, this._options);
        this._data = new Array();
        this.enableExportButton(true);
        this.exportCompleted.emit();
    };
    CdkTableExporter.prototype.extractSpecialRow = function (outlet) {
        var row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
        if (row) {
            this._data.push(row);
        }
    };
    CdkTableExporter.prototype.extractTableHeader = function () {
        this.extractSpecialRow(this._cdkTable._headerRowOutlet);
    };
    CdkTableExporter.prototype.extractTableFooter = function () {
        this.extractSpecialRow(this._cdkTable._footerRowOutlet);
    };
    CdkTableExporter.prototype.hasNextPage = function () {
        if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
            return true;
        }
        else {
            return false;
        }
    };
    CdkTableExporter.prototype.nextPage = function () {
        this.goToPage(this.getCurrentPageIndex() + 1);
    };
    CdkTableExporter.prototype.enableExportButton = function (value) {
        if (this._exporterButton) {
            this.renderer.setProperty(this._exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
        }
    };
    CdkTableExporter.ɵfac = function CdkTableExporter_Factory(t) { i0.ɵɵinvalidFactory(); };
    CdkTableExporter.ɵdir = i0.ɵɵdefineDirective({ type: CdkTableExporter, inputs: { hiddenColumns: "hiddenColumns", exporter: "exporter", cdkTable: "cdkTable", exporterButton: "exporterButton", fileName: "fileName", sheetName: "sheetName" }, outputs: { exportCompleted: "exportCompleted", exportStarted: "exportStarted" } });
    return CdkTableExporter;
}());
export { CdkTableExporter };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTableExporter, [{
        type: Directive
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.ServiceLocatorService }, { type: i2.DataExtractorService }, { type: undefined }, { type: i0.ViewContainerRef }]; }, { hiddenColumns: [{
            type: Input
        }], exporter: [{
            type: Input
        }], exportCompleted: [{
            type: Output
        }], exportStarted: [{
            type: Output
        }], cdkTable: [{
            type: Input
        }], exporterButton: [{
            type: Input
        }], fileName: [{
            type: Input
        }], sheetName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2Nkay10YWJsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFFM0U7O0dBRUc7QUFDSDtJQXVGRSwwQkFDWSxRQUFtQixFQUNyQixjQUFxQyxFQUNyQyxhQUFtQyxFQUNqQyxLQUFVLEVBQ1YsZ0JBQWtDO1FBSmxDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXJGcEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQXNGakQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFuRkQsc0JBQUksc0NBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBRUQ7O1dBRUc7YUFDSCxVQUNhLEtBQVU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FB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Q0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU8sNkNBQWtCLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sc0NBQVcsR0FBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTSxtQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sNkNBQWtCLEdBQTFCLFVBQTJCLEtBQWM7UUFDdkMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlHO0lBQ0gsQ0FBQzs7eURBalBtQixnQkFBZ0I7MkJBZHRDO0NBZ1FDLEFBblBELElBbVBDO1NBbFBxQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQURyQyxTQUFTOztrQkFLUCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFXTixLQUFLOztrQkFlTCxLQUFLOztrQkFnQkwsS0FBSzs7a0JBZUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWYsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi9leHBvcnQtdHlwZSc7XG5pbXBvcnQgeyBGaWxlVXRpbCB9IGZyb20gJy4vZmlsZS11dGlsJztcbmltcG9ydCB7IEV4Y2VsT3B0aW9ucywgT3B0aW9ucywgVHh0T3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBEYXRhRXh0cmFjdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1leHRyYWN0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBFeHBvcnRlciB9IGZyb20gJy4vc2VydmljZXMvZXhwb3J0ZXJzL2V4cG9ydGVyJztcbmltcG9ydCB7IFNlcnZpY2VMb2NhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2VydmljZS1sb2NhdG9yLnNlcnZpY2UnO1xuXG4vKipcbiAqIEV4cG9ydGVyIGNsYXNzIGZvciBDZGtUYWJsZS4gQWJzdHJhY3RzIHRoZSB2YXJ5aW5nIGJlaGF2aW9ycyBhbW9uZyBkaWZmZXJlbnQgQ2RrVGFibGUgaW1wbGVtZW50YXRpb25zLlxuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDZGtUYWJsZUV4cG9ydGVyIHtcblxuICBwcml2YXRlIF9leHBvcnRlclNlcnZpY2U6IEV4cG9ydGVyPE9wdGlvbnM+O1xuXG4gIEBJbnB1dCgpIGhpZGRlbkNvbHVtbnM/OiBBcnJheTxudW1iZXI+O1xuICBASW5wdXQoKSBleHBvcnRlcj86IEV4cG9ydGVyPE9wdGlvbnM+O1xuICBAT3V0cHV0KCkgZXhwb3J0Q29tcGxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZXhwb3J0U3RhcnRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcml2YXRlIF9jZGtUYWJsZTogYW55O1xuXG4gIGdldCBjZGtUYWJsZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9jZGtUYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGNka1RhYmxlKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Nka1RhYmxlIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XG4gICAgdGhpcy5fY2RrVGFibGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4cG9ydGVyQnV0dG9uOiBhbnk7XG5cbiAgZ2V0IGV4cG9ydGVyQnV0dG9uKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cG9ydGVyQnV0dG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZXhwb3J0ZXJCdXR0b24odmFsdWU6IGFueSkge1xuICAgIGNvbnNvbGUud2FybignZXhwb3J0ZXJCdXR0b24gaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcbiAgICB0aGlzLl9leHBvcnRlckJ1dHRvbiA9IHZhbHVlO1xuICAgIHRoaXMuc2V0QnV0dG9uTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgZ2V0IGZpbGVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZmlsZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUud2FybignZmlsZU5hbWUgaW5wdXQgaXMgZGVwcmVjYXRlZCEnKTtcbiAgICB0aGlzLl9maWxlTmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hlZXROYW1lOiBzdHJpbmc7XG5cbiAgZ2V0IHNoZWV0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaGVldE5hbWU7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzaGVldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUud2Fybignc2hlZXROYW1lIGlucHV0IGlzIGRlcHJlY2F0ZWQhJyk7XG4gICAgdGhpcy5fc2hlZXROYW1lID0gdmFsdWU7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBEYXRhIGFycmF5IHdoaWNoIGlzIGV4dHJhY3RlZCBmcm9tIG5hdGl2ZVRhYmxlXG4gICAqL1xuICBwcml2YXRlIF9kYXRhOiBBcnJheTxhbnk+O1xuXG4gIHByaXZhdGUgX2lzSXRlcmF0aW5nOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2luaXRpYWxQYWdlSW5kZXg6IG51bWJlcjtcblxuICBwcml2YXRlIF9pc0V4cG9ydGluZzogYm9vbGVhbjtcblxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9vcHRpb25zPzogT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNlcnZpY2VMb2NhdG9yOiBTZXJ2aWNlTG9jYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRhRXh0cmFjdG9yOiBEYXRhRXh0cmFjdG9yU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdGFibGU6IGFueSxcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgKSB7XG4gICAgdGhpcy5pbml0Q2RrVGFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdXN0IHJldHVybiB0aGUgbnVtYmVyIG9mIHBhZ2VzIG9mIHRoZSB0YWJsZVxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldFBhZ2VDb3VudCgpOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE11c3QgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBwYWdlIHRoYXQncyBkaXNwbGF5ZWRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDdXJyZW50UGFnZUluZGV4KCk6IG51bWJlcjtcblxuICAvKipcbiAgICogV2hlbiBjYWxsZWQsIHRoZSBDZGtUYWJsZSBzaG91bGQgcmVuZGVyIHRoZSByb3dzIGluc2lkZSB0aGUgcGFnZSB3aG9zZSBpbmRleCBnaXZlbiBhcyBwYXJhbWV0ZXJcbiAgICogQHBhcmFtIGluZGV4IHBhZ2UgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnb1RvUGFnZShpbmRleDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogTXVzdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHRoZSBzdWJzY3JpYmVycyBhYm91dCBwYWdlIGNoYW5nZXNcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRQYWdlQ2hhbmdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHJpdmF0ZSBpbml0Q2RrVGFibGUoKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgY29uc3QgdGFibGUgPSB0aGlzLnZpZXdDb250YWluZXJSZWZbJ19kYXRhJ10/LmNvbXBvbmVudFZpZXc/LmNvbXBvbmVudDtcbiAgICBpZiAodGFibGUpIHtcbiAgICAgIHRoaXMuX2Nka1RhYmxlID0gdGFibGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICB0aGlzLl9jZGtUYWJsZSA9IHRoaXMudGFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgQW5ndWxhciB2ZXJzaW9uJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRCdXR0b25MaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5fZXhwb3J0ZXJCdXR0b24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuX2V4cG9ydGVyQnV0dG9uLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgZmlsZU5hbWU6IHRoaXMuX2ZpbGVOYW1lLCBzaGVldDogdGhpcy5fc2hlZXROYW1lIH0gYXMgRXhjZWxPcHRpb25zO1xuICAgICAgICB0aGlzLmV4cG9ydFRhYmxlKEZpbGVVdGlsLmlkZW50aWZ5RXhwb3J0VHlwZSh0aGlzLl9maWxlTmFtZSksIG9wdGlvbnMpOyAvLyB0aGlzIGlzIHRvIHN1cHBvcnQgZGVwcmVjYXRlZCB3YXkgb2YgZXhwb3J0aW5nXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgcGFnZSBldmVudCBjaGFpbiB0aHVzIGV4dHJhY3RpbmcgYW5kIGV4cG9ydGluZyBhbGwgdGhlIHJvd3MgaW4gbmF0aXZldGFibGVzIGluIHBhZ2VzXG4gICAqL1xuICBleHBvcnRUYWJsZShleHBvcnRUeXBlPzogRXhwb3J0VHlwZSB8ICd4bHMnIHwgJ3hsc3gnIHwgJ2NzdicgfCAndHh0JyB8ICdqc29uJyB8ICdvdGhlcicsIG9wdGlvbnM/OiBFeGNlbE9wdGlvbnMgfCBUeHRPcHRpb25zIHwgT3B0aW9ucykge1xuICAgIHRoaXMubG9hZEV4cG9ydGVyKGV4cG9ydFR5cGUpO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZXhwb3J0U3RhcnRlZC5lbWl0KCk7XG4gICAgdGhpcy5faXNJdGVyYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2lzRXhwb3J0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICB0aGlzLmVuYWJsZUV4cG9ydEJ1dHRvbihmYWxzZSk7XG4gICAgdGhpcy5leHRyYWN0VGFibGVIZWFkZXIoKTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5leHBvcnRXaXRoUGFnaW5hdGlvbigpO1xuICAgIH0gY2F0Y2ggKG5vdFBhZ2luYXRlZCkge1xuICAgICAgdGhpcy5leHBvcnRTaW5nbGVQYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRXhwb3J0ZXIoZXhwb3J0VHlwZTogYW55KSB7XG4gICAgaWYgKGV4cG9ydFR5cGUgPT09IEV4cG9ydFR5cGUuT1RIRVIudmFsdWVPZigpKSB7XG4gICAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UgPSB0aGlzLmV4cG9ydGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9leHBvcnRlclNlcnZpY2UgPSB0aGlzLnNlcnZpY2VMb2NhdG9yLmdldFNlcnZpY2UoZXhwb3J0VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBleHBvcnRXaXRoUGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLl9pbml0aWFsUGFnZUluZGV4ID0gdGhpcy5nZXRDdXJyZW50UGFnZUluZGV4KCk7XG4gICAgdGhpcy5pbml0UGFnZUhhbmRsZXIoKTtcbiAgICB0aGlzLmdvVG9QYWdlKDApO1xuICB9XG5cbiAgcHJpdmF0ZSBleHBvcnRTaW5nbGVQYWdlKCkge1xuICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XG4gICAgdGhpcy5leHRyYWN0VGFibGVGb290ZXIoKTtcbiAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCkge1xuICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCh0aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvd3ModGhpcy5fY2RrVGFibGUsIHRoaXMuaGlkZGVuQ29sdW1ucykpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UGFnZUhhbmRsZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuZ2V0UGFnZUNoYW5nZU9ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faXNJdGVyYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdERhdGFPbkN1cnJlbnRQYWdlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNOZXh0UGFnZSgpKSB7XG4gICAgICAgICAgICAgIHRoaXMubmV4dFBhZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2lzSXRlcmF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5faW5pdGlhbFBhZ2VJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0V4cG9ydGluZykge1xuICAgICAgICAgICAgdGhpcy5faXNFeHBvcnRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdFRhYmxlRm9vdGVyKCk7XG4gICAgICAgICAgICB0aGlzLmV4cG9ydEV4dHJhY3RlZERhdGEoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBleHBvcnRFeHRyYWN0ZWREYXRhKCkge1xuICAgIHRoaXMuX2V4cG9ydGVyU2VydmljZS5leHBvcnQodGhpcy5fZGF0YSwgdGhpcy5fb3B0aW9ucyk7XG4gICAgdGhpcy5fZGF0YSA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgdGhpcy5lbmFibGVFeHBvcnRCdXR0b24odHJ1ZSk7XG4gICAgdGhpcy5leHBvcnRDb21wbGV0ZWQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0U3BlY2lhbFJvdyhvdXRsZXQ6IERhdGFSb3dPdXRsZXQpIHtcbiAgICBjb25zdCByb3cgPSB0aGlzLmRhdGFFeHRyYWN0b3IuZXh0cmFjdFJvdyh0aGlzLl9jZGtUYWJsZSwgdGhpcy5oaWRkZW5Db2x1bW5zLCBvdXRsZXQpO1xuICAgIGlmIChyb3cpIHtcbiAgICAgIHRoaXMuX2RhdGEucHVzaChyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFRhYmxlSGVhZGVyKCkge1xuICAgIHRoaXMuZXh0cmFjdFNwZWNpYWxSb3codGhpcy5fY2RrVGFibGUuX2hlYWRlclJvd091dGxldCk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RUYWJsZUZvb3RlcigpIHtcbiAgICB0aGlzLmV4dHJhY3RTcGVjaWFsUm93KHRoaXMuX2Nka1RhYmxlLl9mb290ZXJSb3dPdXRsZXQpO1xuICB9XG5cbiAgcHVibGljIGhhc05leHRQYWdlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRQYWdlSW5kZXgoKSA8IHRoaXMuZ2V0UGFnZUNvdW50KCkgLSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZXh0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvVG9QYWdlKHRoaXMuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsgMSk7XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZUV4cG9ydEJ1dHRvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9leHBvcnRlckJ1dHRvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9leHBvcnRlckJ1dHRvbi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCB2YWx1ZSA/IG51bGwgOiAndHJ1ZScpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=