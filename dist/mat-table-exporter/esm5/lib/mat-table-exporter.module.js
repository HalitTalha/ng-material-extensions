import { CdkTableExporterModule } from 'cdk-table-exporter';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatTableExporterDirective } from './mat-table-exporter.directive';
import * as i0 from "@angular/core";
var MatTableExporterModule = /** @class */ (function () {
    function MatTableExporterModule() {
    }
    MatTableExporterModule.ɵmod = i0.ɵɵdefineNgModule({ type: MatTableExporterModule });
    MatTableExporterModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MatTableExporterModule_Factory(t) { return new (t || MatTableExporterModule)(); }, imports: [[
                MatTableModule,
                CdkTableExporterModule
            ]] });
    return MatTableExporterModule;
}());
export { MatTableExporterModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatTableExporterModule, { declarations: [MatTableExporterDirective], imports: [MatTableModule,
        CdkTableExporterModule], exports: [MatTableExporterDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatTableExporterModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZXhwb3J0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUczRTtJQUFBO0tBUXVDOzhEQUExQixzQkFBc0I7K0hBQXRCLHNCQUFzQixrQkFOeEI7Z0JBQ1AsY0FBYztnQkFDZCxzQkFBc0I7YUFDdkI7aUNBWEg7Q0FjdUMsQUFSdkMsSUFRdUM7U0FBMUIsc0JBQXNCO3dGQUF0QixzQkFBc0IsbUJBUGxCLHlCQUF5QixhQUV0QyxjQUFjO1FBQ2Qsc0JBQXNCLGFBRWQseUJBQXlCO2tEQUV4QixzQkFBc0I7Y0FSbEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrVGFibGVFeHBvcnRlck1vZHVsZSB9IGZyb20gJ2Nkay10YWJsZS1leHBvcnRlcic7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRUYWJsZUV4cG9ydGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNYXRUYWJsZUV4cG9ydGVyRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW1xuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIENka1RhYmxlRXhwb3J0ZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW01hdFRhYmxlRXhwb3J0ZXJEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRXhwb3J0ZXJNb2R1bGUgeyB9XG4iXX0=