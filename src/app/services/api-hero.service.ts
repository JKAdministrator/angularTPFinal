import { Injectable } from '@angular/core';
import { hero } from '../types/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiHeroService {
  private url = 'https://66c8a4148a477f50dc2ed3f5.mockapi.io/heroes';
  constructor(private http: HttpClient) {}
  getAll(): Observable<hero[]> {
    return this.http.get<hero[]>(this.url);
  }
  createOne(newHero: hero) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<hero>(this.url, newHero, { headers });
  }
}
