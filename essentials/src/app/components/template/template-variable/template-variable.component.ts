import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NewComponent} from "../../new/new.component";

@Component({
  selector: 'app-template-variable',
  standalone: true,
  imports: [
    NewComponent
  ],
  templateUrl: './template-variable.component.html',
  styleUrl: './template-variable.component.scss'
})
export class TemplateVariableComponent implements AfterViewInit {

  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('title4') public title4!: ElementRef;

  @ViewChild(NewComponent) public childComponent!: NewComponent;

  ngAfterViewInit() {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.title4.nativeElement.innerHTML);
    // console.log(this.childComponent.name);
  }

}
