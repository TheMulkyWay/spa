import { Component, OnInit } from '@angular/core';
import { IProject } from './project';
import { ProjectsService } from './projects.service';
import { markedTrigger } from './animations'


@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    animations: [
        markedTrigger
    ]
})
export class ProjectsComponent implements OnInit {
    projects: IProject[];
    markedPrjIndex = 0;
    progress = 'progressing';
    createNew = false;

    constructor(private prjService: ProjectsService) { }

    ngOnInit() {
        this.prjService.loadProjects()
            .subscribe(
            (prj: IProject[]) => {
                this.progress = 'finished';
                this.projects = prj;
            }
            );
    }

    onStatusUpdated(newStatus: string, id: number) {
        this.projects[id].status = newStatus;
    }

    onProjectDeleted(index: number) {
        this.projects.splice(index, 1);
    }

    onProjectCreated(project: IProject) {
        this.createNew = false;
        this.projects.unshift(project);
    }
}
