import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { clickedStateTrigger, markedTrigger, listStateTrigger , showStateTrigger, itemStateTrigger} from '../project/animations';


@Component({
    selector: 'home',
    templateUrl: './casa.component.html',
    styles: ['./home.component.css'],
    animations: [clickedStateTrigger, listStateTrigger, markedTrigger, showStateTrigger, itemStateTrigger ]
     })
export class HomeComponent {
    clickinfo: string = 'default';
    paragraphClick: string = 'default';
    numberEntered: number;

    testResults: any[]=[];

    onAddElement() {
        this.testResults.unshift(Math.random());

    }




    onClickSimple() {
        this.clickinfo = 'clicked';
        setTimeout(() => { this.clickinfo = 'default'; }, 3000);
    }
}
