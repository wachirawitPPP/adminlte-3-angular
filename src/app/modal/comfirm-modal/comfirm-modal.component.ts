import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comfirm-modal',
  templateUrl: './comfirm-modal.component.html',
  styleUrl: './comfirm-modal.component.scss'
})
export class ComfirmModalComponent {
  @Input() title:string
  @Input() description:string
  @Output() closeModalEvent = new EventEmitter(); // Output event to close the modal


  constructor(
    private modalService: NgbModal
  ){}

  closeModal(){
    this.closeModalEvent.emit()
    this.modalService.dismissAll()
  }

  confirm(){
    this.modalService.dismissAll()
    Swal.fire('Success','','success')
  }
  
}
