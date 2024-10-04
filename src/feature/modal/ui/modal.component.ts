import {  AfterViewInit, ChangeDetectionStrategy, Component,  HostBinding,  TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '../model/modal.service';

@Component({
  selector: 'sp-modal',
  templateUrl: './modal.component.html',
  host: {'class': `pointer-events-none fixed inset-0 z-50
  w-full transition duration-150 pointer-events-auto z-50
  animate opacity-100`,},
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements AfterViewInit {

  constructor(private modalService: ModalService){ }

  // Переменная для вставки контейнера шаблона модального окна
  modalOutlet:TemplateRef<any> | null = null

  // Предикат текущего состояния модального окна (в будущем связать с сервисом)
  isOpenModal = false
  isLoadingData = false

  // Привязка класса отображения модалки
  @HostBinding('class.hidden') get isHidden() { return !this.isOpenModal }
  
  // Все входящие в данный модуль шаблоны модальных окон
  @ViewChild('authTemplate', {read: TemplateRef}) authTemplate!: TemplateRef<any> | null;
  @ViewChild('loginTemplate', {read: TemplateRef}) loginTemplate!: TemplateRef<any> | null;
  
  // Объект в который захардкожены ссылки на TemplateRef'ы всех ui-ев модалок
  modalStorage?: Record<string, TemplateRef<any> | null> 

  ngAfterViewInit() {
   
    // Запись модалок в объект для хранения
    this.modalStorage = {
      'auth': this.authTemplate,
      'login': this.loginTemplate
    }

    // Подписка на триггер клика из любой части приложения, получаемые данные - string с неймингом ключа объекта
    // Переписать TS чтобы подхватывал возможные пути
    this.modalService.value$.subscribe(actionModal => {
      this.isOpenModal = (actionModal === 'null') ? false : true

      if (this.modalStorage && this.modalStorage[actionModal]) {
            this.modalOutlet = this.modalStorage[actionModal]
          }
    });
  }
}
