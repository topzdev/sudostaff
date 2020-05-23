<template>
  <v-navigation-drawer permanent app>
    <v-list nav shaped class="py-0 pl-0">
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Employee", icon: "mdi-account-group" },
        { title: "Mail", icon: "mdi-account-group" },
        { title: "About", icon: "mdi-help-box" }
      ]
    };
  }
};
</script>

<style>
</style>