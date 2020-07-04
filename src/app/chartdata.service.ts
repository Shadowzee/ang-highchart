import { Injectable } from '@angular/core';
import chartdata from './data.json'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartdataService {
chartdata =new BehaviorSubject<any>(chartdata);
anotherswitch=new BehaviorSubject<any>(false);
switch=false;
  constructor() { }
  switchswitch(){
    this.switch=true;
    return true;
  }
  switchswitchfalse(){
    this.switch=false;
    this.anotherswitch.next(false);
    return false;
  }
}
