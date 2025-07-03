import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface InputAreaProps {
  onSendMessage: (message: string, type?: 'chat' | 'stimulasi' | 'dongeng' | 'milestone') => void;
  isLoading: boolean;
}

export default function InputArea({ onSendMessage, isLoading }: InputAreaProps) {
  const [input, setInput] = useState("");
  const [charCount, setCharCount] = useState(0);
  const { toast } = useToast();

  const handleInputChange = (value: string) => {
    if (value.length <= 500) {
      setInput(value);
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast({
        title: "Pesan kosong",
        description: "Mohon ketik pertanyaan atau topik terlebih dahulu.",
        variant: "destructive"
      });
      return;
    }
    onSendMessage(input.trim());
    setInput("");
    setCharCount(0);
  };

  const handleSuggestionClick = (type: 'stimulasi' | 'dongeng' | 'milestone') => {
    const prompts = {
      stimulasi: input.trim() || "anak usia 2-3 tahun",
      dongeng: input.trim() || "persahabatan dan kebaikan", 
      milestone: input.trim() || "anak usia 1-2 tahun"
    };
    
    onSendMessage(prompts[type], type);
    setInput("");
    setCharCount(0);
  };

  return (
    <div className="p-4 bg-white border-t border-gray-100">
      {/* Suggestion chips */}
      <div className="pb-4 flex flex-wrap gap-2 justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSuggestionClick('stimulasi')}
          disabled={isLoading}
          className="suggestion-chip px-4 py-2 rounded-full text-sm font-medium border-0"
        >
          <i className="fas fa-lightbulb mr-1"></i> Ide Stimulasi
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSuggestionClick('dongeng')}
          disabled={isLoading}
          className="suggestion-chip px-4 py-2 rounded-full text-sm font-medium border-0"
        >
          <i className="fas fa-book-open mr-1"></i> Buat Dongeng
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSuggestionClick('milestone')}
          disabled={isLoading}
          className="suggestion-chip px-4 py-2 rounded-full text-sm font-medium border-0"
        >
          <i className="fas fa-chart-line mr-1"></i> Milestone
        </Button>
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <Input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Ketik pertanyaan atau topik..."
            disabled={isLoading}
            className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-primary transition-colors"
            onClick={() => {
              toast({
                title: "Fitur Voice",
                description: "Fitur voice input sedang dalam pengembangan"
              });
            }}
          >
            <i className="fas fa-microphone text-lg"></i>
          </Button>
        </div>
        <Button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-gradient-to-r from-primary to-blue-700 text-white p-3 rounded-full hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i className="fas fa-paper-plane text-lg"></i>
        </Button>
      </form>

      {/* Character counter */}
      {charCount > 0 && (
        <div className={`text-xs mt-2 text-right ${charCount > 450 ? 'text-red-500' : 'text-gray-400'}`}>
          <span>{charCount}</span>/500
        </div>
      )}
    </div>
  );
}
