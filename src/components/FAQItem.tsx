import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group hover:bg-white/5 px-6 rounded-lg transition-all"
      >
        <span className="font-bold text-lg md:text-xl flex-1">{question}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
          {isOpen ? (
            <Minus className="w-4 h-4 text-pink-400" />
          ) : (
            <Plus className="w-4 h-4 text-purple-400" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}
