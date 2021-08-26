//This sort of sets a template for person by assigning the types first
// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Dillon",
//     age: 26,
//     hobbies: ['Sports', 'Cooking'],
//     //A Tuple:
//     role: [2, 'author']
// };


//THIS WOULD BE FINE, BUT AN ENUM MAKES IT EASIER
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = "ADMIN", READ_ONLY = 100, AUTHOR };

const person = {
    name: "Dillon",
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin'); // Push is allowed with Tuples
// person.role[1] = 10;

//Although the below is essentially the same thing as pushing into it
//it gets an Error. A Push won't throw an error. Something to be aware of.
// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
    console.log('is read only');
}

//Tuple Type:
//[1, 2]
//Added by TypeScript: Fixed-length array (and fixed Type)

//Enum Type:
//enum { NEW, OLD }
//Added by TypeScript: Automatically enumerated global constant identifiers