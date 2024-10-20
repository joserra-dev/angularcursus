import { Superhero } from "./exercise-1";

// Función para filtrar superhéroes por poder
function filterHeroesByPower(heroes: Superhero[], power: string): Superhero[] {
  return heroes.filter(hero => hero.superpowers.includes(power));
}

// Testeo
const heroes: Superhero[] = [
  {
    name: "Clark Kent",
    alias: "Superman",
    superpowers: ["flight", "super strength", "x-ray vision"],
    age: 30,
  },
  {
    name: "Diana Prince",
    alias: "Wonder Woman",
    superpowers: ["super strength", "combat skills", "agility"],
    age: 28,
  },
  {
    name: "Barry Allen",
    alias: "Flash",
    superpowers: ["super speed", "time travel"],
    age: 25,
  },
];

const strongHeroes = filterHeroesByPower(heroes, "super strength");
console.log(strongHeroes.length === 2); // true
console.log(strongHeroes[0].name === "Clark Kent"); // true
console.log(strongHeroes[1].name === "Diana Prince"); // true
