import { NgModule, TemplateRef } from "@angular/core";
import { ModalComponent } from "./ui/modal.component";
import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { Button } from "../../shared/button/button.component";
import { InputComponent } from "../../shared/input/input.component";
import { ModalService } from "./model/modal.service";
import { AuthModalComponent } from "./ui/authModal/auth-modal.component";

@NgModule({
    declarations: [ModalComponent, AuthModalComponent],
    imports: [NgTemplateOutlet, CommonModule, Button, InputComponent],
    exports: [
        ModalComponent
      ],
    providers: [ModalComponent, ModalService, AuthModalComponent],
    bootstrap: [ModalComponent]
})
export class ModalModule {}