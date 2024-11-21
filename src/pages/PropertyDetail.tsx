import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Star, Share, Trophy, Medal, Key, Loader2 } from 'lucide-react';
import { Property } from '../types';

interface PropertyDetailProps {
  properties: Property[];
}

export default function PropertyDetail({ properties }: PropertyDetailProps) {
  const { id } = useParams();
  const property = properties[Number(id)];
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isReserving, setIsReserving] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [reservationStatus, setReservationStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!property) {
    return <div>Property not found</div>;
  }

  const handleReserve = async () => {
    setIsReserving(true);
    setReservationStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setReservationStatus('success');
    } catch (error) {
      setReservationStatus('error');
    } finally {
      setIsReserving(false);
    }
  };

  const cleaningFee = Math.round(property.price * 0.15);
  const serviceFee = Math.round(property.price * 0.17);
  const totalNights = 5;
  const subtotal = property.price * totalNights;
  const total = subtotal + cleaningFee + serviceFee;

  const renderReservationStatus = () => {
    switch (reservationStatus) {
      case 'success':
        return (
          <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
            <p className="font-medium">Reservation successful!</p>
            <p className="text-sm">Check your email for confirmation details.</p>
          </div>
        );
      case 'error':
        return (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
            <p className="font-medium">Something went wrong</p>
            <p className="text-sm">Please try again later.</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="p-4">
          <button 
            onClick={() => setShowAllPhotos(false)}
            className="fixed top-4 left-4 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            ✕
          </button>
          <div className="max-w-5xl mx-auto columns-2 gap-4 pt-12">
            {property.images.map((image, index) => (
              <div key={index} className="mb-4">
                <img 
                  src={image} 
                  alt={`${property.title} ${index + 1}`}
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">{property.title}</h1>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold">{property.rating}</span>
                <span>·</span>
                <span className="underline">{property.reviews} reviews</span>
              </div>
              <span>·</span>
              <span className="font-medium">{property.location}</span>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <Share className="h-5 w-5" />
                <span className="underline font-medium">Share</span>
              </button>
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <Heart className="h-5 w-5" />
                <span className="underline font-medium">Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden">
          <div className="col-span-2 row-span-2">
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setShowAllPhotos(true)}
            />
          </div>
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative">
              <img 
                src={image} 
                alt={`${property.title} ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setShowAllPhotos(true)}
              />
            </div>
          ))}
          <button
            className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg font-medium"
            onClick={() => setShowAllPhotos(true)}
          >
            Show all photos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            {/* Host Info */}
            <div className="flex justify-between items-start pb-6 border-b">
              <div>
                <h2 className="text-2xl font-semibold">
                  Entire cabin hosted by {property.host.name}
                </h2>
                <div className="mt-2 text-gray-600">
                  {property.guests} guests · {property.bedrooms} bedrooms · {property.beds} beds · {property.bathrooms} bathrooms
                </div>
              </div>
              <div className="flex-shrink-0">
                {property.host.avatar && (
                  <img 
                    src={property.host.avatar} 
                    alt={property.host.name}
                    className="w-14 h-14 rounded-full"
                  />
                )}
              </div>
            </div>

            {/* Features */}
            <div className="py-6 border-b space-y-6">
              <div className="flex gap-4">
                <Trophy className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Guest favorite</h3>
                  <p className="text-gray-600">One of the most loved homes on Bolt.bnb</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Medal className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Experienced host</h3>
                  <p className="text-gray-600">{property.host.hostingSince}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Key className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Great check-in experience</h3>
                  <p className="text-gray-600">95% of recent guests gave the check-in process a 5-star rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div>
            <div className="sticky top-28 border rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-2xl font-semibold">${property.price}</span>
                  <span className="text-gray-500"> night</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">{property.rating}</span>
                  <span>·</span>
                  <span className="underline">{property.reviews} reviews</span>
                </div>
              </div>

              <div className="border rounded-lg mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-b">
                    <div className="text-xs font-bold uppercase">Check-in</div>
                    <div>{property.dates.split('-')[0]}</div>
                  </div>
                  <div className="p-3 border-b">
                    <div className="text-xs font-bold uppercase">Checkout</div>
                    <div>{property.dates.split('-')[1]}</div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs font-bold uppercase">Guests</div>
                  <select 
                    className="w-full mt-1 bg-transparent"
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(Number(e.target.value))}
                  >
                    {[...Array(property.guests)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} guest{i !== 0 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button 
                className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                onClick={handleReserve}
                disabled={isReserving}
              >
                {isReserving ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Reserving...
                  </>
                ) : (
                  'Reserve'
                )}
              </button>

              {renderReservationStatus()}

              <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                  <span className="underline">${property.price} x {totalNights} nights</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>${cleaningFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>${serviceFee}</span>
                </div>
                <div className="pt-4 border-t flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}