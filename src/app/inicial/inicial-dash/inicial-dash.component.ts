import { Component } from '@angular/core';
import { SharedService } from '@shared';

@Component({
  selector: 'app-inicial-dash',
  templateUrl: './inicial-dash.component.html',
  styleUrls: ['./inicial-dash.component.scss']
})
export class InicialDashComponent {
  constructor(public sharedService: SharedService) {}

  decrement(): void {
    this.sharedService.decrement();
  }
}
