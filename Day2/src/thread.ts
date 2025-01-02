import Communication from "./type"

class Thread{
 conversation: Array<Communication> = []
 modeltype: string

 constructor (modeltype: string) {
    this.modeltype = modeltype
 }
static createThread(modelType: string) {
return new Thread(modelType)        
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