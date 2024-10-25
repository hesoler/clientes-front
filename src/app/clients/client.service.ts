import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { type Clients } from './client'
import { clients } from './clients.json'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  getClients (): Observable<Clients> {
    return of(clients)
  }
}
