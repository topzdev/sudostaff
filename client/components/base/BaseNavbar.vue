<template>
  <div>
    <v-app-bar flat></v-app-bar>
    <v-app-bar fixed elevate-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-bold"
        >Human Resources</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu offset-y bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-avatar size="45">
              <base-image
                v-if="employee.photo"
                :src="employee.photo.photoUrl"
              />
              <base-image v-else />
            </v-avatar>
          </v-btn>
        </template>

        <v-list width="250">
          <v-list-item to="/user/your-info">
            <employee-template :employee="employee" />
          </v-list-item>
          <v-divider />
          <template v-for="item in items">
            <v-list-item v-if="item.to" :key="item.title" :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="item.action"
              :key="item.title"
              @click="item.action()"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
          <base-theme-toggle />
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Settings",
          to: "/user/settings",
        },
        {
          title: "Logout",
          action: () => this.$auth.logout(),
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$auth.user ? this.$auth.user : null;
    },
    employee() {
      return this.user.employee;
    },
  },

  // watch: {
  //   user() {
  //     if (this.user) this.$store.dispatch("frontend/showNavigationBar", true);
  //   },
  // },
};
</script>

<style>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff !important;
}
</style>