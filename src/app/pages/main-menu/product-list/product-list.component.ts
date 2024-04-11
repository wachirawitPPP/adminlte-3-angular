import {Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '@services/api.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

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
      this.apiService.getAllData().subscribe((data) => {
        const productList = data;
        console.log(productList);
        this.productListFindUserId = productList.filter(
            (item) => item.userId === 1
        );
        console.log(this.productListFindUserId);
    });
    }

    onChangeStatus(data,status,id:number){
      
      console.log(data)

      const newData = {
        ...data,
        completed:true
      }
      
      if (data.completed == false) {
        // this.apiService.updateDataById(id,newData).subscribe(data=> {
        //   console.log(data);
        // })
        this.apiService.deleteDatabyId(id).subscribe(data => { 
          console.log(data);
          this.getData()
         });
        
      }

      
    }
}
