import { Component, OnInit,Input,Output, EventEmitter ,  ChangeDetectorRef  } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { swotItem } from '../model/swotItem';

@Component({
  selector: 'app-matrix-tile',
  templateUrl: './matrix-tile.component.html',
  styleUrls: ['./matrix-tile.component.scss']
})
export class MatrixTileComponent implements OnInit {

  @Input() name: string;
  @Input() itemList: swotItem[];
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

 
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  remove(item:swotItem,list: swotItem[])
  {
    let index = list.findIndex(x => x.text == item.text);
    list.splice(index,1);
    this.change.emit(item.text);
    this.cd.detectChanges();
  }

   
  edit(item:swotItem,list: swotItem[])
  {
    item.isEditing = true;
    this.cd.detectChanges();
  }

  unedit(item:swotItem,list: swotItem[])
  {
    item.isEditing = false;
    this.change.emit(item.text);
    this.cd.detectChanges();
  }

  add(list: swotItem[])
  {
    list.push({ text : "please edit text", isEditing:false});
    this.change.emit("new");
    this.cd.detectChanges();
  }

  drop(event: CdkDragDrop<swotItem[]>) {

      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
      this.change.emit("new");
      this.cd.detectChanges();
}

}
