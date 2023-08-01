import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Injectable({ providedIn: 'root'})
export class PhotoListResolver{

  constructor(private service: PhotoService){}
  
  resolve: ResolveFn<Observable<Photo[]>> = (route: ActivatedRouteSnapshot) => {
    const username = route.params['username'];

    return this.service.listFromUserPaginated(username, 1);
  }

}