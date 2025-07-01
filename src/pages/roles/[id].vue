<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {useRoleStore} from "@/stores/role.ts";
const route = useRoute();
const router = useRouter()
const store = useRoleStore();
const roleId = route.params.id;

const roleModel =reactive(
  {
    name: '',
    isActive: false,
    permission: [],
  }
)
const create = () => {
  store.create(roleModel, router);
}



</script>

<template>
  <div class="dashboard-header">
    <h1> {{ roleId !== 'null' ? `Role Detail : ${roleId}` : `Add Role` }}</h1>
    <p class="subtitle">Welcome back! Here’s your hosting summary.</p>
  </div>

  <div class="quick-actions" >
    <div class="active">
      <h2>Role Detail</h2>
      <div class="checkbox">
        <label>Active</label>
        <input type="checkbox"  v-model="roleModel.isActive" />
      </div>
    </div>

    <div class="actions-grid">
      <div class="form-data">
        <input  placeholder="name" v-model="roleModel.name" type="text"/>
        <div class="action">
          <button v-if="route.params.id !== 'null'" @click="update" class="btn-add">Submit</button>
          <button v-else class="btn-add" @click="create">Save</button>
          <router-link to="/roles">
            <button class="btn-delete">Close</button>
          </router-link>
        </div>

      </div>

    </div>

  </div>

</template>

<style scoped lang="scss">
.active {
  display: flex;
  justify-content: space-between;

  .checkbox {
    label {
      padding-right: 10px;
    }
  }

  input {
    margin-top: -30px;
  }
}

.form-data {
  display: flex;
  flex-direction: column;

  input, select {
    margin-bottom: 1rem;
    width: 400px;
  }

  .action {
    button {
      margin-right: 0.5rem;
    }
  }
}

</style>
