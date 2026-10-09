import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BODY_REGIONS } from '../../config/body-regions';
import { BodyRegion, BodyView } from '../../models/body-region.model';

@Component({
  selector: 'app-body-diagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-diagram.component.html',
  styleUrl: './body-diagram.component.scss'
})
export class BodyDiagramComponent implements OnInit, OnChanges {
  @Input() diagramVariant: string[] = ['all'];
  @Input() selectedRegionId: string | null = null;
  @Input() activeView: BodyView = 'front';
  @Input() disabled = false;

  @Output() regionSelected = new EventEmitter<string>();
  @Output() viewChanged = new EventEmitter<BodyView>();
  @Output() selectionCleared = new EventEmitter<void>();

  @ViewChild('frontSvgContainer') frontSvgContainer?: ElementRef<HTMLElement>;
  @ViewChild('backSvgContainer') backSvgContainer?: ElementRef<HTMLElement>;

  readonly bodyRegions = BODY_REGIONS;

  get isFemale(): boolean {
    return this.diagramVariant?.some((v) => v.toLowerCase() === 'female') ?? false;
  }

  private currentFrontUrl: string | null = null;
  private currentBackUrl: string | null = null;

  sanitizedFrontSvg: SafeHtml | null = null;
  frontSvgLoaded = false;
  frontSvgLoading = false;
  frontSvgError = false;

  sanitizedBackSvg: SafeHtml | null = null;
  backSvgLoaded = false;
  backSvgLoading = false;
  backSvgError = false;

  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    if (this.activeView === 'front') {
      this.loadFrontSvg();
    } else if (this.activeView === 'back') {
      this.loadBackSvg();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['diagramVariant']) {
      if (this.activeView === 'front') {
        this.loadFrontSvg();
      } else if (this.activeView === 'back') {
        this.loadBackSvg();
      }
    }
    if (changes['activeView']) {
      if (this.activeView === 'back') {
        this.loadBackSvg();
      } else if (this.activeView === 'front') {
        this.loadFrontSvg();
      }
    }
    if (changes['selectedRegionId'] || changes['activeView'] || changes['diagramVariant']) {
      setTimeout(() => this.syncSelectedRegion(), 0);
    }
  }

  loadFrontSvg(): void {
    const targetUrl = this.isFemale ? 'assets/data/female-front-body.svg' : 'assets/data/male-front-body.svg';
    if (this.frontSvgLoaded && this.currentFrontUrl === targetUrl) {
      return;
    }
    this.currentFrontUrl = targetUrl;
    this.frontSvgLoading = true;
    this.frontSvgError = false;
    this.frontSvgLoaded = false;
    this.sanitizedFrontSvg = null;

    this.http
      .get(targetUrl, { responseType: 'text' })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (svgText) => {
          this.sanitizedFrontSvg = this.sanitizer.bypassSecurityTrustHtml(svgText);
          this.frontSvgLoaded = true;
          this.frontSvgLoading = false;
          this.frontSvgError = false;
          setTimeout(() => this.syncSelectedRegion(), 0);
        },
        error: (err) => {
          console.error(`Failed to load ${targetUrl}:`, err);
          this.frontSvgError = true;
          this.frontSvgLoaded = false;
          this.frontSvgLoading = false;
        }
      });
  }

  loadBackSvg(): void {
    const targetUrl = this.isFemale ? 'assets/data/female-back-body.svg' : 'assets/data/male-back-body.svg';
    if (this.backSvgLoaded && this.currentBackUrl === targetUrl) {
      return;
    }
    this.currentBackUrl = targetUrl;
    this.backSvgLoading = true;
    this.backSvgError = false;
    this.backSvgLoaded = false;
    this.sanitizedBackSvg = null;

    this.http
      .get(targetUrl, { responseType: 'text' })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (svgText) => {
          this.sanitizedBackSvg = this.sanitizer.bypassSecurityTrustHtml(svgText);
          this.backSvgLoaded = true;
          this.backSvgLoading = false;
          this.backSvgError = false;
          setTimeout(() => this.syncSelectedRegion(), 0);
        },
        error: (err) => {
          console.error(`Failed to load ${targetUrl}:`, err);
          this.backSvgError = true;
          this.backSvgLoaded = false;
          this.backSvgLoading = false;
        }
      });
  }

  syncSelectedRegion(): void {
    const containers = [this.frontSvgContainer, this.backSvgContainer];
    for (const container of containers) {
      if (!container?.nativeElement) {
        continue;
      }

      const regionElements = container.nativeElement.querySelectorAll('.region');
      regionElements.forEach((el: Element) => {
        const regionId = el.getAttribute('data-region-id');
        const isSelected =
          !!this.selectedRegionId &&
          (regionId === this.selectedRegionId ||
            (this.selectedRegionId === 'rightUpperLegBack' && regionId === 'rightPosteriorThigh') ||
            (this.selectedRegionId === 'leftUpperLegBack' && regionId === 'leftPosteriorThigh'));
        el.classList.toggle('selected', isSelected);
        el.setAttribute('aria-pressed', String(isSelected));
      });
    }
  }

  onSvgClick(event: MouseEvent): void {
    if (this.disabled) {
      return;
    }

    const target = event.target as Element | null;
    const regionEl = target?.closest('.region') as HTMLElement | null;
    if (regionEl) {
      const regionId = regionEl.getAttribute('data-region-id');
      if (regionId) {
        this.selectRegion(regionId);
      }
    }
  }

  onSvgKeydown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      const target = event.target as Element | null;
      const regionEl = target?.closest('.region') as HTMLElement | null;
      if (regionEl) {
        event.preventDefault();
        const regionId = regionEl.getAttribute('data-region-id');
        if (regionId) {
          this.selectRegion(regionId);
        }
      }
    }
  }

  onSvgBodyRegionSelected(event: any): void {
    if (this.disabled) {
      return;
    }

    const regionId = event?.detail?.regionId;
    if (regionId) {
      this.selectRegion(regionId);
    }
  }

  visibleRegions(view: BodyView): BodyRegion[] {
    return this.bodyRegions.filter((region) => {
      const matchesVariant =
        region.diagramVariant.includes('all') ||
        this.diagramVariant.some((variant) => region.diagramVariant.includes(variant));
      return matchesVariant && (region.view === view || region.view === 'both');
    });
  }

  isSelected(regionId: string): boolean {
    return this.selectedRegionId === regionId;
  }

  setView(view: BodyView): void {
    if (this.disabled || view === this.activeView) {
      return;
    }

    this.activeView = view;
    this.viewChanged.emit(view);

    if (view === 'front') {
      this.loadFrontSvg();
    } else if (view === 'back') {
      this.loadBackSvg();
    }

    setTimeout(() => this.syncSelectedRegion(), 0);
  }

  selectRegion(regionId: string): void {
    if (this.disabled) {
      return;
    }

    this.regionSelected.emit(regionId);
    setTimeout(() => this.syncSelectedRegion(), 0);
  }

  clearSelection(): void {
    if (this.disabled) {
      return;
    }

    this.selectionCleared.emit();
    setTimeout(() => this.syncSelectedRegion(), 0);
  }

  handleKeydown(event: KeyboardEvent, regionId: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectRegion(regionId);
    }
  }
}
