<template>
  <div v-if="show">
    <v-navigation-drawer v-model="show" :permanent="show" app width="300px"></v-navigation-drawer>
    <v-navigation-drawer v-model="show" :permanent="show" fixed width="300px">
      <v-list shaped class="pl-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <template v-for="item in items">
          <v-list-item
            link
            color="primary"
            :to="item.to"
            v-if="!item.subItem"
            class="mb-0 pl-4"
            :key="item.title"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- If has a sub item then render this -->

          <v-list-group
            v-else
            :to="item.to"
            :prepend-icon="item.icon"
            value="true"
            :key="item.title"
            class="custom-sub-group mb-0"
          >
            <template v-slot:activator>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </template>

            <v-list-item
              v-for="(subItem, i) in item.subItem"
              :key="i"
              link
              :to="subItem.to"
              color="blue"
            >
              <v-list-item-icon>
                <v-icon v-text="subItem.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
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
        {
          title: "User",
          to: "/user/your-info",
          icon: "mdi-account-circle",
          subItem: [
            {
              title: "Your Info",
              to: "/user/your-info",
              icon: "mdi-card-account-details-outline"
            },
            {
              title: "Leave Request",
              to: "/user/leave-request",
              icon: "mdi-account-arrow-right-outline"
            },
            {
              title: "Account Setting",
              to: "/user/settings",
              icon: "mdi-shield-account-outline"
            }
          ]
        },

        { title: "Employee", icon: "mdi-account-multiple", to: "/employee" },
        {
          title: "Department",
          icon: "mdi-account-box-multiple",
          to: "/department"
        },
        {
          title: "Designation",
          icon: "mdi-clipboard-account",
          to: "/designation"
        },
        {
          title: "Leave Request",
          to: "/leave-request",
          icon: "mdi-account-arrow-right-outline"
        },
        { title: "Mail", icon: "mdi-account-group", to: "/mail" },
        { title: "About", icon: "mdi-help-box", to: "/about" }
      ]
    };
  },
  computed: {
    show: {
      get() {
        return this.$auth.loggedIn;
      },

      set(value) {
        console.log(value);
      }
    }
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

.custom-sub-group {
  padding-left: 0;
}

.custom-sub-group .v-list-group__header {
  padding-left: 16px;
}

.custom-sub-group .v-list-group__items {
  /* background: #f5fbff; */
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
}
.custom-sub-group .v-list-group__items .v-list-item {
  padding-left: 40px !important;
}

.theme--dark .v-navigation-drawer {
  background-color: #121212 !important;
}

.theme--dark .v-navigation-drawer__border {
  display: block !important;
}
</style>