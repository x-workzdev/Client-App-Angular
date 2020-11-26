import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TicketDetails } from '../classes/ticket-details';
import { Observable, Observer, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  sendticketDetails(ticketDetails : TicketDetails) : Observable<any> {
    console.log(ticketDetails);
    return this.httpClient.post(environment.apiUrl+'registration',ticketDetails,{observe:'response', responseType: 'json'});
  }
}
