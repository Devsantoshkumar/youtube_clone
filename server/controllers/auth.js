import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

// user signup or registration logic
export const signup = async (req, res, next) =>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password: hash});
        await newUser.save();
        res.status(200).send("User has been created");
    } catch (error) {
        next(error) 
    }
}

// user login or signin logic
export const signin = async (req, res, next) =>{
    try {
       const user = await User.findOne({name: req.body.name});
       if(!user) return next(createError(404, "User not found!"));

       const inCorrect = await bcrypt.compare(req.body.password, user.password);
       if(!inCorrect) return next(createError(400, "Wrong password"));

       const token = jwt.sign({id:user._id}, process.env.TOKEN_KEY);
       const {password, ...others} = user._doc

       res.cookie("access_token", token, {
         httpOnly:true
       }).status(200).json(others);

    } catch (error) {
        next(error) 
    }
}


export const googleAuth = async (req,res,next) => {
    try {
        const user = await User.findOne({email:req.body.email});
        
        if(usre){
           const token = jwt.sign({id:user._id}, process.env.TOKEN_KEY);
           res.cookie("access_token", token, {
            httpOnly:true
          }).status(200).json(user._doc);
        }else{
            const newUser = new User({
                ...req.body,
                fromGoogle: true
            })
            const savedUser = await newUser.save();
            const token = jwt.sign({id:savedUser._id}, process.env.TOKEN_KEY);
           res.cookie("access_token", token, {
            httpOnly:true
          }).status(200).json(savedUser._doc);
        }
    } catch (error) {
        next(error)
    }
}