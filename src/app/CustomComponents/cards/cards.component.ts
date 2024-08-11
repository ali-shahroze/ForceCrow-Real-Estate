import { Component } from '@angular/core';
import { CardData } from '../card-data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards: CardData[] = [
    new CardData(
      "https://forcecrow.com/wp-content/uploads/2024/08/dubai-scaled.webp",
      "Card image cap",
      "Dubai",
      "Discover the futuristic skyline and unparalleled luxury of Dubai, where modernity meets opulence."
    ),
    new CardData(
      "https://forcecrow.com/wp-content/uploads/2024/08/maxico-scaled.webp",
      "Card image cap",
      "Mexico",
      "Experience the vibrant culture and breathtaking landscapes of Mexico, a destination where every corner tells a story."
    ),
    new CardData(
      "https://forcecrow.com/wp-content/uploads/2024/08/london-1-scaled.webp",
      "Card image cap",
      "London",
      "Immerse yourself in the timeless charm and rich history of London, a city where tradition and innovation coexist."      
    )
  ];
}
