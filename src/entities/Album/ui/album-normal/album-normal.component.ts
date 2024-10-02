import { Component, Input } from '@angular/core';
import { Album } from '../../model/types/album';

@Component({
  selector: 'sp-album-normal',
  templateUrl: './album-normal.component.html',
  host: {'class': `group relative flex cursor-pointer flex-col 
  items-center justify-center gap-x-4 overflow-hidden 
  rounded-md  bg-neutral-400/5 px-3 py-2 transition-all
  hover:bg-neutral-400/10`}
})
export class AlbumNormalComponent {
  
  @Input() album: Album = {
    id: 0,
    user_id: 0,
    author: 'Default Author',
    imagePath: './assets/img/liked-songs.png',
    title: 'Default Title Plailist'
  }
}
