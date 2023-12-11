import {Component, OnInit} from '@angular/core';
import {NewComponent} from "../new/new.component";
import {ApiService} from "../../services/api.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {toSignal} from "@angular/core/rxjs-interop";

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
  public getListTask$ = this._apiService.getListTask;

  ngOnInit() {
    this._apiService.httpListTask$().subscribe();
  }

}
