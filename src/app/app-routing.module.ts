import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HelpComponent } from './components/help/help.component';
import { AllTrailsplusComponent } from './components/all-trailsplus/all-trailsplus.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { GearComponent } from './components/gear/gear.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Explore',
    component: ExploreComponent,
  },
  {
    path: 'Help',
    component: HelpComponent,
  },
  {
    path: 'Try AllTrails+',
    component: AllTrailsplusComponent,
  },
  {
    path: 'Create Account',
    component: CreateAccountComponent,
  },
  {
    path: 'Log In',
    component: LoginComponent,
  },
  {
    path: 'Gear',
    component: GearComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
