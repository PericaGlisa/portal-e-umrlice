import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import Logo from '../components/Logo';

const HomePage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchLocation.trim()) {
      navigate('/services', { state: { location: searchLocation } });
    } else {
      navigate('/services');
    }
  };

  const serbianRegions = [
    'Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Pančevo', 'Čačak', 'Novi Pazar',
    'Smederevo', 'Leskovac', 'Valjevo', 'Kruševac', 'Vranje', 'Zaječar', 'Požarevac', 'Pirot'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden flex flex-col items-center justify-center px-2 sm:px-4 py-2 sm:py-4">
      <div className="max-w-2xl w-full text-center space-y-4 sm:space-y-6">
        <Logo size="large" />
        
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-yellow-600/30 p-4 sm:p-6 md:p-8 shadow-2xl">
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <input
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                placeholder="Izaberi grad..."
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-slate-700 border border-yellow-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <MapPin className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-yellow-500" size={20} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-32 overflow-y-auto">
              {serbianRegions.map((region) => (
                <button
                  key={region}
                  onClick={() => {
                    setSearchLocation(region);
                  }}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-slate-700/50 hover:bg-yellow-600/20 border border-yellow-600/30 rounded-lg text-slate-300 hover:text-yellow-300 transition-all"
                >
                  {region}
                </button>
              ))}
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 sm:space-x-3"
            >
              <Search size={20} />
              <span>Pretraži umrlice</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;