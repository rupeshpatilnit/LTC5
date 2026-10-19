import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewWoundAssessmentComponent } from './components/new-wound-assessment/new-wound-assessment.component';
import { ViewResidentComponent } from './components/view-resident/view-resident.component';
import { WoundDetailsComponent } from './components/wound-details/wound-details.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'wound-assessment/dashboard', pathMatch: 'full' },
  { path: 'wound-assessment/dashboard', component: DashboardComponent },
  { path: 'wound-assessment/new-wound-assessment', component: NewWoundAssessmentComponent },
  { path: 'wound-assessment/new', redirectTo: 'wound-assessment/new-wound-assessment', pathMatch: 'full' },
  { path: 'view-resident', component: ViewResidentComponent },
  { path: 'wound-assessment/view-resident', component: ViewResidentComponent },
  { path: 'wound-details', component: WoundDetailsComponent },
  { path: 'wound-details/:id', component: WoundDetailsComponent },
  { path: 'wound-assessment/wound-details', component: WoundDetailsComponent },
  { path: 'wound-assessment/wound-details/:id', component: WoundDetailsComponent },
  { path: '**', redirectTo: 'wound-assessment/dashboard' }
];
