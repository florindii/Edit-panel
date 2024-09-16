import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-inline-edit',
  standalone: true,
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class InlineEditComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() statusColor: string = ''; 
  @Input() readonly: boolean = false;
  iconUrl: string = '';  // To hold the icon URL

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    // Fetch the icon for the label dynamically
    this.iconUrl = this.iconService.getIcon(this.label.toLowerCase().replace(' ', ''));
    
  }
  editable: boolean = false;

  toggleEdit() {
    this.editable = !this.editable;
  }
}
