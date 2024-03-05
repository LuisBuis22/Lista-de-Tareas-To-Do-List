"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 27017;
app.listen(PORT, () => {
    console.log(`✅ Server listening at http://localhost:${PORT}`);
    console.log("✋ Press Ctrl + C to Stop");
});
app.get("/", (_req, res) => {
    console.log("Test funcionando correctamente");
    res.send("Test funcionando correctamente");
});
exports.default = app;
