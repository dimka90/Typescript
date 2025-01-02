import Communication from "./type"

class Thread{
 conversation: Array<Communication> = []
static createThread() {
return new Thread()        
}
creatConversation(statement: string) 
{
this.conversation.push({question: statement, response: " "});
}
getConversations(): Array<Communication>{
    return this.conversation
}
}

export default Thread;