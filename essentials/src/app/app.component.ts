import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {TemplateBindingComponent} from "./components/template/template-binding/template-binding.component";
import {TemplateVariableComponent} from "./components/template/template-variable/template-variable.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TemplateBindingComponent,
    TemplateVariableComponent,
  ],
  template: `
      <!--  <router-outlet></router-outlet>-->
      <h1>Angular course</h1>
      <div class="theme-dark">

          <!--          <app-template-binding/>-->
          <app-template-variable/>


      </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1-intro';
}
