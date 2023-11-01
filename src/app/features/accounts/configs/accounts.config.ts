import { DialogFormField } from '@core/models/form-dialog';
import { AvailableGridActions } from '@core/models/grid';

export const COLUMNS = ['Username', 'Name', 'Surname', 'Position', ''];

export const AVAILABLE_GRID_ACTIONS: AvailableGridActions = {
  create: true,
  refresh: true,
  filter: false,
};

['Name', 'Surname', 'Position', 'Username', 'Password'];

export const ACCOUNTS_DIALOG_FORM_FIELDS: DialogFormField[] = [
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
    displayName: 'Position',
    field: 'position',
    type: 'select',
    options: ['Cleaner', 'Admin', 'Receptionist'],
  },
  {
    displayName: 'Username',
    field: 'username',
    type: 'text',
  },
  {
    displayName: 'Password',
    field: 'password',
    type: 'password',
  },
];
