import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'chart', loadChildren: () => import('./modules/chart/chart.module').then(x => x.ChartModule) },
  { path: 'city', loadChildren: () => import('./modules/city/city.module').then(x => x.CityModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(x => x.HomeModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(x => x.UserModule) },
  { path: 'error/:error', component: ErrorPageComponent },
  { path: 'error', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
