export interface PushScoreTrend {
  week: string;
  score: number;
}

export interface ProgressNote {
  id: string;
  date: string;
  author: string;
  note: string;
}

export interface ResidentWoundDetail {
  id: string;
  location: string;
  type: string;
  stage: string;
  status: 'Improving' | 'Unchanged' | 'Worsening' | 'New' | 'Resolved';
  onsetDate: string;
  lastAssessment: string;
  nextDue: string;
  size: string; // e.g. "3.2 × 2.1 × 0.8"
  origin: string; // "Present on Admission" | "Facility-Acquired"
  pushTrend: PushScoreTrend[];
  currentPushScore: number;
  pushTrendDescription: string; // "Improving", "Stable", "Worsening", "New"
  linkedOrders: string[];
  progressNotes: ProgressNote[];
  photoCount: number;
  resolvedDate?: string;
  daysToClosure?: number;
}

export interface PhysicianOrder {
  category: string; // e.g. "POSITIONING", "SUPPORT SURFACE", "NUTRITION"
  orderText: string;
}

export interface ResidentProfile {
  id: string;
  name: string;
  room: string;
  age: number;
  gender: 'Male' | 'Female';
  admissionDate: string;
  avatarUrl?: string;
  physicianOrders: PhysicianOrder[];
  activeWounds: ResidentWoundDetail[];
  resolvedWounds: ResidentWoundDetail[];
}
