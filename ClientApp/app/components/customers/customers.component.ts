import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer, IOrder, IPagedResults } from '../shared/interfaces';
import { DataService } from '../../services/data.services';
import { DataFilterService } from '../../services/data-filter.service';



@Component({
    selector: 'customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {



    title: string;
    customers: ICustomer[] = [];
    filteredCustomers: ICustomer[] = [];

    totalRecords: number = 0;
    pageSize: number = 10;
    

    constructor(
        private router: Router,
        private dataService: DataService,
        private dataFilter: DataFilterService
    )    {    }

    
    getCustomers() {

        this.dataService.getCustomers()
            .subscribe((customers: ICustomer[]) => {
                this.customers = this.filteredCustomers = customers;
            },
                                                           /*4.7@4m42s*/

            (err: any) => console.log(err),
            () => console.log('john you just called getCustomers() to retrieve customers'));
    }

                                                                   /*      need to add the filter array as 4.7@7m16s     */

    ngOnInit() {
        this.title = 'Customers';
       //  this.getCustomersPage(1);
        this.getCustomers();
    }

    pageChanged(page: number) {
        this.getCustomersPage(page);
    }


    filterChanged(filterText: string) {
        if (filterText && this.customers) {
            let props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
            this.filteredCustomers = this.dataFilter.filter(this.customers, props, filterText);
        }
        else {
            this.filteredCustomers = this.customers;
        }
        console.log('changed filter box with ' + filterText);
    }





                                              // calls into the data service which calls into the server side
    getCustomersPage(page: number) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response: IPagedResults<ICustomer[]>) => {
                this.customers = this.filteredCustomers = response.results;
                if (response.results)
                { this.totalRecords = response.totalRecords; }
            },
            (err: any) => console.log(err),
            () => console.log('getCustomersPage() retrieved customers'));
    }




}
