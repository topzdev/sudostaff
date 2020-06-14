<template>
  <v-card :outlined="outlined" :flat="true">
    <v-card-text>
      <v-row>
        <v-col class="py-0" cols="12">
          <v-text-field label="Current Username" :value="$auth.user.username" outlined readonly></v-text-field>
        </v-col>
        <v-col class="py-0">
          <v-divider class="py-0 pb-5" />
        </v-col>
        <v-col class="py-0 pb-2" cols="12">
          <v-text-field
            label="New Username"
            placeholder="Enter your new username"
            :value="newUsername"
            @input="$emit('update:newUsername', $event)"
            outlined
            :rules="rules.newUsername"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 pb-2" cols="12">
          <v-text-field
            label="Password"
            :value="password"
            @input="$emit('update:password', $event)"
            outlined
            type="password"
            :rules="rules.password"
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
  props: ["newUsername", "password"]
};
</script>

<style>
</style>