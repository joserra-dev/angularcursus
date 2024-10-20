// Interfaz Superhero
// TODO: Completar la interface con las siguientes propiedades:
// name, alias, superpowers y age.
export interface Superhero {
  name:string;
  alias: string;
  superpowers: string[];
  age:number;
  
}

const testSuperhero: Superhero = {
  name: "Bruce Wayne",
  alias: "Batman",
  superpowers: ["intelligence", "combat skills", "wealth"],
  age: 35,
};

console.log(testSuperhero.name === "Bruce Wayne"); // true
console.log(testSuperhero.alias === "Batman"); // true
console.log(testSuperhero.superpowers.includes("wealth")); // true
console.log(testSuperhero.age === 35); // true
