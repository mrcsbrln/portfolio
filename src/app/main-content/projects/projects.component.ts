import { Component } from '@angular/core';
import { OverlayComponent } from "../overlay/overlay.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'Join',
      stack: 'Angular | Typescript | HTML | CSS | Firebase',
      imageUrl: '/img/join.png',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      stack: 'HTML | CSS | JavaScript',
      imageUrl: '/img/el-pollo-loco.png',
    },
    {
      id: 3,
      title: 'DA Bubble',
      stack: 'Angular | Typescript | Firebase',
      imageUrl: '/img/da-bubble.png',
    }
  ];
}
