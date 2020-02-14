import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableFilterDirective } from './mat-table-filter.directive';
import * as i0 from "@angular/core";
var MatTableFilterModule = /** @class */ (function () {
    function MatTableFilterModule() {
    }
    MatTableFilterModule.ɵmod = i0.ɵɵdefineNgModule({ type: MatTableFilterModule });
    MatTableFilterModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MatTableFilterModule_Factory(t) { return new (t || MatTableFilterModule)(); }, imports: [[
                MatTableModule
            ]] });
    return MatTableFilterModule;
}());
export { MatTableFilterModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatTableFilterModule, { declarations: [MatTableFilterDirective], imports: [MatTableModule], exports: [MatTableFilterDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatTableFilterModule, [{
        type: NgModule,
        args: [{
                declarations: [MatTableFilterDirective],
                imports: [
                    MatTableModule
                ],
                exports: [MatTableFilterDirective]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdGFibGUtZmlsdGVyLyIsInNvdXJjZXMiOlsibGliL21hdC10YWJsZS1maWx0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUV2RTtJQUFBO0tBT3FDOzREQUF4QixvQkFBb0I7MkhBQXBCLG9CQUFvQixrQkFMdEI7Z0JBQ1AsY0FBYzthQUNmOytCQVJIO0NBV3FDLEFBUHJDLElBT3FDO1NBQXhCLG9CQUFvQjt3RkFBcEIsb0JBQW9CLG1CQU5oQix1QkFBdUIsYUFFcEMsY0FBYyxhQUVOLHVCQUF1QjtrREFFdEIsb0JBQW9CO2NBUGhDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDdkMsT0FBTyxFQUFFO29CQUNQLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vbWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRUYWJsZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTWF0VGFibGVGaWx0ZXJEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyTW9kdWxlIHsgfVxuIl19