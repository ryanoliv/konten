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

    // const message = `
    // Client Name: ${name} \r\n
    // Client Wants A: ${service} \r\n
    // Client Email: ${email}
    // `;

    const message = `
    <h1>New Email Just Received From Konten.dev</h1>
    <p><strong>Client Name:</strong> ${name}</p>
    <p><strong>Client Wants A:</strong> ${service}</p>
    <p><strong>Client Email:</strong> ${email}</p>
    `;

    console.log(`message: ${message}`);

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error("Sendgrid API key not found");
    }

    mail.setApiKey(process.env.SENDGRID_API_KEY);

    const data = {
      to: "ryan@konten.dev",
      cc: "asher@konten.dev",
      from: "ryan@konten.dev",
      replyTo: email,
      subject: "New message from Konten Website",
      text: message.replace(/<br>/g, "\r\n").replace(/<.*?>/g, ""), // Strip HTML for plain text version
      html: message, // Use the HTML formatted message
    };

    await mail.send(data);

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Email not sent" });
  }
}
