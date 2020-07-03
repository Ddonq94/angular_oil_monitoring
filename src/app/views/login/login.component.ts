import { Router } from '@angular/router';
import { GlobalServiceService } from './../../global-service.service';
import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { AlertConfig } from 'ngx-bootstrap/alert';



@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {


  constructor(
    public globalsevice:GlobalServiceService,
    public router:Router
    ) {}

  public userName = '';
  public pword = '';
  public res: any = '';

  public loginErr: any = '';
  public loginSuc: any = '';

  load = false;



  ngOnInit() {
    this.globalsevice.sessionToken = '';
    this.globalsevice.sessionData = null;
    localStorage.setItem('sessionToken', '');
    localStorage.setItem('sessionData', null);

    localStorage.setItem('sessionRefresh', "false");


    console.log(this.globalsevice.sessionToken);
    // ...
  }



  login(){

    // console.log(this.userName, this.pword);
    this.load = true;

    this.globalsevice.login(this.userName, this.pword)
    .then(data => {

      // console.log(data);
    this.load = false;


      this.res = data;

      if(this.res.status == "success"){

        this.loginSuc = 'Login Successful';

        this.globalsevice.sessionToken = this.res.data.token;
        this.globalsevice.sessionData = this.res.data;

        localStorage.setItem('sessionToken', this.res.data.token);
        localStorage.setItem('sessionData', JSON.stringify(this.res.data));

        console.log(this.globalsevice.sessionData);
        this.router.navigate(['/dashboard/']);
      }
      else{
        this.loginErr = this.res.message;
        console.log("something failed in api", data);
      }

    },
    err=> {
      this.loginErr = 'Something went wrong, Please Check Your Network or Contact Admin';
      console.log(err);
      console.log('err');
      this.load= false;

    })
    .catch(err=> {
      this.loginErr = 'Something went wrong, Please Check Your Network or Contact Admin';
      console.log(err);
      console.log('err');

    this.load = false;



    });

  }

}
