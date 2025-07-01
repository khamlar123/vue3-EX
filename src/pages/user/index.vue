<script setup lang="ts">
  import {useUserStore} from "@/stores/user.ts";
  import {useRouter} from "vue-router";
  const store = useUserStore();
  const routes = useRouter();
  const router = useRouter()
  const showButton = ref({
    view: false,
    delete: true,
    edit: true,
  });

  const  view = (event: MouseEvent) =>{
    routes.push(`/user/${event}`)
  }

  store.getUser();

  const deleteAction = (event: MouseEvent) => {
    console.log('delete',event);
    store.delete(event);

  }

  const edit = (event: MouseEvent) => {
    console.log('edit', event);
    router.push({ path: '/user/'+event });
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
     <router-link to="/user/null"> <button class="btn-add" >+</button></router-link>
    </div>
    <div class="actions-grid">
      <Table :headers="store.headers" :option="showButton" :table-data="store.userList" @delete="deleteAction" @edit="edit" @view="view" />
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
