import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

interface SendRequestBody {
  email: string;
  randomCode: string;
}

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(bodyParser.json());

function lerArquivoHTML(path: string): string {
  return fs.readFileSync(path, "utf8");
}

const emailTemplate = lerArquivoHTML("./index.html");

app.post("/send", async (req: Request, res: Response) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL as string,
      pass: process.env.PASSWORD as string,
    },
  });

  const mailOptions = {
    from: {
      name: "Email Verification",
      address: process.env.EMAIL as string,
    },
    to: (req.body as SendRequestBody).email,
    subject: "NIHIL",
    text: "Random Code: " + (req.body as SendRequestBody).randomCode,
    html: emailTemplate.replace(
      "{{randomCode}}",
      (req.body as SendRequestBody).randomCode
    ),
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(400).json({
        error: true,
        message: "Erro ao enviar o email",
      });
    }
    return res.status(200).json({
      error: false,
      message: "Email enviado com sucesso",
    });
  });
});

app.listen(3333, () => {
  console.log("Running on: 3333");
});
