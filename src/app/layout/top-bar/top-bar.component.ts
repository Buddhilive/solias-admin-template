import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="solias-navbar flex justify-around items-center pt-2 pb-2 pl-4 pr-4">
      <a class="solias-navbar__logo flex justify-center items-center gap-1 no-underline cursor-pointer" [routerLink]="['/']">
        <img src="https://solias.dev/icon.png" alt="Example Logo" srcset="" />
        <span class="text-gray-900 dark:text-white text-base font-semibold">Solias Admin</span>
      </a>
      <span class="flex-auto"></span>
      <div class="flex justify-around items-center gap-2 ml-2">
        <button class="solias-navbar__btn" (click)="toggleTheme()" title="Toggle Theme">
          <span class="material-icons"> {{ themeMode === 'light' ? 'dark_mode' : 'light_mode' }} </span>
        </button>
      </div>
      @if (userInfo) {
      <div class="flex justify-center items-center gap-2 mr-4 ml-4">
        <img
          [src]="userInfo.photoURL"
          alt="Profile Picture"
          class="h-6 w-6 rounded-full object-cover"
        />
        <span class="text-gray-900 dark:text-white text-xs">{{ userInfo.displayName }}</span>
      </div>
      }
      <div class="flex justify-around items-center gap-2 ml-2">
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
