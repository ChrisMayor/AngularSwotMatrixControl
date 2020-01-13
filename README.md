[![Build Status](https://dev.azure.com/ich0166/AngularSwotMatrixControl/_apis/build/status/ChrisMayor.AngularSwotMatrixControl?branchName=master)](https://dev.azure.com/ich0166/AngularSwotMatrixControl/_build/latest?definitionId=8&branchName=master)
# SWOT Matrix Control (drag and drop) based on Angular 8 Elements

## Description

Conversion of my original project https://github.com/ChrisMayor/D365SwotMatrix to the Angular Elements

Custom 2 x 2 Matrix control which can be used in any web application (react, jquery, vue, plan js).

This control is based on Angular 8, TypeScript and Angular Elements.

## Highlights

* Angular 8
* Angular Elements

## Getting Started

### To build

* Open cmd to project root
* run:
````
ng build --prod
````
* Output is in root/dist

### Open in browser

* Open cmd to project root
* run:
````
ng serve -o
````
## Screenshot

<p align="center">
  <img src="../master/Screenshots/1a.JPG">
</p>

## API

### Input: Tile names : string

````
tile1Name: string = "Strengths";
tile2Name: string = "Weaknesses";
tile3Name: string = "Opportunities";
tile4Name: string = "Threats";
````

### Input: Tiles (separator= ;;) : string
````
tile1
tile2
tile3
tile4
````
### Input: tilexIsNull : boolean
````
tile1IsNull
tile2IsNull
tile3IsNull
tile4IsNull
````
## How to run / API sample

### start web application in browser

* clone repository

```
npm install
ng serve -o
```
* open in browser http://localhost:4200/

<p align="center">
  <img src="../master/Screenshots/1.JPG">
</p>

### Sample: Use the Javascript API to transform the Swot Matrix to an Ansoff-Matrix

```
const component = document.querySelector('app-matrix');
component.tile1Name = "Market development"
component.tile2Name = "Diversivication"
component.tile3Name = "Market penetration"
component.tile4Name = "Product development"
component.tile1 = "Expand advertising;;Target more segments"
component.tile2 = "Enter new segments;; Expand distribution"
component.tile4 = "Strategy1;;Strategy2"
```

<p align="center">
  <img src="../master/Screenshots/2.JPG">
</p>

## Disclaimer / Impressum

* Published under the MIT license
* Use at your own risk

<a href="https://github.com/ChrisMayor/Impressum">Impressum / Imprint in German language to comply with German tele-media regulations.</a>
