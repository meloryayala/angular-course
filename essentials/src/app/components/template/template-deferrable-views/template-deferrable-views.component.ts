import { Component } from '@angular/core';
import {NewComponent} from "../../new/new.component";
import {delay, Observable, of} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
    imports: [
        NewComponent,
      CommonModule
    ],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {
  public isTrue =  false;

  public loadingNames$: Observable<String[]> = of([
    'Meli',
    'Meloca',
    'Mel',
    'Meloquita',
    'Melita'
  ]).pipe(delay(3000));
}
