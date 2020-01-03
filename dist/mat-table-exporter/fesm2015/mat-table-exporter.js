import { CdkTableExporter, ServiceLocatorService, DataExtractorService, CdkTableExporterModule } from 'cdk-table-exporter';
export { CHAR_SET_UTF, CHAR_SET_UTF_16, CHAR_SET_UTF_8, CONTENT_TYPE_APPLICATION, CONTENT_TYPE_EXCEL, CONTENT_TYPE_TEXT, CdkTableExporter, CdkTableExporterModule, CsvExporterService, DataExtractorService, EXTENSION_CSV, EXTENSION_JSON, EXTENSION_TEXT, EXTENSION_XLS, EXTENSION_XLSX, ExportType, FileUtil, JsonExporterService, MAT_TABLE_EXPORTER, MIME_CSV, MIME_EXCEL_XLS, MIME_EXCEL_XLSX, MIME_JSON, MIME_TXT, Mime, P, REF, ServiceLocatorService, TYPE_ARRAY, TxtExporterService, WorksheetExporter, XLS_REGEX, XlsExporterService, XlsxExporterService } from 'cdk-table-exporter';
import { MatTable, MatTableModule } from '@angular/material/table';
import { Directive, Renderer2, Host, Self, Optional, ViewContainerRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTableExporterDirective extends CdkTableExporter {
    /**
     * @param {?} renderer
     * @param {?} serviceLocator
     * @param {?} dataExtractor
     * @param {?} table
     * @param {?} viewContainerRef
     */
    constructor(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
        super(renderer, serviceLocator, dataExtractor, table, viewContainerRef);
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    ngAfterViewInit() {
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
        if (this.getPaginator()) {
            this.getPaginator().disabled = !value;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        }
    }
}
MatTableExporterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMatTableExporter], [matTableExporter]',
                // renamed selector but kept old version for backwards compat.
                exportAs: 'matTableExporter'
            },] }
];
/** @nocollapse */
MatTableExporterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ServiceLocatorService },
    { type: DataExtractorService },
    { type: MatTable, decorators: [{ type: Host }, { type: Self }, { type: Optional }] },
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTableExporterModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatTableExporterDirective, MatTableExporterModule };
//# sourceMappingURL=mat-table-exporter.js.map
