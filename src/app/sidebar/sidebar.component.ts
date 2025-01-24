import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
    standalone: true,
    selector: 'app-sidebar',
    imports: [RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  @Input() moduleName: string = "";
  username: string = "";

  constructor(private cookieService: CookieService, private router:Router){}

  ngOnInit(): void {
    this.username = this.cookieService.get("userId");
  }
}
