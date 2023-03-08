import { Router, Request, Response } from "express";
import { addUser } from "../controllers";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello From Module 01");
});

router.post('/create', addUser)

export default router;
