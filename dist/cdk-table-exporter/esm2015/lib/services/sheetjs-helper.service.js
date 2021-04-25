import { __awaiter } from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { XLSX_LIGHTWEIGHT } from '../constants';
import * as i0 from "@angular/core";
import * as i1 from "../constants";
export class SheetjsHelperService {
    constructor(xlsxLightweight) {
        this.xlsxLightweight = xlsxLightweight;
    }
    getXlsx() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.xlsxLightweight) {
                return yield import(`xlsx/dist/xlsx.mini.min`);
            }
            else {
                return yield import('xlsx');
            }
        });
    }
}
SheetjsHelperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SheetjsHelperService_Factory() { return new SheetjsHelperService(i0.ɵɵinject(i1.XLSX_LIGHTWEIGHT, 8)); }, token: SheetjsHelperService, providedIn: "root" });
SheetjsHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SheetjsHelperService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [XLSX_LIGHTWEIGHT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlZXRqcy1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hbmd1bGFyX3dvcmtzcGFjZS9uZy1tYXRlcmlhbC1leHRlbnNpb25zL3Byb2plY3RzL2Nkay10YWJsZS1leHBvcnRlci9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2hlZXRqcy1oZWxwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBTWhELE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsWUFBMEQsZUFBd0I7UUFBeEIsb0JBQWUsR0FBZixlQUFlLENBQVM7SUFBSSxDQUFDO0lBRTFFLE9BQU87O1lBQ2xCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsT0FBTyxNQUFNLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2FBQ2hEO2lCQUFNO2dCQUNMLE9BQU8sTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDO0tBQUE7Ozs7WUFiRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OzswQ0FHYyxRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhMU1hfTElHSFRXRUlHSFQgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaGVldGpzSGVscGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChYTFNYX0xJR0hUV0VJR0hUKSBwcml2YXRlIHhsc3hMaWdodHdlaWdodDogYm9vbGVhbikgeyB9XG5cbiAgcHVibGljIGFzeW5jIGdldFhsc3goKTogUHJvbWlzZTx0eXBlb2YgWExTWD4ge1xuICAgIGlmICh0aGlzLnhsc3hMaWdodHdlaWdodCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGltcG9ydChgeGxzeC9kaXN0L3hsc3gubWluaS5taW5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGF3YWl0IGltcG9ydCgneGxzeCcpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=