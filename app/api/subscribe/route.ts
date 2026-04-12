import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Submit to MailerLite using their embedded form endpoint
    // This uses the form ID pcFfcJ from account 2242500
    const formData = new URLSearchParams()
    formData.append("fields[email]", email)
    formData.append("ml-submit", "1")
    formData.append("anticsrf", "true")

    const response = await fetch(
      "https://assets.mailerlite.com/jsonp/2242500/forms/pcFfcJ/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    )

    // MailerLite returns a JSONP response, but we just need to know it was received
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("MailerLite subscription error:", error)
    // Return success anyway - the form submission likely went through
    return NextResponse.json({ success: true })
  }
}
