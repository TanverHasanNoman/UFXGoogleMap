export interface ICustomer {
  Id: string;
  Status: string;
  ProviderName: string;
  DateTimeUTC: string;
  Contacts?: (ContactsEntity)[] | null;
}
export interface ContactsEntity {
  ContactID: string;
  ContactStatus: string;
  Name: string;
  FirstName?: string | null;
  LastName?: string | null;
  EmailAddress: string;
  BankAccountDetails: string;
  Addresses?: (AddressesEntity)[] | null;
  Phones?: (PhonesEntity)[] | null;
  UpdatedDateUTC: string;
  ContactGroups?: (null)[] | null;
  IsSupplier: boolean;
  IsCustomer: boolean;
  DefaultCurrency?: string | null;
  ContactPersons?: (null)[] | null;
  HasAttachments: boolean;
  HasValidationErrors: boolean;
  TaxNumber?: string | null;
  AccountsReceivableTaxType?: string | null;
  AccountsPayableTaxType?: string | null;
  Balances?: Balances | null;
}
export interface AddressesEntity {
  AddressType: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  AddressLine1?: string | null;
  AddressLine2?: string | null;
  AddressLine3?: string | null;
  AddressLine4?: string | null;
  AttentionTo?: string | null;
}
export interface PhonesEntity {
  PhoneType: string;
  PhoneNumber: string;
  PhoneAreaCode: string;
  PhoneCountryCode: string;
}
export interface Balances {
  AccountsReceivable: AccountsReceivableOrAccountsPayable;
  AccountsPayable: AccountsReceivableOrAccountsPayable;
}
export interface AccountsReceivableOrAccountsPayable {
  Outstanding: number;
  Overdue: number;
}
