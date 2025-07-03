import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY || "" 
});

export async function generateChatResponse(prompt: string, type: string = 'chat'): Promise<string> {
  try {
    const basePrompt = `Anda adalah 'Asisten Tumbuh Kembang Anak', sebuah chatbot AI edukasi yang ramah untuk orang tua. Berikan jawaban yang akurat, mudah dipahami, dalam bahasa Indonesia, dan terstruktur dengan baik. Selalu berikan disclaimer untuk berkonsultasi dengan dokter untuk masalah medis yang spesifik. Gunakan emoji yang sesuai untuk membuat jawaban lebih menarik.

ATURAN FORMATTING PENTING:
- JANGAN PERNAH gunakan tanda bintang (*) atau underscore (_) untuk formatting
- JANGAN gunakan format Markdown seperti **bold**, *italic*, __bold__, atau _italic_
- Untuk menekankan teks, gunakan HURUF KAPITAL
- Untuk struktur, gunakan:
  • Nomor (1., 2., 3.) untuk daftar berurutan
  • Tanda hubung (-) untuk bullet point
  • Paragraf terpisah untuk topik berbeda
- Gunakan emoji untuk membuat text lebih menarik dan mudah dibaca`;

    let finalPrompt = "";
    
    switch (type) {
      case 'stimulasi':
        finalPrompt = `${basePrompt} Berikan 5 ide stimulasi atau permainan yang kreatif dan edukatif untuk topik ini: "${prompt}". Jelaskan cara bermainnya secara singkat dan beri tips keselamatan jika diperlukan.`;
        break;
      case 'dongeng':
        finalPrompt = `${basePrompt} Buatkan sebuah dongeng anak yang singkat (maksimal 200 kata), positif, dan imajinatif tentang: "${prompt}". Sertakan nilai moral yang mendidik.`;
        break;
      case 'milestone':
        finalPrompt = `${basePrompt} Jelaskan milestone perkembangan anak terkait: "${prompt}". Berikan informasi berdasarkan usia dan tanda-tanda yang perlu diperhatikan.`;
        break;
      default:
        finalPrompt = `${basePrompt} Jawab pertanyaan berikut dengan lengkap dan mudah dipahami: "${prompt}"`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{
        parts: [{ text: finalPrompt }]
      }],
      config: {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 8192,
      }
    });

    if (response.text) {
      // Remove Markdown formatting characters step by step
      let cleanText = response.text
        // Remove bold **text** and ***text***
        .replace(/\*\*\*(.*?)\*\*\*/g, '$1')
        .replace(/\*\*(.*?)\*\*/g, '$1')
        // Remove italic *text*
        .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '$1')
        // Remove underlined __text__ and ___text___
        .replace(/_{3}(.*?)_{3}/g, '$1')
        .replace(/_{2}(.*?)_{2}/g, '$1')
        .replace(/(?<!_)_([^_]+)_(?!_)/g, '$1')
        // Remove code blocks and inline code
        .replace(/`{3}[\s\S]*?`{3}/g, '')
        .replace(/`([^`]+)`/g, '$1')
        // Remove headers
        .replace(/#{1,6}\s+/g, '')
        // Remove links [text](url)
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        // Clean up excessive whitespace
        .replace(/\n{3,}/g, '\n\n')
        .trim();
      
      return cleanText;
    } else {
      // Check for safety ratings block
      if (response.candidates && response.candidates[0]?.finishReason === 'SAFETY') {
        return "Maaf, permintaan Anda tidak dapat diproses karena alasan keamanan. Mohon ajukan pertanyaan lain yang sesuai untuk anak-anak.";
      }
      return "Maaf, saya tidak dapat memberikan respons saat ini. Silakan coba lagi.";
    }
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error(`Failed to generate response: ${error}`);
  }
}
