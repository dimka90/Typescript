
import Eliza from "./eliza";

// creating an instance of Eliza

let Assitant: Eliza = new Eliza();
console.log(Assitant.createAimodel(process.argv[2]));