import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
