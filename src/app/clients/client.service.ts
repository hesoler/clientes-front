import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Client } from './client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly endPoint: string = 'http://localhost:8080/api/clientes'

  constructor (private readonly http: HttpClient) {}

  getClients (): Observable<Client[]> {
    return this.http.get<Client[]>(this.endPoint)
    // return of(clients)
  }
}
