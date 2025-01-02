class Eliza{
private aiModel!: string;

public createAimodel(modelType: string): string{
    if(modelType === "openai" ||modelType === "grok" || modelType === "claude" )
    {
        this.aiModel = modelType;
        return this.aiModel;
    }
    
        throw new Error("Model type must be one of [openai | grok | claude]   but got "+ modelType)

    

}
}

export default Eliza;