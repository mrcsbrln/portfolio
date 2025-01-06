import { Directive, ElementRef, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements AfterViewInit {
  @Input() animationClass = 'animate-on-scroll';
  @Output() isVisible = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add(this.animationClass);
          this.isVisible.emit(true);
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }
}
