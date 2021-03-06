import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  user: any;
  username: string ="New User";
  
  constructor(private service: UserService, private router: Router) { }
  
  ngOnInit(): void {
  }

  Buy()
  {
    this.user = localStorage.getItem('email')
    if(this.user==null)
    {
      this.router.navigateByUrl('login')
    }
    else
    {
      this.router.navigateByUrl('buy')
    }
  }

  Renew()
  {
    this.user = localStorage.getItem('email')
    if(this.user==null)
    {
      this.router.navigateByUrl('login')
    }
    else
    {
      this.router.navigateByUrl('renew')
    }
  }

  Claim()
  {
    this.user = localStorage.getItem('email')
    if(this.user==null)
    {
      this.router.navigateByUrl('login')
    }
    else
    {
      this.router.navigateByUrl('claim')
    }
  }
}
