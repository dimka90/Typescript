// creating an object 
type User = {
    name: string;
    age: number;
}
let user = {
name: "Dimka",
age: 90
}
let name: string = user.name;
console.log(`${user.name} ${name}`);




function getname(user: User): string{
return user.name
}

console.log(getname(user))
export default user;