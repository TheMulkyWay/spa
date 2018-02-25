import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
// import { ProductFilterPipe } from './product-filter.pipe';
// import { StarComponent } from '../shared/star.component';
// import { ProductService } from '../../services/product.service';

import { Router } from '@angular/router';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
    //pipes: [ProductFilterPipe],
   // directives: [StarComponent]
})
export class ProductListComponent {
    pageTitle: string = 'Products List';


    // 3 recs
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2018",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
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
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2017",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
    ];


    imageWidth: number = 24;    imageMargin: number = 1;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

   // products: IProduct[];


    private router: Router;
                                            //shortcut 29m25s Daren May
    constructor(router: Router) {
        this.router = router;
    }

    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    //ngOnInit(): void {
    //    this._productService.getProducts()
    //        .subscribe(
    //        products => this.products = products,
    //        error => this.errorMessage = <any>error);
    //}

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    GotoDetail() {

       // alert("detail");
        this.router.navigate(["detail", "10"]);

    }


}