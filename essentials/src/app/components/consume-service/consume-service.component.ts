import {Component, OnInit} from '@angular/core';
import {NewComponent} from "../new/new.component";
import {ApiService} from "../../services/api.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {toSignal} from "@angular/core/rxjs-interop";
import {concatMap} from "rxjs";

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

  constructor(private _apiService: ApiService) {
  }

  //convert observable to a signal
  // public getListTask$ = toSignal(this._apiService.getListTask);
  public getTaskList = this._apiService.getTaskList;
  public getTaskId = this._apiService.getTaskId;
  public getTaskIdError = this._apiService.getTaskIdError;

  ngOnInit() {
    this._apiService.httpTaskList$().subscribe();
    this._apiService.httpTaskId$('IqHJ9r5n6axAzPXthrthhGZpcy').subscribe();
  }

  public httpTaskCreate(title: string){
    this._apiService.httpTaskCreate$(title)
      .pipe(concatMap(() => this._apiService.httpTaskList$())      )
      .subscribe();
  }

  public httpTaskUpdate(id: string,title: string){
    this._apiService.httpTaskUpdate$(id,title)
      .pipe(concatMap(() => this._apiService.httpTaskList$())      )
      .subscribe();
  }

  public httpTaskDelete(id: string){
    this._apiService.httpTaskDelete$(id)
      .pipe(concatMap(() => this._apiService.httpTaskList$())      )
      .subscribe();
  }
}
