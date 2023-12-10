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
import {SignalsComponent} from "./components/signals/signals.component";
import {ParentComponent} from "./components/communication-components/parent/parent.component";
import {AngularPipesComponent} from "./components/pipes/angular-pipes/angular-pipes.component";
import {TemplateDrivenFormsComponent} from "./components/forms/template-driven-forms/template-driven-forms.component";
import {ReactiveFormsComponent} from "./components/forms/reactive-forms/reactive-forms.component";
import {ContentComponent} from "./components/content/content.component";

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
    SignalsComponent,
    ParentComponent,
    AngularPipesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ContentComponent
  ],
  template: `
      <!--  <router-outlet></router-outlet>-->
      <h1>Angular course</h1>
      <div class="theme-dark">

          <!--          <app-template-binding/>-->
          <!--          <app-template-variable/>-->
          <!--          <app-template-control-flow/>-->
          <!--          <app-template-deferrable-views/>-->
          <!--          <app-signals/>-->
          <!--          <app-parent/>-->
          <!--          <app-angular-pipes/>-->
          <!--          <app-template-driven-forms/>-->
          <!--          <app-reactive-forms/>-->
          <app-content>
            <header id="header">
              <p>my header</p>
            </header>
            <p text>Text</p>
            <p>Text 2</p>
            <footer class="footer">
              <p>my footer</p>
            </footer>
          </app-content>

      </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular course';
}
