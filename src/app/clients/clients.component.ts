import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import Swal from 'sweetalert2'
import { Client } from './client'
import { ClientService } from './client.service'

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {
  clients!: Client[]
  private readonly clientService: ClientService

  constructor (clienteService: ClientService) {
    this.clientService = clienteService
  }

  delete (client: Client): void {
    Swal
      .fire({
        title: 'Are you sure?',
        text: `Client ${client.name} ${client.lastName} would be deleted!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.clientService.delete(client.id).subscribe(
            (response) => {
              this.clients = this.clients.filter(cl => cl.id !== client.id)

              Swal.fire({
                title: 'Deleted!',
                text: 'Client has been deleted successfully.',
                icon: 'success'
              })
            }
          )
        }
      })
  }

  ngOnInit () {
    this.clientService.getClients().subscribe(
      clients => { this.clients = clients }
    )
  }
}
