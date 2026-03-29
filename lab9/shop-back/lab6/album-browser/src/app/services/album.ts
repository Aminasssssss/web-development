import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  // Простые названия
  private titles = [
    'Мой альбом', 'Путешествия', 'Семья', 'Природа',
    'Город', 'Друзья', 'Отдых', 'Работа', 'Хобби', 'Разное'
  ];

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      map(albums => albums.map((a, i) => ({
        ...a,
        title: this.titles[i % this.titles.length]
      }))),
      catchError(err => of([]))
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`).pipe(
      map(album => ({
        ...album,
        title: this.titles[(id - 1) % this.titles.length]
      })),
      catchError(err => of({} as Album))
    );
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`).pipe(
      map(photos => photos.map(p => ({
        ...p,
        thumbnailUrl: `https://picsum.photos/150/150?image=${p.id % 100}`,
        url: `https://picsum.photos/600/600?image=${p.id % 100}`
      }))),
      catchError(err => of([]))
    );
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
  }
}
