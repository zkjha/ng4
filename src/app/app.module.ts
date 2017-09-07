import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {LoggerService} from './logger.service';
import { LoginModule } from './pages/login/login.module';
import { AMapComponent } from './pages/a-map/a-map.component';
import { HomeComponent } from './pages/home/home.component';

const appRoute: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'map',
  component: AMapComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AMapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
