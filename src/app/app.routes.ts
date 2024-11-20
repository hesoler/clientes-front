import { Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component'
import { FormComponent } from './clients/form/form.component'
import { DirectiveComponent } from './directive/directive.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

export const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'directives', component: DirectiveComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/form', component: FormComponent },
  { path: 'clients/form/:id', component: FormComponent },
  { path: '**', title: '404 Not Found Clientes App', component: PageNotFoundComponent }
]
