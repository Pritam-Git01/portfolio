import dbConnect from "@/lib/db";
import Message from "@/models/Message";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (body) => {
  const emailContent = `<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      </body>
      </html>`;

  const msg = {
    to: process.env.RECIEVER_EMAIL,
    from: {
      address: body.email,
      name: body.name,
    },
    subject: `New Message from portfolio website`,
    html: emailContent,
  };

  try {
    transporter.sendMail(msg);
    return { success: true };
  } catch (error) {
    if (error.response) {
      console.error(error.response.body)
    }
    throw new Error(error.message);
  }
};

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const message = await Message.create(body);
    await sendEmail(body);
    return NextResponse.json({ success: true, data: message }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const messages = await Message.find({}).sort({ createdAt: -1 });
    return NextResponse.json(
      { success: true, data: messages },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
