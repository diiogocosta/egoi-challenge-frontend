import { Directive, Renderer2, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[slideManager]',
  exportAs: 'slideManager',
})
export class SlideTreeDirective implements OnDestroy {
  private treeObserver: MutationObserver;
  private treeContainer: HTMLElement;
  constructor(treeContainerEl: ElementRef) {
    this.treeContainer = treeContainerEl.nativeElement;
    const config = { attributes: false, childList: true, subtree: false };
    const callback = () => {
      this.calculateScroll(
        this.treeContainer.scrollWidth - this.treeContainer.offsetWidth
      );
    };

    this.treeObserver = new MutationObserver(callback);
    this.treeObserver.observe(this.treeContainer, config);
  }

  calculateScroll(scrollTo) {
    this.treeContainer.scrollTo({
      left: scrollTo,
      behavior: 'smooth',
    });
  }

  slideRight() {
    this.calculateScroll(this.treeContainer.scrollLeft + 400);
  }

  slideLeft() {
    this.calculateScroll(this.treeContainer.scrollLeft - 400);
  }

  ngOnDestroy() {
    this.treeObserver.disconnect();
  }
}
