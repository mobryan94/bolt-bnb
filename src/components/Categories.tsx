import React from 'react';
import { Warehouse, Trees, Mountain, Umbrella, Castle, Building, Home, Tent } from 'lucide-react';

const categories = [
  { label: 'Mansions', icon: Castle },
  { label: 'Cabins', icon: Home },
  { label: 'Camping', icon: Tent },
  { label: 'Beach', icon: Umbrella },
  { label: 'Countryside', icon: Trees },
  { label: 'Mountains', icon: Mountain },
  { label: 'City', icon: Building },
  { label: 'Lofts', icon: Warehouse },
];

export default function Categories() {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto pb-4 pt-5 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.label}
                className="flex flex-col items-center space-y-2 min-w-fit cursor-pointer
                         text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-900
                         transition-colors duration-200"
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{category.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}