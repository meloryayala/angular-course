import {Component, Input, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  public getId = signal<string | null>(null)
  //New way v17 with Component Input binding
  @Input() set id(id: string) {
    console.log('Input: ',id)
    this.getId.set(id)
  }

  public paramId: string = '';
  ngOnInit() : void{
    //URl PARAMS
    //Recover with snapshot
    this.paramId =this.route.snapshot.params['id'];
    //Recover with observable
    this.route.params.subscribe(res => console.log('Subscribe: ', res['id']));

    //URL QUERY PARAMS
    //Recover with snapshot
    console.log(this.route.snapshot.queryParams['name']);
    console.log(this.route.snapshot.queryParamMap.get('name'));
    //recover with subscribe
    this.route.queryParams.subscribe((res) => console.log(res['age']));
    this.route.queryParamMap.subscribe((res) => console.log(res.get('age')));
    this.route.queryParamMap.subscribe({
      next: (next) => {
        console.log(next.get('age'));
      }
    })

    //ROUTER NAVIGATE
    setTimeout(() => this.router.navigate(['/about']), 3000);
  }
}
