// import { ModuleWithProviders } from '@angular/core';

 
export interface I2do {
    id?: string;
    text: string;
    isCompleted: boolean;
}



export interface ICustomer {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state?: IState;
    stateId?: number;
    zip: number;
    gender: string;
    orderCount?: number;
    orders?: IOrder[];
    orderTotal?: number;
}


export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
    orderTotal?: number;
}


export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}
