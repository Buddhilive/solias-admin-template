import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LayoutService } from './layout.service';

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
  providers: [LayoutService],
})
export class LayoutComponent implements OnInit {
  private _layoutService = inject(LayoutService);
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

  ngOnInit(): void {
    this._layoutService.setSystemTheme();
  }
}
