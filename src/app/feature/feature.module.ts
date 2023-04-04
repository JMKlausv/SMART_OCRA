import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { RouterModule, Routes } from '@angular/router';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { gridData } from '../core/models/list-json/grid-data';
import { SharedModule } from '../shared/shared.module';
import { SampleContainerComponent } from './sample-container/sample-container.component';

const routes : Routes =[
  {
    path : "list",
    component: DynamicListComponent,
    data: { 
      formTitle:"ele.formTitle",
      page:"ele.page", 
      action: 'canView', 
      title: "ele.title".toUpperCase(), 
      breadCrumb: 'list', 
      gridInfo: gridData["lookup"] 
    },
    
  },
  {
    path:"sample",
    component: SampleContainerComponent
  }
]

@NgModule({
  declarations: [
    DynamicListComponent,
    SampleComponent,
    SampleContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FeatureModule { 
  
}
