import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutSideNaveMenuItem } from '../constants/menu-item.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="sidenav" [ngClass]="{ 'sidenav--expand': !isCollapsed }">
      <button class="sidenav__toggle" (click)="isCollapsed = !isCollapsed">
        <span class="material-icons">menu</span>
      </button>
      <div class="sidenav__content">
        <ul class="sidenav__list">
          @for (item of menuItems; track $index) {
          <li class="sidenav__item">
            <a [routerLink]="item.link" class="sidenav__link">
              <span class="material-icons">{{ item.icon }}</span>
              <span class="sidenav__link-text">{{ item.title }}</span>
            </a>
          </li>
          }
        </ul>
      </div>
    </div>
  `,
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  isCollapsed = true;
  menuItems: LayoutSideNaveMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/dashboard',
      icon: 'dashboard',
    },
  ];
}
