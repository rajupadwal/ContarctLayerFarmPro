import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { CompanyprofileMasterComponent } from './companyprofile-master/companyprofile-master.component';
import { LocationMasterComponent } from './location-master/location-master.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { SupplierMasterComponent } from './supplier-master/supplier-master.component';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { EggsrangeMasterComponent } from './eggsrange-master/eggsrange-master.component';
import { VaccinationMasterComponent } from './vaccination-master/vaccination-master.component';
import { FeedMasterComponent } from './feed-master/feed-master.component';
import { ProductMasterComponent } from './product-master/product-master.component';
import { PlanMasterComponent } from './plan-master/plan-master.component';
import { ShedcreationMasterComponent } from './shedcreation-master/shedcreation-master.component';
import { BankMasterComponent } from './bank-master/bank-master.component';

import { MastersRoutingModule } from './masters-routing.module';
 //import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [MastersRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    CompanyprofileMasterComponent,
    LocationMasterComponent,
    CustomerMasterComponent,
    SupplierMasterComponent,
    EmployeeMasterComponent,
    EggsrangeMasterComponent,
    VaccinationMasterComponent,
    FeedMasterComponent,
    ProductMasterComponent,
    PlanMasterComponent,
    ShedcreationMasterComponent,
    BankMasterComponent
  ],
//   providers: [AuthenticationService]
  
})
export class MastersModule { }
