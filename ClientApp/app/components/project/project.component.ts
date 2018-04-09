import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IProject } from './project';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
    @Input() project: IProject;
    @Output() statusUpdated = new EventEmitter<string>();
    @Output() projectDeleted = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
    }

    onUpdateStatus(newStatus: string) {
        this.statusUpdated.emit(newStatus);
    }

    onDelete() {
        this.projectDeleted.emit();
    }
    


        getPrjStatusClass() {
        return {
            'label-success': this.project.status === 'active',
            'label-default': this.project.status === 'inactive',
            'label-danger': this.project.status === 'critical'

        }

    }

}
