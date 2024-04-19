import { ComfirmModalComponent } from '@/modal/comfirm-modal/comfirm-modal.component';
import { ProductViewModalComponent } from '@/modal/product-view-modal/product-view-modal.component';
import {Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '@services/api.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DataService } from '@services/data.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @BlockUI() blockUI: NgBlockUI;
  tutorial: AngularFirestoreDocument<any>;
  testFirestore: any 

  name: string;
  color: any;
  age: any;
  

  productListFindUserId: any[]
    constructor(
      private apiService: ApiService,
      private modalService: NgbModal,
      private db: AngularFirestore,
      private dataService: DataService

    ) {}
    ngOnInit(): void {
      this.tutorial = this.db.collection('pertriiez').doc('qxI5HKi9SnmOMYzJ4pX7')
      this.getData()
      this.testFirestore=this.tutorial
      console.log(this.testFirestore)
      
      
      
      
       

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
      this.openConfirmModal()
      this.tutorial.set({ title: 'zkoder Tutorial'});
      console.log(this.tutorial)

      
    }
    openProductModal(){
      const modalRef = this.modalService.open(ProductViewModalComponent,{
        size: 'lg',
        centered:true
      })
      modalRef.componentInstance.title = 'Product';
      
    }
    openConfirmModal(){
      const modalRef = this.modalService.open(ComfirmModalComponent,{
        size: 'lg',
        centered:true
      })

      modalRef.componentInstance.title = 'Confirm'
      modalRef.componentInstance.description = 'Are you sure?'
      
    }
    // addRobot(name: string, color: string, age: string) {
    //   this.dataService.createRobot(name, color, age);
    // }
    
}
