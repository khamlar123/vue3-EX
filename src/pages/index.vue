<script setup lang="ts">
import {useAppStore} from "@/stores/app.ts";
import type {IHeader} from "@/interfaces/i-headers.interface.ts";

const  store = useAppStore();
const showButton = ref<boolean>(false);
const headers = ref<IHeader[]>(
  [
    { title: 'id', key: 'id', align: 'start' },
    { title: 'name', key: 'name', align: 'start' },
    { title: 'active', key: 'active',  align: 'center' }
  ]
);

const data = ref([
  {
    "id": 1,
    "name": "Alice Smith",
    "active": false,
  },
  {
    "id": 2,
    "name": "Bob Johnson",
    "active": true,
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "active": true,
  },
  {
    "id": 4,
    "name": "Diana Prince",
    "active": true,
  },
  {
    "id": 5,
    "name": "Evan Stone",
    "active": true,
  },
  {
    "id": 6,
    "name": "Fiona Miles",
    "active": true,
  },
  {
    "id": 7,
    "name": "George Young",
    "active": true,
  },
  {
    "id": 8,
    "name": "Hannah Lee",
    "active": true,
  },
  {
    "id": 9,
    "name": "Isaac Newton",
    "active": true,
  },
  {
    "id": 10,
    "name": "Jane Doe",
    "active": true,
  }
]);

const  view = (event) => {
  console.log('event',event)
}




</script>
<template>
  <div class="dashboard-header">
    <h1>Dashboard</h1>
    <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
  </div>

  <div class="stats-grid">
    <div
      v-for="stat in store.stats"
      :key="stat.id"
      class="stat-card"
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
      <Table :headers="headers" :option="showButton" :table-data="data" @view="view" />
    </div>
  </div>
</template>
