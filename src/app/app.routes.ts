import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ActivityComponent } from './components/activity/activity.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';

export const routes: Routes = [
  { path: '', redirectTo: 'details', pathMatch: 'full' }, // Default route to details
  { path: 'details', component: DetailsComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'attachments', component: AttachmentsComponent },
];
