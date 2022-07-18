import { Router } from "express";
import { create, login } from "../controllers/usersController.js"
import joiValidation from "../middlewares/joiValidation.js";
import { userSchema } from "../schemas/userSchemas.js";

const userRouter = Router();

userRouter.post("/signup", joiValidation(userSchema),create)
userRouter.post("/login",login)

export default userRouter;