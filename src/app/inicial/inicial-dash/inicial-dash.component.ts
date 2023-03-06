import { Component } from '@angular/core';
import { CommonsService } from 'commons';

@Component({
  selector: 'app-inicial-dash',
  templateUrl: './inicial-dash.component.html',
  styleUrls: ['./inicial-dash.component.scss']
})
export class InicialDashComponent {
  constructor(public commonsService: CommonsService) {}

  increment(): void {
    this.commonsService.increment();
  }
}
