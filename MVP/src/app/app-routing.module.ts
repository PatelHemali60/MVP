import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'customers', },
  { path: 'customers', loadChildren: () => import('./feature/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'fileupload', loadChildren: () => import('./modules/fileupload/fileupload.module').then(m => m.FileuploadModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
