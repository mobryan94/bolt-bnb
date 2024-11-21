export interface Property {
  imageUrl: string;
  images: string[];
  location: string;
  title: string;
  price: number;
  rating: number;
  dates: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  host: {
    name: string;
    isSuperhost: boolean;
    hostingSince: string;
    avatar?: string;
  };
  reviews: number;
}