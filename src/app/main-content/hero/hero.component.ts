import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { MarqueeComponent } from '../../shared/marquee/marquee.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
