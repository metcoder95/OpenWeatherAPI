interface ICoordinates {
  lat: number;
  lon: number;
}

export interface ICity {
  id: number;
  country: string;
  coord: ICoordinates;
}

export interface IFilterDistanceArgs {
  latPlusTenKm: number;
  lonPlusTenKm: number;
  latMinusTenKm: number;
  lonMinusTenKm: number;
}
