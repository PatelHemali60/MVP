export class Post {
    push(event: any) {
      throw new Error('Method not implemented.');
    }
    title: string;
    content:string;


    constructor(
        title: string,
        content: string,

    ) {
        this. title =  title;
        this.content = content;

    }
}
//model for ng select
export class Diseases {

    id: number;
    name: string;
    

    constructor(
        id: number,
        name: string) {
        this.id = id,
        this.name = name       
    }



}