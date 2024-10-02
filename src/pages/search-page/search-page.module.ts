import { NgModule } from "@angular/core";
import { SearchPageComponent } from "./search-page.component";
import { AlbumModule } from "../../entities/Album/ui/album.module";
import { CommonModule, NgClass } from "@angular/common";
import { Button } from "../../shared/button/button.component";
import { InputComponent } from "../../shared/input/input.component";

@NgModule({
    declarations: [SearchPageComponent],
    imports: [AlbumModule, CommonModule, NgClass, Button, InputComponent],
    providers: [],
    bootstrap: [SearchPageComponent]
})
export class SearchPageModule {}