import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodosComponent } from './components/todo/todos.component';
import { ProfileComponent } from './components/gitprofile/profile.component';
import { ProductListComponent}  from './components/product/product-list.component'
import { ProductDetailComponent } from './components/product/product-detail.component'
import { ProductFilterPipe } from './components/product/product-filter.pipe';
import { CustomersComponent } from './components/customers/customers.component';
import {PaginationComponent} from './components/shared/pagination/pagination.component';
import {CapitalizePipe } from './components/shared/pipes/capitalize.pipe';
import {  TrimPipe } from './components/shared/pipes/trim.pipe';


import { TodoService } from './services/todo.service';
import {GitProfileService } from './services/gitprofile.service';
import { ProductService } from './services/product.service';

import { FilterTextboxComponent } from './components/shared/filter-textbox/filter-textbox.component';
import {CustomersGridComponent } from './components/customers/customers-grid.component';


@NgModule({
    declarations: [
        AppComponent, TodosComponent,
        ProfileComponent, ProductListComponent,
        ProductDetailComponent, ProductFilterPipe,
        CustomersComponent, FilterTextboxComponent,
        CustomersGridComponent, PaginationComponent,
        CapitalizePipe, TrimPipe,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'todo', component: TodosComponent },
            { path: 'git', component: ProfileComponent },
            { path: 'product', component: ProductListComponent },
            { path: 'product/:id', component: ProductDetailComponent },
            { path: 'customer', component: CustomersComponent},
            { path: '**', redirectTo: 'home' }
        ]
        )
    ],
    providers: [TodoService, GitProfileService, ProductService]
})
export class AppModuleShared {
}

