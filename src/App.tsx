import { LiquidGlassCard } from './components/LiquidGlassCard';
import { MonitorMockup } from './components/MonitorMockup';
import { PhoneMockup } from './components/PhoneMockup';
import { FAQItem } from './components/FAQItem';
import { FeatureCard } from './components/FeatureCard';
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
  Users,
  Tv,
  Film,
  Clock,
  Wifi,
  WifiOff,
  Languages,
  Headphones,
  TrendingUp,
  Check,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const features = [
    {
      icon: Play,
      title: 'Streaming HD & 4K',
      description: 'Assista com qualidade de imagem excepcional. Suporte para resolução 4K e HDR em dispositivos compatíveis.',
      gradient: 'from-pink-500/20 to-purple-500/20'
    },
    {
      icon: Download,
      title: 'Downloads Ilimitados',
      description: 'Baixe quantos filmes e séries quiser. Assista offline sem consumir seus dados móveis.',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Zap,
      title: 'Sem Anúncios',
      description: 'Experiência premium sem interrupções. Nenhum comercial ou propaganda durante sua maratona.',
      gradient: 'from-fuchsia-500/20 to-pink-500/20'
    },
    {
      icon: Monitor,
      title: 'Múltiplas Telas',
      description: 'Assista em até 4 dispositivos simultaneamente. Compartilhe com sua família sem conflitos.',
      gradient: 'from-pink-500/20 to-fuchsia-500/20'
    },
    {
      icon: Globe,
      title: 'Acesso Global',
      description: 'Assista de qualquer lugar do mundo. Sem restrições geográficas ou bloqueios de região.',
      gradient: 'from-purple-500/20 to-fuchsia-500/20'
    },
    {
      icon: Sparkles,
      title: 'Conteúdo Exclusivo',
      description: 'Acesso a lançamentos e produções originais. Veja antes de todo mundo os novos títulos.',
      gradient: 'from-fuchsia-500/20 to-purple-500/20'
    },
    {
      icon: Languages,
      title: 'Múltiplos Idiomas',
      description: 'Legendas e dublagens em vários idiomas. Audio descrição para acessibilidade total.',
      gradient: 'from-pink-500/20 to-purple-500/20'
    },
    {
      icon: Shield,
      title: '100% Seguro',
      description: 'Seus dados protegidos com criptografia de ponta. Privacidade garantida em todas as transações.',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Headphones,
      title: 'Suporte 24/7',
      description: 'Atendimento sempre disponível para ajudar. Chat ao vivo, email e telefone para seu conforto.',
      gradient: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  const faqs = [
    {
      question: 'O STARLIGHT funciona em quais dispositivos?',
      answer: 'O STARLIGHT está disponível em praticamente todos os dispositivos: Smart TVs, computadores (Windows, Mac, Linux), smartphones e tablets (Android e iOS), navegadores web, consoles de videogame e muito mais. Você pode assistir onde preferir!'
    },
    {
      question: 'Posso assistir offline?',
      answer: 'Sim! Com o aplicativo móvel do STARLIGHT você pode baixar filmes e séries para assistir offline. Perfeito para viagens, locais sem internet ou para economizar dados móveis. Os downloads ficam salvos no seu dispositivo até você decidir excluí-los.'
    },
    {
      question: 'Quantas pessoas podem usar a mesma conta?',
      answer: 'Uma conta STARLIGHT permite até 4 dispositivos assistindo simultaneamente. Você pode compartilhar com sua família e cada um pode assistir o que quiser ao mesmo tempo, em dispositivos diferentes.'
    },
    {
      question: 'Qual a qualidade do streaming?',
      answer: 'Oferecemos qualidade HD (720p), Full HD (1080p) e 4K Ultra HD com suporte a HDR. A qualidade se ajusta automaticamente à sua velocidade de internet para garantir a melhor experiência sem travamentos.'
    },
    {
      question: 'Como funciona o download para Android?',
      answer: 'Baixe nosso aplicativo APK oficial através do link fornecido. Após o download, abra o arquivo e permita a instalação de fontes desconhecidas nas configurações do seu Android. O app será instalado e você poderá fazer login com sua conta.'
    },
    {
      question: 'Preciso de internet rápida?',
      answer: 'Recomendamos pelo menos 5 Mbps para HD e 25 Mbps para 4K. Porém, nosso player se adapta à sua conexão, então você pode assistir mesmo com internet mais lenta (em qualidade reduzida). Com o download offline, você não precisa de internet nenhuma!'
    },
    {
      question: 'O conteúdo tem legendas e dublagens?',
      answer: 'Sim! A maioria do nosso conteúdo possui legendas em português e diversos idiomas. Muitos títulos também têm opção de dublagem em português. Você pode alternar entre áudio e legendas a qualquer momento durante a reprodução.'
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Sim, não há período de fidelidade. Você pode cancelar sua assinatura a qualquer momento e continuará tendo acesso até o final do período pago. Sem taxas de cancelamento ou multas.'
    }
  ];

  const plans = [
    {
      name: 'BÁSICO',
      price: 'R$ 19,90',
      features: [
        'Qualidade HD',
        '1 tela simultânea',
        'Downloads ilimitados',
        'Sem anúncios',
        'Catálogo completo'
      ],
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'PREMIUM',
      price: 'R$ 29,90',
      features: [
        'Qualidade 4K + HDR',
        '4 telas simultâneas',
        'Downloads ilimitados',
        'Sem anúncios',
        'Catálogo completo',
        'Acesso antecipado',
        'Conteúdo exclusivo'
      ],
      color: 'from-purple-500 to-fuchsia-500',
      popular: true
    },
    {
      name: 'FAMÍLIA',
      price: 'R$ 39,90',
      features: [
        'Qualidade 4K + HDR',
        '6 telas simultâneas',
        'Downloads ilimitados',
        'Sem anúncios',
        'Catálogo completo',
        'Acesso antecipado',
        'Conteúdo exclusivo',
        'Perfis infantis',
        'Controle parental'
      ],
      color: 'from-fuchsia-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Filmes e Séries' },
    { number: '4K', label: 'Ultra HD' },
    { number: '24/7', label: 'Suporte' },
    { number: '190+', label: 'Países' }
  ];

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
                      href="https://www.mediafire.com/file/84rxfhlhti3eime/STARLIGHT.apk/file"
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
                    Disponível para Web, Android e iOS
                  </p>
                </div>
              </LiquidGlassCard>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <LiquidGlassCard className="!w-full !h-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 p-6 md:p-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </LiquidGlassCard>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center animate-bounce">
              <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-pink-400/50" />
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
                      Disponível em Todas as Plataformas
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
                          href="https://www.mediafire.com/file/84rxfhlhti3eime/STARLIGHT.apk/file"
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
                    {features.map((feature, index) => (
                      <FeatureCard key={index} {...feature} />
                    ))}
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </section>

        {/* PLANS SECTION */}
        <section className="px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <div className="text-center space-y-3 animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Escolha Seu Plano
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                Planos flexíveis para todos os perfis
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <LiquidGlassCard className={`!w-full !h-full ${plan.popular ? 'ring-2 ring-pink-500/50' : ''}`}>
                    <div className="p-6 md:p-8 space-y-6 relative">
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-xs font-black">
                            MAIS POPULAR
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-black tracking-wider">{plan.name}</h3>
                        <div className="flex items-baseline gap-2">
                          <span className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                            {plan.price}
                          </span>
                          <span className="text-gray-500 text-sm">/mês</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="https://starlight-taupe.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full py-3 md:py-4 rounded-xl text-center font-black transition-all transform hover:scale-105 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500' 
                            : 'border-2 border-white/30 hover:border-pink-400/50 hover:bg-white/5'
                        }`}
                      >
                        Assinar Agora
                      </a>
                    </div>
                  </LiquidGlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <LiquidGlassCard className="!w-full !h-auto">
                <div className="p-6 md:p-12 space-y-8">
                  <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Perguntas Frequentes
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                      Tire suas dúvidas sobre o STARLIGHT
                    </p>
                  </div>

                  <div className="space-y-2">
                    {faqs.map((faq, index) => (
                      <FAQItem key={index} {...faq} />
                    ))}
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <LiquidGlassCard className="!w-full !h-auto">
                <div className="p-8 md:p-16 text-center space-y-6 md:space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Comece Agora Mesmo
                    </h2>
                    <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">
                      Entre no universo STARLIGHT e descubra milhares de filmes e séries 
                      esperando por você. Sem anúncios, sem limites.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                    <a 
                      href="https://starlight-taupe.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-10 md:px-12 py-4 md:py-5 rounded-2xl overflow-hidden w-full sm:w-auto transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-pink-500/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 animate-gradient-x" style={{ backgroundSize: '200% 100%' }} />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-slow" style={{ backgroundSize: '200% 100%' }} />
                      <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
                      
                      <div className="relative flex items-center justify-center gap-3">
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-lg md:text-xl font-black tracking-wide">COMEÇAR AGORA</span>
                      </div>
                    </a>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-7xl mx-auto space-y-8">
            <LiquidGlassCard className="!w-full !h-auto">
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  {/* Brand */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />
                      <span className="text-xl md:text-2xl font-black tracking-wider bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        STARLIGHT
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base">
                      A melhor plataforma de streaming para você e sua família. 
                      Filmes, séries e muito mais.
                    </p>
                  </div>

                  {/* Links */}
                  <div className="space-y-4">
                    <h4 className="font-black text-base md:text-lg">Links Rápidos</h4>
                    <div className="space-y-2 text-sm md:text-base">
                      <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Sobre Nós</a>
                      <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Planos</a>
                      <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Ajuda</a>
                      <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Blog</a>
                    </div>
                  </div>

                  {/* Legal */}
                  <div className="space-y-4">
                    <h4 className="font-black text-base md:text-lg">Legal</h4>
                    <div className="space-y-2 text-sm md:text-base">
                      <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Termos de Uso</a>
                      <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Privacidade</a>
                      <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Cookies</a>
                      <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors">Contato</a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center">
                  <p className="text-gray-500 text-xs md:text-sm">
                    © 2025 STARLIGHT. Todos os direitos reservados. Plataforma premium de streaming.
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
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
