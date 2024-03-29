"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconnection_1 = __importDefault(require("./config/dbconnection"));
const staticMiddleware_1 = __importDefault(require("./adapters/backend/middleware/staticMiddleware"));
const helmet_1 = __importDefault(require("helmet"));
const mainPageMiddleware_1 = __importDefault(require("./adapters/backend/middleware/mainPageMiddleware"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(helmet_1.default.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"],
    },
}));
app.use(staticMiddleware_1.default);
app.get('/', mainPageMiddleware_1.default);
function iniciarServidor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, dbconnection_1.default)();
            app.listen(PORT, () => {
                console.log(`✅ Server listening at http://localhost:${PORT}`);
                console.log("✋ Press Ctrl + C to Stop");
            });
        }
        catch (error) {
            console.log("Error al iniciar el servidor", error);
        }
    });
}
exports.default = app;
iniciarServidor();
