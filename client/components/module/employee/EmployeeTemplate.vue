<template>
  <div class="d-flex">
    <v-list-item-avatar>
      <base-image v-if="employee.photo" :src="employee.photo.photoUrl" />
      <base-image v-else />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{employee.fullName}}</v-list-item-title>
      <v-list-item-subtitle>{{employee.id}}</v-list-item-subtitle>
    </v-list-item-content>
  </div>
</template>

<script>
export default {
  props: ["employee"]
};
</script>

<style>
</style>