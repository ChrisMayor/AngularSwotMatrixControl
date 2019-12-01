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
  strengthArray: swotItem[] = [];
  weaknessArray: swotItem[] = [];
  opportunityArray: swotItem[] = [];
  treathArray: swotItem[] = [];
  /**
   *
   */
  constructor() {


  }


@Input()
  set strength(message: string) {
    while (this.strengthArray.length) {
      this.strengthArray.pop();
    }

    let stregthItems = this.convertToItems(message);

    stregthItems.forEach(i => {
      this.strengthArray.push(i);
    });

  }
  get strength(): string {
    let output : string[] = [];
    this.strengthArray.forEach(i => {
      output.push(i.text);
    });
    return output.join(";;");
  }

  persist(event) {
    let itemcollection: swotItemCollection[] = [];

    this.strengthArray.forEach(i => {
      itemcollection.push({ item: i, category: swotCategory.Strength });
    })

    this.weaknessArray.forEach(i => {
      itemcollection.push({ item: i, category: swotCategory.Weakness });
    })

    this.opportunityArray.forEach(i => {
      itemcollection.push({ item: i, category: swotCategory.Opportunity });
    })

    this.treathArray.forEach(i => {
      itemcollection.push({ item: i, category: swotCategory.Threats });
    })

  }




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


