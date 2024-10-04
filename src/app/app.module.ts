import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "../widgets/header/header.component";
import { SidebarModule } from "../widgets/sidebar/model/sidebar.module";
import { BoxModule } from "../shared/box/box.module";
import { IconBuilderComponent } from "../shared/icon-builder/ui/icon-builder.component";
import { RouterOutlet } from "@angular/router";
import { MainPageModule } from "../pages/main-page/main-page.module";
import { AppRoutingModule } from "./app-routing.module";
import { AlbumModule } from "../entities/Album/ui/album.module";
import { SearchPageModule } from "../pages/search-page/search-page.module";
import { UploadPageModule } from "../pages/upload-page/upload-page.module";
import { JsonReaderService } from "../feature/json-reader/json-reader.service";
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from "../feature/modal/modal.module";

@NgModule({
    declarations: [AppComponent,],
    imports: [BrowserModule, RouterOutlet, AppRoutingModule, HttpClientModule,   // common ng
        MainPageModule, SearchPageModule, UploadPageModule, // pages
        AlbumModule, // entites
        ModalModule, // feature
        SidebarModule, // widgets

        HeaderComponent, // big components
        
        BoxModule, IconBuilderComponent, // shared
    ],
    providers: [JsonReaderService],
    bootstrap: [AppComponent]
})
export class AppModule {}