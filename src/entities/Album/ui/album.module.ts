import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { IconBuilderComponent } from '../../../shared/icon-builder/ui/icon-builder.component';
import { AlbumNormalComponent } from './album-normal/album-normal.component';
import { AlbumFlatComponent } from './album-flat/album-flat.component';
import { AlbumComponent } from './album.component';
import { AlbumFlatSceletonComponent } from './album-flat-sceleton/album-flat-sceleton.component';
import { AlbumNormalSceletonComponent } from './album-normal-sceleton/album-normal-sceleton.component';



@NgModule({
  declarations: [AlbumComponent, AlbumFlatComponent, AlbumFlatSceletonComponent, AlbumNormalComponent, AlbumNormalSceletonComponent],
  exports: [
    AlbumComponent, 
  ],
  imports: [CommonModule, IconBuilderComponent],
  bootstrap: [AlbumComponent]

})
export class AlbumModule { }
