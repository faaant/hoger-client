import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected apiUrls = environment.apiUrls;
}
