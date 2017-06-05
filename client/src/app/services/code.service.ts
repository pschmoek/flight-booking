import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Code } from '../models/code';

@Injectable()
export class CodeService {
  private readonly baseUrl = '/api/codes';

  constructor(private http: Http) { }

  getAll(): Observable<Code[]> {
    return this.http.get(this.baseUrl).map(r => r.json());
  }

  delete(code: Code): Observable<Code> {
    return this.http.delete(`${this.baseUrl}/${code.id}`).map(r => r.json());
  }
}
