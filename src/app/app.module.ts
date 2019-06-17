import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';


// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorDirective } from "./directives/error-directive";
import { TokenInterceptor } from "./services/token.interceptor";
import { AuthService } from "./services/auth.service";
import { ValidationBorderModule } from './validation-border';
import { CompanyprofileMasterComponent } from './masters/companyprofile-master/companyprofile-master.component';
import { LocationMasterComponent } from './masters/location-master/location-master.component';
import { CustomerMasterComponent } from './masters/customer-master/customer-master.component';
import { SupplierMasterComponent } from './masters/supplier-master/supplier-master.component';
import { EggsrangeMasterComponent } from './masters/eggsrange-master/eggsrange-master.component';
import { EmployeeMasterComponent } from './masters/employee-master/employee-master.component';
import { VaccinationMasterComponent } from './masters/vaccination-master/vaccination-master.component';
import { FeedMasterComponent } from './masters/feed-master/feed-master.component';
import { ProductMasterComponent } from './masters/product-master/product-master.component';
import { PlanMasterComponent } from './masters/plan-master/plan-master.component';
import { ShedcreationMasterComponent } from './masters/shedcreation-master/shedcreation-master.component';
import { BankMasterComponent } from './masters/bank-master/bank-master.component';
import { PurchaseBillComponent } from './purchase/purchase-bill/purchase-bill.component';
import { PurchaseReturnComponent } from './purchase/purchase-return/purchase-return.component';
import { SupplierPaymentComponent } from './purchase/supplier-payment/supplier-payment.component';
import { PurchaseDebitNoteComponent } from './purchase/purchase-debit-note/purchase-debit-note.component';
import { BookingOrderComponent } from './booking/booking-order/booking-order.component';
import { BookingCancelationComponent } from './booking/booking-cancelation/booking-cancelation.component';
import { BookingReconcilationComponent } from './booking/booking-reconcilation/booking-reconcilation.component';
import { StockAdjustmentComponent } from './booking/stock-adjustment/stock-adjustment.component';
import { StockTransferComponent } from './booking/stock-transfer/stock-transfer.component';
import { SalesComponent } from './sales/sales/sales.component';
import { SalesReceiptComponent } from './sales/sales-receipt/sales-receipt.component';
import { ChikEggsBillingComponent } from './sales/chik-eggs-billing/chik-eggs-billing.component';
import { SalesReturnPaymentComponent } from './sales/sales-return-payment/sales-return-payment.component';
import { InwardComponent } from './sales/inward/inward.component';
import { OutwardDetailsComponent } from './sales/outward-details/outward-details.component';
import { WastageMortalityAddComponent } from './sales/wastage-mortality-add/wastage-mortality-add.component';
import { IncomeDetailsComponent } from './income&expenses/income-details/income-details.component';
import { OfficeExpensesComponent } from './income&expenses/office-expenses/office-expenses.component';
import { ExpensesLedgerComponent } from './income&expenses/expenses-ledger/expenses-ledger.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationBorderModule.forRoot({
      borderStyle: 'solid',
      borderWidth: '1px',
      colors: {
        VALID: 'green',
        INVALID: 'red',
        PENDING: 'yellow',
        DISABLED: 'silver'
      }
    })
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    ErrorDirective,
    CompanyprofileMasterComponent,
    LocationMasterComponent,
    CustomerMasterComponent,
    SupplierMasterComponent,
    EggsrangeMasterComponent,
    EmployeeMasterComponent,
    VaccinationMasterComponent,
    FeedMasterComponent,
    ProductMasterComponent,
    PlanMasterComponent,
    ShedcreationMasterComponent,
    BankMasterComponent,
    PurchaseBillComponent,
    PurchaseReturnComponent,
    SupplierPaymentComponent,
    PurchaseDebitNoteComponent,
    BookingOrderComponent,
    BookingCancelationComponent,
    BookingReconcilationComponent,
    StockAdjustmentComponent,
    StockTransferComponent,
    SalesComponent,
    SalesReceiptComponent,
    ChikEggsBillingComponent,
    SalesReturnPaymentComponent,
    InwardComponent,
    OutwardDetailsComponent,
    WastageMortalityAddComponent,
    IncomeDetailsComponent,
    OfficeExpensesComponent,
    ExpensesLedgerComponent

  ],
  providers: [
    AuthService,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
