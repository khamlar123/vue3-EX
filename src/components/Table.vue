<script setup lang="ts">
const emit = defineEmits(['view', 'delete']);
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
    type: Boolean,
    default: false,
  }

});

  const view = (id: number) => {
    emit('view', id);
  }

const deleteAc = (id: number) => {
  emit('delete', id);
}


</script>

<template>
  <v-data-table
    class="custom-table"
    :headers="props.headers"
    :items="props.tableData"
  >

    <template #item.active="{ item }">
      {{ item.active ? 'Active' : 'Inactive' }}
    </template>

    <template v-if="props.option" #item.action="{ item }">
      <div class="d-flex ga-1">
        <v-btn
          color="info"
          icon="mdi-eye"
          size="small"
          variant="text"
          @click="view(item.id)"
        ></v-btn>

        <v-btn
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





