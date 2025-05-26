<script setup lang="ts">
  const router = useRouter()
  const login = () => {
    localStorage.setItem('authToken', 'abcd');
    router.push('/') // Navigate after login
}

</script>

<template>
  <h1>im login</h1>

  <v-btn prepend-icon="$vuetify" variant="tonal"  @click="login()">
    Login
  </v-btn>

</template>

<style scoped lang="sass">

</style>
