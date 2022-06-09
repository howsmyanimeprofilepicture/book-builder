import path from "path";

export interface Path {
    path: string;
    basepath: string;
}


export class OriginPath implements Path {
    public basepath: string = path.join(__dirname, "../");
    public path: string;
    constructor(_path: string = "posts", ...paths: string[]) {
        this.path = path.join(_path, ...paths)
    }
}

export class DestPath implements Path {
    public basepath: string = path.join(__dirname, "../../");
    public path: string;
    constructor(_path: string = "docs", ...paths: string[]) {
        this.path = path.join(_path, ...paths)
    }
}

