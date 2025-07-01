<script setup lang="ts">
import {type iModel, useUserStore} from "@/stores/user.ts";
import {useRoute, useRouter} from 'vue-router'
import Alert from "@/components/Alert.ts";

const route = useRoute();
const router = useRouter() // ✅ Get the router instance
const store = useUserStore();
const roleSelect = ref('');
const userModel = reactive(
  {
    _id: '',
    uid: '',
    userName: '',
    password: '',
    avatar: '',
    fullName: '',
    isActive: false,
    role: {
      _id: '',
      uid: '',
      name: '',
      avatar: '',
      isActive: false,
      permission: [],
      createdAt: '',
      updatedAt: '',
      __v: 0,
      id: '',
    },
    createdAt: '',
    updatedAt: '',
    __v: 0,
    id: '',
  }
)
const userId = route.params.id;
store.getRole();

onMounted(async () => {
  if (userId !== 'null') {
    console.log('im here1')
    await store.getOne(userId);
    const data = store.selectUser;
    roleSelect.value = data?.role?.id;
    if (data) {
      delete data.password;
      Object.assign(userModel, data);
    }

  } else {
    console.log('im here2')
  }
});

const createUser = () => {
  const model = {
    userName: userModel.userName,
    password: userModel.password,
    avatar: userModel.avatar,
    fullName: userModel.fullName,
    role: roleSelect.value,
    isActive: userModel.isActive,
  }

  store.createUser(model, router);
}

const update = () => {
  console.log('userModel', userModel);

  if (userModel.password.length > 0 && userModel.password.length < 5) {
    Alert.error('password minimum 6 character');
  }

  const model: iModel = {
    userName: userModel.userName,
    password: userModel.password,
    avatar: userModel.avatar,
    fullName: userModel.fullName,
    role: roleSelect.value,
    isActive: userModel.isActive,
  }

  store.update(userId, model, router);
}

</script>

<template>
  <div class="dashboard-header">
    <h1> {{ route.params.id !== 'null' ? `User Detail : ${route.params.id}` : `Add User` }}</h1>
    <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
  </div>

  <div class="quick-actions">

    <div class="active">
      <h2>User Detail</h2>
      <div class="checkbox">
        <label>Active</label>
        <input type="checkbox" v-model="userModel.isActive"/>
      </div>
    </div>
    <div class="actions-grid">
      <div class="form-data">
        <input v-model="userModel.fullName" placeholder="name" type="text"/>
        <input v-model="userModel.userName" placeholder="userName" type="text"/>
        <input v-model="userModel.password" placeholder="password" type="password"/>
        <select v-model="roleSelect">
          <option disabled value="">Please select a role</option>
          <option v-for="item in store.roleList" :key="item._id" :value="item._id">
            {{ item.name }}
          </option>
        </select>

        <div class="action">
          <button v-if="route.params.id !== 'null'" @click="update" class="btn-add">Submit</button>
          <button v-else class="btn-add" @click="createUser">Save</button>
          <router-link to="/user">
            <button class="btn-delete">Close</button>
          </router-link>
        </div>

      </div>

    </div>
  </div>


</template>

<style scoped lang="scss">

.active {
  display: flex;
  justify-content: space-between;

  .checkbox {
    label {
      padding-right: 10px;
    }
  }

  input {
    margin-top: -30px;
  }
}

.form-data {
  display: flex;
  flex-direction: column;

  input, select {
    margin-bottom: 1rem;
    width: 400px;
  }

  .action {
    button {
      margin-right: 0.5rem;
    }
  }
}

</style>
