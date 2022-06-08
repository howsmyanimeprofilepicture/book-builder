import fs from "fs";
import path from "path";
// const glob = require("glob");
import T from "./Tools";

export default function sendAsset(): void {
    T.recurCopy(
        path.join(__dirname, "../assets"),
        path.join(__dirname, "../../docs/assets")
    );
}