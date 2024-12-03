import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import Swal from 'sweetalert2'
import { Client } from '../client'
import { ClientService } from './../client.service'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit {
  client: Client = new Client()
  buttonSubmitLabel: string = 'Create'

  constructor (
    private readonly clientService: ClientService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {

  }

  loadClient (): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id']

      if (id) {
        this.buttonSubmitLabel = 'Edit'
        this.clientService.getClient(id).subscribe((client) => {
          this.client = client
        })
      }
    })
  }

  create (): void {
    this.clientService.create(this.client)
      .subscribe((response: any) => {
        this.router.navigate(['/clients'])
        Swal.fire({
          title: 'New client',
          text: `Client ${response.client.name} created successfully!`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
      )
  }

  update (): void {
    this.clientService.update(this.client)
      .subscribe((response: any) => {
        console.log(response)
        this.router.navigate(['/clients'])
        Swal.fire({
          title: 'Edit client',
          text: `Client ${response.client.name} updated successfully!`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }

  handleSubmit ():void {
    if (this.client.id) this.update()
    else this.create()
  }

  ngOnInit () {
    this.loadClient()
  }
}
