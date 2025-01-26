import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { AllTrailsplusComponent } from './components/all-trailsplus/all-trailsplus.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { GearComponent } from './components/gear/gear.component';
import { CartsComponent } from './components/gear/carts/carts.component';
import { FavTrailsComponent } from './components/fav-trails/fav-trails.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExploreComponent,
    HomeComponent,
    HelpComponent,
    AllTrailsplusComponent,
    LoginComponent,
    CreateAccountComponent,
    GearComponent,
    CartsComponent,
    FavTrailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
