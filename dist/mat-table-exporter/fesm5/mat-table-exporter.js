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
     * MatTable implementation of getCurrentPageIndex
     */
    MatTableExporterDirective.prototype.getCurrentPageIndex = function () {
        return this.getPaginator().pageIndex;
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
    MatTableExporterDirective.prototype.getPaginator = function () {
        return this._cdkTable.dataSource.paginator;
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
