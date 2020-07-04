import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ChartdataService } from './chartdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  switch=false;
  route;
  user = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private configservice:ChartdataService,private router: Router){}
  onSubmit(){
    if(this.user.value.firstName=="this" && this.user.value.password=="this"){
      this.switch=this.configservice.switchswitch();
      this.router.navigateByUrl('/charts');
    }
  }
  Logout(){
    this.switch=this.configservice.switchswitchfalse();
    this.router.navigateByUrl('/');

  }
}