interface ICoordinates {
  lat: number,
  lon: number
}

export interface ICity {
  id: number,
  country: string,
  coord: ICoordinates
}
