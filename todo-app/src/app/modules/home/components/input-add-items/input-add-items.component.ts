import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-add-items',
  templateUrl: './input-add-items.component.html',
  styleUrls: ['./input-add-items.component.scss']
})
export class InputAddItemsComponent implements OnInit {

  @Output() public emmitItem = new EventEmitter();

  public item: string = "";

  ngOnInit() {
  }

  public addItem() {
    this.item = this.item.trim();
    if (this.item) {
    this.emmitItem.emit(this.item);
    this.item = "";
    }
  }
}
