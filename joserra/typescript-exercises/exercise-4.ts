import { Superhero } from "./exercise-1";

// Clase SuperheroTeam
class SuperheroTeam {
  // Constructor y propiedades a definir
  // las propiedades de la clase son un teamName y un array de miembros que podemos llamar members
  teamName: string;
  members: Superhero[];

  // creamos un constructor que analiza las propiedades
  constructor(teamName: string) {
    this.teamName = teamName;
    this.members = [];
  }

  // Método para agregar un héroe a la lista de members:
  addHero(hero: Superhero): void {
    this.members.push(hero);
  }

  // Método para eliminar un héroe de la lista de members. Podemos utilizar el método filter de los arrays:
  removeHero(alias: string): void {
    this.members = this.members.filter(hero=> hero.alias !== alias);
  }

}

// Testeo
const justiceLeague = new SuperheroTeam('Justice League');

justiceLeague.addHero({ name: 'Clark Kent', alias: 'Superman', superpowers: ['flight', 'super strength', 'x-ray vision'], age: 30 });
justiceLeague.addHero({ name: 'Barry Allen', alias: 'Flash', superpowers: ['super speed', 'time travel'], age: 25 });

console.log(justiceLeague.members.length === 2); // true

justiceLeague.removeHero('Superman');
console.log(justiceLeague.members.length === 1); // true
console.log(justiceLeague.members.some(hero => hero.alias === 'Superman') === false); // true
