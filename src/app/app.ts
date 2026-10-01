import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RestaurantList } from './restaurant-list/restaurant-list';

@Component({
  imports: [RouterOutlet, Header, Footer, RestaurantList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('1lab');
}
