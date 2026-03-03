import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  template: `
    <div class="albums-container">
      <h1>📚 Мои альбомы</h1>

      @if (loading()) {
        <div class="loading">Загрузка...</div>
      } @else {
        <div class="albums-grid">
          @for (album of albums(); track album.id) {
            <div class="album-card" (click)="viewAlbum(album.id)">
              <div class="album-icon">📸</div>
              <div class="album-info">
                <h3>{{ album.title }}</h3>
                <p>Фото: {{ album.id * 10 }}</p>
              </div>
              <button class="delete-btn" (click)="deleteAlbum(album.id, $event)">🗑️</button>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .albums-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1 {
      color: #333;
      margin-bottom: 2rem;
    }
    .albums-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .album-card {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
    }
    .album-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .album-icon {
      font-size: 2rem;
      background: #f0f7ff;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .album-info {
      flex: 1;
    }
    .album-info h3 {
      margin: 0 0 0.5rem 0;
      color: #333;
      font-size: 1.1rem;
    }
    .album-info p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }
    .delete-btn {
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.3s;
      padding: 0.5rem;
    }
    .delete-btn:hover {
      opacity: 1;
    }
    .loading {
      text-align: center;
      padding: 3rem;
      color: #666;
    }
  `]
})
export class AlbumsComponent implements OnInit {
  private albumService = inject(AlbumService);
  private router = inject(Router);

  albums = signal<Album[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  viewAlbum(id: number) {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event) {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums.update(albums => albums.filter(a => a.id !== id));
    });
  }
}
