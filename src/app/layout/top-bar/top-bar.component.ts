import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="solias-navbar">
      <a class="solias-navbar__logo" [routerLink]="['/']">
        <img src="https://solias.dev/icon.png" alt="Example Logo" srcset="" />
        <span>Solias Admin</span>
      </a>
      <span class="solias-navbar__spacer"></span>
      @if (userInfo) {
      <div class="solias-navbar__user">
        <img
          [src]="userInfo.photoURL"
          alt="Profile Picture"
          class="profile-picture"
        />
        <span class="user-name">{{ userInfo.displayName }}</span>
      </div>
      }
      <div class="solias-navbar__actions">
        <button class="solias-navbar__btn" (click)="toggleTheme()" title="Toggle Theme">
          <span class="material-icons"> {{ themeMode === 'light' ? 'dark_mode' : 'light_mode' }} </span>
        </button>
        @if (userInfo) {
        <button class="solias-navbar__btn" (click)="logout()" title="Logout">
          <span class="material-icons"> logout </span>
        </button>
        } @else {
        <button class="solias-navbar__btn" (click)="login()" title="Login">
          <span class="material-icons"> login </span>
        </button>
        }
      </div>
    </div>
  `,
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  private _layoutService = inject(LayoutService);
  userInfo: any;
  themeMode: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    this.themeMode = this._layoutService.themeMode();
  }

  toggleTheme() {
    this._layoutService.toggleTheme();
    this.themeMode = this._layoutService.themeMode();
  }
  logout() {
    this.userInfo = undefined;
  }

  login() {
    this.userInfo = {
      displayName: 'John Doe',
      photoURL: 'https://randomuser.me/api/portraits/lego/1.jpg',
    };
  }
}
