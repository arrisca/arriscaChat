import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/todo';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  private behvr$ = new BehaviorSubject([]);
  readonly t$ = this.behvr$.asObservable();

  constructor(private httpclient: HttpClient) {
    this.getPlaceholderData();
  }

  getPlaceholderData(): void {
    this.httpclient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(result => this.behvr$.next(result));
  }
}
