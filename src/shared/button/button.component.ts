import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sp-button',
  standalone: true,
  host: {'class': `block w-full rounded-full border	border-transparent bg-green-500
  px-3 	py-3 	font-bold 	text-black	transition-all	hover:opacity-75 
  disabled:cursor-not-allowed	disabled:opacity-50 `},
  imports: [CommonModule  ],
  templateUrl: './button.component.html',

})
export class Button {

}
