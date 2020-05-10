import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./pages/new-edit/new/new.module').then((m) => m.NewModule),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./pages/new-edit/edit/edit.module').then((m) => m.EditModule),
  },

  { path: '**', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
