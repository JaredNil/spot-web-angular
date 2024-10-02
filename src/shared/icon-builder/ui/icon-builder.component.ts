import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-builder',
  standalone: true,
  imports: [NgIf],
  templateUrl: './icon-builder.component.html',
})
export class IconBuilderComponent {
  @Input() iconTitle: string = 'home'
  
}
