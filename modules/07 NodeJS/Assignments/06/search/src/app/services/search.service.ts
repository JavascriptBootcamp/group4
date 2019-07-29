import { Injectable } from '@angular/core';
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}
  async searchFiles(files: string): Promise<string> {
    const response = await fetch(`/file`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        files: files.split(" ")
      })
    });
    return await response.text();

  }
}
