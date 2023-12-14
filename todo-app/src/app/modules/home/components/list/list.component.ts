import {Component, DoCheck} from '@angular/core';
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements DoCheck {
  public taskList: Array<TaskList> = [];

  ngDoCheck() {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }

  public setEmitItem(event: string) {
    this.taskList.push({ task: event, checked: false })
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
}
