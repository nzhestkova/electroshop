import { User } from "./user";

export class ServerResponseUser {
  userExist: boolean;
  userPassControl: number | false;
}

export class ServerResponse {
  error: RequestError;
  data: User;
}

export class RequestError {
  userExist: boolean;
  userPass: boolean;
}
