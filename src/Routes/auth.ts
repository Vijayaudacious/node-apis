import { userCtr } from "../Controller";
import { Router } from "express";

const route = Router();

route
  .route("/auth")
  .get(userCtr.goodMorningMessage)
  .post(userCtr.goodMorningMessage);

route
  .route("/:id")
  .put(userCtr.goodMorningMessage)
  .get(userCtr.goodMorningMessage)
  .delete(userCtr.goodMorningMessage);

export default route;
