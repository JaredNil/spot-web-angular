import { Component, Input } from '@angular/core';
import { Album } from '../model/types/album';

@Component({
  selector: 'sp-album',
  templateUrl: './album.component.html',
})
export class AlbumComponent {
  @Input() album: Album = {
    id: 0,
    user_id: 0,
    author: 'Default Author',
    imagePath: './assets/img/liked-songs.png',
    title: 'Default Title Plailist'
  }
  @Input() isLoading: boolean = true
  @Input() flat: boolean = false
}
