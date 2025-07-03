import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { generateChatResponse } from "./services/gemini";

const chatRequestSchema = z.object({
  message: z.string().min(1).max(500),
  type: z.enum(['chat', 'stimulasi', 'dongeng', 'milestone']).default('chat')
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, type } = chatRequestSchema.parse(req.body);
      
      if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_AI_API_KEY) {
        return res.status(500).json({ 
          error: "API key not configured",
          response: "Maaf, API key belum dikonfigurasi. Silakan hubungi administrator."
        });
      }

      const response = await generateChatResponse(message, type);
      
      res.json({ 
        response,
        success: true 
      });
    } catch (error) {
      console.error("Chat endpoint error:", error);
      
      let errorMessage = "Maaf, terjadi kesalahan saat memproses permintaan Anda.";
      let statusCode = 500;
      
      if (error instanceof z.ZodError) {
        errorMessage = "Format permintaan tidak valid.";
        statusCode = 400;
      } else if (error instanceof Error) {
        if (error.message.includes('403') || error.message.includes('invalid')) {
          errorMessage = "API key tidak valid atau kuota habis.";
          statusCode = 403;
        } else if (error.message.includes('429')) {
          errorMessage = "Terlalu banyak permintaan. Silakan tunggu sebentar.";
          statusCode = 429;
        }
      }
      
      res.status(statusCode).json({ 
        error: errorMessage,
        response: errorMessage,
        success: false 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy",
      timestamp: new Date().toISOString(),
      apiConfigured: !!(process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY)
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
