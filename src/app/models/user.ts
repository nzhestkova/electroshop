export class User {
  userID: number;
  login: string;
  password: string;
  username: {
    name: string,
    surname: string,
  };
  contacts: Contacts;
  constructor(login: string, password: string, username: { name: string, surname: string }) {
    this.login = login;
    this.password = password;
    this.username = username;
  }
}

class Address {
  country: string;
  district: string;
  city: string;
  street: string;
  houseNumber: number;
  flatNumber: number;
  constructor(country: string, district: string,
              city: string, street: string,
              houseNumber: number, flatNumber: number) {
    this.country = country;
    this.district = district;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
    this.flatNumber = flatNumber;
  }
}

class Contacts {
  primaryPhoneNumber: string;
  otherPhoneNumbers: string[];
  primaryEmail: string;
  otherEmails: string[];
  primaryAddress: Address;
  otherAddresses: Address[];
  constructor(primaryPhoneNumber: string, primaryEmail: string, primaryAddress: Address,
              otherPhoneNumbers: string[], otherEmails: string[], otherAddresses: Address[]) {
    this.primaryPhoneNumber = primaryPhoneNumber;
    this.primaryEmail = primaryEmail;
    this.primaryAddress = primaryAddress;
    this.otherPhoneNumbers = otherPhoneNumbers;
    this.otherEmails = otherEmails;
    this.otherAddresses = otherAddresses;
  }
}
