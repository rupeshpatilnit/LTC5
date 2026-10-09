import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  PhysicianOrder,
  ProgressNote,
  ResidentProfile,
  ResidentWoundDetail
} from '../../models/resident-profile.model';
import { ResidentService } from '../../services/resident.service';
import { SHERLOCK_AVATAR_DATA_URL } from '../../constants/resident-avatar.constant';

@Component({
  selector: 'app-view-resident',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-resident.component.html',
  styleUrl: './view-resident.component.scss'
})
export class ViewResidentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private residentService = inject(ResidentService);

  resident: ResidentProfile | null = null;
  activeWoundsExpanded = true;
  resolvedWoundsExpanded = false;

  // Track expanded state for progress notes per wound
  expandedNotes: Record<string, boolean> = {};

  // Modals state
  isAddNoteOpen = false;
  selectedWoundForNote: ResidentWoundDetail | null = null;
  newNoteText = '';

  isLinkOrderOpen = false;
  newOrderCategory = 'POSITIONING';
  newOrderText = '';

  isPhotosOpen = false;
  selectedWoundForPhotos: ResidentWoundDetail | null = null;

  isHistoryOpen = false;
  selectedWoundForHistory: ResidentWoundDetail | null = null;

  avatarLoadError = false;
  toastMessage = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const query =
        params['resident'] ||
        params['room'] ||
        params['residentId'] ||
        params['woundId'] ||
        params['id'] ||
        'Holmes, Sherlock';
      this.loadResident(query);
    });
  }

  loadResident(query: string): void {
    this.avatarLoadError = false;
    this.residentService.getResidentByNameOrRoom(query).subscribe((data) => {
      this.resident = data;
    });
  }

  getAvatarSrc(): string {
    if (this.avatarLoadError || !this.resident) return '';
    // Show image ONLY for Holmes, Sherlock (or Holems, Sherlock / R-1005)
    const name = (this.resident.name || '').toLowerCase();
    const isSherlock =
      name.includes('holmes') ||
      name.includes('holems') ||
      this.resident.id === 'R-1005';

    if (isSherlock) {
      return this.resident.avatarUrl || SHERLOCK_AVATAR_DATA_URL;
    }
    return '';
  }

  onAvatarError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const name = (this.resident?.name || '').toLowerCase();
    const isSherlock =
      name.includes('holmes') ||
      name.includes('holems') ||
      this.resident?.id === 'R-1005';

    if (isSherlock && img && img.src !== SHERLOCK_AVATAR_DATA_URL) {
      // Instantly fallback to the embedded data URI
      img.src = SHERLOCK_AVATAR_DATA_URL;
      return;
    }
    this.avatarLoadError = true;
  }

  removeOrder(index: number, event?: Event): void {
    event?.stopPropagation();
    if (!this.resident) return;
    this.residentService.removePhysicianOrder(this.resident.id, index).subscribe(() => {
      this.showToast('Physician order removed.');
    });
  }

  toggleActiveWounds(): void {
    this.activeWoundsExpanded = !this.activeWoundsExpanded;
  }

  toggleResolvedWounds(): void {
    this.resolvedWoundsExpanded = !this.resolvedWoundsExpanded;
  }

  toggleProgressNotes(woundId: string): void {
    this.expandedNotes[woundId] = !this.expandedNotes[woundId];
  }

  isNotesExpanded(woundId: string): boolean {
    return !!this.expandedNotes[woundId];
  }

  goToDashboard(): void {
    this.router.navigate(['/wound-assessment/dashboard']);
  }

  goToNewAssessment(wound?: ResidentWoundDetail): void {
    const queryParams: Record<string, string> = {};
    if (this.resident) {
      queryParams['residentId'] = this.resident.id;
      queryParams['resident'] = this.resident.name;
    }
    if (wound) {
      queryParams['location'] = wound.location;
      queryParams['woundId'] = wound.id;
    }
    this.router.navigate(['/wound-assessment/new-wound-assessment'], { queryParams });
  }

  openAddNote(wound: ResidentWoundDetail, event?: Event): void {
    event?.stopPropagation();
    this.selectedWoundForNote = wound;
    this.newNoteText = '';
    this.isAddNoteOpen = true;
  }

  closeAddNote(): void {
    this.isAddNoteOpen = false;
    this.selectedWoundForNote = null;
    this.newNoteText = '';
  }

  saveNote(): void {
    if (!this.resident || !this.selectedWoundForNote || !this.newNoteText.trim()) {
      return;
    }

    this.residentService
      .addProgressNote(this.resident.id, this.selectedWoundForNote.id, this.newNoteText.trim())
      .subscribe(() => {
        // Expand notes to show the newly added one
        this.expandedNotes[this.selectedWoundForNote!.id] = true;
        this.showToast('Progress note added successfully.');
        this.closeAddNote();
      });
  }

  openLinkOrder(): void {
    this.newOrderCategory = 'POSITIONING';
    this.newOrderText = '';
    this.isLinkOrderOpen = true;
  }

  closeLinkOrder(): void {
    this.isLinkOrderOpen = false;
  }

  saveOrder(): void {
    if (!this.resident || !this.newOrderText.trim()) {
      return;
    }

    this.residentService
      .addPhysicianOrder(this.resident.id, this.newOrderCategory, this.newOrderText.trim())
      .subscribe(() => {
        this.showToast('Physician order linked successfully.');
        this.closeLinkOrder();
      });
  }

  openPhotos(wound: ResidentWoundDetail): void {
    this.selectedWoundForPhotos = wound;
    this.isPhotosOpen = true;
  }

  closePhotos(): void {
    this.isPhotosOpen = false;
    this.selectedWoundForPhotos = null;
  }

  openHistory(wound: ResidentWoundDetail): void {
    this.selectedWoundForHistory = wound;
    this.isHistoryOpen = true;
  }

  closeHistory(): void {
    this.isHistoryOpen = false;
    this.selectedWoundForHistory = null;
  }

  // Calculate percentage height for PUSH score trend bars (range 0 to 17)
  getPushBarHeight(score: number): number {
    const maxScore = 17;
    const clamped = Math.max(1, Math.min(score, maxScore));
    return Math.round((clamped / maxScore) * 100);
  }

  showToast(message: string): void {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = '';
    }, 2800);
  }
}
