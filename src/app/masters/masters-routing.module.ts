import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'companyprofilemaster',
    component: CompanyprofileMasterComponent,
    data: {
      title: 'Company Profile'
    },
  },
  {
    path: 'locationmaster',
    component: LocationMasterComponent,
    data: {
      title: 'Location Master'
    }
  },
  {
    path: 'customermaster',
    component: CustomerMasterComponent,
    data: {
      title: 'Customer Msater'
    }
  },
  {
    path: 'suppliermaster',
    component: SupplierMasterComponent,
    data: {
      title: 'Supplier Master'
    }
  },
  {
    path: 'employeemaster',
    component: EmployeeMasterComponent,
    data: {
      title: 'Employee Master'
    }
  },
  {
    
    path: 'eggsrangemaster',
    component: EggsrangeMasterComponent,
    data: {
      title: 'Eggs Range'
    }
  },
  {
    path: 'vaccinationmaster',
    component: VaccinationMasterComponent,
    data: {
      title: 'Vaccination Master'
    }
  },
  {
    path: 'feedmaster',
    component: FeedMasterComponent,
    data: {
      title: 'Feed Master'
    }
  },
  {
    path: 'productmaster',
    component: ProductMasterComponent,
    data: {
      title: 'Product Master'
    }
  },
  {
    path: 'planmaster',
    component: PlanMasterComponent,
    data: {
      title: 'Plan Master'
    }
  },
  {
    path: 'shedcreationmaster',
    component: ShedcreationMasterComponent,
    data: {
      title: 'Shed Creation Master'
    }
  },
  {
    path: 'bankmaster',
    component: BankMasterComponent,
    data: {
      title: 'Bank Master'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
