import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertDirective } from '../alert.directive';
import { TransformDirective } from '../transform.directive';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [RouterLink, AlertDirective, TransformDirective],
})
export class ToolbarComponent {
  @Input() title!: string;
}
