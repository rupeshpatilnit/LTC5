import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WoundFilters } from '../../models/wound.model';
@Component({selector:'app-filter-panel',standalone:true,imports:[CommonModule,FormsModule],templateUrl:'./filter-panel.component.html',styleUrl:'./filter-panel.component.scss'})
export class FilterPanelComponent {
 @Input() filters!: WoundFilters; @Output() filtersChange=new EventEmitter<WoundFilters>(); @Output() newAssessment=new EventEmitter<void>();
 chips=['All Wounds','Pressure Ulcers','Surgical','Diabetic','Vascular','Worsening','Improving','New','Present on Admission','Facility-Acquired','Resolved Wounds'];
 selectChip(chip:string){this.filtersChange.emit({...this.filters,chip});}
 update(key:keyof WoundFilters,value:string){this.filtersChange.emit({...this.filters,[key]:value} as WoundFilters);}
 clearDates(){this.filtersChange.emit({...this.filters,fromDate:'',toDate:''});}
 clearAll(){this.filtersChange.emit({chip:'All Wounds',fromDate:'',toDate:'',dateField:'onsetDate',resident:''});}
}
