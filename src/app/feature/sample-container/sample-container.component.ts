import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-container',
  templateUrl: './sample-container.component.html',
  styleUrls: ['./sample-container.component.scss']
})
export class SampleContainerComponent {
onCancel(event: any){
  console.log("container on cancel emit")
}
}
