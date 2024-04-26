import { body } from "express-validator";

export const goodMorningVaidation = [
  body("name").notEmpty().withMessage("provide name"),
];

export const goodMorningVaidation2 = [
    body("name1").notEmpty().withMessage("provide name1"),
  ];
  