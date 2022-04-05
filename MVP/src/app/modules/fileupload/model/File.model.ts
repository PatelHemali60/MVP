export class MyFile {
    name: string;
    size: number;
    type: string;
    content: string;
    id:number;

    constructor(
        name: string,
        size: number,
        type: string,
        content: string,
        id:number,

    ) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.content = content;
        this.id = id;

    }
}