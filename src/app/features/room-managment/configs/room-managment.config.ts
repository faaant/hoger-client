import { DialogFormField } from '@core/models/form-dialog';
import { AvailableGridActions, GridFilter } from '@core/models/grid';

export const COLUMNS = [
  'ID',
  'Cleaning state',
  'Connected rooms',
  'Balcony',
  'Capacity (people)',
  'Free',
  '',
];

export const AVAILABLE_GRID_ACTIONS: AvailableGridActions = {
  create: false,
  refresh: true,
  filter: true,
};

export const ROOM_MANAGMENT_DIALOG_FORM_FIELDS: DialogFormField[] = [
  {
    displayName: 'Name',
    field: 'name',
    type: 'text',
  },
  {
    displayName: 'Surname',
    field: 'surname',
    type: 'text',
  },
  {
    displayName: 'Phone number',
    field: 'phone',
    type: 'text',
  },
];

export const FILTERS: GridFilter[] = [
  {
    field: 'id',
    fieldType: 'number',
    displayName: 'ID',
  },
  {
    field: 'cleaningState',
    fieldType: 'boolean',
    displayName: 'Cleaning state',
  },
  {
    field: 'connectedRooms',
    fieldType: 'boolean',
    displayName: 'Connected rooms',
  },
  {
    field: 'balcony',
    fieldType: 'boolean',
    displayName: 'Balcony',
  },
  {
    field: 'avNumOfPeople',
    fieldType: 'number',
    displayName: 'Capacity',
  },
  {
    field: 'free',
    fieldType: 'boolean',
    displayName: 'Free',
  },
];
