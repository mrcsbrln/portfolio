import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('portraitDiv') portraitDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('aboutMeWrapper') aboutMeWrapper!: ElementRef<HTMLDivElement>;

  isPortraitVisible = false;
  isAboutMeVisible = false;

  ngAfterViewInit(): void {
    // Observer für das Porträt-Div
    const portraitObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isPortraitVisible = true;
        }
      },
      { threshold: 0.1 } // Element sichtbar bei 10%
    );
    portraitObserver.observe(this.portraitDiv.nativeElement);

    // Observer für das "About Me"-Wrapper
    const aboutMeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isAboutMeVisible = true;
        }
      },
      { threshold: 0.1 } // Element sichtbar bei 10%
    );
    aboutMeObserver.observe(this.aboutMeWrapper.nativeElement);
  }
}
