import { Component, computed, signal } from '@angular/core';
import { SharedService } from 'nosbor-shared-testing'

@Component({
  selector: 'app-inicial-dash',
  templateUrl: './inicial-dash.component.html',
  styleUrls: ['./inicial-dash.component.scss'],
})
export class InicialDashComponent {
  constructor(public sharedService: SharedService) {} 

  protected count = signal(0);
  protected valueCount = this.count.asReadonly();
  protected computed = computed(() => this.count() * 2);

  toIncrementSignal() {
    this.count.update((value) => value + 1);
  }

  toDecrementValue() {
    this.sharedService.decrement();
  }


}
