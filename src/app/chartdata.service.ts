import { Injectable } from '@angular/core';
import chartdata from './data.json'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartdataService {
chartdata =new BehaviorSubject<any>(chartdata);
  constructor() { }
}
