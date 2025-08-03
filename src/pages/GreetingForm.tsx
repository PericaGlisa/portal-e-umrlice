import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import FormHeader from '../components/FormHeader';
import ServicePricing from '../components/ServicePricing';

const GreetingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    image: null as File | null,
    fullName: '',
    birthDate: '',
    deathDate: '',
    religion: '',
    text: ''
  });

  const [selectedServices, setSelectedServices] = useState({
    size: '',
    cities: [] as string[],
    duration: ''
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Greeting form submitted:', { formData, selectedServices });
    alert('Poslednji pozdrav je uspešno poslat na obradu!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-2 sm:px-4 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <FormHeader title="UČITAJ POSLEDNJI POZDRAV" />

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-yellow-600/30 p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Image Upload */}
              <div className="md:col-span-2">
                <label className="block text-slate-200 text-base sm:text-lg font-medium mb-3 sm:mb-4">
                  Učitaj sliku
                </label>
                <div className="border-2 border-dashed border-yellow-600/50 rounded-xl p-4 sm:p-6 md:p-8 text-center hover:border-yellow-500/70 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="greeting-image-upload"
                  />
                  <label htmlFor="greeting-image-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-3 sm:mb-4 text-yellow-500" size={window.innerWidth < 640 ? 32 : 48} />
                    <p className="text-slate-300 text-sm sm:text-base md:text-lg">
                      {formData.image ? formData.image.name : 'Klikni za učitavanje slike'}
                    </p>
                  </label>
                </div>
              </div>

              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="block text-slate-200 text-base sm:text-lg font-medium mb-3 sm:mb-4">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange('fullName')}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg bg-slate-700 border border-yellow-600/50 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Unesite ime i prezime"
                />
              </div>

              {/* Birth and Death Dates */}
              <div>
                <label className="block text-slate-200 text-base sm:text-lg font-medium mb-3 sm:mb-4">
                  Datum rođenja i smrti
                </label>
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={handleInputChange('birthDate')}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 border border-yellow-600/50 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                  />
                  <input
                    type="date"
                    value={formData.deathDate}
                    onChange={handleInputChange('deathDate')}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 border border-yellow-600/50 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Religion */}
              <div>
                <label className="block text-slate-200 text-base sm:text-lg font-medium mb-3 sm:mb-4">
                  Veroispovest
                </label>
                <select
                  value={formData.religion}
                  onChange={handleInputChange('religion')}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 border border-yellow-600/50 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                >
                  <option value="">Izaberite veroispovest</option>
                  <option value="pravoslavna">Pravoslavna</option>
                  <option value="katolička">Katolička</option>
                  <option value="islamska">Islamska</option>
                  <option value="jevrejska">Jevrejska</option>
                  <option value="ostalo">Ostalo</option>
                </select>
              </div>

              {/* Text */}
              <div className="md:col-span-2">
                <label className="block text-slate-200 text-base sm:text-lg font-medium mb-3 sm:mb-4">
                  Tekst
                </label>
                <textarea
                  value={formData.text}
                  onChange={handleInputChange('text')}
                  rows={window.innerWidth < 640 ? 4 : 6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 border border-yellow-600/50 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none text-sm sm:text-base"
                  placeholder="Unesite tekst poslednjeg pozdrava..."
                />
              </div>
            </div>
          </div>

          <ServicePricing
            selectedServices={selectedServices}
            onServicesChange={setSelectedServices}
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl text-lg sm:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
            >
              Potvrdi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GreetingForm;