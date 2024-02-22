import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { name, service, email } = req.body;

    const message = `
    Name: ${name} \r\n
    Service: ${service} \r\n
    Email: ${email}
    `;

    console.log(`message: ${message}`);

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error("Sendgrid API key not found");
    }

    mail.setApiKey(process.env.SENDGRID_API_KEY);

    const data = {
      to: "ryan@konten.dev",
      // cc: "asher@konten.dev",
      from: "ryan@konten.dev",
      replyTo: email,
      subject: "New message from Konten Website",
      text: message,
      html: message.replace(/\r\n/g, "<br>"), // Convert newlines to HTML breaks for better email formatting
    };

    await mail.send(data);

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Email not sent" });
  }
}
