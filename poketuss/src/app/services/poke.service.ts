import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  URL_BASE = 'https://pokeapi.co/api/v2';
  
  constructor() {

    
   }
}
