import { ollama } from "ollama-ai-provider";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: ollama("gemma:2b-instruct"),
    messages,
  });
  return result.toDataStreamResponse();
}
