import { Component } from '@angular/core';

//import { RouteParams, Router } from '@angular/router';

import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';

    constructor(private _route: ActivatedRoute) {
        console.log(this._route.snapshot.params['id']);

   
    }

    onBack(): void {
       // this._router.navigate(['Products']);
    }


    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += ':${id}';
    }

}
