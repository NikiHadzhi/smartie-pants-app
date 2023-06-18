import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { WaterfallComponent } from './Components/waterfall/waterfall.component';
import { InstanceComponent } from './Components/instance/instance.component';
import { HomeComponent } from './Components/home/home.component';
import { AddInstancesComponent } from './Components/add-instances/add-instances.component';
import { HighestRevenueComponent } from './Components/highest-revenue/highest-revenue.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'waterfalls', component: WaterfallComponent },
  { path: 'instances', component: InstanceComponent },
  { path: 'addInstances', component: AddInstancesComponent },
  { path: 'highestRevenue', component: HighestRevenueComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    WaterfallComponent,
    InstanceComponent,
    HomeComponent,
    AddInstancesComponent,
    HighestRevenueComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoute)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
