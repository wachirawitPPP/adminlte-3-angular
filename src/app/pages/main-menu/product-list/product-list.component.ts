import { ProductViewModalComponent } from '@/modal/product-view-modal/product-view-modal.component';
import {Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '@services/api.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @BlockUI() blockUI: NgBlockUI;

  productListFindUserId: any[]
    constructor(
      private apiService: ApiService,
      private modalService: NgbModal

    ) {}
    ngOnInit(): void {
      this.getData()
       

        this.apiService.getDataById(6).subscribe((data) => {
            const getDataById = data;
            console.log(getDataById);
        });
    }

    getData(){
      this.blockUI.start();
      this.apiService.getAllData().subscribe((data) => {
        const productList = data;
        console.log(productList);
        this.productListFindUserId = productList.filter(
            (item) => item.userId === 1
        );
        this.blockUI.stop()
        console.log(this.productListFindUserId);
    });
    }

    onChangeStatus(data,status,id:number){
      
      // console.log(data)

      // const newData = {
      //   ...data,
      //   completed:true
      // }
      
      // if (data.completed == false) {
      //   this.apiService.updateDataById(id,newData).subscribe(data=> {
      //     console.log(data);
      //   })
      //   // this.apiService.deleteDatabyId(id).subscribe(data => { 
      //   //   console.log(data);
      //   //   this.getData()
      //   //  });
        
      // }
      this.openProductModal()

      
    }
    openProductModal(){
      const modalRef = this.modalService.open(ProductViewModalComponent,{
        size: 'lg',
        centered:true
      })
      
    }
}
