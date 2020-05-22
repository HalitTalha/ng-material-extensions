import { __extends, __decorate, __param, __metadata } from 'tslib';
import { ServiceLocatorService, DataExtractorService, CdkTableExporter, CdkTableExporterModule } from 'cdk-table-exporter';
export * from 'cdk-table-exporter';
import { MatTable, MatTableModule } from '@angular/material/table';
import { Renderer2, Host, Self, Optional, Directive, NgModule } from '@angular/core';

var MatTableExporterDirective = /** @class */ (function (_super) {
    __extends(MatTableExporterDirective, _super);
    function MatTableExporterDirective(renderer, serviceLocator, dataExtractor, table) {
        return _super.call(this, renderer, serviceLocator, dataExtractor, table) || this;
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    MatTableExporterDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.exportStarted.subscribe(function (_) {
            _this.enablePaginator(false);
        });
        this.exportCompleted.subscribe(function (_) {
            _this.enablePaginator(true);
        });
    };
    /**
     * MatTable implementation of getPageCount
     */
    MatTableExporterDirective.prototype.getPageCount = function () {
        return this.getPaginator().getNumberOfPages();
    };
    /**
     * MatTable implementation of getPageSize
     */
    MatTableExporterDirective.prototype.getPageSize = function () {
        var _a, _b;
        return _b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageSize, (_b !== null && _b !== void 0 ? _b : 0);
    };
    /**
     * MatTable implementation of getCurrentPageIndex
     */
    MatTableExporterDirective.prototype.getCurrentPageIndex = function () {
        var _a, _b;
        return _b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageIndex, (_b !== null && _b !== void 0 ? _b : 0);
    };
    /**
     * MatTable implementation of getTotalItemsCount
     */
    MatTableExporterDirective.prototype.getTotalItemsCount = function () {
        var _a, _b, _c, _d, _e;
        return _e = (_b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.length, (_b !== null && _b !== void 0 ? _b : (_d = (_c = this.getDataSource()) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.length)), (_e !== null && _e !== void 0 ? _e : 0);
    };
    /**
     * MatTable implementation of goToPage
     */
    MatTableExporterDirective.prototype.goToPage = function (index) {
        this.getPaginator().pageIndex = index;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    };
    /**
     * MatTable implementation of getPageChangeObservable
     */
    MatTableExporterDirective.prototype.getPageChangeObservable = function () {
        return this.getPaginator().page;
    };
    MatTableExporterDirective.prototype.getDataSource = function () {
        return this._cdkTable.dataSource;
    };
    MatTableExporterDirective.prototype.getPaginator = function () {
        return this.getDataSource().paginator;
    };
    MatTableExporterDirective.prototype.enablePaginator = function (value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    };
    MatTableExporterDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ServiceLocatorService },
        { type: DataExtractorService },
        { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
    ]; };
    MatTableExporterDirective = __decorate([
        Directive({
            selector: '[matTableExporter]',
            exportAs: 'matTableExporter'
        }),
        __param(3, Host()), __param(3, Self()), __param(3, Optional()),
        __metadata("design:paramtypes", [Renderer2,
            ServiceLocatorService,
            DataExtractorService,
            MatTable])
    ], MatTableExporterDirective);
    return MatTableExporterDirective;
}(CdkTableExporter));

var MatTableExporterModule = /** @class */ (function () {
    function MatTableExporterModule() {
    }
    MatTableExporterModule = __decorate([
        NgModule({
            declarations: [MatTableExporterDirective],
            imports: [
                MatTableModule,
                CdkTableExporterModule
            ],
            exports: [MatTableExporterDirective]
        })
    ], MatTableExporterModule);
    return MatTableExporterModule;
}());

/*
 * Public API Surface of mat-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatTableExporterDirective, MatTableExporterModule };
//# sourceMappingURL=mat-table-exporter.js.map
