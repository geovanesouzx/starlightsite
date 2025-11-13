import { useEffect, useRef } from 'react';

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function LiquidGlassCard({ children, className = '' }: LiquidGlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const specularRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    function handleMouseMove(e: MouseEvent) {
      if (!element || !specularRef.current) return;
      
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Add highlight effect
      specularRef.current.style.background = `radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0.15) 0%,
        rgba(255,255,255,0.05) 30%,
        rgba(255,255,255,0) 60%
      )`;
    }
    
    function handleMouseLeave() {
      if (!specularRef.current) return;
      specularRef.current.style.background = 'none';
    }

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={`glass-card ${className}`}>
      <div className="glass-filter"></div>
      <div className="glass-overlay"></div>
      <div className="glass-distortion-overlay"></div>
      <div ref={specularRef} className="glass-specular"></div>
      <div className="glass-content">
        {children}
      </div>
    </div>
  );
}
