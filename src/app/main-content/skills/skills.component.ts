import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { TranslatePipe } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ButtonComponent, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  ngOnInit() {
    AOS.init();
  }
}
