import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace/workspace.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: "",
    loadChildren:() => import('../feature/feature.module').then((m)=>m.FeatureModule)
  },
  {
    path:"auth",
    loadChildren:() => import('../core/authentication/authentication.module').then((m)=>m.AuthenticationModule)
    
  }
];

@NgModule({
  declarations: [
    WorkspaceComponent,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    BreadCrumbComponent
  ],
  providers:[
    
  ]
})
export class CoreModule {

 }
