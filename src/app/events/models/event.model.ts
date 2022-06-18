export interface EventModel {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  onlineUrl?:string;
  location?: LocationModel;
  sessions:any[]
}

interface LocationModel {
  address: string;
  city: string;
  country: string;
}
