import { BodyRegion } from '../models/body-region.model';

export const OTHER_LOCATION_ID = 'other';

/**
 * Anatomical body regions for wound care documentation.
 *
 * Front regions are derived from male-front-body.svg (viewBox="0 0 241 469").
 * Back regions are mapped to male-back-body.svg (viewBox="0 0 253 387").
 * All region boundaries are clean, precise, and anatomically aligned.
 */
export const BODY_REGIONS: BodyRegion[] = [
  // ── HEAD & NECK (front) ──────────────────────────────
  {
    id: 'head',
    displayName: 'Head',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Head',
    svgPath: 'M120 6 C105 6 98 18 98 32 C97 42 98 52 104 58 C108 63 114 65 120 65 C126 65 132 63 136 58 C142 52 143 42 142 32 C142 18 135 6 120 6 Z'
  },
  {
    id: 'neck',
    displayName: 'Neck',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Neck',
    svgPath: 'M104 64 C110 65 115 65 120 65 C125 65 130 65 136 64 L142 85 C134 86 127 87 120 87 C113 87 106 86 98 85 Z'
  },

  // ── SHOULDERS ────────────────────────────────────────
  {
    id: 'rightShoulder',
    displayName: 'Right Shoulder',
    view: 'both',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Shoulder',
    svgPath: 'M98 85 C85 85 71 88 61 89 C57 93 56 102 56 114 L78 116 C84 104 91 94 103 89 Z'
  },
  {
    id: 'leftShoulder',
    displayName: 'Left Shoulder',
    view: 'both',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Shoulder',
    svgPath: 'M142 85 C155 85 169 88 179 89 C183 93 184 102 184 114 L162 116 C156 104 149 94 137 89 Z'
  },

  // ── CHEST & ABDOMEN (front) ──────────────────────────
  {
    id: 'chestAbdomen',
    displayName: 'Chest/Abdomen',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Chest/Abdomen',
    svgPath: 'M103 89 C108 87 114 86 120 86 C126 86 132 87 137 89 L162 116 C160 130 159 146 157 158 C144 157 132 159 120 159 C108 159 96 157 83 158 C81 146 80 130 78 116 Z'
  },
  {
    id: 'abdomen',
    displayName: 'Abdomen',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Abdomen',
    svgPath: 'M83 158 C96 157 108 159 120 159 C132 159 144 157 157 158 L161 202 C148 203 134 204 120 204 C106 204 92 203 79 202 C79 187 81 172 83 158 Z'
  },

  // ── ARMS & ELBOWS ────────────────────────────────────
  {
    id: 'rightUpperArm',
    displayName: 'Right Upper Arm',
    view: 'both',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Upper Arm',
    svgPath: 'M56 114 C53 128 51 144 50 160 L68 160 C71 145 74 130 78 116 Z'
  },
  {
    id: 'leftUpperArm',
    displayName: 'Left Upper Arm',
    view: 'both',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Upper Arm',
    svgPath: 'M184 114 C187 128 189 144 190 160 L172 160 C169 145 166 130 162 116 Z'
  },
  {
    id: 'rightElbow',
    displayName: 'Right Elbow',
    view: 'both',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Elbow',
    svgPath: 'M50 160 C47 167 43 174 43 182 L62 182 C64 175 66 167 68 160 Z'
  },
  {
    id: 'leftElbow',
    displayName: 'Left Elbow',
    view: 'both',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Elbow',
    svgPath: 'M190 160 C193 167 197 174 197 182 L178 182 C176 175 174 167 172 160 Z'
  },
  {
    id: 'rightLowerArm',
    displayName: 'Right Lower Arm',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Lower Arm',
    svgPath: 'M43 182 C39 194 36 206 35 218 L51 218 C55 206 59 194 62 182 Z'
  },
  {
    id: 'leftLowerArm',
    displayName: 'Left Lower Arm',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Lower Arm',
    svgPath: 'M197 182 C201 194 204 206 205 218 L189 218 C185 206 181 194 178 182 Z'
  },

  // ── HANDS ────────────────────────────────────────────
  {
    id: 'rightHand',
    displayName: 'Right Hand',
    view: 'both',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Hand',
    svgPath: 'M35 218 L51 218 C48 232 44 248 37 264 C30 264 24 256 16 242 C14 233 22 222 35 218 Z'
  },
  {
    id: 'leftHand',
    displayName: 'Left Hand',
    view: 'both',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Hand',
    svgPath: 'M205 218 L189 218 C192 232 196 248 203 264 C210 264 216 256 224 242 C226 233 218 222 205 218 Z'
  },

  // ── HIPS & PELVIS (front) ────────────────────────────
  {
    id: 'rightHip',
    displayName: 'Right Hip',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Hip',
    svgPath: 'M79 202 C75 220 73 242 72 263 L111 263 C111 243 112 223 112 204 C101 204 90 203 79 202 Z'
  },
  {
    id: 'leftHip',
    displayName: 'Left Hip',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Hip',
    svgPath: 'M161 202 C165 220 167 242 168 263 L129 263 C129 243 128 223 128 204 C139 204 150 203 161 202 Z'
  },

  // ── UPPER LEGS / THIGHS (front) ──────────────────────
  {
    id: 'rightUpperLeg',
    displayName: 'Right Upper Leg',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Upper Leg',
    svgPath: 'M72 263 C75 284 78 306 77 328 L104 328 C108 306 110 284 111 263 Z'
  },
  {
    id: 'leftUpperLeg',
    displayName: 'Left Upper Leg',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Upper Leg',
    svgPath: 'M168 263 C165 284 162 306 163 328 L136 328 C132 306 130 284 129 263 Z'
  },

  // ── KNEES (front) ────────────────────────────────────
  {
    id: 'rightKnee',
    displayName: 'Right Knee',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Knee',
    svgPath: 'M77 328 C76 338 75 350 78 362 L105 362 C106 350 105 338 104 328 Z'
  },
  {
    id: 'leftKnee',
    displayName: 'Left Knee',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Knee',
    svgPath: 'M163 328 C164 338 165 350 162 362 L135 362 C134 350 135 338 136 328 Z'
  },

  // ── LOWER LEGS (front) ───────────────────────────────
  {
    id: 'rightLowerLeg',
    displayName: 'Right Lower Leg',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Lower Leg',
    svgPath: 'M78 362 C76 380 79 402 82 424 L98 424 C100 402 104 380 105 362 Z'
  },
  {
    id: 'leftLowerLeg',
    displayName: 'Left Lower Leg',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Lower Leg',
    svgPath: 'M162 362 C164 380 161 402 158 424 L142 424 C140 402 136 380 135 362 Z'
  },

  // ── ANKLES (front) ───────────────────────────────────
  {
    id: 'rightAnkle',
    displayName: 'Right Ankle',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Ankle',
    svgPath: 'M82 424 C79 430 76 438 74 446 L96 446 C96 438 97 430 98 424 Z'
  },
  {
    id: 'leftAnkle',
    displayName: 'Left Ankle',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Ankle',
    svgPath: 'M158 424 C161 430 164 438 166 446 L144 446 C144 438 143 430 142 424 Z'
  },

  // ── FEET (front) ─────────────────────────────────────
  {
    id: 'rightFoot',
    displayName: 'Right Foot',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Foot',
    svgPath: 'M74 446 C71 450 69 456 69 462 L94 462 C96 456 96 450 96 446 Z'
  },
  {
    id: 'leftFoot',
    displayName: 'Left Foot',
    view: 'front',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Foot',
    svgPath: 'M166 446 C169 450 171 456 171 462 L146 462 C144 456 144 450 144 446 Z'
  },

  // ── BACK VIEW REGIONS ────────────────────────────────
  {
    id: 'backOfHead',
    displayName: 'Back of Head',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Back of Head',
    svgPath: 'M118 6 C106 6 100 15 100 28 C100 40 105 46 112 46 L124 46 C131 46 136 40 136 28 C136 15 130 6 118 6 Z'
  },
  {
    id: 'backOfNeck',
    displayName: 'Back of Neck',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Back of Neck',
    svgPath: 'M112 46 L104 68 C110 70 126 70 132 68 L124 46 Z'
  },
  {
    id: 'upperBack',
    displayName: 'Upper Back',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Upper Back',
    svgPath: 'M104 68 C110 70 126 70 132 68 C142 80 150 92 154 104 L164 138 C142 142 94 142 72 138 L82 104 C86 92 94 80 104 68 Z'
  },
  {
    id: 'lowerBack',
    displayName: 'Lower Back',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Lower Back',
    svgPath: 'M72 138 C94 142 142 142 164 138 L156 195 C138 198 98 198 80 195 Z'
  },
  {
    id: 'sacrum',
    displayName: 'Sacrum',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Sacrum',
    svgPath: 'M110 195 L126 195 L123 216 L113 216 Z'
  },
  {
    id: 'coccyx',
    displayName: 'Coccyx',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Coccyx',
    svgPath: 'M113 216 L123 216 L120 230 L116 230 Z'
  },
  {
    id: 'rightButtock',
    displayName: 'Right Buttock',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Buttock',
    svgPath: 'M80 195 L110 195 L113 216 L116 230 C104 233 92 232 82 230 C80 218 80 206 80 195 Z'
  },
  {
    id: 'leftButtock',
    displayName: 'Left Buttock',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Buttock',
    svgPath: 'M126 195 L156 195 C156 206 156 218 154 230 C144 232 132 233 120 230 L123 216 L126 195 Z'
  },
  {
    id: 'rightPosteriorThigh',
    displayName: 'Right Posterior Thigh',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Posterior Thigh',
    svgPath: 'M82 230 C90 233 102 233 111 230 L107 262 C98 264 92 264 84 262 C84 250 83 240 82 230 Z'
  },
  {
    id: 'leftPosteriorThigh',
    displayName: 'Left Posterior Thigh',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Posterior Thigh',
    svgPath: 'M125 230 C134 233 146 233 154 230 C152 240 151 250 150 262 C142 264 136 264 127 262 L125 230 Z'
  },
  {
    id: 'rightUpperLegBack',
    displayName: 'Right Upper Leg (Back)',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Upper Leg Back',
    svgPath: 'M82 230 C90 233 102 233 111 230 L107 262 C98 264 92 264 84 262 C84 250 83 240 82 230 Z'
  },
  {
    id: 'leftUpperLegBack',
    displayName: 'Left Upper Leg (Back)',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Upper Leg Back',
    svgPath: 'M125 230 C134 233 146 233 154 230 C152 240 151 250 150 262 C142 264 136 264 127 262 L125 230 Z'
  },
  {
    id: 'rightPosteriorKnee',
    displayName: 'Right Posterior Knee',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Posterior Knee',
    svgPath: 'M84 262 C92 264 98 264 107 262 L106 278 C96 280 88 280 80 278 C81 272 82 267 84 262 Z'
  },
  {
    id: 'leftPosteriorKnee',
    displayName: 'Left Posterior Knee',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Posterior Knee',
    svgPath: 'M127 262 C136 264 142 264 150 262 C152 267 153 272 153 278 C145 280 137 280 128 278 L127 262 Z'
  },
  {
    id: 'rightCalf',
    displayName: 'Right Calf',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Calf',
    svgPath: 'M80 278 C88 280 96 280 106 278 C108 288 108 300 102 320 L99 345 C95 347 90 347 86 345 C82 325 78 305 78 290 C78 284 79 280 80 278 Z'
  },
  {
    id: 'leftCalf',
    displayName: 'Left Calf',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Calf',
    svgPath: 'M128 278 C137 280 145 280 153 278 C155 284 156 290 156 295 C154 315 152 330 147 345 C143 347 138 347 134 345 L131 320 C126 300 126 288 128 278 Z'
  },
  {
    id: 'rightHeel',
    displayName: 'Right Heel',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Right Heel',
    svgPath: 'M86 345 C90 347 95 347 99 345 L101 374 C96 376 88 376 77 372 C76 362 82 352 86 345 Z'
  },
  {
    id: 'leftHeel',
    displayName: 'Left Heel',
    view: 'back',
    diagramVariant: ['male', 'all'],
    formValue: 'Left Heel',
    svgPath: 'M134 345 C138 347 143 347 147 345 C152 352 157 362 156 372 C146 376 138 376 132 374 L134 345 Z'
  }
];

export const BODY_REGION_LOOKUP = new Map<string, BodyRegion>(
  BODY_REGIONS.map((region) => [region.id, region])
);
