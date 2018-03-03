﻿import { Component, OnInit } from '@angular/core';
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
    dataService: DataService;

    ngOnInit() {
        this.title = 'Customers';
       // this.getCustomersPage(1);
    }

    pageChanged(page: number) {
        this.getCustomersPage(page);
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