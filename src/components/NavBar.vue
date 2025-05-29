<script setup lang="ts">
import {useAppStore} from "@/stores/app.ts";

const store = useAppStore();

const toggleSidebar = () => {
  store.sidebarOpen = !store.sidebarOpen
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
        <span>Home</span> / <span>Dashboard</span>
      </div>
    </div>
    <div class="header__right">
      <div class="search-box">
        <input type="text" placeholder="Search for tools, features..."/>
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
          </div>
          ▼
        </div>
      </div>
    </div>
  </header>
</template>


