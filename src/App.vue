<template>
  <v-app>
    <NavBar />
    <SizeMenu />
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  import NavBar from '@/components/NavBar.vue';
  import SizeMenu from '@/components/SizeMenu.vue';

  //
</script>
