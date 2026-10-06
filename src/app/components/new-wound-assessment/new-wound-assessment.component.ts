import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BodyDiagramComponent } from '../body-diagram/body-diagram.component';
import { WoundLocationSelectorComponent } from '../wound-location-selector/wound-location-selector.component';
import { BODY_REGIONS, OTHER_LOCATION_ID } from '../../config/body-regions';
import { BodyRegion, BodyRegionSelection, BodyView } from '../../models/body-region.model';
import { WoundAssessmentPayload } from '../../models/wound-assessment.model';
import { WoundAssessmentService } from '../../services/wound-assessment.service';

@Component({
  selector: 'app-new-wound-assessment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BodyDiagramComponent, WoundLocationSelectorComponent],
  templateUrl: './new-wound-assessment.component.html',
  styleUrl: './new-wound-assessment.component.scss'
})
export class NewWoundAssessmentComponent {
  private fb = inject(FormBuilder);
  private assessmentService = inject(WoundAssessmentService);
  private router = inject(Router);

  goToDashboard(): void {
    this.router.navigate(['/wound-assessment/dashboard']);
  }

  readonly bodyRegions = BODY_REGIONS;
  readonly otherLocationId = OTHER_LOCATION_ID;
  readonly submissionResult = signal<WoundAssessmentPayload | null>(null);

  formSubmitted = false;

  form = this.fb.group({
    residentId: ['R-1001', Validators.required],
    diagramVariant: ['male', Validators.required],
    bodyView: ['front' as BodyView, Validators.required],
    woundLocationId: [null as string | null, Validators.required],
    woundLocation: ['', Validators.required],
    woundType: ['', Validators.required],
    stage: ['', Validators.required],
    onsetDate: [this.today(), Validators.required],
    identifiedBy: [''],
    presentOnAdmission: [true],
    length: [null],
    width: [null],
    depth: [null],
    drainage: [''],
    necroticPercentage: [0, [Validators.min(0), Validators.max(100)]],
    granulationPercentage: [0, [Validators.min(0), Validators.max(100)]]
  });

  get locationErrorMessage(): string {
    const locationId = this.form.get('woundLocationId')?.value;
    const customLocation = this.form.get('woundLocation')?.value?.trim();

    if (!locationId) {
      return 'Wound location is required.';
    }

    if (locationId === OTHER_LOCATION_ID && !customLocation) {
      return 'Custom location is required when Other is selected.';
    }

    return '';
  }

  today(): string {
    return new Date().toISOString().slice(0, 10);
  }

  onRegionSelected(regionId: string): void {
    const region = this.bodyRegions.find((item) => item.id === regionId);
    if (!region) {
      return;
    }
    this.applyRegionToForm(region);
  }

  onLocationSelected(selection: BodyRegionSelection): void {
    if (selection.regionId === OTHER_LOCATION_ID) {
      this.form.patchValue({
        woundLocationId: OTHER_LOCATION_ID,
        woundLocation: this.form.get('woundLocation')?.value ?? '',
        bodyView: selection.view
      });
      return;
    }

    const matchedRegion = this.bodyRegions.find((region) => region.id === selection.regionId);
    if (!matchedRegion) {
      return;
    }
    this.applyRegionToForm(matchedRegion);
  }

  onCustomLocationChanged(value: string): void {
    this.form.patchValue({
      woundLocationId: OTHER_LOCATION_ID,
      woundLocation: value
    });
  }

  onViewChanged(view: BodyView): void {
    this.form.patchValue({ bodyView: view });
  }

  clearSelection(): void {
    this.form.patchValue({
      woundLocationId: null,
      woundLocation: ''
    });
  }

  submitAssessment(): void {
    this.formSubmitted = true;
    this.form.markAllAsTouched();

    if (this.form.invalid || this.locationErrorMessage) {
      return;
    }

    const payload: WoundAssessmentPayload = {
      residentId: this.form.get('residentId')?.value ?? 'R-1001',
      diagramVariant: this.form.get('diagramVariant')?.value ?? 'standard',
      bodyView: this.form.get('bodyView')?.value ?? 'front',
      woundLocationId: this.form.get('woundLocationId')?.value ?? '',
      woundLocation: this.form.get('woundLocation')?.value ?? '',
      woundType: this.form.get('woundType')?.value ?? '',
      stage: this.form.get('stage')?.value ?? '',
      onsetDate: this.form.get('onsetDate')?.value ?? this.today(),
      identifiedBy: this.form.get('identifiedBy')?.value ?? '',
      presentOnAdmission: !!this.form.get('presentOnAdmission')?.value,
      length: this.form.get('length')?.value ?? null,
      width: this.form.get('width')?.value ?? null,
      depth: this.form.get('depth')?.value ?? null,
      drainage: this.form.get('drainage')?.value ?? '',
      necroticPercentage: this.form.get('necroticPercentage')?.value ?? 0,
      granulationPercentage: this.form.get('granulationPercentage')?.value ?? 0
    };

    this.assessmentService.submitAssessment(payload).subscribe((response) => {
      this.submissionResult.set(response);
    });
  }

  /**
   * Shared helper: resolve which view to use and patch the form
   * with the selected region. Eliminates the duplicate logic that
   * existed between `onRegionSelected` and `onLocationSelected`.
   */
  private applyRegionToForm(region: BodyRegion): void {
    const currentView = this.form.get('bodyView')?.value ?? 'front';
    const nextView: BodyView = region.view === 'both' ? currentView : region.view;
    this.form.patchValue({
      woundLocationId: region.id,
      woundLocation: region.displayName,
      bodyView: nextView
    });
  }
}
