import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideTreeComponent } from './slide-tree.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideTreeDirective } from './slide-tree.directive';

@NgModule({
  declarations: [SlideTreeComponent, SlideTreeDirective],
  exports: [SlideTreeComponent],
  imports: [CommonModule, NgbModule, NgbDropdownModule],
})
export class SlideTreeModule {}
