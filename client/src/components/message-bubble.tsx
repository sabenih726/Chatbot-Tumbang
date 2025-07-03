import { Message } from "@/hooks/use-chat";

interface MessageBubbleProps {
  message: Message;
}

function cleanMarkdown(text: string): string {
  return text
    .replace(/\*{1,3}(.*?)\*{1,3}/g, '$1')    // Remove *, **, ***
    .replace(/_{1,3}(.*?)_{1,3}/g, '$1')      // Remove _, __, ___
    .replace(/`{1,3}[\s\S]*?`{1,3}/g, '')     // Remove code blocks and inline code
    .replace(/#{1,6}\s*/g, '')                // Remove headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // Remove links [text](url)
    .replace(/\|.*?\|/g, '')                  // Remove table separators
    .replace(/^\s*[-+*]\s+/gm, '- ')          // Normalize bullet points
    .replace(/^\s*\d+\.\s+/gm, '')            // Remove numbered list formatting
    .trim();
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  if (message.sender === 'user') {
    return (
      <div className="flex justify-end mb-4 animate-slide-up">
        <div className="chat-bubble-user py-3 px-4 rounded-2xl rounded-br-md max-w-xs lg:max-w-sm">
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-4 animate-slide-up">
      <div className="flex items-start">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
          <i className="fas fa-robot text-primary text-sm"></i>
        </div>
        <div className="chat-bubble-bot py-3 px-4 rounded-2xl rounded-bl-md max-w-xs lg:max-w-sm">
          <div 
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: cleanMarkdown(message.content).replace(/\n/g, '<br>') 
            }}
          />
        </div>
      </div>
    </div>
  );
}
