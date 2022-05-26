import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/Services/claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  constructor(public ser:ClaimService) { }

  ngOnInit(): void {
  }

}
