//This sort of sets a template for person by assigning the types first
// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: "Dillon",
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    //A Tuple:
    role: [2, 'author']
};
// person.role.push('admin'); // Push is allowed with Tuples
// person.role[1] = 10;
//Although the below is essentially the same thing as pushing into it
//it gets an Error. A Push won't throw an error. Something to be aware of.
// person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
//Tuple Type:
//[1, 2]
//Added by TypeScript: Fixed-length array (and fixed Type)
