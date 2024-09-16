import { Component, Input, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-subtask-list',
  standalone:true,
  templateUrl: './subtask-list.component.html',
  styleUrls: ['./subtask-list.component.scss'],
  imports:[CommonModule, ReactiveFormsModule,]
})
export class SubtaskListComponent {
  subtasks = [
    { name: 'Send invoice to collections agency', completed: false },
    { name: 'Write an email to follow-up', completed: true },
    { name: 'Send paper mail to account', completed: false }
  ];
  @ViewChildren('subtaskInput') subtaskInputs!: QueryList<ElementRef>;
  get totalSubtasks() {
    return this.subtasks.length;
  }

  get completedSubtasks() {
    return this.subtasks.filter(subtask => subtask.completed).length;
  }
  
  get progress(): number {
    return (this.completedSubtasks / this.totalSubtasks) * 100;
  }
  
  toggleSubtask(index: number) {
    this.subtasks[index].completed = !this.subtasks[index].completed;
  }

  addSubtask(event: any): void {
    // Add a new subtask with an empty name initially
    this.subtasks.push({ name: '', completed: false });
  
    // Ensure the input is focused after it has been added to the DOM
    setTimeout(() => {
      const inputToFocus = this.subtaskInputs.last; // Get the last input element
      if (inputToFocus) {
        inputToFocus.nativeElement.focus(); // Focus on the new subtask input
      }
      event.target.value = ''; // Clear the input field for new entry
    }, 0);
  }
  
  removeSubtask(index: number) {
    this.subtasks.splice(index, 1);
  }
}
