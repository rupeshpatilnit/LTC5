import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FilterPanelComponent } from '../filter-panel/filter-panel.component';
import { StatCardComponent } from '../stat-card/stat-card.component';
import { WoundTableComponent } from '../wound-table/wound-table.component';
import { Wound, WoundFilters } from '../../models/wound.model';
import { WoundService } from '../../services/wound.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    StatCardComponent,
    FilterPanelComponent,
    WoundTableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private service = inject(WoundService);
  private router = inject(Router);

  wounds = signal<Wound[]>([]);
  toast = signal('');
  filters = signal<WoundFilters>({
    chip: 'All Wounds',
    fromDate: '',
    toDate: '',
    dateField: 'onsetDate',
    resident: ''
  });

  filtered = computed(() => {
    const f = this.filters();
    const resolved = f.chip === 'Resolved Wounds';

    return this.wounds().filter((w) => {
      if ((w.status === 'Resolved') !== resolved) {
        return false;
      }

      const chipMatch =
        f.chip === 'All Wounds' ||
        resolved ||
        (f.chip === 'Pressure Ulcers' && w.type === 'Pressure Ulcer') ||
        (f.chip === 'Surgical' && w.type === 'Surgical') ||
        (f.chip === 'Diabetic' && w.type === 'Diabetic') ||
        (f.chip === 'Vascular' && w.type.includes('Vascular')) ||
        f.chip === w.status ||
        (f.chip === 'Present on Admission' && w.origin === 'POA') ||
        (f.chip === 'Facility-Acquired' && w.origin === 'Facility');

      const nameMatch = w.resident.toLowerCase().includes(f.resident.toLowerCase());
      const d = w[f.dateField];
      const dateMatch = (!f.fromDate || d >= f.fromDate) && (!f.toDate || d <= f.toDate);

      return chipMatch && nameMatch && dateMatch;
    });
  });

  activeWounds = computed(() => this.wounds().filter((w) => w.status !== 'Resolved'));
  total = computed(() => this.activeWounds().length);
  residents = computed(() => new Set(this.activeWounds().map((w) => w.resident)).size);
  pressure = computed(() => this.activeWounds().filter((w) => w.type === 'Pressure Ulcer').length);
  infections = computed(() =>
    this.activeWounds().filter((w) => w.alerts.some((a) => a.toLowerCase().includes('infection'))).length
  );
  alerts = computed(() => this.activeWounds().filter((w) => w.alerts.length).length);

  constructor() {
    this.service.getWounds().subscribe((data) => this.wounds.set(data));
  }

  goToNewAssessment(): void {
    this.router.navigate(['/wound-assessment/new-wound-assessment']);
  }

  onViewResident(wound: Wound): void {
    this.router.navigate(['/view-resident'], {
      queryParams: {
        resident: wound.resident,
        room: wound.room
      }
    });
  }

  showToast(message: string): void {
    this.toast.set(message);
    setTimeout(() => this.toast.set(''), 2600);
  }
}
