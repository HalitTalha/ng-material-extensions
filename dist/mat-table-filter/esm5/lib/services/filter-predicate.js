import { MatTableFilter } from '../mat-table-filter.enum';
import * as LODASH from 'lodash';
var FilterPredicate = /** @class */ (function () {
    function FilterPredicate() {
    }
    FilterPredicate.prototype.executeCondition = function (itemPair, options) {
        this.handleLetterCasing(itemPair, options.caseSensitive);
        switch (options.filterType) {
            case MatTableFilter.EQUALS:
                return this.equals(itemPair);
            case MatTableFilter.ANYWHERE:
                return this.anywhere(itemPair);
            case MatTableFilter.STARTS_WITH:
                return this.startsWith(itemPair);
            case MatTableFilter.ENDS_WITH:
                return this.endsWith(itemPair);
            default:
                return true;
        }
    };
    FilterPredicate.prototype.handleLetterCasing = function (itemPair, caseSensitive) {
        if (!caseSensitive) {
            this.transformAllLowerCase(itemPair);
        }
    };
    FilterPredicate.prototype.transformAllLowerCase = function (object) {
        // tslint:disable-next-line:forin
        for (var key in object) {
            var value = object[key];
            if (LODASH.isString(value)) {
                object[key] = value.toLowerCase();
            }
            else {
                this.transformAllLowerCase(value);
            }
        }
    };
    return FilterPredicate;
}());
export { FilterPredicate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByZWRpY2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZmlsdGVyLXByZWRpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFHakM7SUFBQTtJQXdDQSxDQUFDO0lBakNRLDBDQUFnQixHQUF2QixVQUF3QixRQUFxQixFQUFFLE9BQWdCO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELFFBQVEsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMxQixLQUFLLGNBQWMsQ0FBQyxNQUFNO2dCQUN4QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsS0FBSyxjQUFjLENBQUMsUUFBUTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssY0FBYyxDQUFDLFdBQVc7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxLQUFLLGNBQWMsQ0FBQyxTQUFTO2dCQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakM7Z0JBQ0UsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNILENBQUM7SUFFTyw0Q0FBa0IsR0FBMUIsVUFBMkIsUUFBdUIsRUFBRSxhQUFzQjtRQUN4RSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFTywrQ0FBcUIsR0FBN0IsVUFBOEIsTUFBVztRQUN2QyxpQ0FBaUM7UUFDakMsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXRUYWJsZUZpbHRlciB9IGZyb20gJy4uL21hdC10YWJsZS1maWx0ZXIuZW51bSc7XG5pbXBvcnQgeyBJdGVtUGFpciB9IGZyb20gJy4uL2l0ZW0tcGFpcic7XG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9vcHRpb25zJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpbHRlclByZWRpY2F0ZTxUPiB7XG5cbiAgcHVibGljIGFic3RyYWN0IGVxdWFscyhpdGVtUGFpcjogSXRlbVBhaXI8VD4pOiBib29sZWFuO1xuICBwdWJsaWMgYWJzdHJhY3QgYW55d2hlcmUoaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+KTogYm9vbGVhbjtcbiAgcHVibGljIGFic3RyYWN0IHN0YXJ0c1dpdGgoaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+KTogYm9vbGVhbjtcbiAgcHVibGljIGFic3RyYWN0IGVuZHNXaXRoKGl0ZW1QYWlyOiBJdGVtUGFpcjxUPik6IGJvb2xlYW47XG5cbiAgcHVibGljIGV4ZWN1dGVDb25kaXRpb24oaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+LCBvcHRpb25zOiBPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgdGhpcy5oYW5kbGVMZXR0ZXJDYXNpbmcoaXRlbVBhaXIsIG9wdGlvbnMuY2FzZVNlbnNpdGl2ZSk7XG4gICAgc3dpdGNoIChvcHRpb25zLmZpbHRlclR5cGUpIHtcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuRVFVQUxTOlxuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMoaXRlbVBhaXIpO1xuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTpcbiAgICAgICAgcmV0dXJuIHRoaXMuYW55d2hlcmUoaXRlbVBhaXIpO1xuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5TVEFSVFNfV0lUSDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRzV2l0aChpdGVtUGFpcik7XG4gICAgICBjYXNlIE1hdFRhYmxlRmlsdGVyLkVORFNfV0lUSDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kc1dpdGgoaXRlbVBhaXIpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVMZXR0ZXJDYXNpbmcoaXRlbVBhaXI6IEl0ZW1QYWlyPGFueT4sIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQWxsTG93ZXJDYXNlKGl0ZW1QYWlyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUFsbExvd2VyQ2FzZShvYmplY3Q6IGFueSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICAgIGlmIChMT0RBU0guaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQWxsTG93ZXJDYXNlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==