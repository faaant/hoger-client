export interface DialogFormField {
  displayName: string;
  field: string;
  type: 'text' | 'select' | 'password';
  options?: string[];
}
