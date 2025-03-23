import express from "express";
const router = express.Router();
import { sendVerificationEmail } from "../utils/verifyMail";

router.post("/mail", async (req, res) => {
  try {
    const { email, data } = req.body;
    const response = await sendVerificationEmail(email, data);
    res.send(response);
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

export default router;
