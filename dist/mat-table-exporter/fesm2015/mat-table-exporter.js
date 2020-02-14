import { CdkTableExporterDirective, ServiceLocatorService, DataExtractorService, CdkTableExporterModule } from 'cdk-table-exporter';
export * from 'cdk-table-exporter';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ɵɵdirectiveInject, Renderer2, ViewContainerRef, ɵɵdefineDirective, ɵɵInheritDefinitionFeature, ɵsetClassMetadata, Directive, Host, Self, Optional, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class MatTableExporterDirective extends CdkTableExporterDirective {
    constructor(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
        super(renderer, serviceLocator, dataExtractor, table, viewContainerRef);
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
        return this.cdkTable.dataSource.paginator;
    }
    enablePaginator(value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    }
}
MatTableExporterDirective.ɵfac = function MatTableExporterDirective_Factory(t) { return new (t || MatTableExporterDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ServiceLocatorService), ɵɵdirectiveInject(DataExtractorService), ɵɵdirectiveInject(MatTable, 11), ɵɵdirectiveInject(ViewContainerRef)); };
MatTableExporterDirective.ɵdir = ɵɵdefineDirective({ type: MatTableExporterDirective, selectors: [["", "matTableExporter", ""]], exportAs: ["matTableExporter"], features: [ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatTableExporterDirective, [{
        type: Directive,
        args: [{
                selector: '[matTableExporter]',
                exportAs: 'matTableExporter'
            }]
    }], function () { return [{ type: Renderer2 }, { type: ServiceLocatorService }, { type: DataExtractorService }, { type: MatTable, decorators: [{
                type: Host
            }, {
                type: Self
            }, {
                type: Optional
            }] }, { type: ViewContainerRef }]; }, null); })();

class MatTableExporterModule {
}
MatTableExporterModule.ɵmod = ɵɵdefineNgModule({ type: MatTableExporterModule });
MatTableExporterModule.ɵinj = ɵɵdefineInjector({ factory: function MatTableExporterModule_Factory(t) { return new (t || MatTableExporterModule)(); }, imports: [[
            MatTableModule,
            CdkTableExporterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MatTableExporterModule, { declarations: [MatTableExporterDirective], imports: [MatTableModule,
        CdkTableExporterModule], exports: [MatTableExporterDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatTableExporterModule, [{
        type: NgModule,
        args: [{
                declarations: [MatTableExporterDirective],
                imports: [
                    MatTableModule,
                    CdkTableExporterModule
                ],
                exports: [MatTableExporterDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of mat-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatTableExporterDirective, MatTableExporterModule };
//# sourceMappingURL=mat-table-exporter.js.map
