import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { WelcomeComponent } from './welcome/welcome.component'

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
