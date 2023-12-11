import {Injectable, signal} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

export interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //New
  public name = signal('Melory Ayala');

 //Old
  public name$ = new BehaviorSubject('Melory Ayala $');

  constructor(private _http: HttpClient) {
  }
  URL = signal(environment.apiTask);

  public httpListTask$(): Observable<ITask[]>{
    return this._http.get<ITask[]>(this.URL())
  }
}
