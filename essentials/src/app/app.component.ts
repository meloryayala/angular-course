import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {TemplateBindingComponent} from "./components/template/template-binding/template-binding.component";
import {TemplateVariableComponent} from "./components/template/template-variable/template-variable.component";
import {
  TemplateControlFlowComponent
} from "./components/template/template-control-flow/template-control-flow.component";
import {
  TemplateDeferrableViewsComponent
} from "./components/template/template-deferrable-views/template-deferrable-views.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TemplateBindingComponent,
    TemplateVariableComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
  ],
  template: `
      <!--  <router-outlet></router-outlet>-->
      <h1>Angular course</h1>
      <div class="theme-dark">

          <!--          <app-template-binding/>-->
          <!--          <app-template-variable/>-->
          <!--          <app-template-control-flow/>-->
          <app-template-deferrable-views/>

      </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular course';
}
