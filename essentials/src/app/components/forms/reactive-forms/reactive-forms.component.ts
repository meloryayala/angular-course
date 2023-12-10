import {Component, inject} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {JsonPipe} from "@angular/common";

function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUppercase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);

    if (hasUppercase && hasNumber) {
      return null;
    }
    return {invalidText: true};
  };
}

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  //Dependency injection without constructor.
  #fb = inject(FormBuilder);

  // Dependency injection with constructor.
  // constructor(private _fb: FormBuilder) {
  // }

  // Verbose Code without dependency injection of FormBuilder
  // public profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   myStacks: new FormGroup({
  //     front: new FormControl('Angular'),
  //     back: new FormControl('C#')
  //   }),
  //   myFavoriteFoods: new FormArray([])
  // });
  //
  // update() {
  //   this.profileForm.patchValue({
  //     name: 'Maria',
  //   })
  // };

  public profileForm = this.#fb.group({
    name: ['Melory',
      [Validators.minLength(3),
        Validators.maxLength(6),
        Validators.required,
        textValidator()
      ]],
    myStacks: this.#fb.group({
      front: ['Angular', Validators.required],
      back: ['C#', Validators.required]
    }),
    myFavoriteFoods: this.#fb.array([['Salad']])
  });

  update() {
    this.profileForm.patchValue({
      name: 'Maria',
    })
  };

  public addMyFavoriteFoods(newFood: string) {
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);

    myFavoriteFoods.push(addNewFood);
  }

  public submit() {
    console.log(this.profileForm.valid);
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}

