export interface EventModel {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  onlineUrl?:string;
  location?: LocationModel;
  sessions:SessionModel[]
}

interface LocationModel {
  address: string;
  city: string;
  country: string;
}


