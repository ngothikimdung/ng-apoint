import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResigterEventComponent } from './resigter-event/resigter-event.component';

const routes: Routes = [

    {
      path: 'resigter-event',
      component: ResigterEventComponent
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
