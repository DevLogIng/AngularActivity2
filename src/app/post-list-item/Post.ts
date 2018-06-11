export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: string;

    constructor(title: string, content: string, loveIts: number, date: string) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = date;
    }
}
