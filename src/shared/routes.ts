import { Router, Request, Response } from "express";
import module01Routes from "../modules/User/routes";
import module02Routes from "../modules/module02/routes";

const router = Router();
// router.use("/", (req: Request, res: Response) => {
//   res.send("i am here.")
//   return { message: "App is live" };
// });
router.use("/user", module01Routes);
router.use("/module02", module02Routes);

export default router;
