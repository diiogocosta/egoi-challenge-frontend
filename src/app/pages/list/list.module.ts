import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { SlideTreeModule } from 'src/app/components/slide-tree/slide-tree.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    NgxLoadingModule,
    RouterModule.forChild([{ path: '', component: ListComponent }]),
    SlideTreeModule,
  ],
})
export class ListModule {}
