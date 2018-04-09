import { Injectable } from '@angular/core';
import { IProduct } from '../components/product/product';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  private _productUrl = '../services/products.json';
 //   private _productUrl = 'api/products';
    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {

        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json());



         //   .do(data => console.log("All: " + JSON.stringify(data)))
         //   .catch(this.handleError);
    }



    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }






    private handleError(err: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
       
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }

}







/*
where is ProductService used?       23:32 04/04/2018
product-detail.component.ts(20):

product-list.component.ts(65):     
product-list.component.ts(68):        this._productService.getProducts()

product.service.ts(7)
app.shared.module.ts(38)
app.shared.module.ts(82)



*/