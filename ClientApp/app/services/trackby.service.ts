import { Injectable } from '@angular/core';

import { ICustomer } from '../components/shared/interfaces';

@Injectable()
export class TrackByService {

    customer(index: number, customer: ICustomer) {
        return customer.id;
    }

}