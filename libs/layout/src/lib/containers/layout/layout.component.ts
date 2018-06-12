import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '@nx-workspace/auth/src';
import { User } from '@nx-workspace/data-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate([`/auth/login`]);
  }
}
