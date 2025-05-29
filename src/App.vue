<template>
  <v-app>
      <NavBar />
      <SizeMenu />
      <main class="main-content">
        <router-view />
      </main>
  </v-app>
</template>

<script lang="ts" setup>
  import NavBar from '@/components/NavBar.vue';
  import SizeMenu from '@/components/SizeMenu.vue';
</script>
