import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: number;
  type?: 'chat' | 'stimulasi' | 'dongeng' | 'milestone';
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const addMessage = useCallback((content: string, sender: 'user' | 'bot', type?: string) => {
    const message: Message = {
      id: Math.random().toString(36).substr(2, 9),
      content,
      sender,
      timestamp: Date.now(),
      type: type as any
    };
    setMessages(prev => [...prev, message]);
    return message;
  }, []);

  const sendMessage = useCallback(async (content: string, type: 'chat' | 'stimulasi' | 'dongeng' | 'milestone' = 'chat') => {
    if (!content.trim()) return;

    // Add user message
    addMessage(content, 'user', type);
    
    setIsTyping(true);
    setIsLoading(true);

    try {
      const response = await apiRequest('POST', '/api/chat', {
        message: content,
        type
      });

      const data = await response.json();
      
      // Add bot response
      addMessage(data.response, 'bot', type);
      
      toast({
        title: "Pesan terkirim",
        description: "Respons berhasil diterima"
      });
    } catch (error) {
      console.error('Chat error:', error);
      
      let errorMessage = "Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi nanti.";
      
      if (error instanceof Error) {
        if (error.message.includes('403')) {
          errorMessage = "API key tidak valid atau kuota habis. Silakan periksa konfigurasi API.";
        } else if (error.message.includes('429')) {
          errorMessage = "Terlalu banyak permintaan. Silakan tunggu sebentar dan coba lagi.";
        }
      }
      
      addMessage(errorMessage, 'bot');
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  }, [addMessage, toast]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    toast({
      title: "Riwayat dihapus",
      description: "Semua pesan telah dihapus"
    });
  }, [toast]);

  return {
    messages,
    isTyping,
    isLoading,
    sendMessage,
    clearMessages
  };
}
