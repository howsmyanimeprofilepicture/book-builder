"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
class Tools {
    static makeDir(_dir) {
        if (!fs.existsSync(_dir)) {
            fs.mkdirSync(_dir);
        }
    }
    static getConfig() {
        return JSON.parse(fs.readFileSync(path_1.default.join(__dirname, "../_config.json"), { encoding: "utf-8" }));
    }
    static recurCopy(_path, _dest) {
        const subFiles = fs.readdirSync(_path);
        Tools.makeDir(_dest);
        subFiles.forEach((file) => {
            const stats = fs.statSync(path_1.default.join(_path, file));
            if (stats.isFile()) {
                fs.copyFileSync(path_1.default.join(_path, file), path_1.default.join(_dest, file));
            }
            else if (stats.isDirectory()) {
                Tools.makeDir(path_1.default.join(_dest, file));
                this.recurCopy(path_1.default.join(_path, file), path_1.default.join(_dest, file));
            }
        });
    }
}
exports.default = Tools;
