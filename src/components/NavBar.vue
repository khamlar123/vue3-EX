<script setup lang="ts">
import {useAppStore} from "@/stores/app.ts";
const  route = useRoute();
const store = useAppStore();
const url = computed(() => route.path.split('/').splice(1) )
const toggleSidebar = () => {
  store.sidebarOpen = !store.sidebarOpen
}

const logout = () => {
  localStorage.removeItem('authToken')
}

</script>

<template>
  <header class="header">
    <div class="header__left">
      <button class="menu-toggle" @click="toggleSidebar">☰</button>
      <div class="logo">
        <span class="logo-icon">🖥️</span>
        <span>cPanel</span>
      </div>
      <div class="breadcrumb">
        <span >Dashboard</span>
        <span v-for="item in url" :key="item">{{ item? " / "+ item: "" }} </span>
      </div>
    </div>
    <div class="header__right">
      <div class="search-box">
        <input placeholder="Search for tools, features..." type="text"/>
        <span class="search-icon">🔍</span>
      </div>
      <div class="user-menu">
        <div class="notifications">
          🔔 <span class="badge">3</span>
        </div>
        <div class="user-profile">
          <div class="avatar">JD</div>
          <div class="user-info">
            <div class="username">John Doe</div>
            <div class="role">Administrator</div>
            <div class="sub-menu">
              <router-link to="/auth/login" @click="logout()">Logout</router-link>
            </div>
          </div>
          ▼
        </div>
      </div>
    </div>
  </header>
</template>


