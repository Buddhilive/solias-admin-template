import { Component } from '@angular/core';
import { LayoutComponent } from "./layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `<app-layout></app-layout>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {}
