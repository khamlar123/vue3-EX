<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";
import {useAppStore} from "@/stores/app.ts";
const store = useAppStore();

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})

const handleResize = () => {
  store.isMobile = window.innerWidth <= 768
  if (!store.isMobile) {
    store.sidebarOpen = false
  }
}

const handleClickOutside = (e: MouseEvent) => {
  const sidebar = document.querySelector('.sidebar')
  const menuToggle = document.querySelector('.menu-toggle')
  if (
    store.isMobile &&
    store.sidebarOpen &&
    sidebar &&
    !sidebar.contains(e.target as Node) &&
    menuToggle &&
    !menuToggle.contains(e.target as Node)
  ) {
    store.sidebarOpen = false
  }
}
</script>

<template>
  <aside
    class="sidebar"
    :class="{
        collapsed: store.isMobile && !store.sidebarOpen,
        open: store.isMobile && store.sidebarOpen,
      }"
  >
    <div class="sidebar__header">
      <div class="domain-info">
        <div class="domain">example.com</div>
        <div class="plan">Premium Plan</div>
      </div>
    </div>
    <nav class="sidebar__menu">
      <div
        class="menu-section"
        v-for="section in store.menuSections"
        :key="section.title"
      >
        <div class="section-title">{{ section.title }}</div>
<!--        <div-->
<!--          v-for="item in section.items"-->
<!--          :key="item.id"-->
<!--          class="menu-item"-->
<!--          :class="{ active: store.activeMenuItem === item.id }"-->
<!--          @click="handleMenuItemClick(item)"-->

<!--        >-->
<!--          <span class="icon">📁</span>-->
<!--          <span class="text">{{ item.text }}</span>-->

<!--        </div>-->

        <router-link
          :to="item.url"
          v-for="item in section.items" :key="item.id"
          class="menu-item"
          active-class="active"
        >
            <span class="icon">📁</span>
            <span class="text">{{ item.text }}</span>
        </router-link>
      </div>
    </nav>
  </aside>
</template>

