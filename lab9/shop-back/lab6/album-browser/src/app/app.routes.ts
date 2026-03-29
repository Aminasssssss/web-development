import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then(m => m.AboutComponent)
  },
  {
    path: 'albums',
    loadComponent: () => import('./albums/albums').then(m => m.AlbumsComponent)
  },
  {
    path: 'albums/:id',
    loadComponent: () => import('./album-detail/album-detail').then(m => m.AlbumDetailComponent)
  },
  {
    path: 'albums/:id/photos',
    loadComponent: () => import('./album-photos/album-photos').then(m => m.AlbumPhotosComponent)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
