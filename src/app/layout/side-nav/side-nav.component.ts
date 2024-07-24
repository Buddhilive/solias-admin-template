import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  template: `
    <div class="sidenav">
      <button class="sidenav__toggle">
        <span class="material-icons">menu</span>
      </button>
      <div class="sidenav__content">
      </div>
    </div>
  `,
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

}
