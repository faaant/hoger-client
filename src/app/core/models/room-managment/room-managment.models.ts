import { FilterData } from '../grid';
type BooleanFields = 'cleaningState' | 'cleaningState' | 'balcony' | 'free';
type NumberFields = 'avNumOfPeople' | 'id';
type StringArrFields = 'controls';

export type Room = Record<StringArrFields, string[]> &
  Record<BooleanFields, boolean> &
  Record<NumberFields, number>;

export enum RoomActions {
  Book = 'Book',
  Unbook = 'Unbook',
}

export interface RoomFilterData {
  id: FilterData;
  cleaningState: FilterData;
  connectedRooms: FilterData;
  balcony: FilterData;
  avNumOfPeople: FilterData;
  free: FilterData;
}
