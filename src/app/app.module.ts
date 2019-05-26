import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/nav/logo/logo.component';
import { NavComponent } from './header/nav/nav.component';
import { SearchComponent } from './header/nav/search/search.component';
import { MessagesComponent } from './header/nav/messages/messages.component';
import { NotificationsComponent } from './header/nav/notifications/notifications.component';
import { ProfilePicComponent } from './shared/profile-pic/profile-pic.component';
import { VerifyComponent } from './header/nav/verify/verify.component';
import { ProfileOptionsComponent } from './header/nav/profile-options/profile-options.component';
import { LeftColumnComponent } from './side-column/side-column.component';
import { CenterComponent } from './center/center.component';
import { ProfileDataComponent } from './side-column/profile-data/profile-data.component';
import { FooterComponent } from './footer/footer.component';
import { DashItemsComponent } from './center/dash-items/dash-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    SearchComponent,
    MessagesComponent,
    NotificationsComponent,
    ProfilePicComponent,
    VerifyComponent,
    ProfileOptionsComponent,
    LeftColumnComponent,
    CenterComponent,
    ProfileDataComponent,
    FooterComponent,
    DashItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
