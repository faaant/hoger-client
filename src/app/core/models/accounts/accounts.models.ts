type StringFields = 'username' | 'name' | 'surname' | 'position' | 'password';
type StringArrFields = 'controls';

export type CreateAccountDto = Record<StringArrFields, string[]> &
  Record<StringFields, string>;

export type AccountDto = Omit<CreateAccountDto, 'password'>;

export enum AccountActions {
  Delete = 'Delete',
}
