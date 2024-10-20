
export interface User{
    name: string;
    age: number;
    occupation: string;
}
    
//declaramos e inicializamos la variable user  
let user: User;
user = {
    name: 'john Doe',
    age: 30,
    occupation: 'Developer'
};

// Array de usuarios tipado
export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];


//funcion para registrar la informacion del usuario
export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}, ${user.occupation}`);
}

console.log('Users:');
users.forEach(logPerson);