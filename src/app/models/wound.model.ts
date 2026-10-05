export type WoundStatus = 'Worsening' | 'Improving' | 'Unchanged' | 'New' | 'Resolved';
export type WoundOrigin = 'Facility' | 'POA';
export interface Wound {
  id: string; resident: string; room: string; location: string; type: string; stage: string;
  status: WoundStatus; origin: WoundOrigin; onsetDate: string; lastAssessment: string;
  nextAssessment: string; severity: 'Critical' | 'High' | 'Medium' | 'None'; alerts: string[];
  resolvedDate?: string; daysToClosure?: number; outcome?: string;
}
export interface WoundFilters {
  chip: string; fromDate: string; toDate: string; dateField: 'onsetDate' | 'lastAssessment' | 'nextAssessment'; resident: string;
}
