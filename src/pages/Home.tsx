import React from 'react';
import Categories from '../components/Categories';
import PropertyCard from '../components/PropertyCard';
import { Property } from '../types';

interface HomeProps {
  properties: Property[];
}

export default function Home({ properties }: HomeProps) {
  return (
    <>
      <Categories />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} id={index} />
          ))}
        </div>
      </main>
    </>
  );
}