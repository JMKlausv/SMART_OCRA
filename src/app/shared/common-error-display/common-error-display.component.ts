import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-error-display',
  templateUrl: './common-error-display.component.html',
  styleUrls: ['./common-error-display.component.scss']
})
export class CommonErrorDisplayComponent implements OnInit {
  @Input() error:any;
  errorMessage:string | undefined;
  constructor() { 
   

  }

  ngOnInit(): void {

}

}
