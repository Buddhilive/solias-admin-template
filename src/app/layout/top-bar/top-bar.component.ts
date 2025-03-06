import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="solias-navbar">
      <a class="solias-navbar__logo" [routerLink]="['/']">
        <img
          src="assets/logo/berkelium_logo_small.png"
          alt="Berkeliumlabs Logo"
          srcset=""
        />
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
export class TopBarComponent {
  userInfo: any = {};
  logout() {
    this.userInfo = {};
  }

  login() {
    this.userInfo = {
      displayName: 'John Doe',
      photoURL: 'https://randomuser.me/api/portraits/lego/1.jpg',
    };
  }
}
