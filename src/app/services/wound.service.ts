import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wound } from '../models/wound.model';
@Injectable({ providedIn: 'root' })
export class WoundService {
  private http = inject(HttpClient);
  getWounds(): Observable<Wound[]> { return this.http.get<Wound[]>('assets/data/wounds.json'); }
}
