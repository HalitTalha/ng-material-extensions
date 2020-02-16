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
     * MatTable implementation of getCurrentPageIndex
     */
    getCurrentPageIndex() {
        return this.getPaginator().pageIndex;
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
    getPaginator() {
        return this._cdkTable.dataSource.paginator;
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
