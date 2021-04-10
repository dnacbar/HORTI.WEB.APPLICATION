import { Subject } from 'rxjs';
import { Modal } from './../../model/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  public modalModel: Modal = new Modal();

  private subject$ = new Subject();
  constructor(private bsModalRef: BsModalRef) {
  }
  ngOnDestroy(): void {
    //this.subject$.next();
    //this.subject$.complete();
  }

  ngOnInit(): void {
    
    //timer(0, 1000).pipe(takeUntil(this.subject$))
    //  .subscribe(x => {
    //    if (x > 2)
    //      this.hideModal();
//
    //    this.modalModel.DsTitle = (x + 1).toString();
    //  });
  }

  hideModal(): void {
    this.bsModalRef.hide();
  }
}
