import {Component, signal} from '@angular/core';
import {InputComponent} from "../input/input.component";
import {OutputComponent} from "../output/output.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  public name = signal('Fabi');
  public outputNameSignal = signal('Output without value');
}
