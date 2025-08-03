import React from 'react';

interface ServicePricingProps {
  selectedServices: {
    size: string;
    cities: string[];
    duration: string;
  };
  onServicesChange: (services: any) => void;
}

const ServicePricing: React.FC<ServicePricingProps> = ({ selectedServices, onServicesChange }) => {
  const sizes = [
    { id: 'small', name: 'Mala (5x7cm)', price: 2000 },
    { id: 'medium', name: 'Srednja (10x15cm)', price: 3500 },
    { id: 'large', name: 'Velika (15x20cm)', price: 5000 },
    { id: 'xlarge', name: 'Extra velika (20x30cm)', price: 7500 }
  ];

  const cities = [
    { id: 'beograd', name: 'Beograd', price: 1000 },
    { id: 'novi-sad', name: 'Novi Sad', price: 800 },
    { id: 'nis', name: 'Niš', price: 700 },
    { id: 'kragujevac', name: 'Kragujevac', price: 600 },
    { id: 'subotica', name: 'Subotica', price: 500 },
    { id: 'pancevo', name: 'Pančevo', price: 400 }
  ];

  const durations = [
    { id: '1-day', name: '1 dan', price: 500 },
    { id: '3-days', name: '3 dana', price: 1200 },
    { id: '7-days', name: '1 nedelja', price: 2500 },
    { id: '14-days', name: '2 nedelje', price: 4500 },
    { id: '30-days', name: '1 mesec', price: 8000 }
  ];

  const handleSizeChange = (sizeId: string) => {
    onServicesChange({
      ...selectedServices,
      size: sizeId
    });
  };

  const handleCityToggle = (cityId: string) => {
    const newCities = selectedServices.cities.includes(cityId)
      ? selectedServices.cities.filter(id => id !== cityId)
      : [...selectedServices.cities, cityId];
    
    onServicesChange({
      ...selectedServices,
      cities: newCities
    });
  };

  const handleDurationChange = (durationId: string) => {
    onServicesChange({
      ...selectedServices,
      duration: durationId
    });
  };

  const calculateTotal = () => {
    let total = 0;
    
    // Size price
    const selectedSize = sizes.find(s => s.id === selectedServices.size);
    if (selectedSize) total += selectedSize.price;
    
    // Cities price
    selectedServices.cities.forEach(cityId => {
      const city = cities.find(c => c.id === cityId);
      if (city) total += city.price;
    });
    
    // Duration price
    const selectedDuration = durations.find(d => d.id === selectedServices.duration);
    if (selectedDuration) total += selectedDuration.price;
    
    return total;
  };

  return (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-yellow-600/30 p-8 shadow-2xl space-y-8">


      {/* Size Selection */}
      <div>
        <h4 className="text-yellow-300 font-bold text-lg mb-4">Veličina umrlice</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {sizes.map((size) => (
            <label
              key={size.id}
              className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedServices.size === size.id
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-slate-600 bg-slate-700/30 hover:border-yellow-600/50'
                }`}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="size"
                  value={size.id}
                  checked={selectedServices.size === size.id}
                  onChange={() => handleSizeChange(size.id)}
                  className="w-4 h-4 text-yellow-500"
                />
                <span className="text-slate-200">{size.name}</span>
              </div>
              <span className="text-yellow-400 font-bold">{size.price} RSD</span>
            </label>
          ))}
        </div>
      </div>

      {/* Cities Selection */}
      <div>
        <h4 className="text-yellow-300 font-bold text-lg mb-4">Gradovi za prikazivanje</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {cities.map((city) => (
            <label
              key={city.id}
              className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedServices.cities.includes(city.id)
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-slate-600 bg-slate-700/30 hover:border-yellow-600/50'
                }`}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  value={city.id}
                  checked={selectedServices.cities.includes(city.id)}
                  onChange={() => handleCityToggle(city.id)}
                  className="w-4 h-4 text-yellow-500"
                />
                <span className="text-slate-200">{city.name}</span>
              </div>
              <span className="text-yellow-400 font-bold">{city.price} RSD</span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Selection */}
      <div>
        <h4 className="text-yellow-300 font-bold text-lg mb-4">Period objavljivanja</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {durations.map((duration) => (
            <label
              key={duration.id}
              className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedServices.duration === duration.id
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-slate-600 bg-slate-700/30 hover:border-yellow-600/50'
                }`}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="duration"
                  value={duration.id}
                  checked={selectedServices.duration === duration.id}
                  onChange={() => handleDurationChange(duration.id)}
                  className="w-4 h-4 text-yellow-500"
                />
                <span className="text-slate-200">{duration.name}</span>
              </div>
              <span className="text-yellow-400 font-bold">{duration.price} RSD</span>
            </label>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="bg-yellow-600/20 border border-yellow-600/50 rounded-xl p-6 text-center">
        <div className="text-center">
          <p className="text-yellow-200 text-lg">Ukupan iznos:</p>
          <p className="text-yellow-400 font-bold text-3xl">{calculateTotal().toLocaleString()} RSD</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePricing;