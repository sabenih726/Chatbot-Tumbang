import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  onClear: () => void;
}

export default function ChatHeader({ onClear }: ChatHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-6 flex items-center shadow-lg">
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-4 shrink-0 shadow-md">
        <i className="fas fa-robot text-2xl text-primary"></i>
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold leading-tight">Asisten AI Tumbuh Kembang</h1>
        <div className="flex items-center mt-1">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse-soft"></div>
          <p className="text-sm opacity-90">Online • Didukung Gemini AI</p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClear}
        className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors text-white hover:text-white"
      >
        <i className="fas fa-trash text-lg"></i>
      </Button>
    </div>
  );
}
