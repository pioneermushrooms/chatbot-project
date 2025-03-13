import { NextResponse } from "next/server";
import OpenAI from "openai";

// Ensure your OpenAI API key is stored in Vercel environment variables
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { message } = await req.json();
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: message }],
      max_tokens: 200,
    });

    return NextResponse.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Chatbot Error:", error);
    return NextResponse.json({ error: "Failed to fetch chatbot response" }, { status: 500 });
  }
}
