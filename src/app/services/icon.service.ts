// src/app/services/icon.service.ts
import { Injectable } from '@angular/core';
import { IconsMap } from '../support/icons-map';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor() {}

  getIcon(label: string): string {
    // Match the label to the icon in the IconsMap
    return IconsMap[label] || 'assets/icons/default-icon.svg';
  }
}
