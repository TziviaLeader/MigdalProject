import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/Services/claim.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss']
})
export class AllContactsComponent implements OnInit {

  constructor(public ser:ClaimService) { }

  ngOnInit(): void {
  }

  addInsured(){
    // this.ser.Process.contactPersons.add({
    //   id: 0,
    //   deliveryFlag: false,
    //   type: {
    //       code: undefined,
    //       value: undefined,
    //   },
    //   name: "",
    //   phoneNumber: undefined,
    //   email: undefined,
    //   address: undefined,
    // })
  }

  resetAll(){
    this.ser.Process.contactPersons=[{
      id: 0,
      deliveryFlag: false,
      type: {
          code: undefined,
          value: undefined,
      },
      name: "",
      phoneNumber: undefined,
      email: undefined,
      address: undefined,
    }];
  }

  resetContact(){

  }

}
