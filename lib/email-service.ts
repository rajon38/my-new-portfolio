import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SENDER_SMTP_HOST,
  port: parseInt(process.env.EMAIL_SENDER_SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.EMAIL_SENDER_SMTP_USER,
    pass: process.env.EMAIL_SENDER_SMTP_PASS,
  },
})

export interface EmailPayload {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: EmailPayload) {
  try {
    // Email to admin (yourself)
    await transporter.sendMail({
      from: process.env.EMAIL_SENDER_SMTP_FROM,
      to: process.env.EMAIL_SENDER_SMTP_USER,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #22c55e;">New Message from ${data.name}</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="margin-top: 20px; color: #666;">
            You can reply directly to this email to contact them.
          </p>
        </div>
      `,
      replyTo: data.email,
    })

    // Confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_SENDER_SMTP_FROM,
      to: data.email,
      subject: "Message Received - Thank You!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #22c55e;">Thank You, ${data.name}!</h2>
          <p>Your message has been received successfully. I appreciate you reaching out and will get back to you as soon as possible.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message Summary:</strong></p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="color: #666;">Best regards,<br>Rashedul Islam</p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}
