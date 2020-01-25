import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketCheckoutComponent } from './components/ticket-checkout/ticket-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketCheckoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
