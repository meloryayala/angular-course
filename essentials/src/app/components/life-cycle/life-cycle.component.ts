import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {timer} from "rxjs";

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeCycleComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy {

  public myNumber = signal(0);
  @Input() set inputMyNumber(value: number) {
    this.myNumber.set(value)
  };
  public myText = signal('Meli');

  @ViewChild('content') public content!: ElementRef;
  @ContentChild('text') public text!: ElementRef;

  //RxJs on destroy
  //Example RxJs does not destroy completely if is not unsubscribed in older versions
  private destroy$ = timer(0, 1000)
    //Using pipe - takeUntilDestroy is used to destroy completely for v17+
    .pipe(takeUntilDestroyed())
    .subscribe({
    next: (next) => console.log('next', next),
    error: (error) => console.log('error', error),
    complete: () => console.log('complete'),
  })

  //Initializer
  //The constructor is initialized when the component is created
  //In most cases is used for dependency injection
  //Do not use for all little things, only when necessary
  constructor(private _fb: FormBuilder) {
  }

  //Changes detections
  //This method is called whenever an input value (`@Input`) of a component changes.
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('onChanges', changes);
    // if (changes['myNumber'].currentValue === 2) {
    //   console.log('was good')
    // }
  }

  //Component initialized
  //It is called only once after the component has been initialized.
  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  //Changes check
//It is called during each change detection cycle.
  ngDoCheck(): void {
    // console.log('doCheck')
  }

  //Nested content initialized
  //It is called after Angular projects the content in the component's view (inside the `<ng-content>` tags).
  ngAfterContentInit():void {
    // console.log('afterContentInit');
    // console.log(this.text.nativeElement.innerHTML);
  }

//Rendered component
//It is called after Angular initializes the component's views and child views.
  ngAfterViewInit(): void {
    // console.log('afterViewInit');
    // console.log(this.content.nativeElement.innerHTML);
    // console.log(this.content.nativeElement.innerHTML = 'Life cycle 2');
    // console.log(this.content.nativeElement.innerHTML = 'Life cycle 2');
  }

  //Content checked
  //It is called after each check of the designed content.
  ngAfterContentChecked(): void {
    // console.log('AfterContentChecked');
  }

  //View checked
  //It is called after each check of the component's view.
  ngAfterViewChecked(): void {
    // console.log('AfterViewChecked');
  }

  //Component destroys
  //It is called before a component is destroyed.
  ngOnDestroy(): void {
    // console.log('onDestroy');
    //used in older versions
    // this.destroy$.unsubscribe();
  }
}
