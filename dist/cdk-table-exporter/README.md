[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")  [![Node version](https://img.shields.io/npm/v/cdk-table-exporter.svg?style=flat)](https://www.npmjs.com/package/cdk-table-exporter)  ![Total Downloads](https://img.shields.io/npm/dw/cdk-table-exporter.svg)

# CdkTable Table Exporter

**!! If you are using angular material please use** [mat-table-exporter](https://www.npmjs.com/package/mat-table-exporter)

This project facilitates the common functionalities for CdkTable implementations abstracting the behavior that can change among different CdkTable implementations, see [mat-table-exporter](https://www.npmjs.com/package/mat-table-exporter) for angular material table export.

## Getting Started

Install cdk-table-exporter if you are not using angular material in your project. In this case you have to implement your version of CdkTableExporter abstract class to use as your directive.

```
npm install cdk-table-exporter
```
After installing cdk-table-exporter import CdkTableExporterModule in your ngModules


## Usage
CdkTableExporter class defines the common functionality that an exporter directive should have.
By extending it an implementing the abstract methods you will have an exporter of your own.
Thus the usage is simply as follows:
1- Generate a directive class
2- Extend CdkTableExporter class implement the abstract methods


## Licence

Apache-2.0
