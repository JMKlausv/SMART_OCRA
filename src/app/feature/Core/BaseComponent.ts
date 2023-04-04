import { EventEmitter, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CrudService } from 'src/app/core/services/crud.service';
import { HelpersService } from 'src/app/core/services/helpers.service';
import { AppInjector } from './AppInjector';

export { Component, OnInit, ViewChild } from '@angular/core';
export class BaseComponent {
  formSubmitted: boolean = false;
  isSending: boolean = false;
  id: number;
  dataForm: FormGroup;
  submitEndpoint: string;
  hasNoGrid:boolean=false;
  isModal: boolean=false;
  patchRoute: string;
  onCancelModal = new EventEmitter();
  onSubmitModal = new EventEmitter();
  dropdownDataList: Array<{url: string, type: string}> =[];


  protected spinner: NgxSpinnerService;
  protected crudService: CrudService;
  protected activatedRoute: ActivatedRoute;
  protected helpersService: HelpersService;
  protected fb : FormBuilder;

  constructor() {
    const injector = AppInjector.getInjector();
    this.spinner = injector.get(NgxSpinnerService);
    this.crudService = injector.get(CrudService);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.helpersService = injector.get(HelpersService);
    this.fb = injector.get(FormBuilder);
     
    this.id = this.activatedRoute.snapshot.params["id"];
  }
  onInit(): void {
    this.dropdownDataList.forEach(d =>{

      this.crudService.loadDropDownData(d)
    })
    if (this.id != undefined) {
      this.isSending = true;
      this.spinner.show();
      this.crudService.get(`${this.patchRoute}/${this.id}`, { Id: this.id }).subscribe((res) => {
        this.isSending = false;
        this.dataForm.patchValue(res)
      },
        (error) => { this.isSending = false }
      )
    }
  }

  getControl(name):FormControl {
    return this.dataForm.get(name) as FormControl; 
   }
  
   getFormArray(name):FormArray {
    return this.dataForm.get(name) as FormArray; 
   }
  prepareData() {
  }
  onDataSubmitted() {
    this.onSubmitModal.emit();
    this.dataForm.reset()
  }
  
  onSubmit() {
    console.log("is modal...")
    console.log(this.isModal)
    this.prepareData();
    if (this.dataForm.valid) {
      this.formSubmitted = true;
      !this.id ? this.dataForm.removeControl('id') : null;
      this.crudService.submit({
        endpoint: this.submitEndpoint
        , payload: this.dataForm.value, isModal: this.isModal
      }, this.id ?? null, this.hasNoGrid, this.onDataSubmitted.bind(this));

    } else {
      this.formSubmitted = true;
      this.helpersService.scrollToTheError(this.dataForm)
    }

  }

  onCancel() {
    this.onCancelModal.emit();
  }

}