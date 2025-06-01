// Utilities
import {defineStore} from 'pinia'

export interface stats {
  id: string;
  icon: string;
  value: string;
  label: string;
  progress: number;
  gradient: string;
}

export interface quickAction {
  id: string;
  icon: string;
  text: string,
}

export interface menuSections {
  title: string;
  items: { id: string; icon: string; text: string , url: string}[]
}

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebarOpen: ref(false),
    activeMenuItem: ref('dashboard'),
    isMobile: ref(false),
    quickActions: ref<quickAction[]>([
      {id: 'create-folder', icon: 'folder-plus', text: 'Create New Folder'},
      {id: 'create-database', icon: 'database', text: 'Create Database'},
      {id: 'add-email', icon: 'envelope-open', text: 'Add Email Account'},
      {id: 'create-subdomain', icon: 'globe', text: 'Create Subdomain'},
      {id: 'install-ssl', icon: 'shield-alt', text: 'Install SSL Certificate'},
      {id: 'backup-files', icon: 'download', text: 'Backup Files'},
    ]),
    menuSections: ref<menuSections[]>([
      {
        title: 'General',
        items: [
          {id: 'dashboard', icon: 'tachometer-alt', text: 'Dashboard', url: '/'},
          {id: 'statistics', icon: 'chart-bar', text: 'User', url: '/user'},
        ],
      },
      // {
      //   title: 'Files',
      //   items: [
      //     {id: 'file-manager', icon: 'folder', text: 'File Manager'},
      //     {id: 'upload', icon: 'upload', text: 'Upload Files'},
      //     {id: 'backup', icon: 'archive', text: 'Backup'},
      //   ],
      // },
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
