import { Component, OnInit } from '@angular/core';
import { Album, AlbumsCollection } from '../../entities/Album/model/types/album';
import { JsonReaderService } from '../../feature/json-reader/json-reader.service';

@Component({
  selector: 'sp-main-page',
  templateUrl: './main-page.component.html',
  host: {class: 'h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900 px-6 pt-[80px]'}
})
export class MainPageComponent implements OnInit {

  constructor(private jsonReaderService: JsonReaderService){}

  isLoadingData = true
  commonAlbumsCollection: AlbumsCollection = {
    title: 'Общие плейлисты',
    flat: false,
    albums: []
  }

  ngOnInit(): void {
      setTimeout(()=> this.isLoadingData = false, 1000)


      this.jsonReaderService.getCommonAlbums().subscribe(res => {
        if (res.albums) this.commonAlbumsCollection.albums = res.albums
      })
  }
}
