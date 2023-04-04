import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BreadCrumbComponent } from '../core/bread-crumb/bread-crumb.component';
import { AddressComponent } from './address/address.component';
import { CommonErrorDisplayComponent } from './common-error-display/common-error-display.component';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { ToTitleCasePipe } from '../core/pipe/to-title-case.pipe';

import { NumericTextBoxModule, TextBoxModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { ColumnChooserService, CommandColumnService, DetailRowService, EditService, ExcelExportService, FilterService, GridModule, GroupService, PageService, PdfExportService, ReorderService, ResizeService, SearchService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';

import { CategoryService, ChartModule, ColumnSeriesService, DataLabelService, DateTimeService, LegendService, LineSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, SplineAreaSeriesService, SplineSeriesService, StackingLineSeriesService, StepLineSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { TabModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';



@NgModule({
  declarations: [
    AddressComponent,
    CommonErrorDisplayComponent,
    FormButtonsComponent,
    FormHeaderComponent,

  ],
  imports: [
    CommonModule,
    TextBoxModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
  ],
  exports:[
    AddressComponent,
    CommonErrorDisplayComponent,
    FormButtonsComponent,
    FormHeaderComponent,
    TreeViewModule,
    TabModule,
    NgxSpinnerModule,
    
    ChartModule,

    NgbModule,
    ButtonModule,
    GridModule,
    DialogModule,
    CheckBoxAllModule,
    TimePickerModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule,
    TextBoxModule,
    DropDownListModule,

    UploaderModule,

    DatePickerModule,
    NumericTextBoxModule,

    DatePipe,
    MultiSelectModule
  ],
 

  providers:[
    ToTitleCasePipe,
      DetailRowService,
      NgxSpinnerService,
      PageService,
      SortService,
      FilterService,
      GroupService,
      ReorderService,
      ResizeService,
      ToolbarService,
      SearchService,
      CommandColumnService,
      EditService,
      ColumnChooserService,
      ExcelExportService,
      PdfExportService,
      ToTitleCasePipe,
      CategoryService, 
      LegendService, 
      TooltipService, 
      DataLabelService, 
      LineSeriesService,
      StepLineSeriesService,
      SplineSeriesService,
      StackingLineSeriesService,
      DateTimeService,
      SplineAreaSeriesService, 
      MultiColoredLineSeriesService, 
      ParetoSeriesService, 
      ColumnSeriesService, 
      DatePipe
  
   
    ],
})
export class SharedModule { }
