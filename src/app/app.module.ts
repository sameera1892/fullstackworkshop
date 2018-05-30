import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { SetpasswordComponent } from './auth/setpassword/setpassword.component';
import { UsersdisplayComponent } from './dashboard/users/usersdisplay/usersdisplay.component';
import { ProfileuserComponent } from './dashboard/profile/profileuser/profileuser.component';
import { ProfileeditComponent } from './dashboard/profile/profileedit/profileedit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SetpasswordComponent,
    UsersdisplayComponent,
    ProfileuserComponent,
    ProfileeditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
