import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'connemara',
    loadChildren: () => import('./connemara/connemara.module').then( m => m.ConnemaraPageModule)
  },
  {
    path: 'galway-city',
    loadChildren: () => import('./galway-city/galway-city.module').then( m => m.GalwayCityPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'geoloaction',
    loadChildren: () => import('./geoloaction/geoloaction.module').then( m => m.GeoloactionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
