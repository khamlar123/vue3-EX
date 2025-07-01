export interface IUser {
  "_id": string;
  "uid": string;
  "userName": string;
  "password": string;
  "avatar": string;
  "fullName": string;
  "isActive": boolean;
  "role": {
    "_id": string;
    "uid": string;
    "name": string;
    "avatar": string;
    "isActive": boolean,
    "permission": string[],
    "createdAt": string;
    "updatedAt": string;
    "__v": number;
    "id": string;
  },
  "createdAt": string;
  "updatedAt": string;
  "__v": number;
  "id": string;
}
