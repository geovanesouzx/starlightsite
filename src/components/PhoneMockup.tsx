interface PhoneMockupProps {
  screenshot?: string;
  className?: string;
}

export function PhoneMockup({ screenshot, className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone */}
      <div className="relative group">
        {/* Phone Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Phone Frame */}
        <div className="relative w-[280px] mx-auto">
          {/* Outer frame */}
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl">
            {/* Screen */}
            <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden bg-black">
              {screenshot ? (
                <img 
                  src={screenshot} 
                  alt="App Screenshot"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                  <div className="text-center space-y-3 px-8">
                    <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600">Adicione sua screenshot aqui</p>
                  </div>
                </div>
              )}
              
              {/* Screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-3xl flex items-center justify-center gap-3 px-4">
              <div className="w-12 h-1 bg-gray-800 rounded-full" />
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
            </div>
          </div>
          
          {/* Side buttons */}
          <div className="absolute right-0 top-24 w-1 h-12 bg-gray-800 rounded-l-sm" />
          <div className="absolute right-0 top-40 w-1 h-8 bg-gray-800 rounded-l-sm" />
          <div className="absolute right-0 top-52 w-1 h-8 bg-gray-800 rounded-l-sm" />
          <div className="absolute left-0 top-32 w-1 h-6 bg-gray-800 rounded-r-sm" />
        </div>
      </div>
    </div>
  );
}
