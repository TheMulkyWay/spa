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

import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/project/projects.component';
import { NewProjectComponent } from './components/project/new-project.component';



import { CustomersComponent } from './components/customers/customers.component';
import { PaginationComponent} from './components/shared/pagination/pagination.component';
import { CapitalizePipe } from './components/shared/pipes/capitalize.pipe';
import { TrimPipe } from './components/shared/pipes/trim.pipe';
import { StarComponent } from './components/shared/starrating/star.component';

//import { Sorter } from './components/shared/sorter';
import { DataService } from './services/data.services';
import {DataFilterService } from './services/data-filter.service';

import { TodoService } from './services/todo.service';
import { GitProfileService } from './services/gitprofile.service';
import { ProductService } from './services/product.service';

import { ProjectsService } from './components/project/projects.service';
import { CustomersGridComponent } from './components/customers/customers-grid.component';
import { FilterTextboxComponent } from './components/shared/filter-textbox/filter-textbox.component';




@NgModule({
    declarations: [
        AppComponent, TodosComponent,
        ProfileComponent, ProductListComponent,
        ProductDetailComponent, ProductFilterPipe,
        ProjectComponent, ProjectsComponent,NewProjectComponent,

        CustomersComponent, FilterTextboxComponent, 
        CustomersGridComponent, PaginationComponent, StarComponent,
        CapitalizePipe, TrimPipe, //Sorter,
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
            { path: 'customers', component: CustomersComponent },
            { path: 'project', component: ProjectsComponent },
            { path: '**', redirectTo: 'home' }
        ]
        )
    ],
    providers: [TodoService, GitProfileService,
        ProductService,
        DataService,
        DataFilterService,
        ProjectsService /*Sorter*/]
})
export class AppModuleShared {
}

