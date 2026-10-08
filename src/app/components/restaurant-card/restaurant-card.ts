import { Component, input, model, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  imports: [],
  selector: 'app-restaurant-card',
  styleUrl: './restaurant-card.scss',
  templateUrl: './restaurant-card.html',
})

export class RestaurantCard {
  restaurant = model.required<Restaurant>()
}
