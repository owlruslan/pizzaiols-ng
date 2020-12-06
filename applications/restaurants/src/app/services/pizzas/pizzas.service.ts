import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
import { APIService } from '../../../../../../dist/core/lib/services';
import { GetPizzasResponse, ResponseSuccess } from '../../../../../../dist/core/lib/models';

/**
 * Implementation of pizzas APIs.
 */
@Injectable({providedIn: 'root'})
export class PizzasService implements APIService {
  readonly host = environment.host;

  constructor(private http: HttpClient) {
  }

  /**
   * GET: /api/v1/pizzas
   * Get Pizzas.
   */
  getPizzas(token: string): Observable<ResponseSuccess<GetPizzasResponse>> {
    return this.http.get<ResponseSuccess<GetPizzasResponse>>(`${this.host}/api/v1/pizzas`, {
      headers: new HttpHeaders({Authorization: `Bearer ${token}`}),
    });
  }
}