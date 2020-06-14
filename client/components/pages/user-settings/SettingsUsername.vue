<template>
  <v-card outlined class="settings-card">
    <v-card-title>Manage Username</v-card-title>
    <v-card-subtitle>Change account username.</v-card-subtitle>
    <v-card-text class="px-2 pb-0">
      <v-list>
        <v-list-item>
          <v-row>
            <v-col cols="6" class="body-1">Username</v-col>
            <v-col cols="6">{{$auth.user.username}}</v-col>
          </v-row>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-row>
            <v-col cols="6" class="body-1">Employee ID</v-col>
            <v-col cols="6">
              {{$auth.user.employeeId}}
              <i>(Alternative)</i>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card-text>
    <base-card-actions to="/user/settings/change-username">Change Username</base-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>