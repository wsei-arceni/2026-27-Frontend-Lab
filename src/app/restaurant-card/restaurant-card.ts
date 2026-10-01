import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-restaurant-card',
  styleUrl: './restaurant-card.scss',
  templateUrl: './restaurant-card.html',
})
export class RestaurantCard {
  name = signal("Freddy Fazbear's Pizzeria")
}
