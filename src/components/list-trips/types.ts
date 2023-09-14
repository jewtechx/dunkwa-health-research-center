export interface ITripData {
  date: {
    day: string;
    date: string;
  };
  origin: string;
  destination: string;
  totalBusAssigned: string;
  timeScheduled: {
    departure: string;
    arrival: string;
  };
  tripType: string;
}
