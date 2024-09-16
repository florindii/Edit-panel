import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { SubtaskListComponent } from '../subtask-list/subtask-list.component';
import { InlineEditComponent } from '../inline-edit/inline-edit.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket.model';
@Component({
  selector: 'app-task-edit',
  standalone:true,
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
  imports:[CommonModule, ReactiveFormsModule,SubtaskListComponent, InlineEditComponent]
})
export class TaskEditComponent implements OnInit {
  taskForm!: FormGroup;
  ticket!: Ticket;
  
  @ViewChild('newSubtaskInput', { static: false }) newSubtaskInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private ticketService: TicketService) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      status: this.fb.control({ value: '', disabled: true }, [Validators.required]), // Read-only
      assignee: this.fb.control('', [Validators.required]),
      coOwner: this.fb.control('', [Validators.required]),
      importance: this.fb.control('', [Validators.required]),
      customerName: this.fb.control(''),
      invoiceId: this.fb.control('', [Validators.required]),
      subtasks: this.fb.array([]) // Manage subtasks as a FormArray
    });
       // Subscribe to ticket changes
       this.ticketService.ticket$.subscribe(ticket => {
        this.ticket = ticket;
        this.taskForm.patchValue(ticket);
      });
  }

  get subtasks(): FormArray<FormControl<string>> {
    return this.taskForm.get('subtasks') as FormArray<FormControl<string>>;
  }

  addSubtask(subtaskName: string = ''): void {
    this.subtasks.push(this.fb.control(subtaskName, { validators: [Validators.required], nonNullable: true }));
    setTimeout(() => {
      const input = this.newSubtaskInput?.nativeElement;
      if (input) {
        input.focus();
      }
    }, 0);
  }

  removeSubtask(index: number): void {
    this.subtasks.removeAt(index);
  }
}
