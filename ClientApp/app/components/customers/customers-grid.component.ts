import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import{TrimPipe} from '../shared/pipes/trim.pipe';
import { ICustomer } from '../shared/interfaces';
//import { IFacePic } from '../shared/interfaces';
import { Sorter } from '../shared/sorter';
import { TrackByService } from '../../services/trackby.service';

@Component({
    selector: 'customers-grid',
    templateUrl: './customers-grid.component.html',
    //When using OnPush detectors, then the framework will check an OnPush 
    //component when any of its input properties changes, when it fires 
    //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersGridComponent implements OnInit {


    @Input() customers: ICustomer[] = [];

    constructor(private sorter: Sorter, public trackby: TrackByService) { }

    ngOnInit() {

    }

    sort(prop: string) {
        this.sorter.sort(this.customers, prop);
    }

}
