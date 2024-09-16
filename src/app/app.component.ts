import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { DetailsComponent } from './components/details/details.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DetailsComponent,RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'your-angular-app';
}
