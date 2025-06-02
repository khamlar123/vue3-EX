// Utilities
import {defineStore} from 'pinia'
import type {IMenu} from "@/interfaces/i-menu.interface.ts";

export interface stats {
  id: string;
  icon: string;
  value: string;
  label: string;
  progress: number;
  gradient: string;
}

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebarOpen: ref(false),
    activeMenuItem: ref('dashboard'),
    isMobile: ref(false),
    menuSections: ref<IMenu[]>([
      {
        title: 'General',
        items: [
          {id: 'dashboard', icon: 'dashboard', text: 'Dashboard', url: '/'},
          {id: 'user', icon: 'person', text: 'User', url: '/user'},

        ],
      },
      {
        title: 'Setting',
        items: [
          {id: 'setting', icon: 'settings', text: 'Setting', url: '/setting'},
        ],
      },
    ]),
    stats: ref<stats[]>([
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
    ]),
  }),
})
