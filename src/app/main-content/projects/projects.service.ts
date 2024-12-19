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
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      gitHubUrl: 'https://github.com/KevinPerret/Join',
      projectUrl: '',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      stack: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/img/el-pollo-loco.png',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      gitHubUrl: 'https://github.com/mrcsbrln/el_pollo_loco',
      projectUrl: '',
    },

    {
      id: 3,
      title: 'DA Bubble',
      stack: ['Angular', 'Typescript', 'Firebase'],
      imageUrl: '/img/da-bubble.png',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      gitHubUrl: '',
      projectUrl: '',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
