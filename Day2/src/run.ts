
import Eliza from "../eliza";
import Thread from "./thread"
// creating an instance of Eliza

let Assitant = new Eliza();
console.log(Assitant.createAimodel(process.argv[2]));
let thread: Thread = Thread.createThread();
thread.creatConversation(" am a robot")
console.log(thread.getConversations());