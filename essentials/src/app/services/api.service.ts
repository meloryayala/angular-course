import {Injectable, signal} from '@angular/core';
import {BehaviorSubject, catchError, Observable, shareReplay, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
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

  #setTaskList = signal<ITask[] | null>(null);
  get getTaskList(){
   return this.#setTaskList.asReadonly();
  }
  public httpTaskList$(): Observable<ITask[]>{
    this.#setTaskList.set(null);
    return this._http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap(res => this.#setTaskList.set(res))
    )
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId(){
    return this.#setTaskId.asReadonly();
  }

  #setTaskIdError = signal<ITask | null>(null);
  get getTaskIdError(){
    return this.#setTaskIdError.asReadonly();
  }
  public httpTaskId$(id: string): Observable<ITask>{
    this.#setTaskId.set(null);
    this.#setTaskIdError.set(null);
    return this._http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap(res => this.#setTaskId.set(res)),
      catchError((error: HttpErrorResponse) => {
        this.#setTaskIdError.set(error.error.message)
        return throwError(() => error);
      })
    );
  }

  public httpTaskCreate$(title: string): Observable<ITask>{
    return this._http.post<ITask>(this.#url(), { title }).pipe(shareReplay());
  }

  public httpTaskUpdate$(id: string,title: string): Observable<ITask>{
    return this._http.patch<ITask>(`${this.#url()}/${id}`, { title })
      .pipe(shareReplay());
  }

  public httpTaskDelete$(id: string): Observable<void>{
    return this._http.delete<void>(`${this.#url()}/${id}`, { })
      .pipe(shareReplay());
  }
}
