import {Component, Input, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }

  public getId = signal<string | null>(null)
  //New way v17 with Component Input binding
  @Input() set id(id: string) {
    console.log('Input: ',id)
    this.getId.set(id)
  }

  public paramId: string = '';
  ngOnInit() : void{
    //Recover from the url params
    this.paramId =this.route.snapshot.params['id'];

    //Recover with observable
    this.route.params.subscribe(res => console.log('Subscribe: ', res['id']));
  }
}
