import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ticketSubject = new BehaviorSubject<Ticket>({
    status: 'Unpaid',
    statusColor: 'yellow',
    assignee: 'Brian Griffin',
    coOwner: 'Peter Griffin',
    importance: 'Very urgent',
    customerName: '',
    invoiceId: '19823190',
    subtasks: [
      { name: 'Send invoice to collections agency', completed: false },
      { name: 'Write an email to them to follow-up', completed: false },
      { name: 'Send paper mail to account', completed: false }
    ]
  });

  ticket$ = this.ticketSubject.asObservable();

  updateTicket(updatedTicket: Ticket) {
    this.ticketSubject.next(updatedTicket);
  }
}
