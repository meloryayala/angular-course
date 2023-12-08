import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {

  public name = "Meli";
  public age = 26;
  public condition = this.age > 18 ? 'Adult' : 'Underage';
  public isDisabled = false;
  public srcValue = 'https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg';
  // public customStyle = this.age < 10 ? 'hotpink' : 'greenyellow';
  public valueX = 0;
  public valueY = 0;

  constructor() {
    setTimeout(() => {
      this.name = 'Melory';
    }, 1000)
  }

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onkeydown(event: Event) {
return console.log(event)
  }

  public onMouseEvent(event: MouseEvent) {
    this.valueX = event.clientX;
    this.valueY = event.clientY;
    return this.valueY && this.valueX;
  }

}
