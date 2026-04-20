import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Stock } from './services/stock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Stock],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('medistock');
}
