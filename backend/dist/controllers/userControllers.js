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
exports.signoutUser = exports.signinUser = exports.signupUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userModel_1 = __importDefault(require("../models/userModel"));
const validateEnv_1 = __importDefault(require("../util/validateEnv"));
const maxAge = 3 * 24 * 60 * 60;
exports.signupUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password || !password2) {
        res.status(400);
        throw new Error("Please add all fields");
    }
    const userExists = yield userModel_1.default.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    if (password !== password2) {
        res.status(400);
        throw new Error("Please enter the same password");
    }
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    const user = yield userModel_1.default.create({
        name,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: createToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid user data");
    }
}));
exports.signinUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log({ email });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = yield userModel_1.default.findOne({ email });
    if (user && (yield bcryptjs_1.default.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: createToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
}));
exports.signoutUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
}));
const createToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, validateEnv_1.default.JWT_SECRET, {
        expiresIn: maxAge,
    });
};
