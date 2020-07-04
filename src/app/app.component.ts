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
  error: boolean;
  constructor(private configservice:ChartdataService,private router: Router){}
  ngOnInit(){
    this.configservice.anotherswitch.subscribe(data=>{
      this.switch=data;
    })

  }
  onSubmit(){
    if(this.user.value.firstName=="admin@smartclean.com" && this.user.value.password=="admin@smartclean.com"){
      this.switch=this.configservice.switchswitch();
      this.error=false;
      this.router.navigateByUrl('/charts');
    }
    else{
      this.error=true;
    }
  }
 
}