# CdkTable Table Exporter

[![Node version](https://img.shields.io/npm/v/cdk-table-exporter.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/cdk-table-exporter)  ![Total Downloads](https://img.shields.io/npm/dm/cdk-table-exporter.svg?style=for-the-badge)

**!! If you are using angular material please use** [mat-table-exporter](https://www.npmjs.com/package/mat-table-exporter)

This project facilitates the common functionalities for CdkTable implementations abstracting the behavior that can change among different CdkTable implementations, see [mat-table-exporter](https://www.npmjs.com/package/mat-table-exporter) for angular material table export.



## Getting Started

Install cdk-table-exporter if you are not using angular material in your project. In this case you have to implement your version of CdkTableExporter abstract class to use as your directive.

```
npm install --save cdk-table-exporter
```
NOTE: For the previous major versions of Angular install version 1.2.5
```
npm install --save cdk-table-exporter@1.2.5
```
After installing cdk-table-exporter import CdkTableExporterModule in your ngModule
```
import { CdkTableExporterModule } from 'cdk-table-exporter';
```
```
@NgModule({
  imports: [
    ...
    CdkTableExporterModule
  ],
 ]})
```

## Usage
CdkTableExporter class defines the common functionality that an exporter directive should have.
By extending it an implementing the abstract methods you will have an exporter of your own.
Thus the usage is simply as follows:
1. Generate a directive class
2. Extend CdkTableExporter class implement the abstract methods


## Contributing
This project is a library project inside ng-material-extensions angular workspace. If you are interested in the source code of this particular library you can get ready and build the project by applying the steps below:

1. Do ```npm install``` in ```ng-material-extensions``` directory
2. Do ```npm install``` in ```ng-material-extensions\projects\cdk-table-exporter``` directory
3. Go to ```ng-material-extensions``` directory
4. Build it:
```
ng build cdk-table-exporter
```
5. You can run the showcase application and see your changes in action. In ```ng-material-extensions``` run ```ng s -o```

&nbsp;

## Support & Donations

Feel free to show your support. Donating supporters will be added into *Supporters* section inside the **README.md** of the repository.

[![GitHub Org's stars](https://img.shields.io/github/stars/HalitTalha/ng-material-extensions?logo=Github&style=for-the-badge)](https://github.com/HalitTalha/ng-material-extensions/stargazers) -> **Become a star-gazer, giving a star at Github** 

[![Patreon Badge](https://img.shields.io/badge/Patreon-talhature-e05d44?logo=Patreon&style=for-the-badge)](https://www.patreon.com/talhature) -> **Become a Patreon**


[![Crypto Donation](https://img.shields.io/badge/_-DONATE-4d4d4e?logo=bitcoin&style=for-the-badge)](https://commerce.coinbase.com/checkout/3643d820-81aa-46ca-9973-877c1184e082) -> **Donate in crypto currencies**


&nbsp;
## Licence

Apache-2.0
