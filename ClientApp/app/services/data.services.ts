import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder, IState, IPagedResults } from '../components/shared/interfaces';

@Injectable()
export class DataService {

    //If you're on Angular 4.3 or higher you can use HttpClientModule. See data.service.ts.httpclient


    baseUrl: string = '../services/CustomersDan.json';
 // baseUrl: string = 'api/customers';
    //baseUrl: string = '/api/v2/customers';

    baseStatesUrl: string = '/api/states'

            constructor(private http: Http) {

            }

                        getCustomers(): Observable<ICustomer[]> {
                            return this.http.get(this.baseUrl)
                                .map((res: Response) => {
                                    let customers = res.json();                 //4.6@8m30s
                                    this.calculateCustomersOrderTotal(customers);
                                    return customers;
                                })
                                .catch(this.handleError);
                        }


    // ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓


                        calculateCustomersOrderTotal(customers: ICustomer[]) {
                            for (let customer of customers) {
                                if (customer && customer.orders) {
                                    let total = 0;
                                    for (let order of customer.orders) {
                                        total += (order.price * order.quantity);
                                    }
                                    customer.orderTotal = total;
                                }
                            }
                        }


            getCustomer(id: string): Observable<ICustomer> {
                return this.http.get(this.baseUrl + '/' + id)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
            }


            /*  I don't need to add what type this or any other returns but it helps in the IDE */
            getStates(): Observable<IState[]> {
                return this.http.get(this.baseStatesUrl)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
            }



                // ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                // ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                // ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓


















            getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
                return this.http.get(`${this.baseUrl}/page/${page}/${pageSize}`) // 8.3@2m56
                    .map((res: Response) => {
                        const totalRecords = +res.headers.get('x-inlinecount');
                        let customers = res.json();
                        this.calculateCustomersOrderTotal(customers);
                        return {
                            results: customers,
                            totalRecords: totalRecords
                        };
                    })
                    .catch(this.handleError);
            }

            //getCustomer(id: string): Observable<ICustomer> {
            //    return this.http.get(this.baseUrl + '/' + id)
            //        .map((res: Response) => res.json())
            //        .catch(this.handleError);
            //}

            insertCustomer(customer: ICustomer): Observable<ICustomer> {
                return this.http.post(this.baseUrl, customer)
                    .map((res: Response) => {
                        const data = res.json();
                        console.log('insertCustomer status: ' + data.status);
                        return data.customer;
                    })
                    .catch(this.handleError);
            }

            updateCustomer(customer: ICustomer): Observable<ICustomer> {
                return this.http.put(this.baseUrl + '/' + customer.id, customer)
                    .map((res: Response) => {
                        const data = res.json();
                        console.log('updateCustomer status: ' + data.status);
                        return data.customer;
                    })
                    .catch(this.handleError);
            }

            deleteCustomer(id: string): Observable<boolean> {
                return this.http.delete(this.baseUrl + '/' + id)
                    .map((res: Response) => res.json().status)
                    .catch(this.handleError);
            }

            //Not used but could be called to pass "options" (3rd parameter) to 
            //appropriate POST/PUT/DELETE calls made with http
            getRequestOptions() {
                const csrfToken = ''; //would retrieve from cookie or from page
                const options = new RequestOptions({
                    headers: new Headers({ 'x-xsrf-token': csrfToken })
                });
                return options;
            }
            /*  I don't need to add what type this or any other returns but it helps in the IDE */
            //getStates(): Observable<IState[]> { 
            //    return this.http.get(this.baseStatesUrl)
            //        .map((res: Response) => res.json())
            //        .catch(this.handleError);
            //}







            // ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    
            /*
            calculateCustomersOrderTotal(customers: ICustomer[]) {
                for (let customer of customers) {
                    if (customer && customer.orders) {
                        let total = 0;
                        for (let order of customer.orders) {
                            total += (order.price * order.quantity);
                        }
                        customer.orderTotal = total;
                    }
                }
            }
            */


            private handleError(error: any) {
                console.error('server error:', error);
                if (error instanceof Response) {

                  //  let errMessage = '';
                    let errMessage : any;       // changed to any to avoid type string not assignable to null typecript error
                    try {

                        {
                            if (errMessage !== null)

                                errMessage = error.json().error;
                        }

                    } catch (err) {

                        if (errMessage !== null)
                        { errMessage = error.statusText; }
                
                    }
                    return Observable.throw(errMessage);
                    // Use the following instead if using lite-server
                    //return Observable.throw(err.text() || 'backend server error');
                }
                return Observable.throw(error || 'ASP.NET Core server error');
            }

        }
