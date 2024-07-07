import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';

@Component({
  selector: 'ngcms-index-container',
  standalone: true,
  imports: [
    LayoutComponent
  ],
  templateUrl: './index-container.component.html',
  styleUrl: './index-container.component.scss'
})
export class IndexContainerComponent {

}
