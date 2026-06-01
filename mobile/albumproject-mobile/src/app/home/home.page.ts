import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Album {
  id?: number;
  title: string;
  artist: string;
  genre: string;
  releaseDate?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  albums: Album[] = [];
  apiConnected = false;
  loading = false;
  newAlbum: Album = { title: '', artist: '', genre: '' };
  private apiUrl = 'http://localhost:5000/api/albums';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkApiConnection();
    this.loadAlbums();
  }

  checkApiConnection() {
    this.http.get<any>(`${this.apiUrl}`).subscribe(
      () => {
        this.apiConnected = true;
      },
      () => {
        this.apiConnected = false;
        console.warn('No se puede conectar a la API en http://localhost:5000');
      }
    );
  }

  loadAlbums() {
    this.loading = true;
    this.http.get<Album[]>(this.apiUrl).subscribe(
      (data) => {
        this.albums = data;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  addAlbum() {
    if (!this.newAlbum.title || !this.newAlbum.artist || !this.newAlbum.genre) {
      alert('Por favor completa todos los campos');
      return;
    }

    this.http.post<Album>(this.apiUrl, this.newAlbum).subscribe(
      (album) => {
        this.albums.push(album);
        this.newAlbum = { title: '', artist: '', genre: '' };
      },
      (error) => {
        alert('Error al agregar álbum');
        console.error(error);
      }
    );
  }

  deleteAlbum(id?: number) {
    if (!id) return;
    
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      () => {
        this.albums = this.albums.filter((a) => a.id !== id);
      },
      (error) => {
        alert('Error al eliminar álbum');
        console.error(error);
      }
    );
  }
}
