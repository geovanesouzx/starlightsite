interface MonitorMockupProps {
  screenshot?: string;
  className?: string;
}

export function MonitorMockup({ screenshot, className = '' }: MonitorMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Monitor */}
      <div className="relative group">
        {/* Screen Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Monitor Frame */}
        <div className="relative">
          {/* Bezel */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl">
            {/* Screen */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
              {screenshot ? (
                <img 
                  src={screenshot} 
                  alt="Website Screenshot"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Adicione sua screenshot aqui</p>
                  </div>
                </div>
              )}
              
              {/* Screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Camera notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-950 rounded-b-full" />
          </div>
          
          {/* Stand */}
          <div className="relative mt-4">
            {/* Stand neck */}
            <div className="w-16 h-12 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-lg shadow-lg" />
            
            {/* Stand base */}
            <div className="w-48 h-3 mx-auto bg-gradient-to-b from-gray-900 to-black rounded-full shadow-2xl" />
            <div className="w-56 h-2 mx-auto mt-1 bg-black/50 rounded-full blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
