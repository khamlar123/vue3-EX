<script setup lang="ts">
  import {useUserStore} from "@/stores/user.ts";
  const useStore = useUserStore();
  const routes = useRouter();

  const  view = (event: MouseEvent) =>{
    console.log('event', event)
    routes.push(`/user/${event}`)
  }
</script>

<template>
  <div class="dashboard-header">
    <h1>User</h1>
    <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
  </div>

  <div class="quick-actions">
    <h2>User List</h2>
    <div class="actions-grid">
      <Table :headers="useStore.headers" :option="true" :tableData="useStore.userList" @view="view" />
    </div>
  </div>

</template>

<style scoped lang="sass">

</style>
