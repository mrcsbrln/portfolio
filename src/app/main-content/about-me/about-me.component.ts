import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
declare const AOS: any;

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
