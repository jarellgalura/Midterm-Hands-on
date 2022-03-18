import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {
  empf!: any[];

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.empf = this.myservice.empl();
  }

}
