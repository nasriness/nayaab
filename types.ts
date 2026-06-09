export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  isSpecial?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface BookingDetails {
  date: string;
  time: string;
  guests: number;
  name: string;
  phone: string;
  specialRequests?: string;
}
