import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { referrals } = body;

    if (!Array.isArray(referrals) || referrals.length === 0) {
      return NextResponse.json({ message: "No referrals provided" }, { status: 400 });
    }

    // Validate each referral
    for (const ref of referrals) {
      if (
        !ref.name ||
        !ref.companyName ||
        !ref.email ||
        !ref.phone ||
        !ref.jobTitle
      ) {
        return NextResponse.json({ message: "All referral fields are required" }, { status: 400 });
      }
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: "faizan@ostive.com",
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    // Build HTML table for all referrals
    const referralsTable = `
      <table style="width: 100%; border-collapse: collapse">
        <thead>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Full Name</th>
            <th style="padding: 8px; border: 1px solid #ddd">Job Title</th>
            <th style="padding: 8px; border: 1px solid #ddd">Company Name</th>
            <th style="padding: 8px; border: 1px solid #ddd">Email</th>
            <th style="padding: 8px; border: 1px solid #ddd">Phone</th>
          </tr>
        </thead>
        <tbody>
          ${referrals
            .map(
              (ref) => `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd">${ref.name}</td>
              <td style="padding: 8px; border: 1px solid #ddd">${ref.jobTitle}</td>
              <td style="padding: 8px; border: 1px solid #ddd">${ref.companyName}</td>
              <td style="padding: 8px; border: 1px solid #ddd">${ref.email}</td>
              <td style="padding: 8px; border: 1px solid #ddd">${ref.phone}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;

    await transporter.sendMail({
      from: `"FlowIQ" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: "New Client Referral Submission",
      html: `
        <h2>New Referral${referrals.length > 1 ? "s" : ""} Submitted</h2>
        ${referralsTable}
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}