"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function sendAsset() {
    const assets = fs_1.default.readdirSync(path_1.default.join(__dirname, "../_assets"));
    assets.forEach((asset) => {
        fs_1.default.copyFileSync(path_1.default.join(__dirname, "../_assets", asset), path_1.default.join(__dirname, "../build", "_assets", asset));
    });
}
exports.default = sendAsset;
