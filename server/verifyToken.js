import Jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token
    if(!token) return next(createError(401, "You are authenticated !"))

    Jwt.verify(token, process.env.TOKEN_KEY, (err,user)=>{
        if(err) return next(createError(403, "Token is not valid !"));
        req.user = user;
        next()
    })
}