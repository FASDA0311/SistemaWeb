import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalSoporteComponent } from './mantenimientos/personal-soporte/personal-soporte.component';


const routes: Routes = [

  {
    path : "1",
    component : PersonalSoporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
