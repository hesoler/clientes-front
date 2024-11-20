import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Client } from './client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly endPoint: string = 'http://localhost:8080/api/clientes'

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor (private readonly http: HttpClient) { }

  getClients (): Observable<Client[]> {
    return this.http.get<Client[]>(this.endPoint)
    // return of(clients)
  }

  create (client: Client): Observable<Client> {
    return this.http.post<Client>(this.endPoint, client, { headers: this.httpHeaders })
  }

  getClient (id: number): Observable<Client> {
    return this.http.get<Client>(`${this.endPoint}/${id}`)
  }

  update (client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.endPoint}/${client.id}`, client, { headers: this.httpHeaders })
  }
}
