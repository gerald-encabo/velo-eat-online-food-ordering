import { Request, RequestHandler, Response } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import env from "../util/validateEnv";
const maxAge = 3 * 24 * 60 * 60;

export const signupUser: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password, password2 } = req.body;

    if (!name || !email || !password || !password2) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    if (password !== password2) {
      res.status(400);
      throw new Error("Please enter the same password");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
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
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);

export const signinUser: RequestHandler = asyncHandler(async (req: Request, res: Response) => {

    const { email, password } = req.body;
    console.log({email})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user: any = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: createToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  }
);

export const signoutUser: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
  }
);

const createToken = (id: unknown) => {
  return jwt.sign({ id }, env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};
