import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  @Output() public outputNameSignal = new EventEmitter();

  public sendOutputNameSignal() {
    return this.outputNameSignal.emit('Output signal has value');
  }

}
