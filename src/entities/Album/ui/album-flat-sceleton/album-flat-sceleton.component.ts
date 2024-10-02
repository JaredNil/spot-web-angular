import { Component } from '@angular/core';

@Component({
  selector: 'sp-album-flat-sceleton',
  templateUrl: './album-flat-sceleton.component.html',
  host: {'class': `group relative flex cursor-pointer items-center 
  gap-x-4 overflow-hidden rounded-md  bg-neutral-100/10 pr-4 transition  hover:bg-neutral-100/20`}
})
export class AlbumFlatSceletonComponent {

}
