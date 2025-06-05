import type {IHeader} from "@/interfaces/i-headers.interface.ts";
import type {IUser} from "@/interfaces/i-user.interface.ts";
import Swal from "sweetalert2";

export const useUserStore = defineStore('user', {
  state: () => ({
    headers: ref<IHeader[]>(
      [
        {
          title: "id",
          key: "id",
          align: "start",
        },
        {
          title: "name",
          key: "name",
          align: "start",
        },
        {
          title: "email",
          key: "email",
          align: "start",
        },
        {
          title: "phone",
          key: "phone",
          align: "start",
        },
        {
          title: "role",
          key: "role",
          align: "end",
        },
        {
          title: "action",
          key: "action",
          align: "start",
        },

        ]),
    userList: ref<IUser[]>(
      [
        {
          "id": 1,
          "name": "Alice Smith",
          "email": "alice@example.com",
          "phone": "555-1234",
          "role": "admin"
        },
        {
          "id": 2,
          "name": "Bob Johnson",
          "email": "bob@example.com",
          "phone": "555-2345",
          "role": "user"
        },
        {
          "id": 3,
          "name": "Charlie Brown",
          "email": "charlie@example.com",
          "phone": "555-3456",
          "role": "user"
        },
        {
          "id": 4,
          "name": "Diana Prince",
          "email": "diana@example.com",
          "phone": "555-4567",
          "role": "manager"
        },
        {
          "id": 5,
          "name": "Evan Stone",
          "email": "evan@example.com",
          "phone": "555-5678",
          "role": "user"
        },
        {
          "id": 6,
          "name": "Fiona Miles",
          "email": "fiona@example.com",
          "phone": "555-6789",
          "role": "admin"
        },
        {
          "id": 7,
          "name": "George Young",
          "email": "george@example.com",
          "phone": "555-7890",
          "role": "user"
        },
        {
          "id": 8,
          "name": "Hannah Lee",
          "email": "hannah@example.com",
          "phone": "555-8901",
          "role": "user"
        },
        {
          "id": 9,
          "name": "Isaac Newton",
          "email": "isaac@example.com",
          "phone": "555-9012",
          "role": "manager"
        },
        {
          "id": 10,
          "name": "Jane Doe",
          "email": "jane@example.com",
          "phone": "555-0123",
          "role": "user"
        },
        {
          "id": 11,
          "name": "Alice Smith",
          "email": "alice@example.com",
          "phone": "555-1234",
          "role": "admin"
        },
        {
          "id": 12,
          "name": "Bob Johnson",
          "email": "bob@example.com",
          "phone": "555-2345",
          "role": "user"
        },
        {
          "id": 13,
          "name": "Charlie Brown",
          "email": "charlie@example.com",
          "phone": "555-3456",
          "role": "user"
        },
        {
          "id": 14,
          "name": "Diana Prince",
          "email": "diana@example.com",
          "phone": "555-4567",
          "role": "manager"
        },
        {
          "id": 15,
          "name": "Evan Stone",
          "email": "evan@example.com",
          "phone": "555-5678",
          "role": "user"
        },
        {
          "id": 16,
          "name": "Fiona Miles",
          "email": "fiona@example.com",
          "phone": "555-6789",
          "role": "admin"
        },
        {
          "id": 17,
          "name": "George Young",
          "email": "george@example.com",
          "phone": "555-7890",
          "role": "user"
        },
        {
          "id": 18,
          "name": "Hannah Lee",
          "email": "hannah@example.com",
          "phone": "555-8901",
          "role": "user"
        },
        {
          "id": 19,
          "name": "Isaac Newton",
          "email": "isaac@example.com",
          "phone": "555-9012",
          "role": "manager"
        },
        {
          "id": 20,
          "name": "Jane Doe",
          "email": "jane@example.com",
          "phone": "555-0123",
          "role": "user"
        }
      ]
    )
  }),
  actions: {
    async add(model: IUser, router: any) {
      this.userList.unshift(model);
      Swal.fire({
        title: 'Add user success',
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
        confirmButtonText: "Close",
      });
      router.push('/user')
    },

    async update(id: number, router: any) {
      console.log('id', id);
      Swal.fire({
        title: 'Update success',
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
        confirmButtonText: "Close",
      });
      router.push('/user')
    },

    async deleteItem(id: number) {
      Swal.fire({
        title: "Are you sure?",
        text: "Won Delete item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#ff5574",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          this.userList =  this.userList.filter(f => f.id !== id);
        }else {
          console.log('cancel')
        }
      });

    }



  }
})
