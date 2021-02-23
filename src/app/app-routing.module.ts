import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'chart', loadChildren: () => import('./modules/chart/chart.module').then(x => x.ChartModule) },
  { path: 'city', loadChildren: () => import('./modules/city/city.module').then(x => x.CityModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(x => x.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
