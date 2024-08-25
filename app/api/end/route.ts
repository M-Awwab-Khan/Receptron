import Groq from "groq-sdk";
import { extract_json_transcript } from "@/lib/prompt";

const groq = new Groq();
export async function POST(req: Request) {

    const { transcript } = await req.json()
    if (!transcript) return new Response("Invalid transcript", { status: 400 });

    const completion = await groq.chat.completions.create({
        model: "llama3-8b-8192",
        messages: [
            {
                role: "system",
                content: extract_json_transcript,
            },
            {
                role: "user",
                content: `Here is the real transcript between receptionist and a customer:\n\n${transcript}`,
            },
        ],
        response_format: {
            type: "json_object"
        }
    });

    const response = completion.choices[0].message.content;
    return new Response(response, {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    })
}
