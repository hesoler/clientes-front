import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { catchError, Observable, throwError } from 'rxjs'
import Swal from 'sweetalert2'
import { Client } from './client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly endPoint: string = 'http://localhost:8080/api/clientes'

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor (private readonly http: HttpClient, private router: Router) { }

  getClients (): Observable<Client[]> {
    return this.http.get<Client[]>(this.endPoint)
    // return of(clients)
  }

  create (client: Client): Observable<object> {
    return this.http.post<Client>(this.endPoint, client, { headers: this.httpHeaders }).pipe(
      catchError(response => {
        if (response.status === 400) {
          return throwError(() => response)
        }
        Swal.fire({
          title: 'Error',
          text: `${response.error.message}`,
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        })
        return throwError(() => response)
      })
    )
  }

  getClient (id: number): Observable<Client> {
    return this.http.get<Client>(`${this.endPoint}/${id}`).pipe(
      catchError(response => {
        this.router.navigate(['/clients'])
        Swal.fire({
          title: 'Error',
          text: `${response.error.message}`,
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        })
        return throwError(() => response)
      })
    )
  }

  update (client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.endPoint}/${client.id}`, client, { headers: this.httpHeaders }).pipe(
      catchError(response => {
        if (response.status === 400) {
          return throwError(() => response)
        }
        Swal.fire({
          title: 'Error',
          text: `${response.error.message}`,
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        })
        return throwError(() => response)
      })
    )
  }

  delete (id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.endPoint}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(response => {
        Swal.fire({
          title: 'Error',
          text: `${response.error.message}`,
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        })
        return throwError(() => response)
      })
    )
  }
}
