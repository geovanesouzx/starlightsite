import { LiquidGlassCard } from './components/LiquidGlassCard';
import { MonitorMockup } from './components/MonitorMockup';
import { PhoneMockup } from './components/PhoneMockup';
import { 
  Download, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  Star, 
  Sparkles, 
  Play, 
  Award,
  Zap, 
  Globe, 
  Shield,
  Languages,
  Headphones
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* SVG Filter for Glass Distortion */}
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion">
          <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>

      {/* Animated Background with Pink to Purple Gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950 via-purple-950 to-black" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pink-600/30 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-fuchsia-600/20 rounded-full blur-[120px] animate-float" />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_100%)]" />

      {/* Content */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-7xl w-full space-y-8 md:space-y-16">
            
            {/* Premium Badge */}
            <div className="flex justify-center animate-fade-in">
              <LiquidGlassCard className="!w-auto !h-auto">
                <div className="flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-pink-400 animate-pulse" />
                  <span className="tracking-[0.2em] md:tracking-[0.3em] font-black text-xs md:text-sm bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                    PREMIUM STREAMING
                  </span>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-pink-400 animate-pulse" />
                </div>
              </LiquidGlassCard>
            </div>

            {/* Main Hero Card */}
            <div className="animate-fade-in-up">
              <LiquidGlassCard className="!w-full !h-auto backdrop-blur-xl">
                <div className="text-center space-y-8 md:space-y-12 py-12 md:py-20 px-4 md:px-20">
                  
                  {/* Logo Title */}
                  <div className="space-y-4 md:space-y-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-50 animate-pulse" />
                      <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x" style={{ backgroundSize: '200% auto' }}>
                          STARLIGHT
                        </span>
                      </h1>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3 md:gap-4">
                      <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
                        Seu universo de entretenimento
                      </p>
                      <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    </div>
                  </div>

                  {/* Features Pills */}
                  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    <div className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <Play className="w-3 h-3 md:w-4 md:h-4 text-pink-400" />
                        <span className="text-xs md:text-sm font-semibold">Streaming HD</span>
                      </div>
                    </div>
                    <div className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <Award className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                        <span className="text-xs md:text-sm font-semibold">Conteúdo Premium</span>
                      </div>
                    </div>
                    <div className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 border border-fuchsia-500/30 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3 h-3 md:w-4 md:h-4 text-fuchsia-400" />
                        <span className="text-xs md:text-sm font-semibold">Sem Anúncios</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4 md:pt-8">
                    <a 
                      href="https://starlight-taupe.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-8 md:px-12 py-4 md:py-6 rounded-2xl overflow-hidden w-full sm:w-auto transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-pink-500/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 animate-gradient-x" style={{ backgroundSize: '200% 100%' }} />
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-slow" style={{ backgroundSize: '200% 100%' }} />
                      </div>
                      <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
                      
                      <div className="relative flex items-center justify-center gap-2 md:gap-3">
                        <ExternalLink className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-lg md:text-xl font-black tracking-wide">ACESSAR SITE</span>
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-125 transition-transform duration-300" />
                      </div>
                    </a>

                    <a
                      href="https://www.mediafire.com/file/pysjp96qw6ptz54/app-debug.apk/file"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-8 md:px-12 py-4 md:py-6 rounded-2xl overflow-hidden w-full sm:w-auto transform hover:scale-105 transition-all duration-500 backdrop-blur-xl border-2 border-white/30 hover:border-pink-400/50 shadow-xl hover:shadow-pink-500/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative flex items-center justify-center gap-2 md:gap-3">
                        <Download className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-y-1 transition-transform duration-300" />
                        <span className="text-lg md:text-xl font-black tracking-wide">BAIXAR APP</span>
                      </div>
                    </a>
                  </div>

                  {/* Subtitle */}
                  <p className="text-gray-400 text-xs md:text-sm">
                    Disponível para Web, Android
                  </p>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </section>

        {/* DEVICES SECTION */}
        <section className="px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in-up">
              <LiquidGlassCard className="!w-full !h-auto">
                <div className="p-6 md:p-12 space-y-8 md:space-y-12">
                  <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Disponível para PC e Android
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                      Assista onde e quando quiser
                    </p>
                  </div>

                  {/* Devices Display */}
                  <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Monitor */}
                    <div className="space-y-6">
                      <MonitorMockup screenshot="https://files.catbox.moe/54lb8a.png" />
                      <div className="text-center space-y-2">
                        <h3 className="text-xl md:text-2xl font-black">Versão Web</h3>
                        <p className="text-gray-400 text-sm md:text-base">
                          Acesse pelo navegador sem instalação
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-6">
                      <PhoneMockup screenshot="https://files.catbox.moe/ss8z21.png" />
                      <div className="text-center space-y-2">
                        <h3 className="text-xl md:text-2xl font-black">App Mobile</h3>
                        <p className="text-gray-400 text-sm md:text-base">
                          Baixe para Android
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </section>

        {/* PLATFORM CARDS */}
        <section className="px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Web Platform */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <LiquidGlassCard className="!w-full !h-full group hover:scale-105 transition-all duration-500 cursor-pointer">
                  <div className="h-full p-6 md:p-10 space-y-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-pink-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-700" />
                    
                    <div className="relative space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-pink-500/50">
                          <Monitor className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-pink-500/20 border border-pink-500/40 backdrop-blur-sm">
                          <span className="text-xs font-black tracking-wider">WEB</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          Versão Web
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-lg">
                          Acesse instantaneamente pelo navegador. Sem instalação, sem downloads. 
                          Assista em qualquer dispositivo conectado à internet.
                        </p>
                      </div>

                      <div className="pt-4">
                        <a 
                          href="https://starlight-taupe.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-pink-400 hover:text-pink-300 transition-colors group/btn font-bold text-base md:text-lg"
                        >
                          <span>Acessar agora</span>
                          <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </LiquidGlassCard>
              </div>

              {/* Mobile Platform */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <LiquidGlassCard className="!w-full !h-full group hover:scale-105 transition-all duration-500 cursor-pointer">
                  <div className="h-full p-6 md:p-10 space-y-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-purple-600/10 transition-all duration-700" />
                    
                    <div className="relative space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-purple-500/50">
                          <Smartphone className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-purple-500/20 border border-purple-500/40 backdrop-blur-sm">
                          <span className="text-xs font-black tracking-wider">MOBILE</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          App Mobile
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-lg">
                          Experiência otimizada para Android. Baixe conteúdo e receba 
                          notificações dos seus títulos favoritos.
                        </p>
                      </div>

                      <div className="pt-4">
                        <a
                          href="https://www.mediafire.com/file/pysjp96qw6ptz54/app-debug.apk/file"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors group/btn font-bold text-base md:text-lg"
                        >
                          <span>Baixar aplicativo</span>
                          <Download className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-y-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </LiquidGlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in-up">
              <LiquidGlassCard className="!w-full !h-auto">
                <div className="p-6 md:p-12 space-y-8 md:space-y-12">
                  <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Recursos Premium
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                      Tudo que você precisa para a melhor experiência
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="group space-y-4 p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-black">Qualidade HD</h4>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Imagem cristalina e som imersivo para a melhor experiência cinematográfica
                      </p>
                    </div>

                    <div className="group space-y-4 p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Download className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-black">Downloads Ilimitados</h4>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Baixe seus filmes e séries favoritos e assista offline quando quiser
                      </p>
                    </div>

                    <div className="group space-y-4 p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Zap className="w-8 h-8 md:w-10 md:h-10 text-fuchsia-400" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-black">Sem Anúncios</h4>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Experiência premium sem interrupções para você aproveitar ao máximo
                      </p>
                    </div>

                    <div className="group space-y-4 p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 border border-pink-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Monitor className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-black">Múltiplas Telas</h4>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Assista em até 4 dispositivos simultaneamente com a mesma conta
                      </p>
                    </div>

                    <div className="group space-y-4 p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Globe className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-black">Acesso Global</h4>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Assista de qualquer lugar do mundo sem restrições geográficas
                      </p>
                    </div>

                    <div className="group space-y-4 p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-fuchsia-400" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-black">Conteúdo Exclusivo</h4>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Acesso a produções originais e lançamentos antes de todo mundo
                      </p>
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6 animate-fade-in">
              <div className="flex items-center justify-center gap-3">
                <Star className="w-6 h-6 text-pink-400" />
                <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  STARLIGHT
                </span>
              </div>
              <p className="text-sm text-gray-500">
                © 2025 STARLIGHT. Plataforma premium de streaming.
              </p>
              <div className="flex justify-center gap-6 text-sm text-gray-600">
                <a href="#" className="hover:text-pink-400 transition-colors">Termos de Uso</a>
                <span>•</span>
                <a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a>
                <span>•</span>
                <a href="#" className="hover:text-pink-400 transition-colors">Suporte</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-shimmer-slow {
          animation: shimmer-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
