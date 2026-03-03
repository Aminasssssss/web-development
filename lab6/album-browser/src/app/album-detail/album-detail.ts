import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService} from '../services/album';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="detail-container">
      <button class="back-btn" (click)="goBack()">← Back to Albums</button>

      @if (loading()) {
        <div class="loading">
          <div class="spinner"></div>
          <p>Loading album details...</p>
        </div>
      } @else if (error()) {
        <div class="error">
          ❌ {{ error() }}
          <button (click)="goBack()">Go Back</button>
        </div>
      } @else if (album()) {
        <div class="album-detail">
          <h1>Album #{{ album()!.id }}</h1>

          <div class="info-card">
            <p><strong>User ID:</strong> {{ album()!.userId }}</p>

            <div class="edit-section">
              <label for="title">Album Title:</label>
              <input
                type="text"
                id="title"
                [(ngModel)]="editTitle"
                class="title-input"
                placeholder="Enter new title"
              >
              <button
                (click)="saveTitle()"
                [disabled]="!editTitle || editTitle === album()!.title"
                class="save-btn"
              >
                Save Changes
              </button>
            </div>
          </div>

          <div class="actions">
            <a [routerLink]="['/albums', album()!.id, 'photos']" class="photos-btn">
              View Photos 📸
            </a>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .detail-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    .back-btn {
      padding: 0.75rem 1.5rem;
      background: #6c757d;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    .back-btn:hover {
      background: #5a6268;
    }
    .album-detail {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333;
      margin-bottom: 2rem;
    }
    .info-card {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 2rem;
    }
    .info-card p {
      margin: 0.5rem 0;
      font-size: 1.1rem;
    }
    .edit-section {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 2px solid #dee2e6;
    }
    .edit-section label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: #495057;
    }
    .title-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ced4da;
      border-radius: 4px;
      font-size: 1rem;
      margin-bottom: 1rem;
      box-sizing: border-box;
    }
    .title-input:focus {
      outline: none;
      border-color: #2196f3;
    }
    .save-btn {
      padding: 0.75rem 1.5rem;
      background: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      width: 100%;
    }
    .save-btn:hover:not(:disabled) {
      background: #218838;
    }
    .save-btn:disabled {
      background: #6c757d;
      cursor: not-allowed;
    }
    .actions {
      text-align: center;
    }
    .photos-btn {
      display: inline-block;
      padding: 1rem 2rem;
      background: #2196f3;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 1.2rem;
      transition: background 0.3s;
    }
    .photos-btn:hover {
      background: #1976d2;
    }
    .loading, .error {
      text-align: center;
      padding: 3rem;
    }
    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #2196f3;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .error {
      color: #f44336;
    }
    .error button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background: #f44336;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  album = signal<Album | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);
  editTitle = '';

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.loadAlbum(id);
    } else {
      this.error.set('Invalid album ID');
      this.loading.set(false);
    }
  }

  loadAlbum(id: number) {
    this.loading.set(true);
    this.error.set(null);

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        if (album && album.id) {
          this.album.set(album);
          this.editTitle = album.title;
        } else {
          this.error.set('Album not found');
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load album');
        this.loading.set(false);
        console.error(err);
      }
    });
  }

  saveTitle() {
    if (this.album() && this.editTitle) {
      const updatedAlbum = { ...this.album()!, title: this.editTitle };

      this.albumService.updateAlbum(updatedAlbum).subscribe({
        next: (saved) => {
          this.album.set(saved);
          alert('Album title updated successfully!');
        },
        error: () => {
          alert('Failed to update album');
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
