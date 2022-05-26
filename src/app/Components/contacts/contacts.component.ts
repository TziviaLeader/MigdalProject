import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/Services/claim.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  showAddContact:boolean=false
  constructor(public ser:ClaimService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    
  }
}
