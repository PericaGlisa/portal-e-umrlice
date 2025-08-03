import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Truck, Flower, Home, Hammer } from 'lucide-react';
import FormHeader from '../components/FormHeader';

const FuneralAssistance: React.FC = () => {
  const navigate = useNavigate();
  const serviceCategories = [
    {
      id: 'funeral-homes',
      title: 'POGREBNA PREDUZEĆA',
      icon: Building2,
      color: 'from-blue-600 to-blue-500',
      services: [
        'Kompletan pogrebni servis',
        'Organizacija sahrane',
        'Protokol i ceremonija',
        'Dokumentacija'
      ]
    },
    {
      id: 'transport',
      title: 'TRANSPORT POKOJNIKA',
      icon: Truck,
      color: 'from-green-600 to-green-500',
      services: [
        'Transport pokojnika',
        'Pogrebna kola',
        'Međugradski transport',
        'Međunarodni transport'
      ]
    },
    {
      id: 'flowers',
      title: 'CVEĆARE',
      icon: Flower,
      color: 'from-pink-600 to-pink-500',
      services: [
        'Pogrebni venci',
        'Buketi za sahranu',
        'Stalni aranžman',
        'Ukras kovčega'
      ]
    },
    {
      id: 'memorial-halls',
      title: 'SALE ZA PARASTOS',
      icon: Home,
      color: 'from-purple-600 to-purple-500',
      services: [
        'Iznajmljivanje sale',
        'Ketering usluge',
        'Organizacija parastosa',
        'Tehnička podrška'
      ]
    },
    {
      id: 'stonemasons',
      title: 'KAMENORESCI',
      icon: Hammer,
      color: 'from-gray-600 to-gray-500',
      services: [
        'Izrada spomenika',
        'Graviranje',
        'Obnova spomenika',
        'Postavljanje'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-2 sm:px-4 py-4 sm:py-8">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <FormHeader title="POMOĆ ZA SAHRANU" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {serviceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => navigate(`/category/${category.id}`)}
                className="bg-slate-800/60 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-4 sm:p-6 shadow-2xl hover:bg-slate-700/60 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  <div className="bg-slate-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
                    <h3 className="text-slate-900 font-bold text-sm sm:text-base md:text-lg leading-tight">{category.title}</h3>
                  </div>

                  <ul className="space-y-1 sm:space-y-2 text-left">
                    {category.services.map((service, index) => (
                      <li key={index} className="text-slate-300 text-xs sm:text-sm">
                        • {service}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/category/${category.id}`);
                    }}
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl text-xs sm:text-sm shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Pogledaj oglase
                  </button>
                </div>
              </div>
            );
          })}
        </div>




      </div>
    </div>
  );
};

export default FuneralAssistance;