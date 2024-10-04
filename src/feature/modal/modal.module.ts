import { NgModule, TemplateRef } from "@angular/core";
import { ModalComponent } from "./ui/modal.component";
import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { Button } from "../../shared/button/button.component";
import { InputComponent } from "../../shared/input/input.component";
import { ModalService } from "./model/modal.service";

@NgModule({
    declarations: [ModalComponent],
    imports: [NgTemplateOutlet, CommonModule, Button, InputComponent],
    exports: [
        ModalComponent
      ],
    providers: [ModalComponent, ModalService],
    bootstrap: [ModalComponent]
})
export class ModalModule {}