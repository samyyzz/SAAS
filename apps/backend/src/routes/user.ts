import { Request, Response, Router } from "express";
import { authMiddleware } from "../auth/middleware";

export const userRouter = Router()

//POST : Signup
userRouter.post("/signup", authMiddleware, async (req:Request, res:Response)=> {

})

//POST : Login
userRouter.post("/login", authMiddleware, async (req:Request, res:Response)=> {

})