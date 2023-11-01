import { FormControl } from '@angular/forms';
import { AccountDto } from '../accounts';
import { Room, RoomFilterData } from '../room-managment/room-managment.models';

export type GridItem = Room | AccountDto;

export type GridFilterData = RoomFilterData;

export enum GridControllersActions {
  Create = 'create-row',
  Refresh = 'refresh-grid',
}

export interface AvailableGridActions {
  create: boolean;
  refresh: boolean;
  filter: boolean;
}

export interface GridFilter {
  field: string;
  fieldType: FieldType;
  displayName: string;
}

type FieldType = 'string' | 'boolean' | 'number';

export interface FilterData {
  comparisonValue: FormControl;
  comparisonNumberSymbol?: FormControl;
}
