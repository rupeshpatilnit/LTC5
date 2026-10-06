import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WoundAssessmentPayload } from '../models/wound-assessment.model';

export { WoundAssessmentPayload };

@Injectable({ providedIn: 'root' })
export class WoundAssessmentService {
  private lastSubmission: WoundAssessmentPayload | null = null;

  submitAssessment(payload: WoundAssessmentPayload): Observable<WoundAssessmentPayload> {
    this.lastSubmission = { ...payload };
    console.log('Mock wound assessment payload:', this.lastSubmission);
    return of({ ...payload });
  }

  getLastSubmission(): WoundAssessmentPayload | null {
    return this.lastSubmission;
  }
}
