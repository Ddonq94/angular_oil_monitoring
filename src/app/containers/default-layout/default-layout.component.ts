import {Component, OnInit } from '@angular/core';
// import { navItems } from '../../_nav';
import { GlobalServiceService } from '../../global-service.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { INavData } from '@coreui/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems$: Observable<INavData[]>;
  // OnavItems$ = new Subject<string>();

  constructor(
    public globalsevice:GlobalServiceService,
    public router:Router
    ) {

    }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }


  roles;

  ngOnInit() {

// console.log(localStorage.getItem('sessionData'));
    // this.roles = localStorage.getItem('sessionData') ?  JSON.parse(localStorage.getItem('sessionData')).user.roles : "niet login again";
    // console.log(JSON.parse(this.roles.policy));
    console.log(this.router.url);

    this.navItems$ = this.globalsevice.getNav();

    // console.log(this.globalsevice.sessionToken);
    if(localStorage.getItem('sessionToken') === '' ){
      this.router.navigate(['/login']);

    }
    // ...
  }

}
