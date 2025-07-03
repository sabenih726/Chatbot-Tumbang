import { useEffect } from "react";
import ChatHeader from "@/components/chat-header";
import ChatContainer from "@/components/chat-container";
import InputArea from "@/components/input-area";
import { useChat } from "@/hooks/use-chat";

export default function ChatPage() {
  const {
    messages,
    isTyping,
    isLoading,
    sendMessage,
    clearMessages
  } = useChat();

  useEffect(() => {
    document.title = "Asisten AI Tumbuh Kembang Anak";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-2xl flex flex-col h-[95vh] max-h-[800px] overflow-hidden">
          <ChatHeader onClear={clearMessages} />
          <ChatContainer 
            messages={messages} 
            isTyping={isTyping}
          />
          <InputArea 
            onSendMessage={sendMessage}
            isLoading={isLoading}
          />
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 loading-overlay flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-3"></div>
              <p className="text-sm text-gray-600">Memproses permintaan...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
