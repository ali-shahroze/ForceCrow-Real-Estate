import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeroTextBlockComponent } from "../hero-text-block/hero-text-block.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, HeroTextBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
