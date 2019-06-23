import { Injectable } from '@angular/core';
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string;

  constructor() {
    this.url = "http://localhost:8000";
  }
  async searchFiles(files: string): Promise<string> {
    const response = await fetch(`${this.url}/file`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        files: files.split(" ")
      })
    });
    return await response.text();

  }
}
