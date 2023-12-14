import { Component } from '@angular/core';
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
public taskList: Array<TaskList> = [];
}
