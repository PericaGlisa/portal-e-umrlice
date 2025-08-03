import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, MapPin, Star } from 'lucide-react';
import FormHeader from '../components/FormHeader';

interface Ad {
  id: string;
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  website?: string;
  rating: number;
  services: string[];
  image: string;
}

const CategoryAds: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const categoryTitles: { [key: string]: string } = {
    'funeral-homes': 'POGREBNA PREDUZEĆA',
    'transport': 'TRANSPORT POKOJNIKA',
    'flowers': 'CVEĆARE',
    'memorial-halls': 'SALE ZA PARASTOS',
    'stonemasons': 'KAMENORESCI'
  };

  // Mock data for ads - in real app this would come from API
  const mockAds: { [key: string]: Ad[] } = {
    'funeral-homes': [
      {
        id: '1',
        name: 'Pogrebno preduzeće "Mir"',
        description: 'Kompletan pogrebni servis sa dugogodišnjim iskustvom. Pružamo sve usluge potrebne za dostojanstvenu sahranu.',
        phone: '+381 11 123 4567',
        email: 'info@mir.rs',
        address: 'Bulevar Kralja Aleksandra 15, Beograd',
        website: 'www.mir.rs',
        rating: 4.8,
        services: ['Kompletan pogrebni servis', 'Organizacija sahrane', 'Protokol i ceremonija', 'Dokumentacija'],
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=150&h=150&fit=crop&crop=center'
      },
      {
        id: '2',
        name: 'Pogrebno preduzeće "Večnost"',
        description: 'Profesionalne pogrebne usluge sa poštovanjem tradicije i modernim pristupom.',
        phone: '+381 11 234 5678',
        email: 'kontakt@vecnost.rs',
        address: 'Kneza Miloša 25, Beograd',
        rating: 4.6,
        services: ['Pogrebni servis', 'Kremacija', 'Međunarodni transport'],
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=center'
      }
    ],
    'transport': [
      {
        id: '3',
        name: 'Transport "Brzi put"',
        description: 'Specijalizovani transport pokojnika sa modernim voznim parkom.',
        phone: '+381 11 345 6789',
        email: 'info@brziput.rs',
        address: 'Autoput 12, Beograd',
        rating: 4.7,
        services: ['Transport pokojnika', 'Pogrebna kola', 'Međugradski transport'],
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=150&h=150&fit=crop&crop=center'
      }
    ],
    'flowers': [
      {
        id: '4',
        name: 'Cvećara "Ruža"',
        description: 'Specijalizovani za pogrebne vence i aranžmane sa svežim cvećem.',
        phone: '+381 11 456 7890',
        email: 'ruza@cvecara.rs',
        address: 'Cvećarska 8, Beograd',
        rating: 4.9,
        services: ['Pogrebni venci', 'Buketi za sahranu', 'Stalni aranžman'],
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center'
      }
    ],
    'memorial-halls': [
      {
        id: '5',
        name: 'Sala "Sećanje"',
        description: 'Prostorna sala za parastos sa kompletnim ketering uslugama.',
        phone: '+381 11 567 8901',
        email: 'secanje@sala.rs',
        address: 'Memorijalna 3, Beograd',
        rating: 4.5,
        services: ['Iznajmljivanje sale', 'Ketering usluge', 'Organizacija parastosa'],
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=center'
      }
    ],
    'stonemasons': [
      {
        id: '6',
        name: 'Kamenorezac "Granit"',
        description: 'Izrada kvalitetnih spomenika od prirodnog kamena.',
        phone: '+381 11 678 9012',
        email: 'granit@kamen.rs',
        address: 'Kamena 15, Beograd',
        rating: 4.8,
        services: ['Izrada spomenika', 'Graviranje', 'Obnova spomenika'],
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=150&h=150&fit=crop&crop=center'
      }
    ]
  };

  const categoryTitle = categoryTitles[categoryId || ''] || 'OGLASI';
  const ads = mockAds[categoryId || ''] || [];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-2 sm:px-4 py-4 sm:py-8">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => {
              navigate('/funeral-assistance');
              window.scrollTo(0, 0);
            }}
            className="text-yellow-300 hover:text-yellow-400 transition-colors flex-shrink-0"
          >
            <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <div className="flex-1 min-w-0">
            <FormHeader title={`${categoryTitle} - OGLASI`} />
          </div>
        </div>

        {ads.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <p className="text-slate-400 text-base sm:text-lg px-4">Trenutno nema oglasa u ovoj kategoriji.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ads.map((ad) => (
              <div
                key={ad.id}
                onClick={() => {
                  navigate(`/category/${categoryId}/ad/${ad.id}`);
                  window.scrollTo(0, 0);
                }}
                className="bg-slate-800/60 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-4 sm:p-6 shadow-2xl hover:bg-slate-700/60 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={ad.image}
                      alt={ad.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-yellow-600/50 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-yellow-300 font-bold text-base sm:text-lg leading-tight truncate">{ad.name}</h3>
                      <div className="flex items-center space-x-1">
                        {renderStars(ad.rating)}
                        <span className="text-slate-400 text-xs sm:text-sm ml-1 sm:ml-2">{ad.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">{ad.description}</p>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center space-x-2 text-slate-400 text-xs sm:text-sm">
                      <Phone size={12} className="sm:w-[14px] sm:h-[14px] flex-shrink-0" />
                      <span className="truncate">{ad.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-400 text-xs sm:text-sm">
                      <MapPin size={12} className="sm:w-[14px] sm:h-[14px] flex-shrink-0" />
                      <span className="line-clamp-1">{ad.address}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {ad.services.slice(0, 2).map((service, index) => (
                      <span
                        key={index}
                        className="bg-yellow-600/20 text-yellow-300 text-xs px-2 py-1 rounded-lg leading-tight"
                      >
                        {service}
                      </span>
                    ))}
                    {ad.services.length > 2 && (
                      <span className="text-slate-400 text-xs px-2 py-1">
                        +{ad.services.length - 2} više
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryAds;