import { NgModule } from "@angular/core";
import { SidebarComponent } from "../ui/sidebar.component";
import { BoxModule } from "../../../shared/box/box.module";
import { IconBuilderComponent } from "../../../shared/icon-builder/ui/icon-builder.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from '@angular/router';

export interface SidebarRoute {
    icon: string
    label: string
    href: string
    isActive: (pathname: string) => boolean,
}

@NgModule({
    declarations: [SidebarComponent],
    imports: [BoxModule, IconBuilderComponent, CommonModule,RouterLink],
    providers: [],
    bootstrap: [SidebarComponent],
    exports: [SidebarComponent]
})
export class SidebarModule {}


