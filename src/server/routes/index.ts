import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Seja bem vindo!");
});


router.post("/teste", (req, res) => {
  console.log(req);

  return res.send(StatusCodes.UNAUTHORIZED).json(req.body);
})

export { router };//07