import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format, addDays, setHours, setMinutes } from 'date-fns';
import { Calendar, Clock, User, Scissors } from 'lucide-react';

const services = [
  { id: 1, name: 'haircut', duration: 30, price: 80 },
  { id: 2, name: 'beardTrim', duration: 20, price: 40 },
  { id: 3, name: 'hotTowelShave', duration: 45, price: 60 },
];

const barbers = [
  { id: 1, name: 'Jojo Jobran', specialties: ['haircut', 'beardTrim', 'hotTowelShave'] },
  { id: 2, name: 'David Cohen', specialties: ['haircut', 'beardTrim'] },
];

const generateTimeSlots = () => {
  const slots = [];
  const startHour = 9;
  const endHour = 20;
  
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      slots.push(setMinutes(setHours(new Date(), hour), minute));
    }
  }
  
  return slots;
};

const BookingPage = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const timeSlots = generateTimeSlots();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({
      service: services.find(s => s.id === selectedService),
      barber: barbers.find(b => b.id === selectedBarber),
      date: selectedDate,
      time: selectedTime,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">{t('bookAppointment')}</h1>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Scissors className="w-5 h-5 mr-2" />
                  {t('selectService')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 border rounded-lg text-center ${
                        selectedService === service.id
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-black'
                      }`}
                    >
                      <div className="font-medium">{t(service.name)}</div>
                      <div className="text-sm opacity-75">₪{service.price}</div>
                      <div className="text-sm opacity-75">{service.duration} {t('minutes')}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Barber Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {t('selectBarber')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {barbers.map((barber) => (
                    <button
                      key={barber.id}
                      type="button"
                      onClick={() => setSelectedBarber(barber.id)}
                      className={`p-4 border rounded-lg text-center ${
                        selectedBarber === barber.id
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-black'
                      }`}
                    >
                      <div className="font-medium">{barber.name}</div>
                      <div className="text-sm opacity-75">
                        {barber.specialties.map(s => t(s)).join(', ')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('selectDate')}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[...Array(7)].map((_, index) => {
                    const date = addDays(new Date(), index);
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`p-4 border rounded-lg text-center ${
                          selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 hover:border-black'
                        }`}
                      >
                        <div className="font-medium">{format(date, 'EEE')}</div>
                        <div className="text-sm">{format(date, 'd MMM')}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {t('selectTime')}
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 border rounded-lg text-center ${
                        selectedTime && format(selectedTime, 'HH:mm') === format(time, 'HH:mm')
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-black'
                      }`}
                    >
                      {format(time, 'HH:mm')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedService || !selectedBarber || !selectedDate || !selectedTime}
                className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {t('confirmBooking')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;