import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyRagistrationContainerComponent } from './pharmacy-ragistration-container/pharmacy-ragistration-container.component';
import { RagistrationFormComponent } from './ragistration-form.component';

const routes: Routes = [
  { path: '', component: RagistrationFormComponent ,
  
  children:[
   {
     path:'', redirectTo:'',pathMatch:'full'
   },
   {
     path:'pharmacy', component: PharmacyRagistrationContainerComponent
   }
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RagistrationFormRoutingModule { }
