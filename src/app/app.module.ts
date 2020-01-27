import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketCheckoutComponent } from './components/ticket-checkout/ticket-checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrMaskerModule } from 'br-mask';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TicketCheckoutComponent,
        FooterComponent,
        CartComponent,
        CustomSelectComponent,
        MoviesListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrMaskerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
