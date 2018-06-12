import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '@nx-workspace/auth/src/lib/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(authenticate: any) {
    this.authService.login(authenticate).subscribe();
  }
}
