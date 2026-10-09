import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Wound } from '../../models/wound.model';

@Component({
  selector: 'app-wound-table',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './wound-table.component.html',
  styleUrl: './wound-table.component.scss'
})
export class WoundTableComponent {
  @Input() wounds: Wound[] = [];
  @Input() resolved = false;
  @Output() view = new EventEmitter<Wound>();
}
