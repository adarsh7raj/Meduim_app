"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Updated_blog = exports.BlogSchema = exports.SigninSchema = exports.SignupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SignupSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
exports.SigninSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.BlogSchema = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.Updated_blog = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.number()
});
