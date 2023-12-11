import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  public name = "New component";
  constructor(private _apiService: ApiService) {
  }

  //observable subscribe and signal after changes
  ngOnInit(): void {
    console.log(this._apiService.name());

    this._apiService.name$.subscribe({
      next: (next) => console.log('next', next),
      error: (error) => console.log('error', error),
      complete: () => console.log('complete')
    });

    this._apiService.name$.next('Melory Ayala $$')

    this._apiService.name.set('Melory Ayala 2');

    setTimeout(() => {
      console.log(this._apiService.name());
    }, 2000)
  }
}
