import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompletionService {
  baseurl: string = 'https://api.openai.com';
  token: string = 'add-key-here';

  constructor(private http: HttpClient) { }

  getCompletion(prompt: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.token}` };
    const body = {
      "model": "text-davinci-003",
      "prompt": prompt,
      "temperature": 0.7,
      "max_tokens": 4000,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0
    };
    return this.http.post<any>(`${this.baseurl}/v1/completions`, body, { headers });
  }
}
