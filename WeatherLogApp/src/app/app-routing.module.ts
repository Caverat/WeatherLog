import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { SensorDetailComponent } from './components/sensor-detail/sensor-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'/sensors', pathMatch: 'full' },
  { path: 'sensors', component: SensorListComponent },
  { path: 'sensor/:id', component: SensorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
