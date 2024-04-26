import { Request, Response } from "express";

export const goodMorningMessage = (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const user = 
    // if (!name) return res.status(400).json({ message: "Name is required" });
    console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
    return res.status(200).json({ message: `hello dear ${name}, GoodMorning` });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// this is user create post api

export const userCreate = (req: Request, res: Response) => {
  try {
    const { name, mobileNumber, address, fatherName } = req.body;
  } catch (error) {
    return res.status(500).json(error);
  }
};
