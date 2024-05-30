import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { DicsPipe} from '../pipes/dics.pipe';
import data from '../../assets/json/products-list.json';
@Component({
  selector: 'app-single-pro',
  standalone: true,
  imports: [DicsPipe],
  templateUrl: './single-pro.component.html',
  styleUrl: './single-pro.component.css'
})
export class SingleProComponent {
  // @Input() id?: number;
  // allproduct: any = data;
  // pro: any;
  // ngOnInit() {
  //   this.pro = this.allproduct.find((ele: any) => {
  //     return ele.id == this.id;
  //   }
  //   );
  // }
  @Input() id?: number;
  allproduct: Array<Product>= data;
  pro : Product ={};
  ngOnInit() {
     this.pro= this.allproduct.find((ele:Product) =>{
      return ele.id == this.id;
    }
    )!;
  }

}
