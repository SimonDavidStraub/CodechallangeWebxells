import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { BillingComponent } from './billing/billing.component';
import { MessagesComponent } from './messages/messages.component';
import { DriveComponent } from './drive/drive.component';
import { RemindersComponent } from './reminders/reminders.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'drive', component: DriveComponent},
  {path: 'reminders', component: RemindersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
