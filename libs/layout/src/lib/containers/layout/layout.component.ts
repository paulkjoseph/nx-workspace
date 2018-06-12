import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '@nx-workspace/auth/src';
import { User } from '@nx-workspace/data-models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
