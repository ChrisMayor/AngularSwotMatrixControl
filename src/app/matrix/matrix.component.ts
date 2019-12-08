import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { swotItem } from '../model/swotItem';
import { swotCategory } from '../model/swotCategory';
import { swotItemCollection } from '../model/swotItemCollection';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  //selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})

export class MatrixComponent implements OnInit {

  InCreate: boolean = false;
  
  tile1Array: swotItem[] = [];
  tile2Array: swotItem[] = [];
  tile3Array: swotItem[] = [];
  tile4Array: swotItem[] = [];

  @Input()
  tile1Name: string = "Strengths";
  @Input()
  tile2Name: string = "Weaknesses";
  @Input()
  tile3Name: string = "Opportunities";
  @Input()
  tile4Name: string = "Threats";

  /**
   *
   */
  constructor() {


  }


@Input()
  set tile1(message: string) {
    while (this.tile1Array.length) {
      this.tile1Array.pop();
    }

    let stregthItems = this.convertToItems(message);

    stregthItems.forEach(i => {
      this.tile1Array.push(i);
    });

  }
  get tile1(): string {
    let output : string[] = [];
    this.tile1Array.forEach(i => {
      output.push(i.text);
    });
    return output.join(";;");
  }

  @Input()
  set tile2(message: string) {
    while (this.tile2Array.length) {
      this.tile2Array.pop();
    }

    let weaknessItems = this.convertToItems(message);

    weaknessItems.forEach(i => {
      this.tile2Array.push(i);
    });

  }
  get tile2(): string {
    let output : string[] = [];
    this.tile2Array.forEach(i => {
      output.push(i.text);
    });
    return output.join(";;");
  }

  @Input()
  set tile3(message: string) {
    while (this.tile3Array.length) {
      this.tile3Array.pop();
    }

    let opportunityItems = this.convertToItems(message);

    opportunityItems.forEach(i => {
      this.tile3Array.push(i);
    });

  }
  get tile3(): string {
    let output : string[] = [];
    this.tile3Array.forEach(i => {
      output.push(i.text);
    });
    return output.join(";;");
  }

  @Input()
  set tile4(message: string) {
    while (this.tile4Array.length) {
      this.tile4Array.pop();
    }

    let treathItems = this.convertToItems(message);

    treathItems.forEach(i => {
      this.tile4Array.push(i);
    });

  }
  get tile4(): string {
    let output : string[] = [];
    this.tile4Array.forEach(i => {
      output.push(i.text);
    });
    return output.join(";;");
  }

  persist(event) {
    this.dataChangedByUser.emit();

  }

  @Output() dataChangedByUser = new EventEmitter();


  ngOnInit() {


  }

  private convertToItems(text: string): swotItem[] {

    let returnValue: swotItem[] = [];
    if (text != null) {
      let itemsArray: string[] = text.split(";;");
      itemsArray.forEach(x => returnValue.push({ text: x, isEditing: false }));
    }
    return returnValue;
  }



}


