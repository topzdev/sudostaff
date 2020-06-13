<template>
  <div v-if="show">
    <v-app-bar v-model="show" flat></v-app-bar>
    <v-app-bar v-model="show" color="white" fixed elevate-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-bold">Sudostaff</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu offset-y bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-avatar size="45">
              <base-image v-if="$auth.user.photo" :src="$auth.user.photo.photoUrl" />
              <base-image v-else />
            </v-avatar>
          </v-btn>
        </template>

        <v-list width="250">
          <v-list-item to="/user/your-info">
            <employee-template :employee="$auth.user" />
          </v-list-item>
          <v-divider />
          <template v-for="item in items">
            <v-list-item v-if="item.to" :key="item.title" :to="item.to">
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
            <v-list-item v-if="item.action" :key="item.title" @click="item.action()">
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </template>
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
          to: "/user/settings"
        },
        {
          title: "Logout",
          action: () => this.$auth.logout()
        }
      ]
    };
  },
  computed: {
    show: {
      get() {
        return this.$auth.loggedIn;
      },

      set(value) {}
    },

    user() {
      return this.$auth.user;
    }
  },

  watch: {
    user() {
      if (this.user) this.$store.dispatch("frontend/showNavigationBar", true);
    }
  }
};
</script>

<style>
</style>