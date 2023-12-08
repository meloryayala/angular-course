import {Component, signal} from '@angular/core';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  UpperCasePipe
} from "@angular/common";
import {delay, Observable, of} from "rxjs";
import {CustomStringPipe} from "../../../pipes/custom-string.pipe";

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, JsonPipe, AsyncPipe, CurrencyPipe, PercentPipe, DecimalPipe, CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
})
export class AngularPipesComponent {

  public date = signal(new Date());
  public name = signal('Melory');
  public lastName = signal('Ayala');
  public json = signal([{name: 'Meli'}]);
  public loadingNames$: Observable<String[]> = of([
    'Meli',
    'Meloca',
    'Mel',
    'Meloquita',
    'Melita'
  ]).pipe(delay(1000));

}
