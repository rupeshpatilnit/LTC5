import { BodyRegion } from '../models/body-region.model';

export const OTHER_LOCATION_ID = 'other';

/**
 * Anatomical body regions for wound care documentation.
 *
 * Front regions are derived from male-front-body.svg (viewBox="0 0 241 469").
 * Back regions are mapped to the dorsal anatomical view (viewBox="0 0 200 530").
 */
export const BODY_REGIONS: BodyRegion[] = [
  // ── HEAD & NECK (front) ──────────────────────────────
  {
    id: 'head',
    displayName: 'Head',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Head',
    svgPath: 'M106 4 C96 6 91 15 91 30 L93 48 C95 61 102 70 112 73 C122 70 129 61 131 48 L133 30 C133 15 128 6 118 4 Z'
  },
  {
    id: 'neck',
    displayName: 'Neck',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Neck',
    svgPath: 'M100 64 Q112 76 124 64 L127 84 Q112 93 97 84 Z'
  },

  // ── SHOULDERS (front) ────────────────────────────────
  {
    id: 'rightShoulder',
    displayName: 'Right Shoulder',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Shoulder',
    svgPath: 'M97 77 C78 80 62 87 56 101 L76 115 C81 100 92 94 103 92 Z'
  },
  {
    id: 'leftShoulder',
    displayName: 'Left Shoulder',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Shoulder',
    svgPath: 'M127 77 C146 80 162 87 168 101 L148 115 C143 100 132 94 121 92 Z'
  },

  // ── CHEST & ABDOMEN (front) ──────────────────────────
  {
    id: 'chestAbdomen',
    displayName: 'Chest/Abdomen',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Chest/Abdomen',
    svgPath: 'M77 90 Q112 79 147 90 L157 157 Q141 177 112 178 Q83 177 67 157 Z'
  },
  {
    id: 'abdomen',
    displayName: 'Abdomen',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Abdomen',
    svgPath: 'M68 149 Q112 163 156 149 L162 207 Q112 220 62 207 Z'
  },

  // ── ARMS & ELBOWS (front) ────────────────────────────
  {
    id: 'rightUpperArm',
    displayName: 'Right Upper Arm',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Upper Arm',
    svgPath: 'M55 98 Q68 91 77 105 L66 165 L43 162 Z'
  },
  {
    id: 'leftUpperArm',
    displayName: 'Left Upper Arm',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Upper Arm',
    svgPath: 'M169 98 Q156 91 147 105 L158 165 L181 162 Z'
  },
  {
    id: 'rightElbow',
    displayName: 'Right Elbow',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Elbow',
    svgPath: 'M41 157 Q54 151 67 163 L62 182 Q49 188 36 178 Z'
  },
  {
    id: 'leftElbow',
    displayName: 'Left Elbow',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Elbow',
    svgPath: 'M183 157 Q170 151 157 163 L162 182 Q175 188 188 178 Z'
  },
  {
    id: 'rightLowerArm',
    displayName: 'Right Lower Arm',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Lower Arm',
    svgPath: 'M35 173 L62 180 L48 225 L24 218 Z'
  },
  {
    id: 'leftLowerArm',
    displayName: 'Left Lower Arm',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Lower Arm',
    svgPath: 'M189 173 L162 180 L176 225 L200 218 Z'
  },
  {
    id: 'rightForearm',
    displayName: 'Right Forearm',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Forearm',
    svgPath: 'M35 173 L62 180 L48 225 L24 218 Z'
  },
  {
    id: 'leftForearm',
    displayName: 'Left Forearm',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Forearm',
    svgPath: 'M189 173 L162 180 L176 225 L200 218 Z'
  },

  // ── HANDS (front) ────────────────────────────────────
  {
    id: 'rightHand',
    displayName: 'Right Hand',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Hand',
    svgPath: 'M22 214 Q7 223 13 253 Q25 264 38 241 L48 221 Z'
  },
  {
    id: 'leftHand',
    displayName: 'Left Hand',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Hand',
    svgPath: 'M202 214 Q217 223 211 253 Q199 264 186 241 L176 221 Z'
  },

  // ── HIPS & PELVIS (front) ────────────────────────────
  {
    id: 'rightHip',
    displayName: 'Right Hip',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Hip',
    svgPath: 'M62 201 Q84 212 110 210 L106 263 Q82 271 59 262 Z'
  },
  {
    id: 'leftHip',
    displayName: 'Left Hip',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Hip',
    svgPath: 'M162 201 Q140 212 114 210 L118 263 Q142 271 165 262 Z'
  },

  // ── UPPER LEGS / THIGHS (front) ──────────────────────
  {
    id: 'rightUpperLeg',
    displayName: 'Right Upper Leg',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Upper Leg',
    svgPath: 'M59 255 Q82 267 106 260 L103 328 Q81 338 57 328 Z'
  },
  {
    id: 'leftUpperLeg',
    displayName: 'Left Upper Leg',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Upper Leg',
    svgPath: 'M165 255 Q142 267 118 260 L121 328 Q143 338 167 328 Z'
  },

  // ── KNEES (front) ────────────────────────────────────
  {
    id: 'rightKnee',
    displayName: 'Right Knee',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Knee',
    svgPath: 'M57 320 Q80 334 103 321 L103 360 Q79 370 56 360 Z'
  },
  {
    id: 'leftKnee',
    displayName: 'Left Knee',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Knee',
    svgPath: 'M167 320 Q144 334 121 321 L121 360 Q145 370 168 360 Z'
  },

  // ── LOWER LEGS (front) ───────────────────────────────
  {
    id: 'rightLowerLeg',
    displayName: 'Right Lower Leg',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Lower Leg',
    svgPath: 'M56 353 L103 353 L98 426 Q78 438 58 426 Z'
  },
  {
    id: 'leftLowerLeg',
    displayName: 'Left Lower Leg',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Lower Leg',
    svgPath: 'M121 353 L168 353 L166 426 Q146 438 126 426 Z'
  },

  // ── ANKLES (front) ───────────────────────────────────
  {
    id: 'rightAnkle',
    displayName: 'Right Ankle',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Ankle',
    svgPath: 'M58 417 L98 417 L92 452 L56 450 Z'
  },
  {
    id: 'leftAnkle',
    displayName: 'Left Ankle',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Ankle',
    svgPath: 'M126 417 L166 417 L168 450 L132 452 Z'
  },

  // ── FEET (front) ─────────────────────────────────────
  {
    id: 'rightFoot',
    displayName: 'Right Foot',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Foot',
    svgPath: 'M55 445 L92 447 L89 468 L49 468 Z'
  },
  {
    id: 'leftFoot',
    displayName: 'Left Foot',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Foot',
    svgPath: 'M132 447 L169 445 L175 468 L135 468 Z'
  },

  // ── BACK VIEW REGIONS ────────────────────────────────
  {
    id: 'backOfHead',
    displayName: 'Back of Head',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Back of Head',
    svgPath: 'M 78 8 A 22 26 0 1 1 122 8 A 22 26 0 1 1 78 8 Z'
  },
  {
    id: 'upperBack',
    displayName: 'Upper Back',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Upper Back',
    svgPath: 'M 86 96 L 114 96 L 114 154 L 86 154 Z'
  },
  {
    id: 'lowerBack',
    displayName: 'Lower Back',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Lower Back',
    svgPath: 'M 82 154 L 118 154 Q 120 180 120 206 Q 120 228 118 244 L 82 244 Q 80 228 80 206 Q 80 180 82 154 Z'
  },
  {
    id: 'sacrum',
    displayName: 'Sacrum',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Sacrum',
    svgPath: 'M 84 244 L 116 244 Q 118 258 118 268 Q 118 276 114 282 L 86 282 Q 82 276 82 268 Q 82 258 84 244 Z'
  },
  {
    id: 'coccyx',
    displayName: 'Coccyx',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Coccyx',
    svgPath: 'M 92 282 L 108 282 Q 110 288 110 294 Q 110 300 106 302 L 94 302 Q 90 300 90 294 Q 90 288 92 282 Z'
  },
  {
    id: 'rightButtock',
    displayName: 'Right Buttock',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Buttock',
    svgPath: 'M 100 282 Q 112 284 118 284 Q 122 296 122 310 Q 122 324 118 334 L 106 336 L 100 334 Q 102 318 102 302 Q 102 290 100 282 Z'
  },
  {
    id: 'leftButtock',
    displayName: 'Left Buttock',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Buttock',
    svgPath: 'M 100 282 Q 88 284 82 284 Q 78 296 78 310 Q 78 324 82 334 L 94 336 L 100 334 Q 98 318 98 302 Q 98 290 100 282 Z'
  },
  {
    id: 'rightUpperLegBack',
    displayName: 'Right Upper Leg (Back)',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Upper Leg Back',
    svgPath: 'M 100 334 L 108 336 Q 114 352 116 370 Q 118 390 116 408 Q 114 420 110 424 L 100 424 Q 106 410 108 392 Q 110 372 106 352 Z'
  },
  {
    id: 'leftUpperLegBack',
    displayName: 'Left Upper Leg (Back)',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Upper Leg Back',
    svgPath: 'M 100 334 L 92 336 Q 86 352 84 370 Q 82 390 84 408 Q 86 420 90 424 L 100 424 Q 94 410 92 392 Q 90 372 94 352 Z'
  },
  {
    id: 'rightCalf',
    displayName: 'Right Calf',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Calf',
    svgPath: 'M 100 462 L 110 462 Q 114 478 114 496 Q 114 508 110 514 L 100 514 L 90 514 Q 86 508 86 496 Q 86 478 90 462 Z'
  },
  {
    id: 'leftCalf',
    displayName: 'Left Calf',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Calf',
    svgPath: 'M 100 462 L 90 462 Q 86 478 86 496 Q 86 508 90 514 L 100 514 L 110 514 Q 114 508 114 496 Q 114 478 110 462 Z'
  },
  {
    id: 'rightHeel',
    displayName: 'Right Heel',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Heel',
    svgPath: 'M 100 514 L 112 514 Q 116 518 116 524 Q 114 512 100 514 Z'
  },
  {
    id: 'leftHeel',
    displayName: 'Left Heel',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Heel',
    svgPath: 'M 100 514 L 88 514 Q 84 518 84 524 Q 86 512 100 514 Z'
  }
];

export const BODY_REGION_LOOKUP = new Map<string, BodyRegion>(
  BODY_REGIONS.map((region) => [region.id, region])
);
