import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RagistrationFormRoutingModule } from './ragistration-form-routing.module';
import { RagistrationFormComponent } from './ragistration-form.component';
import { PharmacyRagistrationContainerComponent } from './pharmacy-ragistration-container/pharmacy-ragistration-container.component';
import { PharmacyRagistrationPresentationComponent } from './pharmacy-ragistration-container/pharmacy-ragistration-presentation/pharmacy-ragistration-presentation.component';



@NgModule({
  declarations:[
    RagistrationFormComponent,
    PharmacyRagistrationContainerComponent,
   PharmacyRagistrationPresentationComponent
  ],
  imports: [
    CommonModule,
    RagistrationFormRoutingModule
  ]
})
export class RagistrationFormModule { }
