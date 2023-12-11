import {Injectable, signal} from '@angular/core';
import {BehaviorSubject, Observable, shareReplay, tap} from "rxjs";
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
  //Pass values to components - New
  public name = signal('Melory Ayala');
 //Pass values to components - Old
  public name$ = new BehaviorSubject('Melory Ayala $');

  constructor(private _http: HttpClient) { }
  #url = signal(environment.apiTask);

  #setListTask = signal<ITask[] | null>(null);
  get getListTask(){
   return this.#setListTask.asReadonly();
  }
  public httpListTask$(): Observable<ITask[]>{
    return this._http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap(res => this.#setListTask.set(res))
    )
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId(){
    return this.#setTaskId.asReadonly();
  }
  public httpTaskId$(id: string): Observable<ITask>{
    return this._http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap(res => this.#setTaskId.set(res))
    )
  }
}
