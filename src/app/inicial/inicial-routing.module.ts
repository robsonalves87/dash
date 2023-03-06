import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialDashComponent } from './inicial-dash/inicial-dash.component';

const routes: Routes = [
  {
    path: 'inicial',
    component: InicialDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicialRoutingModule { }
