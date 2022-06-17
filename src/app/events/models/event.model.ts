export interface EventModel {
  id: number;
  name: string;
  date: string;
  time: string;
  price: string;
  imageUrl: string
  location: LocationModel
}

interface LocationModel {
  address: string;
  city: string;
  country: string;
}
