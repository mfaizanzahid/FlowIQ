
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, companyName, email, phone, automationArea } = body;

    if (!fullName || !companyName || !email || !phone || !automationArea) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey", // SendGrid API Key username
        pass: process.env.SENDGRID_API_KEY, // Your SendGrid API Key
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL, // Replace with your email
      to: process.env.TO_EMAIL, // Replace with the recipient's email
      subject: "New Consultation Request",
      html: `
        <table style="width: 100%; border-collapse: collapse">
          <tr>
            <th style="text-align: left; padding: 8px; border: 1px solid #ddd">Full Name</th>
            <td style="padding: 8px; border: 1px solid #ddd">${fullName}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 8px; border: 1px solid #ddd">Company Name</th>
            <td style="padding: 8px; border: 1px solid #ddd">${companyName}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 8px; border: 1px solid #ddd">Email</th>
            <td style="padding: 8px; border: 1px solid #ddd">${email}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 8px; border: 1px solid #ddd">Phone</th>
            <td style="padding: 8px; border: 1px solid #ddd">${phone}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 8px; border: 1px solid #ddd">Automation Area</th>
            <td style="padding: 8px; border: 1px solid #ddd">${automationArea}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}