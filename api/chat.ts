import type { VercelRequest, VercelResponse } from '@vercel/node';
import { generateChatResponse } from '../server/services/gemini.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { message, type = 'chat' } = req.body;

    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const response = await generateChatResponse(message, type);
    
    res.status(200).json({
      response,
      success: true
    });
  } catch (error: any) {
    console.error('Chat API error:', error);
    res.status(500).json({
      error: 'Failed to generate response',
      success: false
    });
  }
}