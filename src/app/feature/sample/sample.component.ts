import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "../Core/BaseComponent";
import country from 'src/app/core/models/list-json/country-list.json';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent extends BaseComponent implements OnInit{
  /**
   *
   */
  @Input() 
  override isModal: boolean = false;
  @Output()
  override onCancelModal: EventEmitter<any> = new EventEmitter();
  @Output()
  override onSubmitModal: EventEmitter<any> = new EventEmitter();

  public fields: Object = { text: 'text', iconCss: 'Class', value: 'value' };
  public Regionfields: Object = { text: 'value', value: 'value' };
  data: {}[] = [];

  constructor() {   
    super();
    this.dataForm = this.fb.group({
      portNumber: ['', Validators.required],
      country: ['', Validators.required],
      region: ['', Validators.required],
      vollume: ['', Validators.required],
    });
    this.submitEndpoint = "Port";
    this.hasNoGrid =true;
    this.patchRoute = "Port";
    this.dropdownDataList = [{ url:"lookup/region", type:"region"},
    ]
  }
  ngOnInit(): void {
    super.onInit();
    country.forEach((ele) => {
      this.data.push({
        Class: `fi fi-${ele.Code.toLowerCase()}`,
        text: ele.Name,
        value: ele.Code,
      });
    });
  }

}

