import * as fs from "fs";
import path from "path";

export default class Tools {
    public static makeDir(_dir: string): void {
        if (!fs.existsSync(_dir)) {
            fs.mkdirSync(_dir);
        }
    }

    public static getConfig(): object {
        return JSON.parse(fs.readFileSync(
            path.join(__dirname, "../_config.json"),
            { encoding: "utf-8" },
        ))
    }

    public static recurCopy(_path: string, _dest: string): void {
        const subFiles: Array<string> = fs.readdirSync(_path);
        Tools.makeDir(_dest);

        subFiles.forEach((file) => {
            const stats: fs.Stats = fs.statSync(path.join(_path, file));
            if (stats.isFile()) {
                fs.copyFileSync(
                    path.join(_path, file),
                    path.join(_dest, file),
                );
            }

            else if (stats.isDirectory()) {
                Tools.makeDir(path.join(_dest, file));

                this.recurCopy(
                    path.join(_path, file),
                    path.join(_dest, file),
                );
            }


        })
    }
}