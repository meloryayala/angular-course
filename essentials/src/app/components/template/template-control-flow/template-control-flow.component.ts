import { Component } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {AsyncPipe, CommonModule, NgForOf, NgIf, NgSwitch} from "@angular/common";
import {NewComponent} from "../../new/new.component";

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, NewComponent, NgForOf, NgIf, NgSwitch, CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {

  public isTrue = true;
  public items: Array<{ name: string}> = [{name: 'Meli'}];
  public switchCondition = 'C';
  public loadingNames$: Observable<String[]> = of([
    'Meli',
    'Meloca',
    'Mel',
    'Meloquita',
    'Melita'
  ]).pipe(delay(3000));

  public trackByFn(index: number ) {
    return index;
  }

  public addNewName(name: string) {
    this.items.push({name: name})
  }
}
