import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Sticker {
  number: number;
  name?: string;
  owned: number; // how many copies the user has of this sticker
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  stickers: Sticker[] = [];
  totalStickers = 670; // default album size (user can change)
  newStickerNumber: number | null = null;
  newStickerName = '';
  newStickerCount = 1;
  private storageKey = 'paniniCollection';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCollection();
  }

  loadCollection() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.stickers = parsed.stickers || [];
        this.totalStickers = parsed.totalStickers || this.totalStickers;
      }
    } catch (e) {
      console.warn('No se pudo cargar la colección desde localStorage', e);
      this.stickers = [];
    }
  }

  saveCollection() {
    const payload = { stickers: this.stickers, totalStickers: this.totalStickers };
    localStorage.setItem(this.storageKey, JSON.stringify(payload));
  }

  addSticker() {
    if (!this.newStickerNumber || this.newStickerNumber <= 0 || this.newStickerNumber > this.totalStickers) {
      alert('Ingresa un número de cromo válido');
      return;
    }

    const existing = this.stickers.find(s => s.number === this.newStickerNumber);
    if (existing) {
      existing.owned += this.newStickerCount || 1;
    } else {
      this.stickers.push({ number: this.newStickerNumber, name: this.newStickerName || undefined, owned: this.newStickerCount || 1 });
      this.stickers.sort((a,b) => a.number - b.number);
    }

    this.newStickerNumber = null;
    this.newStickerName = '';
    this.newStickerCount = 1;
    this.saveCollection();
  }

  increment(s: Sticker) {
    s.owned++;
    this.saveCollection();
  }

  decrement(s: Sticker) {
    if (s.owned > 0) s.owned--;
    if (s.owned === 0) this.removeSticker(s.number);
    else this.saveCollection();
  }

  removeSticker(number: number) {
    this.stickers = this.stickers.filter(s => s.number !== number);
    this.saveCollection();
  }

  getUniqueOwnedCount() {
    return this.stickers.filter(s => s.owned > 0).length;
  }

  getTotalOwnedCount() {
    return this.stickers.reduce((acc, s) => acc + s.owned, 0);
  }

  getDuplicates() {
    return this.stickers.filter(s => s.owned > 1);
  }

  getMissingNumbers(limit = 200) {
    // return up to `limit` missing sticker numbers for performance
    const have = new Set(this.stickers.map(s => s.number));
    const missing: number[] = [];
    for (let i = 1; i <= this.totalStickers; i++) {
      if (!have.has(i)) {
        missing.push(i);
        if (missing.length >= limit) break;
      }
    }
    return missing;
  }

  clearCollection() {
    if (!confirm('¿Borrar toda la colección?')) return;
    this.stickers = [];
    localStorage.removeItem(this.storageKey);
  }
}

