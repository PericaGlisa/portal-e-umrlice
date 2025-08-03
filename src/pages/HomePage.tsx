import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchLocation.trim()) {
      navigate('/services', { state: { location: searchLocation } });
    } else {
      navigate('/services');
    }
    window.scrollTo(0, 0);
  };

  const serbianRegions = [
    'Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Pančevo', 'Čačak', 'Novi Pazar',
    'Smederevo', 'Leskovac', 'Valjevo', 'Kruševac', 'Vranje', 'Zaječar', 'Požarevac', 'Pirot'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Hero Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 drop-shadow-lg">
             Portal E-umrlice
           </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light">
            Pronađite umrlice u vašem gradu
          </p>
        </div>
        
        {/* Search Container */}
        <div className="bg-slate-800/70 backdrop-blur-lg rounded-3xl border border-yellow-600/40 p-6 sm:p-8 md:p-10 shadow-2xl shadow-yellow-900/20 transform hover:scale-[1.02] transition-all duration-300">
          <div className="space-y-6 sm:space-y-8">
            <div className="relative group">
              <input
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                placeholder="Unesite naziv grada..."
                className="w-full px-6 sm:px-8 py-4 sm:py-5 text-lg sm:text-xl bg-slate-700/80 border-2 border-yellow-600/50 rounded-2xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-yellow-500/30 focus:border-yellow-400 transition-all duration-300 shadow-lg group-hover:shadow-yellow-500/20"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <MapPin className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-yellow-500 group-hover:text-yellow-400 transition-colors" size={24} />
            </div>

            <div className="space-y-3">
              <h3 className="text-slate-300 text-sm font-medium">Ili izaberite iz liste popularnih gradova:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600/50 scrollbar-track-slate-700/50">
                {serbianRegions.map((region) => (
                  <button
                    key={region}
                    onClick={() => {
                      setSearchLocation(region);
                    }}
                    className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-slate-700/60 hover:bg-gradient-to-r hover:from-yellow-600/20 hover:to-yellow-500/20 border border-yellow-600/40 hover:border-yellow-500/60 rounded-xl text-slate-300 hover:text-yellow-200 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 font-medium"
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 text-slate-900 font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-2xl text-lg sm:text-xl shadow-2xl shadow-yellow-600/40 transform hover:scale-[1.02] hover:shadow-yellow-500/60 transition-all duration-300 flex items-center justify-center space-x-3 sm:space-x-4 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Search size={24} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 tracking-wide">Pretraži umrlice</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;