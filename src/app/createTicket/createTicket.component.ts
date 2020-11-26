import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketDetails } from '../classes/ticket-details';
import { TicketService } from '../services/ticket.service';
import { Observable, Observer, of, observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './createTicket.component.html',
  styleUrls: ['./createTicket.component.scss']
})
export class TicketComponent implements OnInit {

  private ticketDetails = new TicketDetails();

  constructor(private ticketService : TicketService, private router : Router) { }

  ngOnInit() {
  }

  ticketForm = new FormGroup({
    companyName: new FormControl('' , Validators.required),
    model: new FormControl('' , Validators.required),
    serialNo: new FormControl('', Validators.required),
    mcType : new FormControl('' , Validators.required),
    problem : new FormControl('' , Validators.required),
  });

Ticket(TicketInformation)
  {
      this.ticketDetails.companyName = this.CompanyName.value;
      this.ticketDetails.model = this.Model.value;
      this.ticketDetails.serialNo = this.SerialNo.value;
      this.ticketDetails.mcType = this.McType.value;
      this.ticketDetails.problem = this.Problem.value;

      this.ticketService.sendticketDetails(this.ticketDetails).subscribe(
        response => {
          var records = JSON.stringify(response)     
          console.log("Response ="+records);
         
          var statusCode = response.body.statusCode;
          console.log('Response Code ='+statusCode);

          if(statusCode==201){
           alert(response.body.message);
           this.router.navigate(['/clients', response]);
           }

           else if (statusCode == 200) {
           alert(response.body.message);
           this.router.navigate(['/clients', response]);
           }
          else
          {
           alert(response.body.message);
           this.router.navigate(['/signup']);
          }
         error =>((error: any) => {
           console.log("Error in authentication");
           if (error.status === 500) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 400) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 409) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 406) {
               return Observable.throw(new Error(error.status));
              }
            });
          }
        );
    }

  get Model(){
    return this.ticketForm.get('model');
  }
  
  get SerialNo(){
    return this.ticketForm.get('serialNo');
  }
  
  get CompanyName(){
    return this.ticketForm.get('companyName');
  }

  get Problem(){
    return this.ticketForm.get('problem');
  }

  get McType(){
    return this.ticketForm.get('mcType');
  }
}