import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth-guard/auth.guard';
import { DashboardComponent } from './core/core/component/dashboard/dashboard.component';
import { RagistrationFormComponent } from './core/core/component/Medify/ragistration-form.component';
import { CoreModule } from './core/core/core.module';
import { SideBarComponent } from './core/side-bar/side-bar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'customers', },
  { path: 'customers', loadChildren: () => import('./feature/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'fileupload', loadChildren: () => import('./modules/fileupload/fileupload.module').then(m => m.FileuploadModule) },
  { path: 'RagistrationForm', component: RagistrationFormComponent},
  { path: 'side', component: SideBarComponent},
  { path: 'ragistartionForm', loadChildren: () => import('./modules/ragistration-form/ragistration-form.module').then(m => m.RagistrationFormModule) },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard] },
  { path: 'post', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
