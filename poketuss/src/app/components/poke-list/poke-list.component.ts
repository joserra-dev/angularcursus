import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
  imports: [
    CommonModule,

  ],
})
export class PokeListComponent implements OnInit{

  pokeList!: Pokemon[];
  allPokemonList!: Pokemon[];
  filteredPokemonList!: Pokemon[];
  selectedPokemon: string = '';
  loaking:boolean = true;
  loadingMore: boolean = false;
  pageSize = 30;
  currentPage = 1;
  loading: boolean = true;
  PokemonList: any;
  pokemonList: never[];

  
  constructor(
    private pokeService: PokeService,
    private pokeHelperService: PokeHelperService,
    private router: Router,
    public dialog: MatDialog){
      this.pokeList = [];
      this.allPokemonList = [];
      this.filteredPokemonList = [];
      this.pokemonList = [];
    }
    
  
 ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.loadAllPokemons();
    this.loadInitialPokemon();
  }

  
  loadAllPokemons(): void {
    this.pokeService.getPokemon().subscribe((data:any) => {
      this.allPokemonList = data.results;
    })
  }
  loadInitialPokemon(): void {
    this.loading = true;
    this.pokeService.getPokemonsLazy(0, this.pageSize) //first pokemon
      .subscribe((data:any) => {
        this.pokeList = data.results;
        this.loadPokemonDetails(this.pokeList);
      this.loading = false;      
    });
  }

  loadPokemonDetails(pokeList: Pokemon[]): void  {
    this.loading = true;
    const requests = pokeList.map(pokemon => this.pokeService.getPokeDetails(pokemon.url));

    forkJoin(requests).subscribe((responses: any[]) => {
      responses.forEach(data => {
        this.PokemonList.push
      })
    })
  }
}

