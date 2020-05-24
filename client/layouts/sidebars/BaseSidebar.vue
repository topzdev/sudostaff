<template>
  <div>
    <v-navigation-drawer permanent app width="300px"></v-navigation-drawer>
    <v-navigation-drawer permanent fixed width="300px">
      <v-list nav shaped class="pl-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          color="primary"
          :to="item.to"
          class="mb-0 pl-4"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/dashboard" },
        { title: "Employee", icon: "mdi-account-multiple", to: "/employee" },
        {
          title: "Departments",
          icon: "mdi-account-box-multiple",
          to: "/departments"
        },
        {
          title: "Designation",
          icon: "mdi-clipboard-account",
          to: "/designation"
        },
        { title: "Mail", icon: "mdi-account-group", to: "/mail" },
        { title: "About", icon: "mdi-help-box", to: "/about" }
      ]
    };
  }
};
</script>

<style>
.v-navigation-drawer__border {
  display: none;
}
.v-navigation-drawer--fixed {
  z-index: 1;
}
</style>