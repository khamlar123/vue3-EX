<script setup lang="ts">
import {useRoleStore} from "@/stores/role.ts";
const store = useRoleStore()
const sleId = ref<number>(0);
const select = (id: number) => {
  sleId.value = id;
  store.selectRole =  store.roleList.find(f=> f.id === id);
}
</script>

<template>
  <div class="dashboard-header">
    <h1>Role</h1>
    <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
  </div>

  <div class="quick-actions">
    <div class="role-wrapper">
      <div class="role">
        <table>
          <thead>
          <tr>
            <th>role</th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="item in store.roleList"
            :key="item.id"
            class="cr"
            :class="{ active: item.id === sleId }"
            @click="select(item.id)"
          >
            <td>{{ item.name }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div v-if=" store.selectRole" class="permission">
        <table>
          <thead>
          <tr>
            <th class="page">Permission</th>
            <th class="action"></th>
          </tr>
          </thead>
          <tbody>

          <tr v-for="role in store.selectRole.permissions" :key="role.name">
            <td class="page">{{ role.name }}</td>
            <td v-for="p in role.permission" :key="p.name" class="action">
              <div class="item">
                <label class="name" :for="role.id + p.name" >{{ p.name }}</label>
                <label class="toggle-switch">
                  <input :id="role.id + p.name" :checked="p.value"  type="checkbox"  />
                  <span class="slider"></span>
                </label>
              </div>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.role-wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 300px;

  .role {
    .cr {
      cursor: pointer;
    }

    .active {
      background: #ff5574;

      td {
        color: white;
      }
    }
  }

  .permission {
    padding: 0 0 0 1rem;

    .page {
      width: 100%;

    }

    .action {

      display: flex;
      .item {
        //display: flex;
        //align-items: center;
        //margin-bottom: 0.5rem;
        //flex-direction: column;
        display: flex;
        border: none;
        .name {
          width: 60px;
          cursor: pointer;
        }

        .sub-role{
         margin-bottom: 0.5rem;
          display: flex;
        }

      }
    }


    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;

      input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        border-radius: 34px;
        transition: 0.3s;

        &::before {
          content: "";
          position: absolute;
          height: 19px;
          width: 18px;
          left: 0px;
          bottom: 1px;
          background-color: white;
          border-radius: 50%;
          transition: 0.3s;
        }
      }

      input:checked + .slider {
        background-color: #42b883;
      }

      input:checked + .slider::before {
        transform: translateX(22px);
      }
    }

  }
}
</style>
