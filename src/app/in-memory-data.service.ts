import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Superman', city: 'Metropolis' },
      { id: 12, name: 'Flash', city: 'Gotham' },
      { id: 13, name: 'Wonder Woman', city: 'Metropolis' },
      { id: 14, name: 'Aquaman', city: 'Atlantis' },
      { id: 15, name: 'Daredevil', city: 'New York' },
      { id: 16, name: 'Capitán América', city: 'New York' },
      { id: 17, name: 'Hulk', city: 'New York' },
      { id: 18, name: 'Thor', city: 'New York' },
      { id: 19, name: 'Spiderman', city: 'New York' },
      { id: 20, name: 'Cyborg', city: 'New York' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}