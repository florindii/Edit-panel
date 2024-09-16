import { Component } from '@angular/core';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TaskEditComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

}
