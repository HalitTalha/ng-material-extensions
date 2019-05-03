import { MatTableModule } from '@angular/material';
import { __extends } from 'tslib';
import { Directive, Renderer2, NgModule } from '@angular/core';
import { CdkTableExporter, JsonExporterService } from 'cdk-table-exporter';
export { JsonExporterService } from 'cdk-table-exporter';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTableExporterDirective = /** @class */ (function (_super) {
    __extends(MatTableExporterDirective, _super);
    function MatTableExporterDirective(renderer, jsonExporter) {
        var _this = _super.call(this, renderer, jsonExporter) || this;
        _this.renderer = renderer;
        _this.jsonExporter = jsonExporter;
        return _this;
    }
    /**
     * Overriding ngAfterViewInit of TableExporter
     */
    /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    MatTableExporterDirective.prototype.ngAfterViewInit = /**
     * Overriding ngAfterViewInit of TableExporter
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        if (this.getPaginator()) {
            this.exportStarted.subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this.enablePaginator(false);
            }));
            this.exportCompleted.subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this.enablePaginator(true);
            }));
        }
    };
    /**
     * MatTable implementation of getPageCount
     * @override
     */
    /**
     * MatTable implementation of getPageCount
     * @override
     * @return {?}
     */
    MatTableExporterDirective.prototype.getPageCount = /**
     * MatTable implementation of getPageCount
     * @override
     * @return {?}
     */
    function () {
        return this.getPaginator().getNumberOfPages();
    };
    /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     */
    /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     * @return {?}
     */
    MatTableExporterDirective.prototype.getCurrentPageIndex = /**
     * MatTable implementation of getCurrentPageIndex
     * @override
     * @return {?}
     */
    function () {
        return this.getPaginator().pageIndex;
    };
    /**
     * MatTable implementation of goToPage
     * @override
     */
    /**
     * MatTable implementation of goToPage
     * @override
     * @param {?} index
     * @return {?}
     */
    MatTableExporterDirective.prototype.goToPage = /**
     * MatTable implementation of goToPage
     * @override
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.getPaginator().pageIndex = index;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    };
    /**
     * MatTable implementation of getPageChangeObservable
     * @override
     */
    /**
     * MatTable implementation of getPageChangeObservable
     * @override
     * @return {?}
     */
    MatTableExporterDirective.prototype.getPageChangeObservable = /**
     * MatTable implementation of getPageChangeObservable
     * @override
     * @return {?}
     */
    function () {
        return this.getPaginator().page;
    };
    /**
     * @private
     * @return {?}
     */
    MatTableExporterDirective.prototype.getPaginator = /**
     * @private
     * @return {?}
     */
    function () {
        return ((/** @type {?} */ (this.cdkTable.dataSource))).paginator;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MatTableExporterDirective.prototype.enablePaginator = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.getPaginator().disabled = !value;
        this.getPaginator()._changePageSize(this.getPaginator().pageSize);
    };
    MatTableExporterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxMatTableExporter]'
                },] }
    ];
    /** @nocollapse */
    MatTableExporterDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: JsonExporterService }
    ]; };
    return MatTableExporterDirective;
}(CdkTableExporter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatTableExporterModule = /** @class */ (function () {
    function MatTableExporterModule() {
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
    return MatTableExporterModule;
}());

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