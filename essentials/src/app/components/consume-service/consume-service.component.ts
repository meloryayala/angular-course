import {Component, OnInit, signal} from '@angular/core';
import {NewComponent} from "../new/new.component";
import {ApiService, ITask} from "../../services/api.service";

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [
    NewComponent
  ],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss'
})
export class ConsumeServiceComponent implements OnInit {
  //Add dependency injection, also works with functions
  // #apiService = inject(ApiService);
  constructor(private _apiService: ApiService) {
  }

  public getTask = signal<null | ITask[]>(null)

  ngOnInit() {
    this._apiService.httpListTask$().subscribe({
      next: (next) => {
        console.log(next)
        this.getTask.set(next)
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    })
  }
}
