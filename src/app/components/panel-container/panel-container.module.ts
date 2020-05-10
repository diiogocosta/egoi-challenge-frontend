import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelContainerComponent } from './panel-container.component';

@NgModule({
  declarations: [PanelContainerComponent],
  exports: [PanelContainerComponent],
  imports: [CommonModule],
})
export class PanelContainerModule {}
