import type {IRole} from "@/interfaces/i-role.interface.ts";

export const useRoleStore = defineStore('role', {
  state: () => ({
    selectRole: ref<IRole>(),
    roleList:ref<IRole[]>(
      [
        {
          id: 1,
          name: 'User',
          permissions: [
            {
              id: 1,
              name: 'User',
              permission: [
                {name: 'Red', value: false},
                {name: 'Create', value: false},
                {name: 'Update', value: false},
                {name: 'Delete', value: false}
              ]
            },
            {
              id: 2,
              name: 'Order',
              permission: [
                {name: 'Red', value: false},
                {name: 'Create', value: true},
                {name: 'Update', value: false},
                {name: 'Delete', value: false}
              ]
            }
         ]
        },
        {
          id: 2,
          name: 'Manager',
          permissions: [
            {
              id: 1,
              name: 'User',
              permission: [
                {name: 'Red', value: false},
                {name: 'Create', value: false},
                {name: 'Update', value: false},
                {name: 'Delete', value: true}
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'Admin',
          permissions: [
            {
              id: 1,
              name: 'User',
              permission: [
                {name: 'Red', value: false},
                {name: 'Create', value: false},
                {name: 'Update', value: false},
                {name: 'Delete', value: false}
              ]
            }
          ]
        }
      ]
    ),

  }),
  actions: {}
})
