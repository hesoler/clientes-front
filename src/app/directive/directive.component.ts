import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html'
})
export class DirectiveComponent {
  listCourse: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP']
  enable: boolean = true

  constructor () {}
}
