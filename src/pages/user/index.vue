<script setup lang="ts">
  import {useUserStore} from "@/stores/user.ts";
  const store = useUserStore();
  const routes = useRouter();

  const  view = (event: MouseEvent) =>{
    routes.push(`/user/${event}`)
  }

  const  deleteAction = (event: MouseEvent) => {
    store.deleteItem(Number(event))
  }

  const  add = () => {
    routes.push(`/user/0`)
  }

</script>

<template>
  <div class="dashboard-header">
    <h1>User</h1>
    <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
  </div>

  <div class="quick-actions">

    <div class="action">
      <h2>User List</h2>
     <router-link to="/user/0"> <button class="btn-add" >+</button></router-link>
    </div>
    <div class="actions-grid">
      <Table :headers="store.headers" :option="true" :table-data="store.userList" @delete="deleteAction" @view="view" />
    </div>
  </div>

</template>

<style scoped lang="scss">
  .action{
    display: flex;
    justify-content: space-between;

    a{
      text-decoration: none;
    }
    button{
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: black;
    }
  }
</style>
