//This sort of sets a template for person by assigning the types first
// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: "Dillon",
    age: 26,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}