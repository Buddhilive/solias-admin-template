import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopBarComponent } from "./top-bar/top-bar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent, TopBarComponent],
  template: `
    <div class="solias">
      <aside class="solias__aside">
        <app-side-nav [menuItems]="menuItems"></app-side-nav>
      </aside>
      <div class="solias__body">
        <nav class="solias__nav">
          <app-top-bar></app-top-bar>
        </nav>
        <main class="solias__main">
          <router-outlet></router-outlet>
        </main>
      </div>
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
