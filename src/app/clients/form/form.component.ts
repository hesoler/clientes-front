import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Client } from '../client'
import { ClientService } from './../client.service'
import { Router } from '@angular/router'

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
    this.clientService.create(this.client).subscribe(
      (response) => { this.router.navigate(['/clients']) }
    )
  }

  ngOnInit () { }
}
