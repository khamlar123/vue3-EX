<script setup lang="ts">

import SizeMenu from "@/components/SizeMenu.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
<v-app>
  <NavBar />
  <SizeMenu />
  <v-main>
    <router-view></router-view>
  </v-main>
</v-app>
</template>

<style scoped lang="scss">

</style>
