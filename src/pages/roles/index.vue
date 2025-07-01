<script setup lang="ts">
  import {useRoleStore} from "@/stores/role.ts";
const showButton = ref({
  view: false,
  edit: true,
  delete: true,
})
  const store = useRoleStore()

  const deleteAction = (event: any) => {
    store.delete(event);
  }

  const edit = (event: unknown) => {
    console.log('edit', event)
  }

  store.getRole();

</script>

<template>
  <div class="dashboard-header">
    <h1>Role</h1>
    <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
  </div>

  <div class="quick-actions">
    <div class="action">
      <h2>Role List</h2>
      <router-link to="/roles/null"> <button class="btn-add" >+</button></router-link>
    </div>

    <div class="actions-grid">
      <Table :headers="store.headers" :option="showButton" :table-data="store.roleList" @delete="deleteAction" @edit="edit"  />
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
