"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const Tools_1 = __importDefault(require("./Tools"));
function sendAsset() {
    Tools_1.default.recurCopy(path_1.default.join(__dirname, "../assets"), path_1.default.join(__dirname, "../../docs/assets"));
}
exports.default = sendAsset;
