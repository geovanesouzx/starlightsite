import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group space-y-4 p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${gradient} border border-pink-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
        <Icon className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <h4 className="text-xl md:text-2xl font-black">{title}</h4>
      <p className="text-gray-400 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  );
}
