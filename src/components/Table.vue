<script setup lang="ts">
import { format } from 'date-fns'
const emit = defineEmits(['view', 'delete', 'edit']);

const props = defineProps({
  headers:  {
    type: Object,
    required: false, // This makes it optional
    default: null // Default to null if not provided
  },
  tableData:  {
    type: Object,
    required: false, // This makes it optional
    default: null // Default to null if not provided
  },
  option: {
    type: Object,
    default: null,
  }

});

  const view = (id: number) => {
    emit('view', id);
  }

const deleteAc = (id: string) => {
  emit('delete', id);
}

const update = (id: string) => {
  emit('edit', id);
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return format(date, 'dd-MM-yyyy') // e.g., "2025-06-30"
}

</script>

<template>
  <v-data-table
    class="custom-table"
    :headers="props.headers"
    :items="props.tableData"
  >

    <template #item.isActive="{ item }">
      {{ item.isActive ? 'Active' : 'Inactive' }}
    </template>

    <template #item.createdAt="{ item }">
      {{ formatDate( item.createdAt )  }}
    </template>

    <template #item.action="{ item }">
      <div class="d-flex ga-1 flex justify-end ">
        <v-btn v-if="props.option.view === true"
          color="info"
          icon="mdi-eye"
          size="small"
          variant="text"
          @click="view(item.id)"
        ></v-btn>

        <v-btn v-if="props.option.edit === true"
               color="error"
               icon="mdi-pencil"
               size="small"
               variant="text"
               @click="update(item.id)"
        ></v-btn>

        <v-btn v-if="props.option.delete === true"
          color="error"
          icon="mdi-delete"
          size="small"
          variant="text"
          @click="deleteAc(item.id)"
        ></v-btn>
      </div>

    </template>

  </v-data-table>
</template>

<style scoped lang="scss">
.custom-table  {
  border-radius: 12px;
  overflow: hidden;

  thead {
    background: white !important;
  }
}

.custom-table :deep(.v-data-table__th) {
background: white !important;
  border-top: 1px solid gainsboro;
}

.custom-table :deep(.v-data-table__td) {
  padding: 12px 16px;
}

.custom-table :deep(.v-data-table__tr) {
  background: white !important;
}

.custom-table :deep(.v-btn) {
  text-transform: none;
  font-weight: 500;
}


/* Action column styling */
.custom-table :deep(td:last-child) {
  text-align: center;
  width: 150px;
}


</style>






