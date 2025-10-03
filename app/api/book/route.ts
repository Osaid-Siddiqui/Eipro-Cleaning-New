import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Log the booking data (in production, this would save to a database or send an email)
    console.log("[v0] Booking received:", {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      service: data.service,
      vehicleType: data.vehicleType,
      location: data.location,
      date: data.date,
      time: data.time,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // Simulate successful booking
    return NextResponse.json(
      {
        success: true,
        message: "Booking received successfully",
        bookingId: `EPD-${Date.now()}`,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Booking error:", error)
    return NextResponse.json({ success: false, message: "Failed to process booking" }, { status: 500 })
  }
}
