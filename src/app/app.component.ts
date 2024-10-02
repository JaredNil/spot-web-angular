import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './styles/app.component.reset.scss', 
    './styles/app.component.global.scss', 
    './styles/app.component.scss', 
    './styles/fragment/loaders.scss', 
    './styles/fragment/playlist.scss', 
    './styles/fragment/sceleton.scss'
  ],
})
export class AppComponent {
  title = 'sp-ng-project';
}
