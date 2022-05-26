import { Injectable } from '@angular/core';
import { IProcess } from '../Classes/iprocess';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {


  constructor() { }
  contactPersonType_submitedBy:Array<any>= [
    { code: 1, value: 'מבוטח' },
    { code: 2, value: 'סוכן' },
    { code: 3, value: 'בן/בת זוג' },
  ];
        
  superClaimType:Array<any>= [
    { code: 1, value: "התביעה אושרה" },
    { code: 2, value: "התביעה נדחתה" },
    { code: 4, value: "טרם התקבלה החלטה" }
  ];
  
   claimCause:Array<any>= [
    { code: 1, value: "מחלה" },
    { code: 2, value:  "תאונה"},
    { code: 5, value: "תאונת עבודה" },
    { code: 6, value: "אחר" },
  ];
   injuryType:Array<any>= [
    { code: 1, value: "אגן" },
    { code: 2, value: "גפיים" },
    { code: 5, value: "ראש" },
    { code: 6, value: "גב" },
    { code: 7, value: "לב" },
    { code: 9, value: "נפש" },
  ];
  submitionMethod:Array<any>= [
    { code: 1, value: 'דואר' },
    { code: 2, value: 'דיגיטל' },
    { code: 3, value: 'פקס' },
  ];
  identityTypes:Array<any>= [
    { code: 1, value: 'ת.ז.' },
    { code: 2, value: 'דרכון' },
    { code: 3, value: 'מבוטח' },
    { code: 4, value: 'מפעל' }
  ];


  Process:IProcess ={
    superClaim: {
        superClaimNum: 500040204,
        superClaimStatus: {
            code: 1,
            value: "פתוחה"
        },
    	  superClaimType : {
            code : undefined,
            value : undefined
        },
	      eventDate: undefined,
        claimCause: {
            code : 2,
            value : "תאונה"
        },
        injuryType: {
            code : undefined,
            value : undefined
        },
	      submitedBy: 1,
	      submitionMethod: {
            code : undefined,
            value : undefined
        },
    },
    insured: {
        address: {
            cityName: "רעננה",
            streetName: "אחוזה"
        },
        identityType: 1,
        age: 30,
        lastName: "כהן",
        identity: 312536945,
        firstName: "אסף"
    },
    contactPersons: [{
        id: 1,
        deliveryFlag: true,
        type: {
            code: 2,
            value: "סוכן",
        },
        name: "ניקיטה ג'ין",
        phoneNumber: undefined,
        email: undefined,
        address: "הפרחים ירושלים",
    }]
}
}
