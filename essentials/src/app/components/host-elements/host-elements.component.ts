import {Component, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  // Host elements on v17+
  host: {
    role: 'button',
    '[attr.class]': 'class',
    '(document: keypress)': 'updateHostListener(event)',
    '(click)': 'updateClick()',
  }
})
export class HostElementsComponent {

  //Host elements older versions is with decorators
  // @HostBinding('attr.class')
  public class = 'fullstack';

  // @HostListener('document:keypress', ['$event'])
  public updateHostListener(event: Event) {
    console.log(event)
  }

  // @HostListener('click', ['$event'])
  public updateClick() {
    alert('Melory Ayala');
  }

  protected readonly event = event;
}
