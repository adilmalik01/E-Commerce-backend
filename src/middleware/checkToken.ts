import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const Auth = (req: Request, res: Response, next: NextFunction) => {
    // JWT
    let token = req.cookies.token;
    try {
        const decoded: any = jwt.verify(token, "adilmalik");

        req.body.currentUser = {
            email: decoded.email,
            isAdmin: decoded.isAdmin,
            fullName: decoded.fullName,
            _id: decoded._id,
            avatar: decoded.avatar,
        };
        next();
    } catch (err) {
        res.status(401).send({ message: "Unauthorized" });
    }
}