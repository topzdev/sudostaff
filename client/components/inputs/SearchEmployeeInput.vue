<template>
  <div class="d-flex align-center">
    <!-- <v-chip v-if="parseDefault" class="mr-5" color="warning" large>
      <v-avatar left size="50">
        <img v-if="parseDefault.photo" :src="parseDefault.photo.photoUrl" />
        <img v-else :src="emptyPhoto" />
      </v-avatar>
      <div>
        <div class="body-1">{{parseDefault.fullName}}</div>
        <span class="caption">
          <b>Current Head</b>
          ({{parseDefault.id}})
        </span>
      </div>
    </v-chip>-->
    <v-autocomplete
      :value="value"
      @input="$emit('input', $event)"
      :items="parsedList"
      outlined
      chips
      label="Deparment head"
      item-text="fullName"
      item-value="id"
      :loading="loading"
      :rules="rules"
      :search-input.sync="search"
    >
      <template v-slot:selection="data">
        <v-chip
          v-if="data.item"
          v-bind="data.attrs"
          :input-value="data.selected"
          color="primary"
          close
          @click:close="$emit('input', null)"
          large
        >
          <v-avatar left size="50">
            <base-image v-if="data.item.photo" :src="data.item.photo.photoUrl" />
            <base-image v-else />
          </v-avatar>
          <div>
            <div class="body-1">{{data.item.fullName}}</div>
            <span class="caption">({{data.item.id}})</span>
          </div>
        </v-chip>
      </template>
      <template v-slot:item="data">
        <template v-if="typeof data.item !== 'object'">
          <v-list-item-content v-text="data.item"></v-list-item-content>
        </template>
        <template v-else>
          <v-list-item-avatar>
            <base-image v-if="data.item.photo" :src="data.item.photo.photoUrl" />
            <base-image v-else />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{data.item.fullName}}</v-list-item-title>
            <v-list-item-subtitle>{{data.item.id}}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import employeeServices from "@/services/Employee";
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin],
  props: {
    defaultValue: Object
  },
  data() {
    return {
      search: null,
      loading: false,
      employee: [],
      emptyPhoto: require("@/assets/img/no-photo.png")
    };
  },

  computed: {
    parseDefault() {
      return this.defaultValue ? this.defaultValue.employee : null;
    },

    parsedList() {
      if (this.parseDefault) {
        const newList = this.employee.filter(
          item => item.id !== this.parseDefault.id
        );
        return [this.parseDefault, ...newList];
      }

      return this.employee;
    }
  },

  watch: {
    search: {
      handler() {
        this.fetchEmployee();
      },
      deep: true
    }
  },
  methods: {
    async fetchEmployee() {
      const self = this;
      self.loading = true;

      await setTimeout(async () => {
        const result = await employeeServices.getAll({
          searchText: self.search,
          searchBy: "fullName",
          limit: 6,
          include: ["firstName", "middleName", "lastName", "fullName"],
          withPhoto: true
        });
        self.employee = result.data.rows;
      }, 1000);
      self.loading = false;
    }
  },
  mounted() {
    this.fetchEmployee();
  }
};
</script>

<style>
.v-chip .v-avatar {
  height: 40px !important;
  width: 40px !important;
}
</style>