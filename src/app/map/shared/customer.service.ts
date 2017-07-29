import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import { ICustomer } from "app/map/shared/customer";
@Injectable()
export class CustomerService {

  constructor() { }

  getEvents():Observable<ICustomer[]> {
  
    return Observable.of(Customer).map(res=>res);
    
  }
  // getEvents(){
  //   return Customer;
  // }

}


const Customer: ICustomer[]=[
  {
  "Id": "00fc8aff-4ad9-43fd-afaa-d00c3b4c7d9a",
  "Status": "OK",
  "ProviderName": "Xero API Previewer",
  "DateTimeUTC": "\/Date(1501163377465)\/",
  "Contacts": [
    {
      "ContactID": "5d3bff79-cb34-45eb-a9ec-14cd8aa24255",
      "ContactStatus": "ACTIVE",
      "Name": "BAE Systems",
      "FirstName": "Mujeeb",
      "LastName": "Khan",
      "EmailAddress": "is01@baesystems.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "PO BOX 470728",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Charlotte",
          "Region": "NC",
          "PostalCode": "28247-0728",
          "Country": "United States of America",
          "AttentionTo": "Accounts Payable"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585580+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "7031198a-7106-4e2b-87a6-3e49d885feb3",
      "ContactStatus": "ACTIVE",
      "Name": "Salesforce.com",
      "FirstName": "",
      "LastName": "",
      "EmailAddress": "",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1 Market, Suite 300",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "San Francisco,",
          "Region": "CA",
          "PostalCode": "94105",
          "Country": "United States of America",
          "AttentionTo": "Alan Lam"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585580+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "4146f4f5-2d3b-46eb-9a18-6ced6966b91c",
      "ContactStatus": "ACTIVE",
      "Name": "Forest T Jones & Co Inc",
      "FirstName": "Kyle",
      "LastName": "Spencer",
      "EmailAddress": "kspencer@ftj.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "3130 Broadway",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Kansas City",
          "Region": "MO",
          "PostalCode": "64111",
          "Country": "USA",
          "AttentionTo": "Kyle Spencer"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585580+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "45fe64eb-edf8-4caf-a2b8-e368d2181b3d",
      "ContactStatus": "ACTIVE",
      "Name": "Windsong Radiology Group",
      "FirstName": "Tom",
      "LastName": "Tokarczyk",
      "EmailAddress": "TTokarczyk@windsongradiology.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "55 Spindrift Drive",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Williamsville",
          "Region": "NY",
          "PostalCode": "14221",
          "Country": "USA",
          "AttentionTo": "Tom Tokarczyk "
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585580+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "860cec0a-8fb1-4733-b6bc-005656250639",
      "ContactStatus": "ACTIVE",
      "Name": "Saratoga Hospital",
      "FirstName": "Daniel",
      "LastName": "Baumann",
      "EmailAddress": "dbaumann@SARATOGACARE.ORG",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "PO Box 31234",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Salt Lake City",
          "Region": "UT",
          "PostalCode": "220758",
          "Country": "United States of Amercia",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "518-587-3222",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "357da381-6157-4676-9050-00f18c879783",
      "ContactStatus": "ACTIVE",
      "Name": "Presidio",
      "FirstName": "Scott",
      "LastName": "Merritt",
      "EmailAddress": "smerritt@presidio.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "5337 Millenia Lakes Blvd. Suite 300,",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Orlando",
          "Region": "FL",
          "PostalCode": "32839",
          "Country": "USA",
          "AttentionTo": "Terry Vaughan"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "a68bab96-c997-42cd-83a9-014b379c0d5c",
      "ContactStatus": "ACTIVE",
      "Name": "Exact Software",
      "FirstName": "Niyaz",
      "LastName": "Adam",
      "EmailAddress": "niyaz.adam@exact.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Molengraaffsingel 33,",
          "AddressLine2": "P.O.Box 5066, 2600 GB Delft",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "Netherlands",
          "AttentionTo": "Niyaz Ada"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "a8481a6f-8a4c-48dd-850f-016555180eef",
      "ContactStatus": "ACTIVE",
      "Name": "High Liner Foods",
      "FirstName": "Isabel",
      "LastName": "Torres",
      "EmailAddress": "Isabel.Torres@highlinerfoods.com ",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1959 Upper Water Street,",
          "AddressLine2": "Suite 508,",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Halifax",
          "Region": "NS",
          "PostalCode": "B3J3N2",
          "Country": "Canada",
          "AttentionTo": "Isabel Torres"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "4ce3af58-75ac-47ee-8121-01862993d6b4",
      "ContactStatus": "ACTIVE",
      "Name": "Phelps Memorial Health Centre",
      "EmailAddress": "agvancampen@phelpsmemorial.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1215 TIBBALS STREET",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "HOLDREGE",
          "Region": "NE",
          "PostalCode": "68949",
          "Country": "UNITED STATES",
          "AttentionTo": "ANDREW VAN CAMPEN"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "dbcc02cf-a24f-4c51-a082-01b09e67faaf",
      "ContactStatus": "ACTIVE",
      "Name": "ZF",
      "FirstName": "Paul",
      "LastName": "Martin",
      "EmailAddress": "",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Friedrichshafen, Baden-Württemberg, Germany",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Friedrichshafen",
          "Region": "Baden Wurtemberg",
          "PostalCode": "",
          "Country": "Germany",
          "AttentionTo": "Paul Martin"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "d21416fc-71e7-4267-a000-01fd552ad30a",
      "ContactStatus": "ACTIVE",
      "Name": "ProVista-UK Limited",
      "FirstName": "Louise",
      "LastName": "McCusker",
      "EmailAddress": "louise.mccusker@provista-uk.com",
      "BankAccountDetails": "",
      "TaxNumber": "855 9743 71",
      "AccountsReceivableTaxType": "OUTPUT2",
      "AccountsPayableTaxType": "INPUT2",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "6 Candymill Lane",
          "AddressLine2": "Bothwell Bridge Business Park Hamilton",
          "AddressLine3": "ML3 0FD",
          "AddressLine4": "",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": " 642 4 642",
          "PhoneAreaCode": "0845",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": true,
      "IsCustomer": true,
      "DefaultCurrency": "GBP",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "6fd4ccbe-bec5-4b15-8ec1-02cf91d25fea",
      "ContactStatus": "ACTIVE",
      "Name": "Florida International University",
      "FirstName": "Mayte",
      "LastName": "Cantillo",
      "EmailAddress": "mayte@fiu.edu",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "11200 S.W. 8th Street",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Miami",
          "Region": "Florida",
          "PostalCode": "33199",
          "Country": "USA",
          "AttentionTo": "Mayte Cantillo"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "4c183ab0-ff7e-4cf4-8a6e-0337bac2fa22",
      "ContactStatus": "ACTIVE",
      "Name": "Group Health Cooperative of South Central Wisconsin",
      "FirstName": "",
      "LastName": "",
      "EmailAddress": "invoice@ghcscw.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1265 John Q Hammons Drive, Ste 200",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Madison",
          "Region": "WI",
          "PostalCode": " 53717-1962 ",
          "Country": "",
          "AttentionTo": "Shane Newsom"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "3916454e-46a3-48bf-8c78-038c2bfe44d9",
      "ContactStatus": "ACTIVE",
      "Name": "North East London NHS FT",
      "EmailAddress": "Apinvoices.nl.asp@serco.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Serco ASP Financial Services PO Box 140",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Liverpool",
          "Region": "",
          "PostalCode": "L33 7RX",
          "Country": "UK",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "GBP",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "405a58a1-89a4-422c-b434-03c96ffc957c",
      "ContactStatus": "ACTIVE",
      "Name": "Cell Information Technology",
      "FirstName": "",
      "LastName": "",
      "EmailAddress": "philip@cellinfo.ae",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "PO BOX 28265",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Abu Dhabi",
          "Region": "ABU",
          "PostalCode": "",
          "Country": "United Arab Emirates",
          "AttentionTo": "Donna Bernabe"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "30e482a0-6a8f-4829-9675-042dec582f1d",
      "ContactStatus": "ACTIVE",
      "Name": "Barclays Capital",
      "FirstName": "Jonathan",
      "LastName": "Carter",
      "EmailAddress": "jonathan.carter@barclays.com",
      "BankAccountDetails": "",
      "AccountsReceivableTaxType": "OUTPUT2",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "5 Noth Colonade",
          "AddressLine2": "Canary Wharf",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "London",
          "Region": "",
          "PostalCode": "E14 4BB",
          "Country": "United Kingdom",
          "AttentionTo": "Jonathan Carter"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "GBP",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "05b730a5-95b5-4bd9-9759-0437a7c418fd",
      "ContactStatus": "ACTIVE",
      "Name": "Qatar Petroleum",
      "FirstName": "Chari",
      "LastName": "Varadhan",
      "EmailAddress": "varadhan@qp.com.qa",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "PO Box 3212",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Doha",
          "Region": "",
          "PostalCode": "",
          "Country": "Qatar",
          "AttentionTo": "Chari Varadhan"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "4744ac01-8637-432e-9edb-045d3ce91ccb",
      "ContactStatus": "ACTIVE",
      "Name": "Central Valley Community Bancorp",
      "FirstName": "Eric",
      "LastName": "Grimm",
      "EmailAddress": "eric.grimm@cvcb.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "7100 North Financial Drive",
          "AddressLine2": "Suite 101",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Fresno",
          "Region": "CA",
          "PostalCode": "93720",
          "Country": "USA",
          "AttentionTo": "Eric Grimm"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "b580bb54-db61-4d6d-9e17-047ca170d95e",
      "ContactStatus": "ACTIVE",
      "Name": "Presidio Infrastructure Solutions - North Central Area",
      "FirstName": "North Central AP",
      "LastName": "Dept",
      "EmailAddress": "NorthCentralAP@presido.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "6355 East Paris",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Caledonia",
          "Region": "Michigan",
          "PostalCode": "49316",
          "Country": "USA",
          "AttentionTo": "Purchasing Dept"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": true,
      "HasValidationErrors": false
    },
    {
      "ContactID": "ecb2824f-7781-4d59-81c2-049c76d2ff27",
      "ContactStatus": "ACTIVE",
      "Name": "Canadian Natural Resources Limited",
      "FirstName": "John",
      "LastName": "Snow",
      "EmailAddress": "john.snow@cnrl.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Suite 1800, 324 – 8th Ave SW",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Calgary",
          "Region": "Alberta",
          "PostalCode": "T2P 2Z2",
          "Country": "Canada",
          "AttentionTo": "Accounts Payable 1043, 1.S. Dept."
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "CAD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "d42cbb79-d479-4a52-a474-0530c2adeeb9",
      "ContactStatus": "ACTIVE",
      "Name": "Southwest Airlines",
      "FirstName": "Alan",
      "LastName": "Bodnar",
      "EmailAddress": "Alan.Bodnar@wnco.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Southwest Airlines Co.",
          "AddressLine2": "2702 Love Field Drive",
          "AddressLine3": "Dallas, Texas 75235",
          "AddressLine4": "",
          "City": "Dallas",
          "Region": "Texas",
          "PostalCode": "75235",
          "Country": "USA",
          "AttentionTo": "Alan Bodnar"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "9af10d0e-2c25-4a6c-b873-05b05fb4c7b9",
      "ContactStatus": "ACTIVE",
      "Name": "Adobe Systems Incorporated",
      "FirstName": "Ruben",
      "LastName": "Trujillo",
      "EmailAddress": "rubent@adobe.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "345 Park Avenue",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "San Jose",
          "Region": "CA",
          "PostalCode": "95110-2704",
          "Country": "USA",
          "AttentionTo": "Ruben Trujillo"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "afd1adeb-548e-44ff-80be-064dcd08bccd",
      "ContactStatus": "ACTIVE",
      "Name": "Raymond James",
      "FirstName": "Lance",
      "LastName": "Smith",
      "EmailAddress": "Lance.Smith@RaymondJames.ca",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Raymond James Ltd.",
          "AddressLine2": "2100-925 West Georgia Street,",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Vancouver",
          "Region": "BC",
          "PostalCode": "V6C 3L2",
          "Country": "Canada",
          "AttentionTo": "Lance Smith"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "75ca1338-5256-4d05-b4ca-06d6aa822515",
      "ContactStatus": "ACTIVE",
      "Name": "Punahou School",
      "FirstName": "Carol",
      "LastName": "Dearden",
      "EmailAddress": "cdearden@punahou.edu",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Procurement Specialist",
          "AddressLine2": "Information Technology",
          "AddressLine3": "1601 Punahou Street",
          "AddressLine4": "",
          "City": "Honolulu",
          "Region": "HI",
          "PostalCode": "96822",
          "Country": "USA",
          "AttentionTo": "Carol Dearden"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "6643e31c-db09-402a-81b7-075bed0f993e",
      "ContactStatus": "ACTIVE",
      "Name": "Compucom",
      "FirstName": "Amanda",
      "LastName": "Church",
      "EmailAddress": "scmsoftware@compucom.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "7171 Forest Lane",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Dallas",
          "Region": "TX",
          "PostalCode": "75230 ",
          "Country": "United States of America",
          "AttentionTo": "Accounts Payable"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "76624f2b-29f6-4092-8655-080a80c5ca88",
      "ContactStatus": "ACTIVE",
      "Name": "Calvary Health Care",
      "FirstName": "Ben",
      "LastName": "Skinner",
      "EmailAddress": "ben.skinner@calvarycare.org.au",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Cnr Belconnen Way & Haydon Drive",
          "AddressLine2": "Bruce",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Canberra",
          "Region": "ACT",
          "PostalCode": "2617",
          "Country": "Australia",
          "AttentionTo": "Ben Skinner"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "708dd73b-2537-4034-bcf9-094dc140ea2e",
      "ContactStatus": "ACTIVE",
      "Name": "Curtin Universty",
      "FirstName": "Pramodh",
      "LastName": "Gunawardhana",
      "EmailAddress": "P.Gunawardhana@curtin.edu.au",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "GPO Box U1987, Perth",
          "AddressLine2": "Western Australia, 6845",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Perth",
          "Region": "Western Australia",
          "PostalCode": "6845",
          "Country": "Australia",
          "AttentionTo": "Pramodh Gunawardhana"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "ac37a450-5d14-4ae2-be78-096fbf0a10a5",
      "ContactStatus": "ACTIVE",
      "Name": "Childrens Hospital Colarado",
      "FirstName": "Christopher",
      "LastName": "Maier-Walford",
      "EmailAddress": "Christopher.Maier-Walford@childrenscolorado.org",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Anschutz Medical Campus",
          "AddressLine2": "13123 East 16th Avenue",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Aurora",
          "Region": "CO",
          "PostalCode": "80045",
          "Country": "USA",
          "AttentionTo": "Christopher Maier-Walford"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "a85e8516-18c2-46eb-84a8-0a7b69a93835",
      "ContactStatus": "ACTIVE",
      "Name": "TriRivers Health Partners, LLC",
      "FirstName": "Jim",
      "LastName": "Stolz",
      "EmailAddress": "jstoltz@tririvers.org",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1401 E State St",
          "AddressLine2": "Rockford, IL 61104",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "United States of America",
          "AttentionTo": "Shawn Wasson"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "35ba0f47-182c-4ce3-bfa5-0a7f8183f9fd",
      "ContactStatus": "ACTIVE",
      "Name": "Heartland Financial USA, Inc",
      "FirstName": "Derrek",
      "LastName": "Atherley",
      "EmailAddress": "DAtherley@htlf.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1398 Central Avenue",
          "AddressLine2": "P.O. Box 778",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Dubuque",
          "Region": "IA",
          "PostalCode": "52001",
          "Country": "",
          "AttentionTo": "Derrek Atherley"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "aae65eeb-6336-48a1-bfa6-0abe501a09fd",
      "ContactStatus": "ACTIVE",
      "Name": "Cisco Greece",
      "FirstName": "Alkiviadis",
      "LastName": "Zoupas",
      "EmailAddress": "azoupas@cisco.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "44 Kifissias Ave.",
          "AddressLine2": "Monumental Plaza,    Bld C,",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Maroussi",
          "Region": "GR-151 25",
          "PostalCode": "",
          "Country": "Greece",
          "AttentionTo": "Alkiviadis Zoupas"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "2b8e315e-68c5-4946-9c66-0b0b5130f646",
      "ContactStatus": "ACTIVE",
      "Name": "SCANA Services Inc",
      "FirstName": "Arlen",
      "LastName": "Jones",
      "EmailAddress": "PAYABLES@SCANA.COM",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "PO Box 100257",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Columbia",
          "Region": "SC",
          "PostalCode": "290202",
          "Country": "United States of America",
          "AttentionTo": "Rick Austin"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "0d0d3f98-f6a4-46fc-8550-0b174bc96e8d",
      "ContactStatus": "ACTIVE",
      "Name": "Seagate Technology",
      "FirstName": "Dennis",
      "LastName": "M Kiyabu",
      "EmailAddress": "dennis.m.kiyabu@seagate.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "10200 S. De Anza Blvd",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Cupertino",
          "Region": "CA",
          "PostalCode": "95014",
          "Country": "United States of America",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "765b23ac-25f9-46cd-b64f-0b2de145783a",
      "ContactStatus": "ACTIVE",
      "Name": "Evolve Technology Group (For CalPERS)",
      "FirstName": "Kristy",
      "LastName": "Little",
      "EmailAddress": "KLittle@go-evolve.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "233 Technology Way, Suite 4",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Rocklin",
          "Region": "CA",
          "PostalCode": "95765",
          "Country": "USA",
          "AttentionTo": "Kristy Little"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "960a650a-baab-433d-ad97-0b7d97fad63e",
      "ContactStatus": "ACTIVE",
      "Name": "Tesoro",
      "FirstName": "George",
      "LastName": "Banuelos",
      "EmailAddress": "Juan.G.Banuelos@tsocorp.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "City": "San Antonio",
          "Region": "Texas",
          "PostalCode": "",
          "Country": "USA",
          "AttentionTo": "George Banuelos"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "fece0ee1-bd6c-4977-b583-0bb3d3728870",
      "ContactStatus": "ACTIVE",
      "Name": "BAE Systems Information Technology Inc",
      "EmailAddress": "is01@baesystems.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "PO BOX 470728",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Charlotte",
          "Region": "NC",
          "PostalCode": "28247-0728",
          "Country": "United States of America",
          "AttentionTo": "Accounts Payable"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "f2b18419-6e24-4bda-a3d9-0c04a4f55cd0",
      "ContactStatus": "ACTIVE",
      "Name": "Gulf Business Machines (UAE)",
      "FirstName": "John",
      "LastName": "Binu",
      "EmailAddress": "BINUJOHN@ae.gbm.ihost.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "PO Box 37543",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Abu Dhabi",
          "Region": "",
          "PostalCode": "",
          "Country": "UAE ",
          "AttentionTo": "Abdul Azeem Ahamed Arakkal"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "b70dec32-66dd-4a0d-a43d-0d6737008f52",
      "ContactStatus": "ACTIVE",
      "Name": "Würth Elektronik eiSos GmbH & Co. KG",
      "FirstName": "Denis",
      "LastName": "Schlumpberger",
      "EmailAddress": "Denis.Schlumpberger@we-online.de",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "EMC & Inductive Solutions",
          "AddressLine2": "Max-Eyth-Str. 1",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Niedernhall",
          "Region": "Waldenburg",
          "PostalCode": "74638",
          "Country": "GERMANY",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "EUR",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "0a5b2320-6b6b-4287-bb70-0dd19da449e0",
      "ContactStatus": "ACTIVE",
      "Name": "Presidio Norcross",
      "FirstName": "Brian",
      "LastName": "Mailliard",
      "EmailAddress": "bmailliard@presidio.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "AddressLine1": "Brian Mailliard | Regional Collaboration Director",
          "AddressLine2": "Presidio | www.presidio.com",
          "AddressLine3": "Two Sun Court, Norcross, GA 30092",
          "AddressLine4": "",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Two Sun Court",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Norcross",
          "Region": "GA",
          "PostalCode": "30092",
          "Country": "USA",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "1f83162e-ebcf-400e-8859-0dec569e7227",
      "ContactStatus": "ACTIVE",
      "Name": "Chevron Upstream Europe",
      "FirstName": "Michael McWhinnie",
      "LastName": "",
      "EmailAddress": "MMcWhinnie@chevron.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Chevron House",
          "AddressLine2": "Hill of Rubislaw",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Aberdeen",
          "Region": "",
          "PostalCode": "AB15 6XL",
          "Country": "UK",
          "AttentionTo": "Michael McWhinnie"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "GBP",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "65be7a30-3cfb-457e-87fc-0e44438dbece",
      "ContactStatus": "ACTIVE",
      "Name": "Spectrum Health System",
      "FirstName": "Daniel",
      "LastName": "Boik",
      "EmailAddress": "Daniel.Boik@spectrumhealth.org",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "100 Michigan St.",
          "AddressLine2": "Grand Rapids, MI 49512",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Grand Rapids",
          "Region": "MI",
          "PostalCode": "49512",
          "Country": "USA",
          "AttentionTo": "Daniel Boik"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "f18c441c-c4b6-42ba-85f0-0e5af8e845d1",
      "ContactStatus": "ACTIVE",
      "Name": "ALDAR Properties PJSC",
      "FirstName": "Rakesh",
      "LastName": "Narang",
      "EmailAddress": "rnarang@aldar.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Aldar Head Office Building",
          "AddressLine2": "PO Box 51133",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Abu Dhabi",
          "Region": "",
          "PostalCode": "",
          "Country": " United Arab Emirates",
          "AttentionTo": "Vel Kathirvel Senthil"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1487614585820+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
     
    {
      "ContactID": "2c44a9a1-feb3-41a3-8638-5b11c51e1091",
      "ContactStatus": "ACTIVE",
      "Name": "California Department of Insurance",
      "FirstName": "Priscilla",
      "LastName": "Cisneros",
      "EmailAddress": "Priscilla.Cisneros@insurance.ca.gov",
      "BankAccountDetails": "",
      "AccountsReceivableTaxType": "ZERORATEDOUTPUT",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "300 Capitol Mall, Suite 1400",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Sacramento",
          "Region": "CA",
          "PostalCode": "95814",
          "Country": "USA",
          "AttentionTo": "Priscilla Cisneros"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1494414040207+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "399a44ac-6491-4160-976d-262da114cdd0",
      "ContactStatus": "ACTIVE",
      "Name": "Sonepar USA",
      "FirstName": "IT Invocies",
      "LastName": "",
      "EmailAddress": "itinvoices@sonepar-us.com",
      "BankAccountDetails": "",
      "AccountsReceivableTaxType": "ZERORATEDOUTPUT",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Network VoIP Engineer",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "USA",
          "AttentionTo": "Cliff Campbell"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1494415517887+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "09308953-947d-49da-af7f-6c7159a0cdbf",
      "ContactStatus": "ACTIVE",
      "Name": "SHI International Corp",
      "FirstName": "Invoice",
      "LastName": "Submissions",
      "EmailAddress": "VendorInvoices@SHI.com",
      "BankAccountDetails": "",
      "AccountsReceivableTaxType": "ZERORATEDOUTPUT",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "290 Davidson Ave.",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Somerset",
          "Region": "NJ",
          "PostalCode": "08873",
          "Country": "United States of America",
          "AttentionTo": "Accounts Payable"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1494504151560+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 438.55,
          "Overdue": 0.00
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "1e1d5382-27a7-4f08-92e6-05fd85382d1b",
      "ContactStatus": "ACTIVE",
      "Name": "Riyadh Bank",
      "FirstName": "Nazar",
      "LastName": "Shabour",
      "EmailAddress": "v-nazar.shabour@riyadbank.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "King Abdul Aziz Rd",
          "AddressLine2": "Al Murabba",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Riyadh",
          "Region": "",
          "PostalCode": "12631",
          "Country": "Saudi Arabia",
          "AttentionTo": "Nazar Shabour"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1494935944900+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "d0095532-0758-4ec7-a99a-cd154fac1fa5",
      "ContactStatus": "ACTIVE",
      "Name": "World Wide Technology, Inc",
      "FirstName": "Accounts",
      "LastName": "Payable",
      "EmailAddress": "APinvoices@wwt.com",
      "BankAccountDetails": "",
      "AccountsReceivableTaxType": "ZERORATEDOUTPUT",
      "AccountsPayableTaxType": "ZERORATEDOUTPUT",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "60 Weldon Parkway",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Maryland Heights",
          "Region": "MO",
          "PostalCode": "63043-3101",
          "Country": "United States of America",
          "AttentionTo": "Accounts Payable"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "314-569-7051",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "314-569-8300",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1495100016067+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 1135.42,
          "Overdue": 0.00
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "f3b0c7c5-d802-4a36-9916-21cce05ce4ba",
      "ContactStatus": "ACTIVE",
      "Name": "Axians Networks & Solutions GmbH",
      "FirstName": "Horst",
      "LastName": "Mueller",
      "EmailAddress": "HMueller@axians.de",
      "BankAccountDetails": "",
      "TaxNumber": "DE196863753",
      "AccountsReceivableTaxType": "ECZROUTPUTSERVICES",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Von-der-Wettern-Str. 15",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Koln",
          "Region": "",
          "PostalCode": "D-51149",
          "Country": "Germany",
          "AttentionTo": "Finance Departement"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1495100736373+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "EUR",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "39ac54dd-c565-45d9-a9f0-2cf870717b2e",
      "ContactStatus": "ACTIVE",
      "Name": "Valley Health",
      "FirstName": "Accounts",
      "LastName": "Payable",
      "EmailAddress": "ap@valleyhealthlink.com",
      "BankAccountDetails": "",
      "AccountsReceivableTaxType": "ZERORATEDOUTPUT",
      "AccountsPayableTaxType": "ZERORATEDOUTPUT",
      "Addresses": [
        {
          "AddressType": "STREET",
          "AddressLine1": "PO Box 2280",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "",
          "Region": "Winchester VA",
          "PostalCode": "22604",
          "Country": "United States of America",
          "AttentionTo": "Accounts Payable"
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "PO Box 2280",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "",
          "Region": "Winchester VA",
          "PostalCode": "22604",
          "Country": "United States of America",
          "AttentionTo": "Accounts Payable"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "5360006",
          "PhoneAreaCode": "540",
          "PhoneCountryCode": "001"
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "5328340",
          "PhoneAreaCode": "540",
          "PhoneCountryCode": "001"
        }
      ],
      "UpdatedDateUTC": "\/Date(1495107749033+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "dba0fe14-7c60-49f3-88f3-4f573baf1476",
      "ContactStatus": "ACTIVE",
      "Name": "Formica Limited (UK)",
      "FirstName": "Invoices",
      "LastName": "Payable",
      "EmailAddress": "invoices.payable@formica.com",
      "BankAccountDetails": "",
      "TaxNumber": "GB708157338",
      "AccountsReceivableTaxType": "OUTPUT2",
      "Addresses": [
        {
          "AddressType": "STREET",
          "AddressLine1": "11 Silver Fox Way",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Newcastle",
          "Region": "Northumberland",
          "PostalCode": "NE27 0QJ",
          "Country": "UK",
          "AttentionTo": "Glen Foster"
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Coast Road",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "North Shields",
          "Region": "Tyne & Wear",
          "PostalCode": "NE29 8RE",
          "Country": "UK",
          "AttentionTo": "Accounts Payable"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1495191065707+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "GBP",
      "ContactPersons": [],
      "HasAttachments": true,
      "HasValidationErrors": false
    },
    
    
    {
      "ContactID": "0dc5bf5c-b56b-4ddf-9c66-a3180c2afc4a",
      "ContactStatus": "ACTIVE",
      "Name": "Georgetown Hospital System",
      "FirstName": "Yvonne",
      "LastName": "Baker",
      "EmailAddress": "ybaker@tidelandshealth.org",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Tidelands Health",
          "AddressLine2": "149 Piper Lane",
          "AddressLine3": "PO Box 421718",
          "AddressLine4": "",
          "City": "Georgetown",
          "Region": "SC",
          "PostalCode": "29442",
          "Country": "USA",
          "AttentionTo": "Account Payable"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1498653318540+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 4384.70,
          "Overdue": 0.00
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "94c79009-766b-4f9c-bab5-6538c9b8e003",
      "ContactStatus": "ACTIVE",
      "Name": "Telus",
      "FirstName": "Eric",
      "LastName": "Roy",
      "EmailAddress": "ERIC.ROY@telus.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "Vancouver",
          "Region": "British Columbia",
          "PostalCode": "",
          "Country": "Canada",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "City": "Vancouver",
          "Region": "British Columbia",
          "PostalCode": "",
          "Country": "Canada",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499203311830+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "CAD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "00756200-842c-4376-88f0-e832f824141e",
      "ContactStatus": "ACTIVE",
      "Name": "Axonex LTD",
      "FirstName": "Les",
      "LastName": "Ellery",
      "EmailAddress": "lellery@axonex.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "The Sixth Floor",
          "AddressLine2": "Eagle Tower",
          "AddressLine3": "Montpellier Drive",
          "AddressLine4": "",
          "City": "Cheltenham",
          "Region": "Gloucestershire",
          "PostalCode": "GL50 1TA",
          "Country": "",
          "AttentionTo": "Les Ellery"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499263127327+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "GBP",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 1205.71,
          "Overdue": 0.00
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "73f876d5-6de0-4dd7-9176-0226364b7b33",
      "ContactStatus": "ACTIVE",
      "Name": "CVE Technologies Group",
      "FirstName": "Patti",
      "LastName": "Nelson",
      "EmailAddress": "patti.nelson@cvetech.com",
      "BankAccountDetails": "",
      "AccountsReceivableTaxType": "ZERORATEDOUTPUT",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1414 South Gustin Road",
          "AddressLine2": "Salt Lake City, UT 84104",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Salt Lake City",
          "Region": "Utah",
          "PostalCode": "84104",
          "Country": "USA",
          "AttentionTo": "Accounts Payable / Linda Peterson"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499265711437+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "f409c583-6357-474d-b75f-77b36f5d39c8",
      "ContactStatus": "ACTIVE",
      "Name": "Global Technology Resources, Inc.",
      "EmailAddress": "tjones@gtri.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "990 S. Broadway, Suite 300",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Denver",
          "Region": "CO",
          "PostalCode": "80209",
          "Country": "United States of America",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499295971413+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "GBP",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 7573.60,
          "Overdue": 7573.60
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "cb2ffee2-0c5c-42b6-a64e-aa3571dbe6fb",
      "ContactStatus": "ACTIVE",
      "Name": "McCarthy Tetrault",
      "FirstName": "Brian",
      "LastName": "Ma",
      "EmailAddress": "BHMA@mccarthy.ca",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "City": "Toronto",
          "Region": "Ontario",
          "PostalCode": "",
          "Country": "Canada",
          "AttentionTo": "Brain Ma"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499352445543+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "CAD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "205f2f08-ac97-4a8d-83b9-4e65718c1221",
      "ContactStatus": "ACTIVE",
      "Name": "Eclipse Technology Solutions Inc",
      "FirstName": "Chris",
      "LastName": "Boa",
      "EmailAddress": "CBoa@eclipsetechnology.ca",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Unit 1: 2180 Dunwin Drive",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Mississauga",
          "Region": "Otario",
          "PostalCode": "L5L 5M8",
          "Country": "Canada",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499354866407+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "CAD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "7183c02f-456c-4130-ac83-e38fc29df5f0",
      "ContactStatus": "ACTIVE",
      "Name": "RedHawk IT Soloutions, LLC",
      "FirstName": "James",
      "LastName": "Hawkins",
      "EmailAddress": "James.Hawkins@RedHawkIT.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "2689 Maple Ridge Dr.",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Woodbridge",
          "Region": "VA",
          "PostalCode": "22191-3826",
          "Country": "USA",
          "AttentionTo": "James Hawkins"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499430620080+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 3989.70,
          "Overdue": 0.00
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "3b17aa11-2772-4843-ad63-9c93e643a196",
      "ContactStatus": "ACTIVE",
      "Name": "University of Alabama at Birmingham",
      "FirstName": "Julie",
      "LastName": "Putman",
      "EmailAddress": "jputman@uabmc.edu",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1720 2nd Ave S",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Birmingham",
          "Region": "AL",
          "PostalCode": "35294",
          "Country": "USA",
          "AttentionTo": "Julie Putman"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499433125890+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "55ec734f-4477-48d4-b8ac-5f192935f1cd",
      "ContactStatus": "ACTIVE",
      "Name": "Ringnet Korea",
      "FirstName": "Bohyun",
      "LastName": "Kim",
      "EmailAddress": "buoyancy@ringnet.co.kr",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Rm 418 Daeryung Post Tower 2-Cha",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Guro-Dong Seoul",
          "Region": "Seoul",
          "PostalCode": "082378",
          "Country": "South Korea",
          "AttentionTo": "Bohyun Kim"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499444474727+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 1562.32,
          "Overdue": 0.00
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "2c67292e-9c01-4c19-86bf-fa13f1efbb57",
      "ContactStatus": "ACTIVE",
      "Name": "Comcast",
      "FirstName": "Adam",
      "LastName": "Barker",
      "EmailAddress": "Adam_Barker@cable.comcast.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1354 Boot Rd.",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "West Chester",
          "Region": "PA",
          "PostalCode": "19380",
          "Country": "USA",
          "AttentionTo": "Adam Barker"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499446322313+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 23678.88,
          "Overdue": 23678.88
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": true,
      "HasValidationErrors": false
    },
    {
      "ContactID": "62dd0af1-caec-45fb-9b7d-f6b1601bd70a",
      "ContactStatus": "ACTIVE",
      "Name": "Lennar Corporation",
      "FirstName": "Michael",
      "LastName": "Scharlow",
      "EmailAddress": "Michael.Scharlow@Lennar.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "City": "Miami",
          "Region": "Florida",
          "PostalCode": "",
          "Country": "USA",
          "AttentionTo": "Michael Scharlow"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499453160270+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "013df331-d00f-4a5a-8540-98da30b04ec0",
      "ContactStatus": "ACTIVE",
      "Name": "Telcion Communications Group",
      "FirstName": "Maci",
      "LastName": "Britt",
      "EmailAddress": "mbritt@telcion.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "3050 Commerce Way",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Turlock",
          "Region": "CA",
          "PostalCode": "95380",
          "Country": "USA",
          "AttentionTo": "Maci Britt"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499462331090+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "d0e074ee-fa46-48f7-b0c5-af8dfe6844f4",
      "ContactStatus": "ACTIVE",
      "Name": "Federal Trade Commission",
      "FirstName": "Leonard",
      "LastName": "DiMenna",
      "EmailAddress": "ldimenna@ftc.gov",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "City": "Washington",
          "Region": "DC",
          "PostalCode": "",
          "Country": "USA",
          "AttentionTo": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499858119807+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "3cfe278a-08be-43ab-a82e-13691bbd5828",
      "ContactStatus": "ACTIVE",
      "Name": "Grundy County Memorial Hospital – UnityPoint Health",
      "EmailAddress": "",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": ""
        },
        {
          "AddressType": "POBOX",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": ""
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499963402010+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "GBP",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "4304886b-c64f-4c85-a513-f5e93539bab0",
      "ContactStatus": "ACTIVE",
      "Name": "Grant PUD",
      "FirstName": "Larry",
      "LastName": "Roberson",
      "EmailAddress": "Lrobers@gcpud.org",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "PO Box 878",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Ephrata",
          "Region": "WA",
          "PostalCode": "98823",
          "Country": "USA",
          "AttentionTo": "Larry Roberson"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499981311143+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "45ac4fb0-51d2-4b61-8021-5788a6b3dc12",
      "ContactStatus": "ACTIVE",
      "Name": "Harman International",
      "FirstName": "Michael",
      "LastName": "Strzelecki",
      "EmailAddress": "Michal.Strzelecki@Harman.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "400 Atlantic Street",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Stamford",
          "Region": "CT",
          "PostalCode": "06901",
          "Country": "USA",
          "AttentionTo": "Michael Strzelecki"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499982547260+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "c02fac49-3bf7-4406-a17e-88c574abcc4a",
      "ContactStatus": "ACTIVE",
      "Name": "Chemical Bank",
      "FirstName": "Andrew",
      "LastName": "Mackay",
      "EmailAddress": "Andrew.MacKay@chemicalbank.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "City": "Midland",
          "Region": "Michigan",
          "PostalCode": "",
          "Country": "USA",
          "AttentionTo": "Andrew Mackay"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1499983511753+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "83f8e41b-f404-4ce3-9cb8-e79cb71cc85b",
      "ContactStatus": "ACTIVE",
      "Name": "EYGBS India Pvt Ltd",
      "FirstName": "Binu",
      "LastName": "Pillai",
      "EmailAddress": "binu.pillai@xe04.ey.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "RMZ Infinity, 3rd Floor,Tower C",
          "AddressLine2": "Old Madras Road",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Bangalore",
          "Region": "Karnataka ",
          "PostalCode": "560016",
          "Country": "India",
          "AttentionTo": "Preethi Palani"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1500024979797+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 10349.24,
          "Overdue": 10349.24
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "6525dca7-77ea-4237-ba1a-f5caa8ca33b3",
      "ContactStatus": "ACTIVE",
      "Name": "Independent Bank",
      "FirstName": "Duane",
      "LastName": "White",
      "EmailAddress": "dwilhite@ibcp.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "230 W. Main St.",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Ionia",
          "Region": "MI",
          "PostalCode": "48846",
          "Country": "USA",
          "AttentionTo": "Duane Wilhite"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1500028662017+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 328.91,
          "Overdue": 0.00
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "6d604658-05ae-4ea0-aac4-97c8f0e9456c",
      "ContactStatus": "ACTIVE",
      "Name": "John Deere",
      "FirstName": "John",
      "LastName": "Deere",
      "EmailAddress": "Albarranjoseph@JohnDeere.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "City": "Moline",
          "Region": "Illinois",
          "PostalCode": "",
          "Country": "USA",
          "AttentionTo": "Joseph Albarran"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1500243068797+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "8bc5414c-f9e6-4178-af96-154c397e4d61",
      "ContactStatus": "ACTIVE",
      "Name": "Qatar Olympic Committee",
      "FirstName": "Ahmed",
      "LastName": "Khalil Abdulla",
      "EmailAddress": "ahmedkhalil@olympic.qa",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Head of Networks Unit",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Doha",
          "Region": "",
          "PostalCode": "",
          "Country": "Qatar",
          "AttentionTo": "Ahmed Khalil Abdulla"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1500282999053+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "69add247-ea37-4f32-824c-146b677c8ff5",
      "ContactStatus": "ACTIVE",
      "Name": "Vertiv",
      "FirstName": "Rodney",
      "LastName": "Jackson",
      "EmailAddress": "Rodney.Jackson@vertivco.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "City": "Columbus",
          "Region": "Ohio",
          "PostalCode": "",
          "Country": "USA",
          "AttentionTo": "Rodney Jackson"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1500411253687+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "bef46bef-b3dc-4d4f-a79a-38540e49de8e",
      "ContactStatus": "ACTIVE",
      "Name": "Eaton Corporation",
      "FirstName": "Brian",
      "LastName": "Gravelle",
      "EmailAddress": "BrianGravelle@Eaton.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Mailstop 7T",
          "AddressLine2": "1000 Eaton Blvd",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Cleveland",
          "Region": "OH",
          "PostalCode": "44122",
          "Country": "USA",
          "AttentionTo": "Brian Gravelle"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1500415017867+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "ec78a841-3453-4871-911b-f8bb1157788d",
      "ContactStatus": "ACTIVE",
      "Name": "Acorn Group",
      "FirstName": "Eugene",
      "LastName": "Makuyana",
      "EmailAddress": "Eugene.Makuyana@acorngroup.co.uk",
      "BankAccountDetails": "",
      "AccountsReceivableTaxType": "OUTPUT2",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1 Sherman Road",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Bromley",
          "Region": "Greater London",
          "PostalCode": "BR13JH",
          "Country": "UK",
          "AttentionTo": "Eugene Makuyana"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1500549061580+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "GBP",
      "Balances": {
        "AccountsReceivable": {
          "Outstanding": 1478.40,
          "Overdue": 0.00
        },
        "AccountsPayable": {
          "Outstanding": 0.00,
          "Overdue": 0.00
        }
      },
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "51ddace2-3054-4ded-ba78-2919022b9953",
      "ContactStatus": "ACTIVE",
      "Name": "JLG Industries Inc",
      "FirstName": "Basil",
      "LastName": "Triscari",
      "EmailAddress": "BJTriscari@JLG.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "1 JLG Drive",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "McConnellsburg",
          "Region": "PA",
          "PostalCode": "17233-9533",
          "Country": "USA",
          "AttentionTo": "Basil Triscari"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1500574112360+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "fd3c2b3d-204f-4015-ba10-09f52ed79c62",
      "ContactStatus": "ACTIVE",
      "Name": "NASA Johnston Space Center",
      "FirstName": "Russell",
      "LastName": "Boone",
      "EmailAddress": "russell.boone@nasa.gov",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "2101 E NASA Pkwy",
          "AddressLine2": "",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Houston",
          "Region": "TX",
          "PostalCode": "77058",
          "Country": "USA",
          "AttentionTo": "Russell Boone"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1501108822943+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    },
    {
      "ContactID": "8a4c72bc-83c8-46dd-b27b-3396051c43fc",
      "ContactStatus": "ACTIVE",
      "Name": "Alpha Data LLC",
      "FirstName": "Divakar",
      "LastName": "Karunashankar",
      "EmailAddress": "divakar@alphadxb.com",
      "BankAccountDetails": "",
      "Addresses": [
        {
          "AddressType": "STREET",
          "City": "",
          "Region": "",
          "PostalCode": "",
          "Country": "",
          "AttentionTo": ""
        },
        {
          "AddressType": "POBOX",
          "AddressLine1": "Dubai Service Center",
          "AddressLine2": "Khalid Bin Waleed Street",
          "AddressLine3": "",
          "AddressLine4": "",
          "City": "Dubai",
          "Region": "",
          "PostalCode": "",
          "Country": "UAE",
          "AttentionTo": "Divakar Karunashankar"
        }
      ],
      "Phones": [
        {
          "PhoneType": "DDI",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "DEFAULT",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "FAX",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        },
        {
          "PhoneType": "MOBILE",
          "PhoneNumber": "",
          "PhoneAreaCode": "",
          "PhoneCountryCode": ""
        }
      ],
      "UpdatedDateUTC": "\/Date(1501112239480+0000)\/",
      "ContactGroups": [],
      "IsSupplier": false,
      "IsCustomer": true,
      "DefaultCurrency": "USD",
      "ContactPersons": [],
      "HasAttachments": false,
      "HasValidationErrors": false
    }
  ]
}
]