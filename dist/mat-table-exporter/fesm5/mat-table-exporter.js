import { ServiceLocatorService, DataExtractorService, CdkTableExporterDirective, CdkTableExporterModule } from 'cdk-table-exporter';
export * from 'cdk-table-exporter';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ɵɵdirectiveInject, Renderer2, ViewContainerRef, ɵɵdefineDirective, ɵɵInheritDefinitionFeature, ɵsetClassMetadata, Directive, Host, Self, Optional, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __extends } from 'tslib';

var MatTableExporterDirective = /** @class */ (function (_super) {
    __extends(MatTableExporterDirective, _super);
    function MatTableExporterDirective(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
        return _super.call(this, renderer, serviceLocator, dataExtractor, table, viewContainerRef) || this;
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
        return this.cdkTable.dataSource.paginator;
    };
    MatTableExporterDirective.prototype.enablePaginator = function (value) {
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    };
    MatTableExporterDirective.ɵfac = function MatTableExporterDirective_Factory(t) { return new (t || MatTableExporterDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ServiceLocatorService), ɵɵdirectiveInject(DataExtractorService), ɵɵdirectiveInject(MatTable, 11), ɵɵdirectiveInject(ViewContainerRef)); };
    MatTableExporterDirective.ɵdir = ɵɵdefineDirective({ type: MatTableExporterDirective, selectors: [["", "matTableExporter", ""]], exportAs: ["matTableExporter"], features: [ɵɵInheritDefinitionFeature] });
    return MatTableExporterDirective;
}(CdkTableExporterDirective));
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

var MatTableExporterModule = /** @class */ (function () {
    function MatTableExporterModule() {
    }
    MatTableExporterModule.ɵmod = ɵɵdefineNgModule({ type: MatTableExporterModule });
    MatTableExporterModule.ɵinj = ɵɵdefineInjector({ factory: function MatTableExporterModule_Factory(t) { return new (t || MatTableExporterModule)(); }, imports: [[
                MatTableModule,
                CdkTableExporterModule
            ]] });
    return MatTableExporterModule;
}());
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
