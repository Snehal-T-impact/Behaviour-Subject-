import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
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
