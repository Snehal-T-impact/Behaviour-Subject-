import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

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
