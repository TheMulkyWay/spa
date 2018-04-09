import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import {ProductService } from '../../services/product.service';
import { StarComponent } from '../shared/starrating/star.component';
import { Router } from '@angular/router';
import { showStateTrigger } from '../project/animations';


@Component({
  
    selector: 'pm-products',
   
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    //pipes: [ProductFilterPipe],
   // directives: [StarComponent]
})
export class ProductListComponent {
    pageTitle: string = 'Sample Products List';
    imageWidth: number = 28; imageMargin: number = 1;
    showImage: boolean = false;
    listFilter: string ='';
    errorMessage: string;
    starRating: number = 2;

        // 3 recs
        Hproducts: IProduct[] = [

        {
            "productId": 1,
            "productName": "Viva",
            "productCode": "YPK-851",
            "releaseDate": "2016-07-02 15:35:52",
            "description": "Progressive multi-state alliance",
            "price": 44.29,
            "starRating": 1,
            "imageUrl": "http://www.john.com/pic"
        }, {
            "productId": 2,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2018",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2018",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ];
    

  products: IProduct[];
                                            //shortcut 29m25s Daren May
    constructor( private _productService: ProductService) {    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error);
    }



    toggleImage(): void {   this.showImage = !this.showImage;   }

    onRatingClicked(message: string): void {   this.pageTitle = 'Product List: ' + message;  }

    GotoDetail() {

       // alert("detail");
        // this.router.navigate(["detail", "10"]);

    }



}