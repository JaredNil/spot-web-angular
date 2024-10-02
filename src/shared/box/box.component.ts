import { Component } from '@angular/core';

@Component({
  selector: 'sp-box',
  template: '<ng-content />',
  host: {'class': `h-fit w-full rounded-lg bg-neutral-900`},
})
export class BoxComponent {
}
