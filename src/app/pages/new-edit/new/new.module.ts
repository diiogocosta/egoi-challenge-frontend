import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewComponent } from './new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelContainerModule } from '../../../components/panel-container/panel-container.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PanelContainerModule,
    NgxLoadingModule,
    RouterModule.forChild([{ path: '', component: NewComponent }]),
  ],
})
export class NewModule {}
