import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
userName:any;

constructor(private ser:CommonserviceService) { 
  this.ser.abc.subscribe((uname)=>{
    this.userName=uname;
  })
}

  ngOnInit(): void {
  }
  onClick(com1:any){
//this.userName=com1.value;
this.ser.abc.next(com1.value);
  }

}
