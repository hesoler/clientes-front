import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { type Clients } from './client'
import { ClientService } from './client.service'

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {
  clientes!: Clients
  private clienteService: ClientService

  constructor (clienteService: ClientService) {
    this.clienteService = clienteService
  }

  ngOnInit () {
    this.clienteService.getClients().subscribe(
      clientes => { this.clientes = clientes }
    )
  }
}
