import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { Client } from '../client'
import { ClientService } from './../client.service'
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  client: Client = new Client()
  title: string = 'Create client'

  constructor (
    private readonly clientService: ClientService,
    private readonly router: Router
  ) {

  }

  public create (): void {
    this.clientService.create(this.client)
      .subscribe(
        (client) => {
          this.router.navigate(['/clients'])
          Swal.fire({
            title: 'New client',
            text: `Client ${client.name} created successfully!`,
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })
        }
      )
  }

  ngOnInit () { }
}
