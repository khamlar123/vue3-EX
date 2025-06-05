<script setup lang="ts">

import {useUserStore} from "@/stores/user.ts";
import type {IUser} from "@/interfaces/i-user.interface.ts";
import Swal from "sweetalert2";
const  route = useRoute();
const  router = useRouter();
const  store = useUserStore();
const  findById = store.userList.find(f => f.id === Number(route.params.id));
const  userModel = ref<IUser>({
  "id":  store.userList.length + 1,
  "name": "",
  "email": "",
  "phone": "",
  "role": "user",
})

onMounted(() => {
  if (Number(route.params.id) > 0)  {
    userModel.value = findById;
  }
});

const  save = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won you won change data!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#ff5574",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
       store.update(Number(route.params?.id), router)
      router.push('/user')
    }else {
      console.log('cancel')
    }
  });
}

const  add = () => {
  store.add(userModel.value, router);
}

</script>

<template>
  <div class="dashboard-header">
    <h1> {{route.params.id > 0 ? `User Detail : ${route.params.id}`: `Add User`}}</h1>
    <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
  </div>

  <div class="quick-actions">
    <h2>User Detail</h2>
    <div class="actions-grid">
      <div class="form-data">
        <input v-model="userModel.name" placeholder="name" type="text" />
        <input v-model="userModel.email" placeholder="email" type="text" />
        <input v-model="userModel.phone" placeholder="phone" type="text" />
        <select v-model="userModel.role">
          <option :value="'user'" >User</option>
          <option :value="'manager'">Manager</option>
          <option :value="'admin'">Admin</option>
        </select>

        <div class="action">

          <button v-if="Number(route.params.id) > 0" class="btn-add" @click="save()">Submit</button>
          <button v-else class="btn-add" @click="add()">Save</button>
          <router-link to="/user"> <button class="btn-delete">Close</button></router-link>

        </div>

      </div>

    </div>
  </div>

</template>

<style scoped lang="scss">
  .form-data{
    display: flex;
    flex-direction: column;
    input, select {
      margin-bottom: 1rem;
      width: 400px;
    }

    .action{
      button{
       margin-right: 0.5rem;
      }
    }
  }

</style>
