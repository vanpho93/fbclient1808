import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignInService } from './signin/signin.service';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';
import { StatusComponent } from './main/status/status.component';
import { FriendsComponent } from './friends/friends.component';

const routerConfig: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MainComponent,
    StatusComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [AuthGuard, SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
