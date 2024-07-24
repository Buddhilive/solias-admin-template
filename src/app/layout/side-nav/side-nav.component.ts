import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="sidenav" [ngClass]="{ 'sidenav--expand': !isCollapsed }">
      <button class="sidenav__toggle" (click)="isCollapsed = !isCollapsed">
        <span class="material-icons">menu</span>
      </button>
      <div class="sidenav__content"></div>
    </div>
  `,
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  isCollapsed = true;
}
