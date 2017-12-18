import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {  AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
    },
    {
      path: 'edit-members',
      component: EditMembersComponent
    },
    {
    path: 'list-members',
    component: ListMembersComponent
    },
    {
      path: 'member-profile',
      component: MemberProfileComponent
    },
    {
    path: 'view-users',
    component: ViewUsersComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
