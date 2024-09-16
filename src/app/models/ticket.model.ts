export interface Ticket {
    status: string;
    statusColor: string;
    assignee: string;
    coOwner: string;
    importance: string;
    customerName: string;
    invoiceId: string;
    subtasks: Subtask[];
  }
  
  export interface Subtask {
    name: string;
    completed: boolean;
  }
  