import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/:id/:name', component: UsersComponent},
  {path: 'servers', component: ServersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
