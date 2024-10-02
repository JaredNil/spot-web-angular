import { Component } from '@angular/core';
import { SidebarRoute } from '../model/sidebar.module';

@Component({
  selector: 'sp-sidebar-item',
  standalone: true,
  imports: [], 
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
  
  routes: SidebarRoute[] = [
    {
      icon: 'HiHome',
      label: 'Home',
      href: '/',
      isActive: (pathname: string) => pathname === '/',
    },
    {
      icon: 'BiSearch',
      label: 'Search',
      href: '/search',
      isActive: (pathname: string) => pathname === '/search',
    },
    {
      icon: 'TbFileUpload',
      label: 'Upload',
      href: '/upload',
      isActive: (pathname: string) => pathname === '/upload',
    },
  ];
  
}
