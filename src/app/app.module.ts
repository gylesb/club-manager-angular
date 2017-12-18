import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AdminComponent } from './admin/admin.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ViewUsersComponent,
    AdminComponent,
    EditMembersComponent,
    ListMembersComponent,
    MemberProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
