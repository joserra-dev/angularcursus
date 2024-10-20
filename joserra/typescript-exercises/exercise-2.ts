import { Superhero } from "./exercise-1";

// Clase Superhero
class SuperheroClass implements Superhero {
  name: string;
  alias: string;
  superpowers: string[];
  age: number;
  // Constructor y propiedades a definir según la interfaz
  constructor(name:string, alias:string, superpowers: string[], age: number) {
  this.name = name;
  this.alias = alias;
  this.superpowers = superpowers;
  this.age = age;


  }

  // Método introduce a implementar:
  introduce(): string {
    return `Hi, I am ${this.alias}, also known as ${this.name}.`;
  }
}

// Testeo
const batman = new SuperheroClass(
  "Bruce Wayne",
  "Batman",
  ["intelligence", "combat skills", "wealth"],
  35
);

console.log(
  batman.introduce() === "Hi, I am Batman, also known as Bruce Wayne."
); // true
