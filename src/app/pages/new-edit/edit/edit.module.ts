import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelContainerModule } from '../../../components/panel-container/panel-container.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PanelContainerModule,
    NgxLoadingModule,
    RouterModule.forChild([
      { path: ':id', component: EditComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ]),
  ],
})
export class EditModule {}
