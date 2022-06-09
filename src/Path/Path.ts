import path from "path";

export abstract class Path {
    abstract path: string;
    abstract basepath: string;

    public getPath(): string {
        return path.join(this.basepath, this.path);
    }
}


export class OriginPath extends Path {
    public basepath: string = path.join(__dirname, "../");
    public path: string;
    constructor(_path: string = "posts", ...paths: string[]) {
        super();
        this.path = path.join(_path, ...paths)
    }
}

export class DestPath extends Path {
    public basepath: string = path.join(__dirname, "../../");
    public path: string;
    constructor(_path: string = "docs", ...paths: string[]) {
        super();
        this.path = path.join(_path, ...paths)
    }
}

