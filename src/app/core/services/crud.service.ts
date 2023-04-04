import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { DynamicListComponent } from 'src/app/feature/dynamic-list/dynamic-list.component';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class CrudService extends ApiService{
  dropDownData = {};
  deleting:boolean=false;

  constructor(  http: HttpClient, toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router:Router,
    private location: Location, 
    private _sanitize:DomSanitizer
    ) {
    super(http,toastr)
  }


  async submit({endpoint,payload,isModal=false}: any
    ,id?: any,hasNoGrid = false,callback?:Function){
    
    
    this.buttonSending.next(true);
    if(id){
      
      if(typeof id !== 'boolean') payload.id = id;
      
      this.put(endpoint,payload).subscribe({
      
        next:(res)=>{
          this.buttonSending.next(false);
          
          if(res.status){
              this.toast.success(res.message,'Success')
         
                !isModal ? this.location.back() : hasNoGrid ? this.router.navigateByUrl('') :()=>{
                 if(callback != undefined)
                  callback()
                } ;
              
          }else{
                this.toast.info(res.message,'Info')
                !isModal ? this.location.back() :  hasNoGrid ? this.router.navigateByUrl('') :()=>{
                  if(callback != undefined)
                   callback()
                 } ;
          }
          
        }, 
   
        }
      )
    }else{
       this.post(endpoint,payload).subscribe({
        next:(res)=>{
          this.buttonSending.next(false);
          if(res.status){
        
              this.toast.success(res.message,'Success')
              !isModal ? this.location.back() : hasNoGrid ? this.router.navigateByUrl('') : ()=>{
                 if(callback != undefined)
                  callback()
                } ;
            
          }else{
                this.toast.info(res.message,'Info')
                !isModal ? this.location.back() :  hasNoGrid ? this.router.navigateByUrl('') :()=>{
                 if(callback != undefined)
                  callback()
                } ;
          }
          
        }, 
   
        }
      )
    }
  }
  deleteRow(endpoint: any, com: DynamicListComponent,body: any): any {
   this.deleting=true;
   com.ejDialog.hide();
    this.delete(endpoint,null,body).subscribe({
      next:(res)=>{
        if (res) {
          com.feedGrid(com.dataApiUrl);
          this.toast.success(res.message, 'Success');
        
          // setTimeout(() => {
            this.deleting=false;
          // }, 1000);
        
        } 
     
      },
      error:(err)=>{
        com.ejDialog.hide();
        this.deleting=false;
      }

    })
  

}

loadDropDownData(dropdown : {url:string,type:string}){
  
  this.get(dropdown.url).subscribe((res)=>{
   this.dropDownData[dropdown.type] = res;

  })}

getImageById(url: string,id: string){
  let image = environment.api_url + url + id +`?time=${new Date()}`;
  return image;
}
}
