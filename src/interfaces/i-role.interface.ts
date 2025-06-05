export interface IRole {
  id: number;
  name: string;
  permissions: {
    id: number,
    name: string;
    permission: {
      name: string,
      value: boolean,
    }[]
  }[]
}
