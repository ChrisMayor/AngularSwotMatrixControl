# SWOT Matrix Control (drag and drop) based on Angular 8 Elements

## Description

Conversion of my original project https://github.com/ChrisMayor/D365SwotMatrix to the Angular Elements

2 x 2 Matrix control.

This control is based on Angular 8, TypeScript and Angular Elements.

The Matrix can be bound to 4 single line text controls in Dynamics 365 Unified Interface (not compatible with classic ui!)

## Highlights

* Angular 8
* Angular Elements

## Getting Started

### To build

* Open cmd to project root
* Run ng build --prod
* Output is in root/dist

### Open in browser

* Open cmd to project root
* Run ng serve -o

## Screenshot

## API

### Input: Tile names

tile1Name: string = "Strengths";
tile2Name: string = "Weaknesses";
tile3Name: string = "Opportunities";
tile4Name: string = "Threats";
  
### Input: Tiles (separator= ;;) : string
````
tile1
tile2
tile3
tile4
````
### Input: tilexIsNull : boolean
````
tile1
tile2
tile3
tile4
````
## How to run / API sample

### start web application in browser

* clone repository

```
npm install
ng serve -o
```
* open in browser http://localhost:4200/

### Use Javascript API

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

## Disclaimer / Impressum

* Published under the MIT license
* Use at your own risk

<a href="https://github.com/ChrisMayor/Impressum">Impressum / Imprint in German language to comply with German tele-media regulations.</a>
