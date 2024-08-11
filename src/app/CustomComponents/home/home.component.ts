import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeroTextBlockComponent } from "../hero-text-block/hero-text-block.component";
import { CardsComponent } from "../cards/cards.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, HeroTextBlockComponent, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
