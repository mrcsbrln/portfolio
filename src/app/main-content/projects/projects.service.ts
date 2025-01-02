import { Injectable } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      stack: ['Angular', 'Typescript', 'HTML', 'CSS', 'Firebase'],
      imageUrl: '/img/join.png',
      description: '',
      gitHubUrl: 'https://github.com/KevinPerret/Join',
      projectUrl: '',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      stack: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/img/el-pollo-loco.png',
      description: '',
      gitHubUrl: 'https://github.com/mrcsbrln/el_pollo_loco',
      projectUrl: '',
    },

    {
      id: 3,
      title: 'DA Bubble',
      stack: ['Angular', 'Typescript', 'Firebase'],
      imageUrl: '/img/da-bubble.png',
      description: '',
      gitHubUrl: '',
      projectUrl: '',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
