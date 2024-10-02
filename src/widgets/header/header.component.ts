import { Component } from '@angular/core';
import { IconBuilder } from '../../shared/icon-builder';
import { Button } from '../../shared/button/button.component';

@Component({
  selector: 'sp-header',
  standalone: true,
  imports: [IconBuilder, Button],
  templateUrl: './header.component.html',
  host: {
    class: `absolute left-0 top-2 z-50 flex h-fit 
    w-full rounded-lg bg-gradient-to-b 
    from-emerald-800 p-6`
  }
})
export class HeaderComponent { }