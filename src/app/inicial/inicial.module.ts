import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialDashComponent } from './inicial-dash/inicial-dash.component';
import { InicialRoutingModule } from './inicial-routing.module';



@NgModule({
  declarations: [
    InicialDashComponent
  ],
  imports: [
    CommonModule,
    InicialRoutingModule
  ]
})
export class InicialModule { }
