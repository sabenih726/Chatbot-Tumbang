import { useEffect, useRef } from "react";
import MessageBubble from "./message-bubble";
import TypingIndicator from "./typing-indicator";
import { Message } from "@/hooks/use-chat";

interface ChatContainerProps {
  messages: Message[];
  isTyping: boolean;
}

export default function ChatContainer({ messages, isTyping }: ChatContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div 
      ref={containerRef}
      className="flex-1 p-6 overflow-y-auto chat-container bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Welcome message */}
      <div className="flex justify-center mb-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
            <i className="fas fa-baby text-white text-xl"></i>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Selamat Datang! 👋</h2>
          <p className="text-sm text-gray-600 max-w-xs">Saya siap membantu Ayah/Bunda dengan pertanyaan seputar tumbuh kembang anak</p>
        </div>
      </div>

      {/* Initial bot message */}
      {messages.length === 0 && (
        <div className="flex justify-start mb-4 animate-slide-up">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
              <i className="fas fa-robot text-primary text-sm"></i>
            </div>
            <div className="chat-bubble-bot py-3 px-4 rounded-2xl rounded-bl-md max-w-xs">
              <p className="text-sm leading-relaxed">Halo! Saya di sini untuk membantu dengan pertanyaan tentang perkembangan anak. Silakan ketik pertanyaan atau pilih salah satu fitur di bawah! 😊</p>
            </div>
          </div>
        </div>
      )}

      {/* Chat messages */}
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}

      {/* Typing indicator */}
      {isTyping && <TypingIndicator />}
    </div>
  );
}
