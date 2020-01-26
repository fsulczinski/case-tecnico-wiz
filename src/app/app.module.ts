import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketCheckoutComponent } from './components/ticket-checkout/ticket-checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketCheckoutComponent,
    FooterComponent,
    CartComponent,
    CartListComponent,
    CustomSelectComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
