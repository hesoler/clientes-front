import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { type Clients } from './client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly endPoint: string = 'http://localhost:8080/api/clientes'

  constructor (private readonly http: HttpClient) {}

  getClients (): Observable<Clients> {
    return this.http.get<Clients>(this.endPoint)
    // return of(clients)
  }
}
