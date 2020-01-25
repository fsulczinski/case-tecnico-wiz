import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketCheckoutComponent } from './components/ticket-checkout/ticket-checkout.component';

const routes: Routes = [
    { path: '', redirectTo: 'ticket-checkout', pathMatch: 'full' },
    { path: 'ticket-checkout', component: TicketCheckoutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
