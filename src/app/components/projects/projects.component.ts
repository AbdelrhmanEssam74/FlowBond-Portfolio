import { Component } from '@angular/core';
import {ProjectItemsComponent} from '../project-items/project-items.component';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectItemsComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
