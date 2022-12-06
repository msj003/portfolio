import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ThirtyfiveComponent } from './thirtyfive/thirtyfive.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { SimpleWebsiteComponentsModule } from 'simple-website-components'


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ThirtyfiveComponent,
    AboutMeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleWebsiteComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
