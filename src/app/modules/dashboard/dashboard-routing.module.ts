import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponentComponent } from './pages/help-component/help-component.component';
import { MedicalStaffComponent } from './pages/medical-staff/medical-staff.component';
import { TownHousesComponent } from './pages/town-houses/town-houses.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '' ,
    children: [
      // angular interpreta las ruta de arriba pa abajo, como los midelware de tu back
      { path: 'dashboard', component: DashboardComponent },
      { path: 'medical-staff', component: MedicalStaffComponent },
      { path: 'help-comp', component: HelpComponentComponent },
      { path: 'town-houses', component: TownHousesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', redirectTo: 'dashboard' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }