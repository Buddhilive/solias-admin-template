import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent],
  template: `
    <div class="layout">
      <nav class="layout__nav">
        <app-side-nav [menuItems]="menuItems"></app-side-nav>
      </nav>
      <main class="layout__content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  menuItems = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: 'dashboard',
    },
    {
      name: 'Explorer',
      link: '/explorer',
      icon: 'explore',
    },
  ];
}
