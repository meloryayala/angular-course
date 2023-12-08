import {Component, Input, signal} from '@angular/core';

function toUppercase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  //Input without signal
  @Input({
    required: true,
    transform: toUppercase
  }) public inputName = 'without data';

  //Input with signal
  public name = signal('without data');
  @Input({
    required: true,
    transform: toUppercase
  }) set inputNameSignal(value: string) {
    this.name.set(value)
  }
}
