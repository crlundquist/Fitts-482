import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FittsTestComponent } from './fitts-test/fitts-test.component';
import { FinishComponent } from './finish/finish.component';

const appRoutes: Routes = [
    { path: 'FittsTest', component: FittsTestComponent },
    { path: 'Finish', component: FinishComponent},
];

@NgModule({
  declarations: [
  AppComponent,
  FittsTestComponent,
  FinishComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
