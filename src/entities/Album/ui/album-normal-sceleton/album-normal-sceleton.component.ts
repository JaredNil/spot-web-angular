import { Component } from '@angular/core';

@Component({
  selector: 'sp-album-normal-sceleton',
  templateUrl: './album-normal-sceleton.component.html',
  host: {'class': `group relative flex cursor-pointer flex-col 
  items-center justify-center gap-x-4 overflow-hidden 
  rounded-md  bg-neutral-400/5 px-3 py-2 transition-all
  hover:bg-neutral-400/10`}
})
export class AlbumNormalSceletonComponent {

}
