import React from 'react';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Property } from '../types';

interface PropertyCardProps extends Property {
  id: number;
}

export default function PropertyCard({ id, imageUrl, location, title, price, rating, dates }: PropertyCardProps) {
  const navigate = useNavigate();

  return (
    <div className="group cursor-pointer" onClick={() => navigate(`/property/${id}`)}>
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button 
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100/90"
          onClick={(e) => {
            e.stopPropagation();
            // Handle wishlist functionality
          }}
        >
          <Heart className="h-5 w-5 text-white hover:text-rose-500" />
        </button>
      </div>
      
      <div className="mt-3">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900">{location}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-current" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{dates}</p>
        <p className="text-gray-500 text-sm truncate">{title}</p>
        <p className="mt-2">
          <span className="font-semibold">${price}</span>
          <span className="text-gray-500"> night</span>
        </p>
      </div>
    </div>
  );
}