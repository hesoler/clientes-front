import { Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component'
import { DirectivaComponent } from './directiva/directiva.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

export const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '**', title: '404 Not Found Clientes App', component: PageNotFoundComponent }
]
