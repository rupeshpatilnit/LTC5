export interface PushScoreTrend {
  week: string;
  score: number;
}

export interface ProgressNote {
  id: string;
  date: string;
  author: string;
  note: string;
  category?: 'ASSESSMENT' | 'TREATMENT' | 'COMMUNICATION';
}

export interface AssessmentRecord {
  id: string;
  date: string;
  size: string;
  score: number;
  status: 'Improving' | 'Unchanged' | 'Worsening' | 'New' | 'Resolved';
  change?: string;
  user: string;
}

export interface PhotoRecord {
  id: string;
  date: string;
  user: string;
  size: string;
  score: number;
  imageUrl?: string;
  imageFailed?: boolean;
}

export interface DetailedPhysicianOrder {
  code: string;
  category: string;
  status: 'Active' | 'Discontinued' | 'Completed';
  description: string;
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
  detailedOrders?: DetailedPhysicianOrder[];
  progressNotes: ProgressNote[];
  photoCount: number;
  resolvedDate?: string;
  daysToClosure?: number;
  treatment?: string;
  drainage?: string;
  granulation?: number;
  slough?: number;
  necrotic?: number;
  assessmentHistory?: AssessmentRecord[];
  photos?: PhotoRecord[];
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
