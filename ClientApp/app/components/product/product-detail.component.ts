import { Component, OnInit } from '@angular/core';
import { IProduct} from './product'
import { ActivatedRoute,   Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { StarComponent } from '../shared/starrating/star.component';
import { RouterModule } from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent
    implements OnInit
{ 
    pageTitle: string = 'Product Detail';
    product: IProduct;


    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService
    ) {
        console.log(this._route.snapshot.params['id']);

   
    }

  public  onBack(): void {

        this._router.navigate(['/product']);
    }


    //ngOnInit(): void {
    //    let id = +this._route.snapshot.params['id'];
    //    this.pageTitle += `:${id}`;
    //}


    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product
           
        );
         
    }





    //ngOnInit() {
    //    const param = this._route.snapshot.paramMap.get('id');
    //    if (param) {
    //        const id = +param;
    //        this.getProduct(id);
    //    }
    //}

    ngOnInit() {
        const param = this._route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getProduct(id);
            this.pageTitle += ` :${id}`;
        }
    }










}
