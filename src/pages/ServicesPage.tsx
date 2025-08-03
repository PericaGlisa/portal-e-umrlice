import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FileText, Heart, HelpCircle, Calendar, MapPin, X } from 'lucide-react';
import Logo from '../components/Logo';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchLocation = location.state?.location || '';

  const [selectedObituary, setSelectedObituary] = useState<any>(null);

  const services = [
    {
      id: 'obituary',
      title: 'UČITAJ UMRLICU',
      icon: FileText,
      description: 'Objavi umrlicu sa svim potrebnim podacima',
      path: '/obituary'
    },
    {
      id: 'greeting',
      title: 'UČITAJ POSLEDNJI POZDRAV',
      icon: Heart,
      description: 'Objavi poslednji pozdrav za pokojnika',
      path: '/greeting'
    },
    {
      id: 'assistance',
      title: 'POMOĆ ZA SAHRANU',
      icon: HelpCircle,
      description: 'Pronađi pogrebne usluge u tvom gradu',
      path: '/assistance'
    }
  ];

  // Mock obituary data
  const mockObituaries = [
    {
      id: 1,
      name: 'Marija Petrović',
      birthDate: '15.03.1942',
      deathDate: '12.01.2025',
      location: 'Beograd',
      publishDate: '13.01.2025',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Milan Jovanović',
      birthDate: '22.07.1955',
      deathDate: '10.01.2025',
      location: 'Novi Sad',
      publishDate: '11.01.2025',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Ana Stojanović',
      birthDate: '08.12.1960',
      deathDate: '09.01.2025',
      location: 'Niš',
      publishDate: '10.01.2025',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-2 sm:px-4 py-4 sm:py-8">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-12">
        <div className="text-center">
          <Logo size="medium" />
        </div>



        {/* Main Service Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => navigate(service.path)}
                className="group bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/60 border border-yellow-600/30 hover:border-yellow-500/50 rounded-2xl p-4 sm:p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg border-2 border-yellow-500/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="text-slate-800" size={24} />
                  </div>
                  <div className="bg-slate-100 px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
                    <p className="text-slate-900 font-bold text-sm sm:text-lg leading-tight">{service.title}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Obituary Archive Section */}
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-yellow-600/30 p-4 sm:p-6 md:p-8 shadow-2xl">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-yellow-300 font-bold text-xl sm:text-2xl px-2">
              Arhiva umrlica
            </h2>
          </div>

          {searchLocation && (
            <div className="mb-4 sm:mb-6 flex items-center justify-center space-x-2 text-yellow-300 px-2">
              <MapPin size={20} />
              <span className="text-sm sm:text-lg text-center">Prikazane umrlice za: {searchLocation}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mockObituaries.map((obituary) => (
              <div
                key={obituary.id}
                onClick={() => setSelectedObituary(obituary)}
                className="bg-slate-700/50 border border-yellow-600/30 rounded-xl p-6 hover:bg-slate-700/70 transition-colors cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={obituary.image}
                      alt={obituary.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-yellow-600/50"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-yellow-300">{obituary.name}</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{obituary.birthDate} - {obituary.deathDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{obituary.location}</span>
                    </div>
                    <p className="text-sm text-slate-400">Objavljeno: {obituary.publishDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for obituary details */}
        {selectedObituary && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-yellow-600/30 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedObituary.image}
                    alt={selectedObituary.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-yellow-600/50"
                  />
                  <h2 className="text-2xl font-bold text-yellow-300">{selectedObituary.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedObituary(null)}
                  className="text-slate-400 hover:text-yellow-300 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{selectedObituary.birthDate} - {selectedObituary.deathDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{selectedObituary.location}</span>
                </div>
                <p className="text-sm text-slate-400">Objavljeno: {selectedObituary.publishDate}</p>
                
                <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                  <p className="text-slate-300 leading-relaxed">
                    Sa velikim tugom obaveštavamo rodbinu, prijatelje i poznanike da je {selectedObituary.deathDate} godine, 
                    u {selectedObituary.location}, preminuo/la naš/a dragi/a {selectedObituary.name}.
                    <br /><br />
                    Sahrana će se obaviti u skladu sa poslednjom voljom pokojnog/e.
                    <br /><br />
                    Neka mu/joj je večna slava i hvala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;