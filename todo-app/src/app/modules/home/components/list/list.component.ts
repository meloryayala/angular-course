import {Component, DoCheck} from '@angular/core';
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || "[]");

  ngDoCheck() {
    this.setLocalStorage();
  }

  public setEmitItem(event: string) {
    this.taskList.unshift({ task: event, checked: false });
  }

  public deleteItem(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirmation = confirm("Are you sure to delete all tasks?");
    if (confirmation) {
      this.taskList = [];
    }
  }

  public validationEmptyInput(item: string, index: number) {
    if (!item.length) {
      const confirmation = confirm("The task is empty, do you want to delete?");
      if (confirmation) {
        this.deleteItem(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}
