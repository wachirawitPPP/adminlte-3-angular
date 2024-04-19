import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-view-modal',
  templateUrl: './product-view-modal.component.html',
  styleUrl: './product-view-modal.component.scss'
})
export class ProductViewModalComponent {
  @Input() title:string
  @Input() product: any; // Input property to receive product details
  @Output() closeModalEvent = new EventEmitter(); // Output event to close the modal

  constructor(private modalService: NgbModal){}

  closeModal() {
    this.closeModalEvent.emit(); 
    this.modalService.dismissAll()
  }
}
