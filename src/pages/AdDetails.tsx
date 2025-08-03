import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Globe, Star } from 'lucide-react';
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

const AdDetails: React.FC = () => {
  const { categoryId, adId } = useParams<{ categoryId: string; adId: string }>();
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
        description: 'Kompletan pogrebni servis sa dugogodišnjim iskustvom. Pružamo sve usluge potrebne za dostojanstvenu sahranu. Naš tim stručnjaka je dostupan 24/7 i posvećen je pružanju podrške porodicama u najtežim trenucima.',
        phone: '+381 11 123 4567',
        email: 'info@mir.rs',
        address: 'Bulevar Kralja Aleksandra 15, Beograd',
        website: 'www.mir.rs',
        rating: 4.8,
        services: ['Kompletan pogrebni servis', 'Organizacija sahrane', 'Protokol i ceremonija', 'Dokumentacija', 'Transport pokojnika', 'Kremacija'],
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=150&h=150&fit=crop&crop=center'
      },
      {
        id: '2',
        name: 'Pogrebno preduzeće "Večnost"',
        description: 'Profesionalne pogrebne usluge sa poštovanjem tradicije i modernim pristupom. Specijalizovani smo za sve vrste sahrana i kremacija.',
        phone: '+381 11 234 5678',
        email: 'kontakt@vecnost.rs',
        address: 'Kneza Miloša 25, Beograd',
        rating: 4.6,
        services: ['Pogrebni servis', 'Kremacija', 'Međunarodni transport', 'Organizacija ceremonije'],
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=center'
      }
    ],
    'transport': [
      {
        id: '3',
        name: 'Transport "Brzi put"',
        description: 'Specijalizovani transport pokojnika sa modernim voznim parkom. Pružamo usluge lokalnog i međunarodnog transporta sa najvišim standardima.',
        phone: '+381 11 345 6789',
        email: 'info@brziput.rs',
        address: 'Autoput 12, Beograd',
        rating: 4.7,
        services: ['Transport pokojnika', 'Pogrebna kola', 'Međugradski transport', 'Međunarodni transport'],
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=150&h=150&fit=crop&crop=center'
      }
    ],
    'flowers': [
      {
        id: '4',
        name: 'Cvećara "Ruža"',
        description: 'Specijalizovani za pogrebne vence i aranžmane sa svežim cvećem. Kreiramo jedinstvene kompozicije koje odražavaju poštovanje i sećanje.',
        phone: '+381 11 456 7890',
        email: 'ruza@cvecara.rs',
        address: 'Cvećarska 8, Beograd',
        rating: 4.9,
        services: ['Pogrebni venci', 'Buketi za sahranu', 'Stalni aranžman', 'Ukras kovčega'],
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center'
      }
    ],
    'memorial-halls': [
      {
        id: '5',
        name: 'Sala "Sećanje"',
        description: 'Prostorna sala za parastos sa kompletnim ketering uslugama. Omogućavamo dostojanstven oproštaj u mirnom i elegantnom ambijentu.',
        phone: '+381 11 567 8901',
        email: 'secanje@sala.rs',
        address: 'Memorijalna 3, Beograd',
        rating: 4.5,
        services: ['Iznajmljivanje sale', 'Ketering usluge', 'Organizacija parastosa', 'Tehnička podrška'],
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=center'
      }
    ],
    'stonemasons': [
      {
        id: '6',
        name: 'Kamenorezac "Granit"',
        description: 'Izrada kvalitetnih spomenika od prirodnog kamena. Kombinujemo tradicionalne tehnike sa modernim dizajnom za trajne spomenike.',
        phone: '+381 11 678 9012',
        email: 'granit@kamen.rs',
        address: 'Kamena 15, Beograd',
        rating: 4.8,
        services: ['Izrada spomenika', 'Graviranje', 'Obnova spomenika', 'Postavljanje'],
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=150&h=150&fit=crop&crop=center'
      }
    ]
  };

  const categoryTitle = categoryTitles[categoryId || ''] || 'OGLASI';
  const ads = mockAds[categoryId || ''] || [];
  const ad = ads.find(a => a.id === adId);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}
      />
    ));
  };

  if (!ad) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                navigate(`/category/${categoryId}`);
                window.scrollTo(0, 0);
              }}
              className="text-yellow-300 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <FormHeader title="OGLAS NIJE PRONAĐEN" />
          </div>
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Traženi oglas ne postoji.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-2 sm:px-4 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => {
              navigate(`/category/${categoryId}`);
              window.scrollTo(0, 0);
            }}
            className="text-yellow-300 hover:text-yellow-400 transition-colors flex-shrink-0"
          >
            <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <div className="flex-1 min-w-0">
            <FormHeader title={ad.name} />
          </div>
        </div>

        <div className="bg-slate-800/60 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <div className="space-y-6 sm:space-y-8">
            {/* Header with image and basic info */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <img
                src={ad.image}
                alt={ad.name}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-yellow-600/50 mx-auto sm:mx-0 flex-shrink-0"
              />
              <div className="flex-1 text-center sm:text-left min-w-0">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300 mb-2 leading-tight">{ad.name}</h1>
                <div className="flex items-center justify-center sm:justify-start space-x-1 mb-3 sm:mb-4">
                  {renderStars(ad.rating)}
                  <span className="text-slate-400 ml-1 sm:ml-2 text-base sm:text-lg">{ad.rating}/5</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">{ad.description}</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-yellow-300 font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Usluge</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {ad.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-yellow-600/20 text-yellow-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-center font-medium text-sm sm:text-base"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-yellow-300 font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Kontakt informacije</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 text-slate-300">
                    <Phone size={16} className="sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg break-all">{ad.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-slate-300">
                    <Mail size={16} className="sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg break-all">{ad.email}</span>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 text-slate-300">
                    <MapPin size={16} className="sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base md:text-lg leading-relaxed">{ad.address}</span>
                  </div>
                  {ad.website && (
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Globe size={16} className="sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                      <a
                        href={`https://${ad.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 hover:text-yellow-400 transition-colors text-sm sm:text-base md:text-lg break-all"
                      >
                        {ad.website}
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-200 transform hover:scale-105">
                    <Phone size={16} className="sm:w-5 sm:h-5 inline mr-2" />
                    Pozovi sada
                  </button>
                  <button className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-200">
                    <Mail size={16} className="sm:w-5 sm:h-5 inline mr-2" />
                    Pošalji email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetails;