<template>
  <v-card :outlined="outlined" :flat="true">
    <v-card-text>
      <v-row>
        <v-col class="py-0 pb-2" cols="12">
          <v-text-field
            label="Current Password"
            placeholder="Enter your current password"
            :value="currentPassword"
            @input="$emit('update:currentPassword', $event)"
            outlined
            type="password"
            :rules="rules.currentPassword"
          ></v-text-field>
        </v-col>
        <v-col class="py-0">
          <v-divider class="py-0 pb-5" />
        </v-col>
        <v-col class="py-0 pb-2" cols="12">
          <v-text-field
            label="New Password"
            placeholder="Enter your new password"
            :value="newPassword"
            @input="$emit('update:newPassword', $event)"
            outlined
            type="password"
            :rules="rules.newPassword"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-2" cols="12">
          <v-text-field
            label="Confirm Password"
            placeholder="Confirm your enterted password"
            :value="confirmPassword"
            @input="$emit('update:confirmPassword', $event)"
            outlined
            type="password"
            :rules="rules.confirmPassword"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  mixins: [CardMixin],
  props: ["currentPassword", "newPassword", "confirmPassword"]
};
</script>

<style>
</style>