import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/Services/claim.service';

@Component({
  selector: 'app-information-in-the-process',
  templateUrl: './information-in-the-process.component.html',
  styleUrls: ['./information-in-the-process.component.scss']
})
export class InformationInTheProcessComponent implements OnInit {


  ifclaimCauseChoose:boolean=true;
  existSomeType:boolean=true;
  constructor(public ser:ClaimService) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  checkContact(value:any){
    debugger
    if(this.ser.Process.contactPersons.find(c=>c.type.code==value) )
      this.existSomeType=true;
    else
      this.existSomeType=false;
  }

}
