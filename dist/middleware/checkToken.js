"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Auth = (req, res, next) => {
    // JWT
    let token = req.cookies.token;
    try {
        const decoded = jsonwebtoken_1.default.verify(token, "adilmalik");
        req.body.currentUser = {
            email: decoded.email,
            isAdmin: decoded.isAdmin,
            fullName: decoded.fullName,
            _id: decoded._id,
            avatar: decoded.avatar,
        };
        next();
    }
    catch (err) {
        res.status(401).send({ message: "Unauthorized" });
    }
};
exports.Auth = Auth;
