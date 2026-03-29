import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService} from '../services/album';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  template: `
    <div class="container">
      <button (click)="goBack()">← Back</button>
      <h1>Photos</h1>

      @if (loading()) {
        <p>Loading...</p>
      } @else {
        <div class="photo-grid">
          @for (photo of photos(); track photo.id) {
            <div class="photo-card">
              <img [src]="photo.thumbnailUrl" [alt]="photo.title">
              <p>{{ photo.title }}</p>
            </div>
          }
        </div>
      }
    </div>
  `
})
export class AlbumPhotosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  photos = signal<Photo[]>([]);
  loading = signal(true);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        this.photos.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  goBack() {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', id]);
  }
}
