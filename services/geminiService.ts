import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";
import { ChatMessage } from "../types";

const API_KEY = (import.meta as any).env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: API_KEY || "" });

/**
 * Provides a context-aware chat assistant for the portfolio.
 */
export async function getAssistantResponse(
  userMessage: string,
  chatHistory: ChatMessage[],
) {
  try {
    const portfolioContext = `
      You are an AI assistant for ${PORTFOLIO_DATA.name}, a ${PORTFOLIO_DATA.title}.
      Here is information about them:
      - Intro: ${PORTFOLIO_DATA.shortIntro}
      - Bio: ${PORTFOLIO_DATA.longBio}
      - Skills: ${PORTFOLIO_DATA.skills.map((s) => s.name).join(", ")}
      - Projects: ${PORTFOLIO_DATA.projects.map((p) => `${p.title}: ${p.shortDescription}`).join("; ")}
      - Contact: Email ${PORTFOLIO_DATA.email}, LinkedIn ${PORTFOLIO_DATA.linkedin}, GitHub ${PORTFOLIO_DATA.github}.

      Your goal is to answer questions from recruiters or potential clients about ${PORTFOLIO_DATA.name}. 
      Be professional, concise, and helpful. If you don't know something, suggest contacting ${PORTFOLIO_DATA.name} directly.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: "user", parts: [{ text: portfolioContext }] },
        ...chatHistory.map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        })),
        { role: "user", parts: [{ text: userMessage }] },
      ],
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently resting. Please reach out to me via email instead!";
  }
}
