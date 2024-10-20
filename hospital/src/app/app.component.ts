import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: "hospital-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styles:[], 
  //styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hospital';
}
