<template>
  <v-list-item v-if="personId" class="px-0 pl-3">
    <v-list-item-avatar size="30px">
      <base-image v-if="person.photo" :src="person.photo.photoUrl" />
      <base-image v-else />
    </v-list-item-avatar>

    <v-list-item-content class="py-0">
      <v-list-item-subtitle style="font-size:12px;">{{statusText}}</v-list-item-subtitle>
      <v-list-item-title style="font-size:14px;">{{person.fullName}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import LeaveRequestUtils from "@/mixins/utils/LeaveRequestUtils";

export default {
  mixins: [LeaveRequestUtils],
  props: {
    personId: {
      type: String
    },

    person: {
      type: Object
    },

    status: String
  }
};
</script>

<style>
</style>