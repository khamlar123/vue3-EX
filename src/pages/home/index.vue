<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'

const sidebarOpen = ref(false)
const activeMenuItem = ref('dashboard')
const isMobile = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const handleMenuItemClick = (itemId: string) => {
  activeMenuItem.value = itemId
  if (isMobile.value) {
    sidebarOpen.value = false
  }
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
  if (!isMobile.value) {
    sidebarOpen.value = false
  }
}

const handleClickOutside = (e: MouseEvent) => {
  const sidebar = document.querySelector('.sidebar')
  const menuToggle = document.querySelector('.menu-toggle')
  if (
    isMobile.value &&
    sidebarOpen.value &&
    sidebar &&
    !sidebar.contains(e.target as Node) &&
    menuToggle &&
    !menuToggle.contains(e.target as Node)
  ) {
    sidebarOpen.value = false
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})

// Sample static data
const stats = [
  {
    id: 'files',
    icon: 'folder',
    value: '2,845',
    label: 'Files',
    progress: 65,
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  {
    id: 'databases',
    icon: 'database',
    value: '12',
    label: 'Databases',
    progress: 40,
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
  },
  {
    id: 'emails',
    icon: 'envelope',
    value: '156',
    label: 'Email Accounts',
    progress: 78,
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
  },
  {
    id: 'bandwidth',
    icon: 'chart-line',
    value: '85.2 GB',
    label: 'Bandwidth Used',
    progress: 45,
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
  },
]

const menuSections = [
  {
    title: 'General',
    items: [
      {id: 'dashboard', icon: 'tachometer-alt', text: 'Dashboard'},
      {id: 'statistics', icon: 'chart-bar', text: 'Statistics'},
    ],
  },
  {
    title: 'Files',
    items: [
      {id: 'file-manager', icon: 'folder', text: 'File Manager'},
      {id: 'upload', icon: 'upload', text: 'Upload Files'},
      {id: 'backup', icon: 'archive', text: 'Backup'},
    ],
  },
  // ...other sections
]

const quickActions = [
  {id: 'create-folder', icon: 'folder-plus', text: 'Create New Folder'},
  {id: 'create-database', icon: 'database', text: 'Create Database'},
  {id: 'add-email', icon: 'envelope-open', text: 'Add Email Account'},
  {id: 'create-subdomain', icon: 'globe', text: 'Create Subdomain'},
  {id: 'install-ssl', icon: 'shield-alt', text: 'Install SSL Certificate'},
  {id: 'backup-files', icon: 'download', text: 'Backup Files'},
]
</script>

<template>
  <div class="cpanel-app">
    <!-- Header -->
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

    <!-- Sidebar -->
    <aside
      class="sidebar"
      :class="{
        collapsed: isMobile && !sidebarOpen,
        open: isMobile && sidebarOpen,
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
          v-for="section in menuSections"
          :key="section.title"
        >
          <div class="section-title">{{ section.title }}</div>
          <div
            v-for="item in section.items"
            :key="item.id"
            class="menu-item"
            :class="{ active: activeMenuItem === item.id }"
            @click="handleMenuItemClick(item.id)"
          >
            <span class="icon">📁</span>
            <span class="text">{{ item.text }}</span>
          </div>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <div class="dashboard-header">
        <h1>Dashboard</h1>
        <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
      </div>

      <div class="stats-grid">
        <div
          class="stat-card"
          v-for="stat in stats"
          :key="stat.id"
        >
          <div class="stat-icon" :style="{ background: stat.gradient }">
            {{ stat.icon }}
          </div>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-progress">
            <div
              class="progress-bar"
              :style="{ width: stat.progress + '%', background: stat.gradient }"
            ></div>
          </div>
        </div>
      </div>

      <div class="quick-actions">
        <h2>Quick Actions</h2>
        <div class="actions-grid">
          <div
            class="action-item"
            v-for="action in quickActions"
            :key="action.id"
          >
            <div class="action-icon">{{ action.icon }}</div>
            <span class="action-text">{{ action.text }}</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cpanel-app {
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f7fa;
  color: #333;
  line-height: 1.6;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ecf0f1;
  padding: 0 20px;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #ecf0f1;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.menu-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #ecf0f1;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.breadcrumb {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-left: 20px;
}

.separator {
  margin: 0 8px;
}

.header__right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-box {
  position: relative;
}

.search-box input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 8px 40px 8px 16px;
  color: #ecf0f1;
  width: 250px;
  font-size: 14px;
}

.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-box input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 15px;
}

.notifications {
  position: relative;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.notifications:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 25px;
  transition: background-color 0.3s;
}

.user-profile:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #ff6b35;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.user-info .username {
  font-weight: 500;
  font-size: 14px;
}

.user-info .role {
  font-size: 12px;
  opacity: 0.8;
}

/* Sidebar Styles */
.sidebar {
  background: #2c3e50;
  width: 280px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 70px;
  overflow-y: auto;
  z-index: 999;
  transition: transform 0.3s ease;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar.collapsed {
  transform: translateX(-100%);
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar__header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.domain-info .domain {
  color: #ecf0f1;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.domain-info .plan {
  font-size: 12px;
  color: #27ae60;
  background: rgba(39, 174, 96, 0.2);
  padding: 4px 8px;
  border-radius: 12px;
  display: inline-block;
}

.sidebar__menu {
  padding: 10px 0;
}

.menu-section {
  margin-bottom: 10px;
}

.section-title {
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 20px 5px;
  letter-spacing: 1px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s;
  border-left: 3px solid transparent;
  cursor: pointer;
}

.menu-item:hover {
  background: #34495e;
  color: #ecf0f1;
  border-left-color: #ff6b35;
}

.menu-item.active {
  background: #34495e;
  color: #ecf0f1;
  border-left-color: #ff6b35;
}

.menu-item .icon {
  width: 20px;
  text-align: center;
  margin-right: 12px;
  font-size: 16px;
}

.menu-item .text {
  flex: 1;
  font-size: 14px;
}

/* Main Content Styles */
.main-content {
  margin-left: 280px;
  margin-top: 70px;
  padding: 30px;
  min-height: calc(100vh - 70px);
  transition: margin-left 0.3s ease;
}

.main-content.full-width {
  margin-left: 0;
}

.dashboard-header h1 {
  color: #2c3e50;
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 10px;
}

.dashboard-header .subtitle {
  color: #7f8c8d;
  font-size: 16px;
  margin-bottom: 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 15px;
  color: white;
}

.stat-value {
  font-size: 28px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
}

.stat-label {
  color: #7f8c8d;
  font-size: 14px;
  margin-bottom: 10px;
}

.stat-progress {
  background: #ecf0f1;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s;
}

.quick-actions {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.quick-actions h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 300;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.action-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 2px solid #ecf0f1;
  border-radius: 8px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s;
  cursor: pointer;
}

.action-item:hover {
  border-color: #2c5aa0;
  background: rgba(44, 90, 160, 0.05);
  transform: translateY(-2px);
}

.action-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #ecf0f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 18px;
  color: #2c5aa0;
}

.action-text {
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .breadcrumb,
  .search-box {
    display: none;
  }

  .user-info {
    display: none;
  }

  .sidebar {
    transform: translateX(-100%);
  }

  .main-content {
    margin-left: 0;
    padding: 20px 15px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .actions-grid {
    grid-template-columns: 1fr;
  }
}

/* Scrollbar styling */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
