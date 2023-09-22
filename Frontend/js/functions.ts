export class Note{
    private title: string;
    private text : string;
    private date:string;
    constructor(title:string, text:string, date:string){
        title = this.title
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getText(): string {
        return this.text;
    }

    public setText(text: string): void {
        this.text = text;
    }

    public getDate(): string {
        return this.date;
    }

    public setDate(date: string): void {
        this.date = date;
    }
    public generateHTML():void{
        
    }


}