"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const staticMiddleware = express_1.default.static(path_1.default.join(__dirname, '..', '..', 'frontend', 'html'));
exports.default = staticMiddleware;
