import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './component/login/login.component';


import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',canActivate:[AuthGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'component',canActivate:[AuthGuard],
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
{path:'login',component:LoginComponent},
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch:'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(Approutes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
