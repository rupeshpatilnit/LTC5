import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResidentProfile } from '../models/resident-profile.model';

@Injectable({ providedIn: 'root' })
export class ResidentService {
  private residents: ResidentProfile[] = [
    {
      id: 'R-1005',
      name: 'Holmes, Sherlock',
      room: '105-B',
      age: 76,
      gender: 'Male',
      admissionDate: 'Mar 8, 2024',
      avatarUrl: 'assets/resident-images/W-2026-002.avif',
      physicianOrders: [
        {
          category: 'POSITIONING',
          orderText: 'Turn and reposition every 2 hours'
        },
        {
          category: 'SUPPORT SURFACE',
          orderText: 'Specialty mattress - low air loss'
        }
      ],
      activeWounds: [
        {
          id: 'W-2026-002',
          location: 'Sacrum',
          type: 'Pressure Ulcer',
          stage: 'Stage 3',
          status: 'Improving',
          onsetDate: 'Mar 9, 2024',
          lastAssessment: 'Jun 21, 2024',
          nextDue: 'Jun 28, 2024',
          size: '3.2 × 2.1 × 0.8',
          origin: 'Present on Admission',
          pushTrend: [
            { week: 'Week 1', score: 14 },
            { week: 'Week 2', score: 12 },
            { week: 'Week 3', score: 10 },
            { week: 'Week 4', score: 9 },
            { week: 'Week 5', score: 8 }
          ],
          currentPushScore: 8,
          pushTrendDescription: 'Improving',
          linkedOrders: [
            'Pressure ulcer care - Sacrum - BID dressing change with hydrocolloid',
            'High protein supplement TID with meals'
          ],
          progressNotes: [
            {
              id: 'N-1',
              date: 'Jun 21, 2024',
              author: 'Nurse Sarah Jenkins, RN',
              note: 'Granulation tissue increased to 70%. Wound bed pink and healthy with decreasing slough. Periwound skin intact without maceration. Cleansed with sterile saline and fresh hydrocolloid dressing applied.'
            },
            {
              id: 'N-2',
              date: 'Jun 14, 2024',
              author: 'Nurse Robert Chen, RN',
              note: 'Moderate serosanguinous exudate noted. No foul odor. Depth measured at 0.9 cm. Patient tolerated dressing change well without discomfort.'
            },
            {
              id: 'N-3',
              date: 'Jun 07, 2024',
              author: 'Dr. Emily Vance, MD',
              note: 'Wound bed showing positive response to current treatment protocol. Continue BID hydrocolloid changes and nutritional supplementation.'
            }
          ],
          photoCount: 5
        },
        {
          id: 'W-2024-003',
          location: 'Left Heel',
          type: 'Pressure Ulcer',
          stage: 'Stage 1',
          status: 'Unchanged',
          onsetDate: 'May 19, 2024',
          lastAssessment: 'Jun 21, 2024',
          nextDue: 'Jun 28, 2024',
          size: '1 × 0.8 × 0',
          origin: 'Facility-Acquired',
          pushTrend: [
            { week: 'Week 1', score: 4 },
            { week: 'Week 2', score: 4 },
            { week: 'Week 3', score: 4 },
            { week: 'Week 4', score: 4 },
            { week: 'Week 5', score: 4 }
          ],
          currentPushScore: 4,
          pushTrendDescription: 'Stable',
          linkedOrders: [
            'Heel protector boots - bilateral - continuous use'
          ],
          progressNotes: [
            {
              id: 'N-4',
              date: 'Jun 21, 2024',
              author: 'Nurse Sarah Jenkins, RN',
              note: 'Non-blanchable erythema observed over left calcaneus. Skin remains intact without breakdown. Heel offloading boots maintained while in bed.'
            },
            {
              id: 'N-5',
              date: 'Jun 14, 2024',
              author: 'Nurse Robert Chen, RN',
              note: 'Skin prep barrier applied. Offloading instructions re-educated to CNA staff.'
            }
          ],
          photoCount: 2
        },
        {
          id: 'W-2024-006',
          location: 'Right Elbow',
          type: 'Skin Tear',
          stage: 'N/A',
          status: 'Improving',
          onsetDate: 'Jun 17, 2024',
          lastAssessment: 'Jun 21, 2024',
          nextDue: 'Jun 28, 2024',
          size: '2.0 × 1.2 × 0.1',
          origin: 'Facility-Acquired',
          pushTrend: [
            { week: 'Week 1', score: 6 },
            { week: 'Week 2', score: 5 },
            { week: 'Week 3', score: 4 },
            { week: 'Week 4', score: 3 },
            { week: 'Week 5', score: 2 }
          ],
          currentPushScore: 2,
          pushTrendDescription: 'Improving',
          linkedOrders: [
            'Cleanse with normal saline, apply non-adherent dressing and wrap with tubular bandage'
          ],
          progressNotes: [
            {
              id: 'N-6',
              date: 'Jun 21, 2024',
              author: 'Nurse Sarah Jenkins, RN',
              note: 'Skin flap well approximated. Steri-strips intact and dry. Minimal drainage noted. Dressing replaced with non-adherent pad.'
            }
          ],
          photoCount: 1
        },
        {
          id: 'W-2024-007',
          location: 'Coccyx',
          type: 'Pressure Ulcer',
          stage: 'Stage 2',
          status: 'New',
          onsetDate: 'Jun 22, 2024',
          lastAssessment: 'Jun 22, 2024',
          nextDue: 'Jun 29, 2024',
          size: '1.8 × 1.5 × 0.3',
          origin: 'Facility-Acquired',
          pushTrend: [
            { week: 'Week 1', score: 8 },
            { week: 'Week 2', score: 8 },
            { week: 'Week 3', score: 8 },
            { week: 'Week 4', score: 8 },
            { week: 'Week 5', score: 8 }
          ],
          currentPushScore: 8,
          pushTrendDescription: 'New',
          linkedOrders: [
            'Barrier cream application after each incontinence episode, pressure redistribution cushion'
          ],
          progressNotes: [
            {
              id: 'N-7',
              date: 'Jun 22, 2024',
              author: 'Nurse Amanda Cole, RN',
              note: 'Initial wound assessment: Partial thickness loss of dermis presenting as shallow open ulcer with red-pink wound bed. Barrier cream applied and positioning protocol updated.'
            }
          ],
          photoCount: 3
        }
      ],
      resolvedWounds: [
        {
          id: 'W-2024-R01',
          location: 'Left Heel',
          type: 'Pressure Ulcer',
          stage: 'Stage 2',
          status: 'Resolved',
          onsetDate: 'Jun 01, 2024',
          lastAssessment: 'Aug 12, 2024',
          nextDue: 'Aug 12, 2024',
          size: '0 × 0 × 0',
          origin: 'Present on Admission',
          pushTrend: [
            { week: 'Week 1', score: 10 },
            { week: 'Week 2', score: 8 },
            { week: 'Week 3', score: 5 },
            { week: 'Week 4', score: 2 },
            { week: 'Week 5', score: 0 }
          ],
          currentPushScore: 0,
          pushTrendDescription: 'Resolved',
          linkedOrders: [
            'Protective skin sealant applied daily'
          ],
          progressNotes: [
            {
              id: 'N-R1',
              date: 'Aug 12, 2024',
              author: 'Dr. Emily Vance, MD',
              note: 'Complete closure achieved with 100% re-epithelialization. Wound resolved. Discontinue active wound care; maintain preventive offloading.'
            }
          ],
          photoCount: 4,
          resolvedDate: 'Aug 12, 2024',
          daysToClosure: 72
        }
      ]
    },
    {
      id: 'R-1001',
      name: 'Hunt, Ethan',
      room: '101-A',
      age: 72,
      gender: 'Male',
      admissionDate: 'Sep 01, 2026',
      physicianOrders: [
        {
          category: 'POSITIONING',
          orderText: 'Reposition every 2 hours while bedbound'
        },
        {
          category: 'DIET',
          orderText: 'Diabetic renal diet with adequate hydration'
        }
      ],
      activeWounds: [
        {
          id: 'W-2026-001',
          location: 'Right Heel',
          type: 'Pressure Ulcer',
          stage: 'Stage 2',
          status: 'Worsening',
          onsetDate: 'Sep 04, 2026',
          lastAssessment: 'Sep 28, 2026',
          nextDue: 'Oct 02, 2026',
          size: '2.5 × 1.8 × 0.5',
          origin: 'Facility-Acquired',
          pushTrend: [
            { week: 'Week 1', score: 6 },
            { week: 'Week 2', score: 7 },
            { week: 'Week 3', score: 8 },
            { week: 'Week 4', score: 10 },
            { week: 'Week 5', score: 12 }
          ],
          currentPushScore: 12,
          pushTrendDescription: 'Worsening',
          linkedOrders: [
            'Offloading heel elevation pillow, daily collagen dressing'
          ],
          progressNotes: [
            {
              id: 'N-8',
              date: 'Sep 28, 2026',
              author: 'Nurse Robert Chen, RN',
              note: 'Erythema extending to periwound area. Culture swab obtained for suspected infection. Treatment plan under physician review.'
            }
          ],
          photoCount: 4
        }
      ],
      resolvedWounds: []
    },
    {
      id: 'R-1002',
      name: 'Johnson, Clara',
      room: '118-B',
      age: 84,
      gender: 'Female',
      admissionDate: 'Aug 10, 2026',
      physicianOrders: [
        {
          category: 'SKIN PROTECTION',
          orderText: 'Long-sleeve soft cotton clothing to prevent friction tears'
        }
      ],
      activeWounds: [],
      resolvedWounds: [
        {
          id: 'W-2026-R02',
          location: 'Right Lower Arm',
          type: 'Skin Tear',
          stage: 'N/A',
          status: 'Resolved',
          onsetDate: 'Aug 22, 2026',
          lastAssessment: 'Sep 05, 2026',
          nextDue: 'Sep 05, 2026',
          size: '0 × 0 × 0',
          origin: 'Facility-Acquired',
          pushTrend: [
            { week: 'Week 1', score: 4 },
            { week: 'Week 2', score: 0 }
          ],
          currentPushScore: 0,
          pushTrendDescription: 'Resolved',
          linkedOrders: [
            'Moisturizing emollient lotion BID'
          ],
          progressNotes: [
            {
              id: 'N-9',
              date: 'Sep 05, 2026',
              author: 'Nurse Amanda Cole, RN',
              note: 'Skin tear fully closed and epithelialized. Healed without complication in 14 days.'
            }
          ],
          photoCount: 2,
          resolvedDate: 'Sep 05, 2026',
          daysToClosure: 14
        }
      ]
    },
    {
      id: 'R-1003',
      name: 'Stark, Tony',
      room: '111-B',
      age: 68,
      gender: 'Male',
      admissionDate: 'Sep 05, 2026',
      physicianOrders: [
        {
          category: 'POSITIONING',
          orderText: 'Offload left heel continuously with boot'
        },
        {
          category: 'SKIN CARE',
          orderText: 'Barrier cream application BID'
        }
      ],
      activeWounds: [
        {
          id: 'W-2026-003',
          location: 'Left Heel',
          type: 'Pressure Ulcer',
          stage: 'Stage 1',
          status: 'Unchanged',
          onsetDate: 'Sep 11, 2026',
          lastAssessment: 'Sep 27, 2026',
          nextDue: 'Oct 04, 2026',
          size: '1.2 × 1.0 × 0',
          origin: 'Facility-Acquired',
          pushTrend: [
            { week: 'Week 1', score: 4 },
            { week: 'Week 2', score: 4 },
            { week: 'Week 3', score: 4 }
          ],
          currentPushScore: 4,
          pushTrendDescription: 'Stable',
          linkedOrders: ['Heel protector boots bilateral'],
          progressNotes: [
            {
              id: 'N-10',
              date: 'Sep 27, 2026',
              author: 'Nurse Robert Chen, RN',
              note: 'Non-blanchable erythema stable. Left heel boots maintained in bed.'
            }
          ],
          photoCount: 1
        }
      ],
      resolvedWounds: []
    },
    {
      id: 'R-1004',
      name: 'Parker, Peter',
      room: '112-A',
      age: 65,
      gender: 'Male',
      admissionDate: 'Sep 12, 2026',
      physicianOrders: [
        {
          category: 'DRESSING',
          orderText: 'Dry sterile dressing change every 48 hours'
        },
        {
          category: 'ACTIVITY',
          orderText: 'Ambulate with physical therapy assistance daily'
        }
      ],
      activeWounds: [
        {
          id: 'W-2026-004',
          location: 'Right Hip',
          type: 'Surgical',
          stage: 'N/A',
          status: 'Improving',
          onsetDate: 'Sep 18, 2026',
          lastAssessment: 'Sep 30, 2026',
          nextDue: 'Oct 07, 2026',
          size: '4.0 × 0.5 × 0.2',
          origin: 'Facility-Acquired',
          pushTrend: [
            { week: 'Week 1', score: 8 },
            { week: 'Week 2', score: 5 }
          ],
          currentPushScore: 5,
          pushTrendDescription: 'Improving',
          linkedOrders: ['Surgical site inspection daily'],
          progressNotes: [
            {
              id: 'N-11',
              date: 'Sep 30, 2026',
              author: 'Dr. Emily Vance, MD',
              note: 'Surgical incision healing well. Staples removed, Steri-strips intact.'
            }
          ],
          photoCount: 2
        }
      ],
      resolvedWounds: []
    },
    {
      id: 'R-1006',
      name: 'Wilson, Noah',
      room: '120-B',
      age: 79,
      gender: 'Male',
      admissionDate: 'Aug 01, 2026',
      physicianOrders: [
        {
          category: 'COMPRESSION',
          orderText: 'Compression wrap application daily in AM'
        },
        {
          category: 'ELEVATION',
          orderText: 'Elevate lower extremities when sitting'
        }
      ],
      activeWounds: [
        {
          id: 'W-2026-005',
          location: 'Left Lower Leg',
          type: 'Vascular / Venous Stasis',
          stage: 'N/A',
          status: 'Unchanged',
          onsetDate: 'Aug 08, 2026',
          lastAssessment: 'Sep 26, 2026',
          nextDue: 'Oct 03, 2026',
          size: '3.5 × 2.0 × 0.1',
          origin: 'Present on Admission',
          pushTrend: [
            { week: 'Week 1', score: 10 },
            { week: 'Week 2', score: 9 },
            { week: 'Week 3', score: 9 }
          ],
          currentPushScore: 9,
          pushTrendDescription: 'Stable',
          linkedOrders: ['Venous stasis compression wrap'],
          progressNotes: [
            {
              id: 'N-12',
              date: 'Sep 26, 2026',
              author: 'Nurse Amanda Cole, RN',
              note: 'Moderate exudate present. Periwound skin dry and hyperpigmented. Compression wrap reapplied.'
            }
          ],
          photoCount: 3
        }
      ],
      resolvedWounds: []
    },
    {
      id: 'R-1007',
      name: 'Singh, Mira',
      room: '108-C',
      age: 74,
      gender: 'Female',
      admissionDate: 'Sep 15, 2026',
      physicianOrders: [
        {
          category: 'SKIN PROTECTION',
          orderText: 'Padded elbow sleeve on right arm'
        },
        {
          category: 'HYDRATION',
          orderText: 'Encourage oral fluid intake 1500ml daily'
        }
      ],
      activeWounds: [
        {
          id: 'W-2026-006',
          location: 'Right Elbow',
          type: 'Skin Tear',
          stage: 'N/A',
          status: 'Improving',
          onsetDate: 'Sep 21, 2026',
          lastAssessment: 'Sep 30, 2026',
          nextDue: 'Oct 07, 2026',
          size: '1.8 × 1.1 × 0.1',
          origin: 'Facility-Acquired',
          pushTrend: [
            { week: 'Week 1', score: 5 },
            { week: 'Week 2', score: 3 }
          ],
          currentPushScore: 3,
          pushTrendDescription: 'Improving',
          linkedOrders: ['Non-adherent dressing change QOD'],
          progressNotes: [
            {
              id: 'N-13',
              date: 'Sep 30, 2026',
              author: 'Nurse Sarah Jenkins, RN',
              note: 'Epidermal flap well positioned. Minimal serous exudate. Padded sleeve worn consistently.'
            }
          ],
          photoCount: 2
        }
      ],
      resolvedWounds: []
    },
    {
      id: 'R-1008',
      name: 'Chen, Ethan',
      room: '114-D',
      age: 71,
      gender: 'Male',
      admissionDate: 'Sep 25, 2026',
      physicianOrders: [
        {
          category: 'DIABETIC FOOT CARE',
          orderText: 'Daily diabetic foot inspection and cleansing'
        },
        {
          category: 'OFFLOADING',
          orderText: 'Non-weight bearing on left foot with boot'
        }
      ],
      activeWounds: [
        {
          id: 'W-2026-007',
          location: 'Left Foot',
          type: 'Diabetic',
          stage: 'Full Thickness',
          status: 'New',
          onsetDate: 'Sep 30, 2026',
          lastAssessment: 'Sep 30, 2026',
          nextDue: 'Oct 03, 2026',
          size: '2.1 × 1.5 × 0.4',
          origin: 'Present on Admission',
          pushTrend: [
            { week: 'Week 1', score: 11 }
          ],
          currentPushScore: 11,
          pushTrendDescription: 'New',
          linkedOrders: ['Offloading boot continuous use', 'Silver antimicrobial dressing daily'],
          progressNotes: [
            {
              id: 'N-14',
              date: 'Sep 30, 2026',
              author: 'Dr. Emily Vance, MD',
              note: 'Initial diabetic foot ulcer assessment. Mild erythema, wound culture taken to rule out osteomyelitis. Offloading boot ordered.'
            }
          ],
          photoCount: 2
        }
      ],
      resolvedWounds: []
    },
    {
      id: 'R-1009',
      name: 'Garcia, Sofia',
      room: '116-A',
      age: 80,
      gender: 'Female',
      admissionDate: 'Aug 28, 2026',
      physicianOrders: [
        {
          category: 'POSITIONING',
          orderText: 'Reposition every 2 hours, heel suspension'
        },
        {
          category: 'DRESSING',
          orderText: 'Hydrocellular foam dressing every 3 days'
        }
      ],
      activeWounds: [
        {
          id: 'W-2026-008',
          location: 'Right Ankle',
          type: 'Pressure Ulcer',
          stage: 'Stage 2',
          status: 'Improving',
          onsetDate: 'Sep 02, 2026',
          lastAssessment: 'Sep 29, 2026',
          nextDue: 'Oct 06, 2026',
          size: '1.5 × 1.2 × 0.2',
          origin: 'Facility-Acquired',
          pushTrend: [
            { week: 'Week 1', score: 8 },
            { week: 'Week 2', score: 7 },
            { week: 'Week 3', score: 6 }
          ],
          currentPushScore: 6,
          pushTrendDescription: 'Improving',
          linkedOrders: ['Hydrocellular foam dressing', 'Ankle offloading cushion'],
          progressNotes: [
            {
              id: 'N-15',
              date: 'Sep 29, 2026',
              author: 'Nurse Robert Chen, RN',
              note: 'Granulation progressing. Periwound intact. Dressing replaced with hydrocellular foam.'
            }
          ],
          photoCount: 2
        }
      ],
      resolvedWounds: []
    },
    {
      id: 'R-1010',
      name: 'Brown, Amelia',
      room: '103-C',
      age: 82,
      gender: 'Female',
      admissionDate: 'May 20, 2026',
      physicianOrders: [
        {
          category: 'SKIN CARE',
          orderText: 'Moisturizing skin barrier cream daily to bilateral heels'
        }
      ],
      activeWounds: [],
      resolvedWounds: [
        {
          id: 'W-2026-R01',
          location: 'Left Heel',
          type: 'Pressure Ulcer',
          stage: 'Stage 2',
          status: 'Resolved',
          onsetDate: 'Jun 01, 2026',
          lastAssessment: 'Aug 12, 2026',
          nextDue: 'Aug 12, 2026',
          size: '0 × 0 × 0',
          origin: 'Present on Admission',
          pushTrend: [
            { week: 'Week 1', score: 10 },
            { week: 'Week 2', score: 5 },
            { week: 'Week 3', score: 0 }
          ],
          currentPushScore: 0,
          pushTrendDescription: 'Resolved',
          linkedOrders: ['Protective skin barrier daily'],
          progressNotes: [
            {
              id: 'N-16',
              date: 'Aug 12, 2026',
              author: 'Dr. Emily Vance, MD',
              note: 'Complete closure achieved. Healed with intact epithelial tissue. Wound marked resolved.'
            }
          ],
          photoCount: 3,
          resolvedDate: 'Aug 12, 2026',
          daysToClosure: 72
        }
      ]
    }
  ];

  getResidents(): Observable<ResidentProfile[]> {
    return of(this.residents);
  }

  getResidentByNameOrRoom(query: string): Observable<ResidentProfile> {
    const q = (query || '').toLowerCase().trim();
    const qClean = q.replace(/^room\s+/, '').trim();

    // 1. Direct name match or substring match on name
    let found = this.residents.find((r) => {
      const rName = r.name.toLowerCase();
      return rName === q || rName.includes(q) || q.includes(rName);
    });

    // 2. Last name match (e.g., "stark", "parker", "wilson", "singh", "chen", "garcia", "brown")
    if (!found) {
      found = this.residents.find((r) => {
        const lastName = r.name.toLowerCase().split(',')[0].trim();
        return q.includes(lastName) || lastName.includes(q);
      });
    }

    // 3. Wound ID match
    if (!found) {
      found = this.residents.find(
        (r) =>
          r.activeWounds.some((w) => w.id.toLowerCase() === q || q.includes(w.id.toLowerCase())) ||
          r.resolvedWounds.some((w) => w.id.toLowerCase() === q || q.includes(w.id.toLowerCase()))
      );
    }

    // 4. Resident ID match
    if (!found) {
      found = this.residents.find((r) => r.id.toLowerCase() === q);
    }

    // 5. Room match
    if (!found) {
      found = this.residents.find((r) => {
        const rRoom = r.room.toLowerCase().replace(/^room\s+/, '').trim();
        return rRoom === qClean || qClean.includes(rRoom);
      });
    }

    // Default to Holmes, Sherlock if not found
    return of(found ?? this.residents[0]);
  }

  addProgressNote(residentId: string, woundId: string, noteText: string): Observable<boolean> {
    const res = this.residents.find((r) => r.id === residentId);
    if (!res) return of(false);
    const wound = res.activeWounds.find((w) => w.id === woundId);
    if (!wound) return of(false);
    wound.progressNotes.unshift({
      id: 'N-' + Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      author: 'Clinical Staff, RN',
      note: noteText
    });
    return of(true);
  }

  addPhysicianOrder(residentId: string, category: string, orderText: string): Observable<boolean> {
    const res = this.residents.find((r) => r.id === residentId);
    if (!res) return of(false);
    res.physicianOrders.push({ category, orderText });
    return of(true);
  }

  removePhysicianOrder(residentId: string, orderIndex: number): Observable<boolean> {
    const res = this.residents.find((r) => r.id === residentId);
    if (!res || !res.physicianOrders) return of(false);
    res.physicianOrders.splice(orderIndex, 1);
    return of(true);
  }
}
