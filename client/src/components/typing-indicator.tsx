export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-start">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
          <i className="fas fa-robot text-primary text-sm"></i>
        </div>
        <div className="chat-bubble-bot py-3 px-4 rounded-2xl rounded-bl-md">
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
