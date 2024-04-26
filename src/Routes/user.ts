import { userCtr } from "../Controller";
import { Router } from "express";
import { generic } from "../middleware/generic";
import { goodMorningVaidation } from "../validation/generic";
import { validate } from "../validation";

const route = Router();

route
  .route("/user")
  .get(userCtr.goodMorningMessage)
  .post(goodMorningVaidation, validate, userCtr.goodMorningMessage);

route
  .route("/:id")
  .put(userCtr.goodMorningMessage)
  .get(userCtr.goodMorningMessage)
  .delete(userCtr.goodMorningMessage);

export default route;
