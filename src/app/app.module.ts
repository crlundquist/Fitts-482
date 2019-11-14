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
import { FittsTest2Component } from './fitts-test2/fitts-test2.component';
import { FittsTestrealComponent } from './fitts-testreal/fitts-testreal.component';
import { FittsTestrunComponent } from './fitts-testrun/fitts-testrun.component';


const appRoutes: Routes = [
    { path: 'FittsTest', component: FittsTestComponent },
    { path: 'Finish', component: FinishComponent},
    { path: 'FittsTest2', component: FittsTest2Component },
    { path: 'FittsTestRun', component: FittsTestrunComponent },
    { path: 'FittsTestReal', component: FittsTestrealComponent },
];

@NgModule({
  declarations: [
  AppComponent,
  FittsTestComponent,
  FittsTest2Component,
  FittsTestrealComponent,
  FittsTestrunComponent,
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
