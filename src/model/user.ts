export class User {
  userID: number;
  login: string;
  password: string;
  username: string;
  contacts: {
    phoneNumber: string;
    email: string;
    primaryAddress: Address;
    otherDeliveryAddresses: Address[];
  };
  constructor(userID: number, login: string, password: string, username: string) {
    this.userID = userID;
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
