<template>
  <div class="d-flex align-center">
    <v-autocomplete
      :value="value"
      @input="$emit('input', $event)"
      :items="parsedList"
      outlined
      chips
      :label="label"
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
          @click:close="remove"
          large
        >
          <v-avatar left size="50">
            <base-image
              v-if="data.item.photo"
              :src="data.item.photo.photoUrl"
            />
            <base-image v-else />
          </v-avatar>
          <div>
            <div class="body-1">{{ data.item.fullName }}</div>
            <span class="caption">({{ data.item.id }})</span>
          </div>
        </v-chip>
      </template>
      <template v-slot:item="data">
        <template v-if="typeof data.item !== 'object'">
          <v-list-item-content v-text="data.item"></v-list-item-content>
        </template>
        <template v-else>
          <employee-template :employee="data.item" />
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
    defaultValue: Object,
  },
  data() {
    return {
      search: null,
      loading: false,
      employee: [],
      emptyPhoto: require("@/assets/img/no-photo.png"),
    };
  },

  computed: {
    parseDefault() {
      return this.defaultValue ? this.defaultValue.employee : null;
    },

    parsedList() {
      if (this.parseDefault) {
        const newList = this.employee.filter(
          (item) => item.id !== this.parseDefault.id
        );
        return [this.parseDefault, ...newList];
      }

      return this.employee;
    },
  },

  watch: {
    search: {
      handler() {
        this.fetchEmployee();
      },
      deep: true,
    },
  },
  methods: {
    remove() {
      this.$emit("input", null);
    },
    async fetchEmployee() {
      const self = this;
      self.loading = true;

      await setTimeout(async () => {
        const result = await employeeServices.getAll({
          searchText: self.search,
          searchBy: "fullName",
          limit: 6,
          include: ["firstName", "middleName", "lastName", "fullName"],
          withPhoto: true,
        });
        self.employee = result.data.rows;
        self.loading = false;
      }, 1000);
    },
  },
  created() {
    this.fetchEmployee();
  },
};
</script>

<style>
.v-chip .v-avatar {
  height: 40px !important;
  width: 40px !important;
}
</style>