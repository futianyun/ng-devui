import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'd-custom',
  templateUrl: './custom.component.html'
})
export class CustomComponent implements OnInit {
  values2 = ['Item1', 'Item2', 'Item3'];
  choose2 = 'Item3';

  valueControl = new UntypedFormControl('Item1');

  values3 = [
    {name: 'Item1'},
    {name: 'Item2'},
    {name: 'Item3'}
  ];

  choose3 = this.values3[2].name;
  constructor() { }

  ngOnInit() {
  }

  log($event) {
    console.log($event);
  }

}
