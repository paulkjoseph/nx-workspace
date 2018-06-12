import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthState } from '@nx-workspace/auth';
import { User } from '@nx-workspace/data-models';
import { getUser } from '@nx-workspace/auth';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;

  constructor(private router: Router, private store: Store<AuthState>) {}

  ngOnInit() {
    this.user$ = this.store.select(getUser);
  }

  onLogout(): void {
    // this.authService.logout();
    this.router.navigate([`/auth/login`]);
  }
}
