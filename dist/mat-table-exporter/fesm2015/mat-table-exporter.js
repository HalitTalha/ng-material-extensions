import { __decorate, __param, __metadata } from 'tslib';
import { CdkTableExporter, ServiceLocatorService, DataExtractorService, CdkTableExporterModule } from 'cdk-table-exporter';
export * from 'cdk-table-exporter';
import { MatTable, MatTableModule } from '@angular/material/table';
import { Renderer2, Host, Self, Optional, Directive, NgModule } from '@angular/core';

let MatTableExporterDirective = class MatTableExporterDirective extends CdkTableExporter {
    constructor(renderer, serviceLocator, dataExtractor, table) {
        super(renderer, serviceLocator, dataExtractor, table);
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    ngAfterViewInit() {
        this.exportStarted.subscribe(_ => {
            this.enablePaginator(false);
        });
        this.exportCompleted.subscribe(_ => {
            this.enablePaginator(true);
        });
    }
    /**
     * MatTable implementation of getPageCount
     */
    getPageCount() {
        return this.getPaginator().getNumberOfPages();
    }
    /**
     * MatTable implementation of getPageSize
     */
    getPageSize() {
        var _a, _b;
        return _b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageSize, (_b !== null && _b !== void 0 ? _b : 0);
    }
    /**
     * MatTable implementation of getCurrentPageIndex
     */
    getCurrentPageIndex() {
        var _a, _b;
        return _b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageIndex, (_b !== null && _b !== void 0 ? _b : 0);
    }
    /**
     * MatTable implementation of getTotalItemsCount
     */
    getTotalItemsCount() {
        var _a, _b, _c, _d, _e;
        return _e = (_b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.length, (_b !== null && _b !== void 0 ? _b : (_d = (_c = this.getDataSource()) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.length)), (_e !== null && _e !== void 0 ? _e : 0);
    }
    /**
     * MatTable implementation of goToPage
     */
    goToPage(index) {
        this.getPaginator().pageIndex = index;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    }
    /**
     * MatTable implementation of getPageChangeObservable
     */
    getPageChangeObservable() {
        return this.getPaginator().page;
    }
    getDataSource() {
        return this._cdkTable.dataSource;
    }
    getPaginator() {
        return this.getDataSource().paginator;
    }
    enablePaginator(value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    }
};
MatTableExporterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
];
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

let MatTableExporterModule = class MatTableExporterModule {
};
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

/*
 * Public API Surface of mat-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatTableExporterDirective, MatTableExporterModule };
//# sourceMappingURL=mat-table-exporter.js.map
