import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="solias-sidebar" [class.solias-sidebar--collapsed]="isCollapsed">
      <button class="solias-sidebar__btn" (click)="toggleSidebar()">
        <span class="material-icons">menu</span>
      </button>
      <ul class="solias-sidebar__list">
        @for (item of menuItems; track $index) {
        <li class="solias-sidebar__item">
          <a class="solias-sidebar__link" [routerLink]="[item.link]">
            <span class="material-icons">{{ item.icon }}</span>
            @if (!isCollapsed) {
            <span class="solias-sidebar__title" [@toggle]="!isCollapsed">{{
              item.name
            }}</span>
            }
          </a>
        </li>
        }
      </ul>
    </div>
  `,
  styleUrl: './side-nav.component.scss',
  animations: [
    trigger('toggle', [
      state('true', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('500ms ease-in-out')),
      transition(':leave', animate('500ms ease-in-out')),
    ]),
  ],
})
export class SideNavComponent {
  @Input() menuItems!: ISideMenuItem[];

  isCollapsed = true;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}

export interface ISideMenuItem {
  name: string;
  link: string;
  icon: string;
}
