<template>
  <div>
    <v-autocomplete
      v-model="selected"
      :items="employee"
      outlined
      chips
      label="Deparment head"
      item-text="fullName"
      item-value="id"
      :loading="loading"
      :search-input.sync="search"
    >
      <template v-slot:selection="data">
        <v-chip
          v-if="data.item"
          v-bind="data.attrs"
          :input-value="data.selected"
          color="primary"
          close
          @click:close="selected = null"
          large
        >
          <v-avatar left size="50">
            <img v-if="data.item.photo" :src="data.item.photo.photoUrl" />
            <img v-else :src="emptyPhoto" />
          </v-avatar>
          {{data.item.fullName}}
        </v-chip>
      </template>
      <template v-slot:item="data">
        <template v-if="typeof data.item !== 'object'">
          <v-list-item-content v-text="data.item"></v-list-item-content>
        </template>
        <template v-else>
          <v-list-item-avatar>
            <img v-if="data.item.photo" :src="data.item.photo.photoUrl" />
            <img v-else :src="emptyPhoto" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{data.item.fullName}}</v-list-item-title>
          </v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
    {{selected}}
  </div>
</template>

<script>
import employeeServices from "@/services/Employee";
export default {
  data() {
    return {
      search: "",
      selected: null,
      loading: false,
      employee: null,
      emptyPhoto: require("@/assets/img/no-photo.png")
    };
  },

  watch: {
    search: {
      handler() {
        if (!this.selected) this.fetchEmployee();
      },
      deep: true
    }
  },
  methods: {
    async fetchEmployee() {
      this.loading = true;
      const result = await employeeServices.getAll({
        searchText: this.search,
        searchBy: "fullName",
        limit: 6,
        include: ["firstName", "middleName", "lastName", "fullName"],
        withPhoto: true
      });
      this.employee = result.data;
      console.log(this.employee);
      this.loading = false;
    }
  },
  mounted() {
    this.fetchEmployee();
  }
};
</script>

<style>
.v-chip .v-avatar {
  height: 40px !important   ;
  width: 40px !important;
}
</style>