export interface WoundAssessmentPayload {
  residentId: string;
  bodyView: 'front' | 'back';
  woundLocationId: string;
  woundLocation: string;
  woundType: string;
  stage: string;
  onsetDate: string;
  diagramVariant: string;
  identifiedBy?: string;
  presentOnAdmission?: boolean;
  length?: number | null;
  width?: number | null;
  depth?: number | null;
  drainage?: string;
  necroticPercentage?: number | null;
  granulationPercentage?: number | null;
}
