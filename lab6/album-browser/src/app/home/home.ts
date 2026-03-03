import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-container">
      <h1>Welcome to Album Browser</h1>
      <p>Explore photos from around the world through our album collection</p>
      <p>Browse through 100 albums with thousands of photos</p>
      <a routerLink="/albums" class="browse-btn">Browse Albums</a>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      padding: 4rem 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      font-size: 3rem;
      color: #2196f3;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      color: #666;
      line-height: 1.6;
      margin: 1rem 0;
    }
    .browse-btn {
      display: inline-block;
      padding: 1rem 2rem;
      background: #2196f3;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 1.2rem;
      margin-top: 2rem;
      transition: background 0.3s;
    }
    .browse-btn:hover {
      background: #1976d2;
    }
  `]
})
export class HomeComponent {}
