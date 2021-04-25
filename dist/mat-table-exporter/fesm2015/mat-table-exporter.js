import { Directive, Renderer2, Host, Self, Optional, NgModule } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { CdkTableExporter, ServiceLocatorService, DataExtractorService, XLSX_LIGHTWEIGHT, CdkTableExporterModule } from 'cdk-table-exporter';
export * from 'cdk-table-exporter';

class MatTableExporterDirective extends CdkTableExporter {
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
        return (_b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageSize) !== null && _b !== void 0 ? _b : 0;
    }
    /**
     * MatTable implementation of getCurrentPageIndex
     */
    getCurrentPageIndex() {
        var _a, _b;
        return (_b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.pageIndex) !== null && _b !== void 0 ? _b : 0;
    }
    /**
     * MatTable implementation of getTotalItemsCount
     */
    getTotalItemsCount() {
        var _a, _b, _c, _d, _e;
        return (_e = (_b = (_a = this.getPaginator()) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : (_d = (_c = this.getDataSource()) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0;
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
}
MatTableExporterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[matTableExporter]',
                exportAs: 'matTableExporter'
            },] }
];
MatTableExporterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] }
];

class MatTableExporterModule {
    static forRoot(configuration) {
        return {
            ngModule: MatTableExporterModule,
            providers: [
                {
                    provide: XLSX_LIGHTWEIGHT,
                    useValue: configuration.xlsxLightWeight
                }
            ]
        };
    }
}
MatTableExporterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MatTableExporterDirective],
                imports: [
                    MatTableModule,
                    CdkTableExporterModule
                ],
                exports: [MatTableExporterDirective]
            },] }
];

/*
 * Public API Surface of mat-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatTableExporterDirective, MatTableExporterModule };
//# sourceMappingURL=mat-table-exporter.js.map
