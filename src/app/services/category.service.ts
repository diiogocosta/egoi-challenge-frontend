import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/api/category';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  public create(payload: Category) {
    return this.http.post(this.apiUrl, payload);
  }

  public read(id) {
    const requestOptions = id ? { params: { id } } : {};
    return this.http.get<Category>(this.apiUrl, requestOptions);
  }

  public readAll(flat = false, dependentId = null, search = null) {
    return this.http.get<Category[]>(this.apiUrl, {
      params: {
        flat: flat.toString(),
        dependentId,
        ...(search && { search }),
      },
      headers: this.headers,
    });
  }

  public update(payload: Category) {
    return this.http.put(this.apiUrl, payload, {
      headers: this.headers,
      params: { id: payload.id.toString() },
    });
  }

  public delete(id) {
    return this.http.delete(this.apiUrl, {
      params: { id },
      headers: this.headers,
    });
  }
}
