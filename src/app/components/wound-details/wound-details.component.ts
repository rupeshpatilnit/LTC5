import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  DetailedPhysicianOrder,
  PhotoRecord,
  ProgressNote,
  ResidentProfile,
  ResidentWoundDetail
} from '../../models/resident-profile.model';
import { ResidentService } from '../../services/resident.service';

@Component({
  selector: 'app-wound-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wound-details.component.html',
  styleUrl: './wound-details.component.scss'
})
export class WoundDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private residentService = inject(ResidentService);

  resident: ResidentProfile | null = null;
  wound: ResidentWoundDetail | null = null;

  // Photo Timeline and Comparison state
  isComparingPhotos = false;
  selectedPhotoIds: string[] = ['P-5', 'P-1']; // Baseline and Latest by default
  selectedPhotoLeft: PhotoRecord | null = null;
  selectedPhotoRight: PhotoRecord | null = null;

  // Modals state
  isAddNoteOpen = false;
  newNoteAuthor = 'Jane Smith, RN';
  newNoteCategory: 'ASSESSMENT' | 'TREATMENT' | 'COMMUNICATION' = 'ASSESSMENT';
  newNoteText = '';

  isLinkOrderOpen = false;
  newOrderCategory = 'WOUND CARE';
  newOrderText = '';

  toastMessage = '';

  ngOnInit(): void {
    // Read route params (e.g. /wound-details/:id) and query params (e.g. ?id=W-2026-002 or ?woundId=...)
    this.route.paramMap.subscribe((routeParams) => {
      const pathId = routeParams.get('id');
      this.route.queryParams.subscribe((queryParams) => {
        const woundId =
          pathId ||
          queryParams['id'] ||
          queryParams['woundId'] ||
          'W-2026-002';
        const residentId = queryParams['residentId'] || queryParams['resident'];
        this.loadWoundDetails(woundId, residentId);
      });
    });
  }

  loadWoundDetails(woundId: string, residentId?: string): void {
    this.residentService.getWoundDetailsById(woundId, residentId).subscribe((data) => {
      if (data) {
        this.resident = data.resident;
        this.wound = data.wound;
        this.initPhotoComparison();
      }
    });
  }

  initPhotoComparison(): void {
    if (!this.wound || !this.wound.photos || this.wound.photos.length < 2) return;
    const photos = this.wound.photos;
    // Oldest/Baseline on left, latest on right
    this.selectedPhotoLeft = photos[photos.length - 1];
    this.selectedPhotoRight = photos[0];
    this.selectedPhotoIds = [this.selectedPhotoLeft.id, this.selectedPhotoRight.id];
  }

  toggleComparePhotos(): void {
    this.isComparingPhotos = !this.isComparingPhotos;
    if (this.isComparingPhotos && (!this.selectedPhotoLeft || !this.selectedPhotoRight)) {
      this.initPhotoComparison();
    }
  }

  closeComparison(): void {
    this.isComparingPhotos = false;
  }

  selectPhotoForComparison(photo: PhotoRecord): void {
    if (!this.isComparingPhotos) {
      // Clicking a photo enables comparison view
      this.isComparingPhotos = true;
    }

    if (this.selectedPhotoIds.includes(photo.id)) {
      // Already selected
      return;
    }

    // Replace right side with newly clicked photo
    this.selectedPhotoRight = photo;
    this.selectedPhotoIds = [this.selectedPhotoLeft?.id || '', photo.id];
  }

  isPhotoSelected(photoId: string): boolean {
    return this.isComparingPhotos && this.selectedPhotoIds.includes(photoId);
  }

  // Parse measurements (Length, Width, Depth) from size string e.g. "3.2 × 2.1 × 0.8" or "3.2 x 2.1 x 0.8"
  get parsedMeasurements(): { length: string; width: string; depth: string } {
    if (!this.wound || !this.wound.size) {
      return { length: '3.2', width: '2.1', depth: '0.8' };
    }
    const parts = this.wound.size
      .replace(/x/gi, '×')
      .split('×')
      .map((s) => s.trim());
    return {
      length: parts[0] || '3.2',
      width: parts[1] || '2.1',
      depth: parts[2] || '0.8'
    };
  }

  // Push score chart height calculation
  getPushBarHeight(score: number): number {
    const maxScore = 17;
    const clamped = Math.max(1, Math.min(score, maxScore));
    return Math.round((clamped / maxScore) * 100);
  }

  // Comparison metrics calculations
  get comparisonAreaChange(): string {
    if (!this.selectedPhotoLeft || !this.selectedPhotoRight) return '-20.0%';
    const leftDim = this.selectedPhotoLeft.size.match(/([\d.]+)\s*[×x]\s*([\d.]+)/);
    const rightDim = this.selectedPhotoRight.size.match(/([\d.]+)\s*[×x]\s*([\d.]+)/);
    if (leftDim && rightDim) {
      const area1 = parseFloat(leftDim[1]) * parseFloat(leftDim[2]);
      const area2 = parseFloat(rightDim[1]) * parseFloat(rightDim[2]);
      if (area1 > 0) {
        const pct = ((area2 - area1) / area1) * 100;
        return `${pct > 0 ? '+' : ''}${pct.toFixed(1)}% area`;
      }
    }
    return '-20.0% area';
  }

  get comparisonScoreChange(): string {
    if (!this.selectedPhotoLeft || !this.selectedPhotoRight) return '-6 points';
    const diff = this.selectedPhotoRight.score - this.selectedPhotoLeft.score;
    return `${diff > 0 ? '+' : ''}${diff} points`;
  }

  // Navigation
  goToDashboard(): void {
    this.router.navigate(['/wound-assessment/dashboard']);
  }

  goToResident(): void {
    const queryParams: Record<string, string> = {};
    if (this.resident) {
      queryParams['resident'] = this.resident.name;
      queryParams['residentId'] = this.resident.id;
    }
    this.router.navigate(['/view-resident'], { queryParams });
  }

  goToNewAssessment(): void {
    const queryParams: Record<string, string> = {};
    if (this.resident) {
      queryParams['residentId'] = this.resident.id;
      queryParams['resident'] = this.resident.name;
    }
    if (this.wound) {
      queryParams['woundId'] = this.wound.id;
      queryParams['location'] = this.wound.location;
    }
    this.router.navigate(['/wound-assessment/new-wound-assessment'], { queryParams });
  }

  // Modals & User actions
  openAddNote(): void {
    this.newNoteText = '';
    this.newNoteCategory = 'ASSESSMENT';
    this.isAddNoteOpen = true;
  }

  closeAddNote(): void {
    this.isAddNoteOpen = false;
    this.newNoteText = '';
  }

  saveNote(): void {
    if (!this.wound || !this.newNoteText.trim()) return;

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    const newNote: ProgressNote = {
      id: 'N-' + Date.now(),
      date: `${dateStr} ${timeStr}`,
      author: this.newNoteAuthor,
      category: this.newNoteCategory,
      note: this.newNoteText.trim()
    };

    if (!this.wound.progressNotes) {
      this.wound.progressNotes = [];
    }
    this.wound.progressNotes.unshift(newNote);
    this.showToast('Progress note added successfully.');
    this.closeAddNote();
  }

  openLinkOrder(): void {
    this.newOrderCategory = 'WOUND CARE';
    this.newOrderText = '';
    this.isLinkOrderOpen = true;
  }

  closeLinkOrder(): void {
    this.isLinkOrderOpen = false;
    this.newOrderText = '';
  }

  saveOrder(): void {
    if (!this.resident || !this.wound || !this.newOrderText.trim()) return;

    const newCode = `${this.newOrderCategory.replace(/\s+/g, '').substring(0, 8).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    const newOrd: DetailedPhysicianOrder = {
      code: newCode,
      category: this.newOrderCategory,
      status: 'Active',
      description: this.newOrderText.trim()
    };

    if (!this.wound.detailedOrders) {
      this.wound.detailedOrders = [];
    }
    this.wound.detailedOrders.push(newOrd);
    if (!this.wound.linkedOrders) {
      this.wound.linkedOrders = [];
    }
    this.wound.linkedOrders.push(newOrd.description);

    this.showToast('Physician order linked successfully.');
    this.closeLinkOrder();
  }

  onPhotoUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
      const newPhoto: PhotoRecord = {
        id: 'P-' + Date.now(),
        date: dateStr,
        user: 'Jane Smith, RN',
        size: this.wound?.size || '3.2 × 2.1 cm',
        score: this.wound?.currentPushScore || 8
      };
      if (this.wound) {
        if (!this.wound.photos) this.wound.photos = [];
        this.wound.photos.unshift(newPhoto);
        this.wound.photoCount = (this.wound.photoCount || 0) + 1;
      }
      this.showToast(`Photo "${file.name}" uploaded successfully.`);
      input.value = '';
    }
  }

  showToast(message: string): void {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = '';
    }, 2800);
  }
}
