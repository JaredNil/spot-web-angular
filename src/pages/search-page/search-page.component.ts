import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-search-page',
  templateUrl: './search-page.component.html',
  host: {class: 'h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900 px-6 pt-[80px]'}
})
export class SearchPageComponent implements OnInit {
  isLoadingData = true
  searching = [];
  loadingPlaceholder = new Array(10).fill('').map((_, i) => String(i))

  ngOnInit(): void {
      // setTimeout(()=> this.isLoadingData = false, 1000)
  }
}
