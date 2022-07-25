import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './pages/custumers/address/address.component';
import { SearchComponent } from './shared/components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, AddressComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
