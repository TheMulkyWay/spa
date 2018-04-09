import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import{TrimPipe} from '../shared/pipes/trim.pipe';
import { ICustomer } from '../shared/interfaces';
//import { IFacePic } from '../shared/interfaces';
//import { Sorter } from '../shared/sorter';
import { TrackByService } from '../../services/trackby.service';

@Component({
    selector: 'customers-grid',
    templateUrl: './customers-grid.component.html',
    
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersGridComponent implements OnInit {


    @Input() customers: ICustomer[] = [];


    constructor() { }

    ngOnInit(
        //private sorter: Sorter, public trackby: TrackByService
    ) {
       
    }

    //sort(prop: string) {
    //    this.sorter.sort(this.customers, prop);
    //}

}
