import {Component, OnInit, signal} from '@angular/core';
import {NewComponent} from "../new/new.component";
import {ApiService, ITask} from "../../services/api.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [
    NewComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss'
})
export class ConsumeServiceComponent implements OnInit {
  //Add dependency injection, also works with functions
  // #apiService = inject(ApiService);
  constructor(private _apiService: ApiService) {
  }

  public tasks = signal<null | ITask[]>(null);
  public getTask$ = this._apiService.httpListTask$();

  ngOnInit() {
    this.getTask$.subscribe({
      next: (next) => {
        console.log(next)
        this.tasks.set(next)
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    })
  }
}
