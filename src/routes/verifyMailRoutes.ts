import express from "express";
const router = express.Router();
import { sendEmail } from "../utils/verifyMail";
import { Request, Response } from "express";
import { verificationEmail } from "../controllers/userController";

router.post("/mail", async (req: Request, res: Response) => {
  try {
    const { email, name, link } = req.body;
    const response = await sendEmail({ email, name, link });
    res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});
router.get("/mailTest", async (req: Request, res: Response) => {
  await sendEmail({
    email: "kevin.van.damme.pxl@protonmail.com",
    name: "Kevin Van Damme",
  });
  res.end();
});
router.get("/verify/:token", verificationEmail);
export default router;
