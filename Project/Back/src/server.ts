import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import { handleSendMail } from "./nodemailer";
import { z } from "zod";

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["POST"],
  })
);

app.post("/send", async (req: Request, res: Response) => {
  const createUserSchema = z.object({
    randomAuthCode: z.string(),
    email: z.string().email(),
  });

  try {
    const { email, randomAuthCode } = createUserSchema.parse(req.body);
    await handleSendMail(email, randomAuthCode);
    return res
      .status(200)
      .json({ status: 200, message: "Email sent successfully", error: false });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Error sending email", error: true });
  }
});

app.listen(process.env.PORT ?? 3333, () => {
  console.log("Running on: 3333");
});
