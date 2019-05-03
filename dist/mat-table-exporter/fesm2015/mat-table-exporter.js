import { MatTableModule } from '@angular/material';
import { Directive, Renderer2, NgModule } from '@angular/core';
import { CdkTableExporter, JsonExporterService } from 'cdk-table-exporter';
export { JsonExporterService } from 'cdk-table-exporter';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTableExporterDirective extends CdkTableExporter {
    /**
     * @param {?} renderer
     * @param {?} jsonExporter
     */
    constructor(renderer, jsonExporter) {
        super(renderer, jsonExporter);
        this.renderer = renderer;
        this.jsonExporter = jsonExporter;
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.getPaginator()) {
            this.exportStarted.subscribe((/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                this.enablePaginator(false);
            }));
            this.exportCompleted.subscribe((/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                this.enablePaginator(true);
            }));
        }
    }
    /**
     * MatTable implementation of getPageCount
     * @override
     * @return {?}
     */
    getPageCount() {
        return this.getPaginator().getNumberOfPages();
    }
    /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     * @return {?}
     */
    getCurrentPageIndex() {
        return this.getPaginator().pageIndex;
    }
    /**
     * MatTable implementation of goToPage
     * @override
     * @param {?} index
     * @return {?}
     */
    goToPage(index) {
        this.getPaginator().pageIndex = index;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    }
    /**
     * MatTable implementation of getPageChangeObservable
     * @override
     * @return {?}
     */
    getPageChangeObservable() {
        return this.getPaginator().page;
    }
    /**
     * @private
     * @return {?}
     */
    getPaginator() {
        return ((/** @type {?} */ (this.cdkTable.dataSource))).paginator;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    enablePaginator(value) {
        this.getPaginator().disabled = !value;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    }
}
MatTableExporterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMatTableExporter]'
            },] }
];
/** @nocollapse */
MatTableExporterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: JsonExporterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTableExporterModule {
}
MatTableExporterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MatTableExporterDirective],
                imports: [
                    MatTableModule
                ],
                exports: [MatTableExporterDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatTableExporterDirective, MatTableExporterModule };

//# sourceMappingURL=mat-table-exporter.js.map