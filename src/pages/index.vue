<script setup lang="ts">
import {useAppStore} from "@/stores/app.ts";

const  store = useAppStore();
</script>
<template>
  <div class="dashboard-header">
    <h1>Dashboard</h1>
    <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
  </div>

  <div class="stats-grid">
    <div
      class="stat-card"
      v-for="stat in store.stats"
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
      <Table />
    </div>
  </div>
</template>
