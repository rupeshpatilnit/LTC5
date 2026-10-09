export type BodyView = 'front' | 'back';

export interface BodyRegion {
  id: string;
  displayName: string;
  view: BodyView | 'both';
  diagramVariant: string[];
  formValue: string;
  svgPath: string;
}

export interface BodyRegionSelection {
  regionId: string | null;
  displayName: string;
  view: BodyView;
  isCustom: boolean;
}
