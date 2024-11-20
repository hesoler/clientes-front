import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ClientService } from './client.service'
import { Client } from './client'
import { RouterLink } from '@angular/router'

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

  ngOnInit () {
    this.clientService.getClients().subscribe(
      clients => { this.clients = clients }
    )
  }
}
