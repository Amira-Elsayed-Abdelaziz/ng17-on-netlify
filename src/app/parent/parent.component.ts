import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import allusers from '../../assets/json/users.json';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  users: any = allusers;
  clicked: boolean = false;
  catchmepls(id: any) {
    alert(id);
  }
  sendvalue(search: string) {
    this.clicked = true;
    this.users = this.users.filter(function (ele: any) {
      console.log(ele.email.includes(search));
      return ele.email.includes(search);
    }
    )
  }
  resetit() {
    this.clicked = false;
    this.users = allusers;
  }

}
