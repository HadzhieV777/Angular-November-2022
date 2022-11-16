import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  title: string | null = 'Hello';

  showLoader(title: string): void {
    this.title = title;
  }

  hideLoader() {
    this.title = null;
  }
}
