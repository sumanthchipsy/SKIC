import { GoogleGenAI, Chat } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

export const getChatSession = async (): Promise<Chat> => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found");
    throw new Error("API Key not configured");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    chatSession = await ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = await getChatSession();
    const result = await session.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I am currently experiencing technical difficulties. Please try again later or contact our sales team directly.";
  }
};