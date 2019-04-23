import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [DashboardComponent,
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    MessagesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
