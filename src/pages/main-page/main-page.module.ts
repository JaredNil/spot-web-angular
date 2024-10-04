import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { AlbumModule } from "../../entities/Album/ui/album.module";
import { CommonModule, NgClass } from "@angular/common";
import { Button } from "../../shared/button/button.component";

@NgModule({
    declarations: [MainPageComponent],
    imports: [AlbumModule, CommonModule, NgClass, Button],
    providers: [],
    bootstrap: [MainPageComponent]
})
export class MainPageModule {}