import { Component, Input } from '@angular/core';
import { Album } from '../../model/types/album';

@Component({
  selector: 'sp-album-flat',
  templateUrl: './album-flat.component.html',
  host: {'class': `group relative flex cursor-pointer 
  items-center gap-x-4 overflow-hidden rounded-md  
  bg-neutral-100/10 pr-4 transition  hover:bg-neutral-100/20`}
})
export class AlbumFlatComponent {
  
  @Input() album: Album = {
    id: 0,
    user_id: 0,
    author: 'Default Author',
    imagePath: './assets/img/liked-songs.png',
    title: 'Default Title Plailist'
  }
}
