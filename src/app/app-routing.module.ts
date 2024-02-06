import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnetableComponent } from './component/onetable/onetable.component';
import { AlltableComponent } from './component/alltable/alltable.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { IpServiceService } from './service/ip-service.service';
const routes: Routes = [
  { path: 'onetable', component: OnetableComponent },
  { path: 'alltable', component: AlltableComponent },
  { path: 'accueil', component: AccueilComponent },
 { path: 'ip', component: IpServiceService},
 
  { path: '', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
