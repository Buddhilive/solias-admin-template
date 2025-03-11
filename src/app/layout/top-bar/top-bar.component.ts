import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-white border-gray-200 dark:bg-gray-900 relative">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          [routerLink]="'https://solias.dev/'"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="favicon.ico" class="h-8" alt="Solias Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Solias Admin</span
          >
        </a>
        <div
          class="flex gap-4 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative"
        >
          <button
            class="flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-full toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer"
            (click)="toggleTheme()"
          >
            @if (themeMode === 'light') {
            <span class="material-icons !text-base">light_mode</span>
            } @else {
            <span class="material-icons !text-base">dark_mode</span>
            }
          </button>
          @if(!userInfo) {
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            (click)="login()"
          >
            Login
          </button>
          } @else {
          <button
            type="button"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer"
            id="user-menu-button"
            (click)="showDropdown = !showDropdown"
          >
            <img
              class="w-8 h-8 rounded-full"
              src="https://randomuser.me/api/portraits/lego/1.jpg"
              alt="user photo"
            />
          </button>

          <!-- Dropdown menu -->
          @if (showDropdown) {
          <div
            class="z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 absolute top-10 right-0"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white"
                >name</span
              >
              <span
                class="block text-sm  text-gray-500 truncate dark:text-gray-400"
                >email</span
              >
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  (click)="logout()"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
          } }
        </div>
      </div>
    </nav>
  `,
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  private _layoutService = inject(LayoutService);
  userInfo: any;
  themeMode: 'light' | 'dark' = 'light';
  showDropdown = false;

  ngOnInit(): void {
    this.themeMode = this._layoutService.themeMode();
  }

  toggleTheme() {
    this._layoutService.toggleTheme();
    this.themeMode = this._layoutService.themeMode();
  }
  logout() {
    this.userInfo = undefined;
    this.showDropdown = false;
  }

  login() {
    this.userInfo = {
      displayName: 'John Doe',
      photoURL: 'https://randomuser.me/api/portraits/lego/1.jpg',
    };
  }
}
