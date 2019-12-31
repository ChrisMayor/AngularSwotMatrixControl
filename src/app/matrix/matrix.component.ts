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
    let output: string[] = [];
    this.tile1Array.forEach(i => {
      output.push(i.text);
    });
    return output.join(";;");
  }

  @Input()
  set tile1IsNull(isNull: boolean) {
    this.tile1Array = [];
  }
  get tile1IsNull(): boolean {
    return this.tile1Array.length == 0;
  }



  @Input()
  set tile2(message: string) {
    while (this.tile2Array.length) {
      this.tile2Array = [];
    }

    let weaknessItems = this.convertToItems(message);

    weaknessItems.forEach(i => {
      this.tile2Array.push(i);
    });

  }
  get tile2(): string {
    let output: string[] = [];
    this.tile2Array.forEach(i => {
      output.push(i.text);
    });
    return output.join(";;");
  }

  @Input()
  set tile2IsNull(isNull: boolean) {
    this.tile2Array = [];
  }
  get tile2IsNull(): boolean {
    return this.tile2Array.length == 0;
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
    let output: string[] = [];
    this.tile3Array.forEach(i => {
      output.push(i.text);
    });
    return output.join(";;");
  }

  @Input()
  set tile3IsNull(isNull: boolean) {
    this.tile3Array = [];
  }
  get tile3IsNull(): boolean {
    return this.tile3Array.length == 0;
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
    let output: string[] = [];
    this.tile4Array.forEach(i => {
      output.push(i.text);
    });
    return output.join(";;");
  }

  @Input()
  set tile4IsNull(isNull: boolean) {
    this.tile4Array = [];
  }
  get tile4IsNull(): boolean {
    return this.tile4Array.length == 0;
  }

  persist(event) {
    let itemcollection: swotItemCollection[] = [];

    this.tile1Array.forEach(i => {
      itemcollection.push({ item: i, category: swotCategory.Strength });
    })

    this.tile2Array.forEach(i => {
      itemcollection.push({ item: i, category: swotCategory.Weakness });
    })

    this.tile3Array.forEach(i => {
      itemcollection.push({ item: i, category: swotCategory.Opportunity });
    })

    this.tile4Array.forEach(i => {
      itemcollection.push({ item: i, category: swotCategory.Threats });
    })

    if (this.dataChangedByUser != null) {
      this.dataChangedByUser.emit();
    }

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


