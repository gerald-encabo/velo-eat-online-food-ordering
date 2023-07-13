"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const validateEnv_1 = __importDefault(require("./util/validateEnv"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/users", userRoutes_1.default);
app.get("/api/tester", (req, res) => {
    res.send("Tester API!");
});
if (validateEnv_1.default.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend')));
    app.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirname, '../../frontend/index.html')));
}
else {
    app.get('/', (req, res) => res.send('Please set to production'));
}
app.use(errorMiddleware_1.default);
exports.default = app;
