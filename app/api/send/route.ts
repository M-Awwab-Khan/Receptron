import { resend } from "@/lib/resend";
import ServiceAppointmentEmail from "@/email";

export async function POST(req) {

    const request = await req.json()
    console.log(request)
    const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "mawwabkhank2006@gmail.com",
        subject: "Appointment for Lux Automotive",
        react: ServiceAppointmentEmail(request),
    });

    return new Response('sent', { status: 200 })
}
