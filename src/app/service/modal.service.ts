import { Modal } from './../model/modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private bsModalRef: BsModalRef;

  constructor(private BsModalService: BsModalService) { }

  public showModal(modalComponent: any, modalModel: Modal): void {
    this.bsModalRef = this.BsModalService.show(modalComponent);
    this.bsModalRef.content.modalModel = modalModel;
  }
}
