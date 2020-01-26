import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketCheckoutComponent } from './components/ticket-checkout/ticket-checkout.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'movies-list', pathMatch: 'full' },
    { path: 'ticket-checkout/:id', component: TicketCheckoutComponent },
    { path: 'movies-list', component: MoviesListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
