import { Component } from '@angular/core';
import { SidebarRoute } from '../model/sidebar.module';

@Component({
  selector: 'sp-sidebar',
  templateUrl: './sidebar.component.html',
  host: {'class': `hidden h-full min-w-80
  flex-col gap-y-2 bg-black p-2
  md:flex`},
})
export class SidebarComponent {
  
  routes: SidebarRoute[] = [
    {
      icon: 'home',
      label: 'Home',
      href: '/',
      isActive: (pathname: string) => pathname === '/',
    },
    {
      icon: 'search',
      label: 'Search',
      href: '/search',
      isActive: (pathname: string) => pathname === '/search',
    },
    {
      icon: 'upload',
      label: 'Upload',
      href: '/upload',
      isActive: (pathname: string) => pathname === '/upload',
    },
  ];
  
}
