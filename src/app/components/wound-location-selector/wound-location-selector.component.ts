import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BODY_REGIONS, OTHER_LOCATION_ID } from '../../config/body-regions';
import { BodyRegion, BodyRegionSelection, BodyView } from '../../models/body-region.model';

@Component({
  selector: 'app-wound-location-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wound-location-selector.component.html',
  styleUrl: './wound-location-selector.component.scss'
})
export class WoundLocationSelectorComponent {
  @Input() regions: BodyRegion[] = BODY_REGIONS;
  @Input() diagramVariant: string[] = ['male'];
  @Input() selectedRegionId: string | null = null;
  @Input() bodyView: BodyView = 'front';
  @Input() customLocation = '';
  @Input() disabled = false;

  @Output() locationSelected = new EventEmitter<BodyRegionSelection>();
  @Output() customLocationChange = new EventEmitter<string>();
  @Output() clearSelection = new EventEmitter<void>();

  readonly otherLocationId = OTHER_LOCATION_ID;

  get visibleRegions(): BodyRegion[] {
    return this.regions.filter((region) => {
      const matchesVariant = region.diagramVariant.includes('all') || this.diagramVariant.some((v) => region.diagramVariant.includes(v));
      return matchesVariant && (region.view === this.bodyView || region.view === 'both');
    });
  }

  selectLocation(region: BodyRegion): void {
    if (this.disabled) {
      return;
    }

    this.locationSelected.emit({
      regionId: region.id,
      displayName: region.displayName,
      view: region.view === 'both' ? this.bodyView : region.view,
      isCustom: false
    });
  }

  selectOther(): void {
    if (this.disabled) {
      return;
    }

    this.locationSelected.emit({
      regionId: OTHER_LOCATION_ID,
      displayName: 'Other',
      view: this.bodyView,
      isCustom: true
    });
  }

  clear(): void {
    if (this.disabled) {
      return;
    }

    this.clearSelection.emit();
  }
}
