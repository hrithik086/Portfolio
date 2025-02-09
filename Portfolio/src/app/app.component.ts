import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeComponent } from "./about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNavModule, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  active = 1;
  title = "hello";
}
