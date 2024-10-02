import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sp-input',
  standalone: true,
  host: {'class': `flex w-full `},
  imports: [CommonModule  ],
  templateUrl: './input.component.html',

})
export class InputComponent {
  @Input() type?: string = 'text'
  @Input() placeholder?: string = ''
  @Input() disabled?: boolean = false
}
