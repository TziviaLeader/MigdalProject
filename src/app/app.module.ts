import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ClaimComponent } from './Components/claim/claim.component';
import { InformationInTheProcessComponent } from './Components/information-in-the-process/information-in-the-process.component';
import { AllContactsComponent } from './Components/all-contacts/all-contacts.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { PhonePipe } from './Pipes/phone.pipe';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    ClaimComponent,
    InformationInTheProcessComponent,
    AllContactsComponent,
    ContactsComponent,
    PhonePipe
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
