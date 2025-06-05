export interface IPermission {
  id: 1,
  name: string,
  permission: {
    id: number;
    name: string;
    value: boolean;
  }[]
}
