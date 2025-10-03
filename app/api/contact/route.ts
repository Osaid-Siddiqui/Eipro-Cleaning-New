import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Log the contact form data (in production, this would save to a database or send an email)
    console.log("[v0] Contact form received:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // Simulate successful submission
    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
