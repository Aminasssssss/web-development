import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>About This Application</h1>
      <div class="card">
        <h2>Album Browser</h2>
        <p>Version: 1.0.0</p>
        <p>Course: Web Development - Lab 6</p>
        <p>Student: [Your Name]</p>
        <p>Date: {{ currentDate }}</p>

        <h3>Technologies Used:</h3>
        <ul>
          <li>Angular 21 with Signals</li>
          <li>HttpClient for REST API calls</li>
          <li>RxJS Observables</li>
          <li>Angular Router</li>
          <li>JSONPlaceholder API</li>
        </ul>

        <h3>Features:</h3>
        <ul>
          <li>Browse all albums</li>
          <li>View album details</li>
          <li>Edit album titles</li>
          <li>Delete albums</li>
          <li>View album photos in grid</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1 {
      color: #2196f3;
      text-align: center;
      margin-bottom: 2rem;
    }
    .card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h2, h3 {
      color: #333;
      margin: 1rem 0;
    }
    p {
      margin: 0.5rem 0;
      color: #666;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
      color: #666;
    }
    li:last-child {
      border-bottom: none;
    }
  `]
})
export class AboutComponent {
  currentDate = new Date().toLocaleDateString();
}
