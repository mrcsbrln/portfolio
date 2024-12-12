import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
