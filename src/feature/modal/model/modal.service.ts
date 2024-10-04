import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ModalService {
    private actionModal: BehaviorSubject<string> = new BehaviorSubject('null');
    value$: Observable<string>  = this.actionModal.asObservable();
  
    setActionModal(newValue: string) {
      console.log('newActionModal' + newValue)
      this.actionModal.next(newValue);
    }
}
 