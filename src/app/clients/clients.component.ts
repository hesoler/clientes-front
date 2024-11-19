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
  clientes!: Client[]
  private readonly clienteService: ClientService

  constructor (clienteService: ClientService) {
    this.clienteService = clienteService
  }

  ngOnInit () {
    this.clienteService.getClients().subscribe(
      clientes => { this.clientes = clientes }
    )
  }
}
