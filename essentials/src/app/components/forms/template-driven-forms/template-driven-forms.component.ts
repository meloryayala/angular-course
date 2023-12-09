import {Component, signal} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {CurrencyPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe, CurrencyPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {

  public listFood = signal<Array<{ food: string, price: string }>>([
    {food: 'Salad', price: '10'},
    {food: 'Chicken', price: '20'},
    {food: 'Pasta', price: '13'}
  ]);

  public submitForm(form: NgForm) {
    console.log(form.valid);
    if (form.valid) {
      console.log(form.value);
    }
  }
}
