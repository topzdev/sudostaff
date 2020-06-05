<template>
  <v-data-table
    :headers="headers"
    :items="list"
    hide-default-footer
    :loading="loading"
    :no-data-text="noDataText"
    item-key="id"
    class="elevation-1"
    sort-by="fullName"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon class="mr-2" @click="viewItem(item)">mdi-eye</v-icon>
      <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
    </template>

    <template v-slot:item.birthDate="{item}">{{dayjs(item.birthDate).format('MMMM DD, YYYY')}}</template>
  </v-data-table>
</template>

<script>
import dayjs from "dayjs";
import types from "@/store/types";
export default {
  data() {
    return {
      loading: false,
      noDataText: "No Children Informations",
      headers: [
        {
          text: "Children Name",
          value: "fullName"
        },
        {
          text: "Birth Date",
          value: "birthDate"
        },
        { text: "Actions", align: "center", value: "actions", sortable: false }
      ]
    };
  },

  methods: {
    dayjs,
    async fetchList() {
      this.loading = true;
      await this.$store.dispatch("children/fetchChildrens");
      this.loading = false;
    },
    async deleteItem(item) {
      const self = this;
      this.$store.commit("modal/" + types.SET_MESSAGE_MODAL, {
        title: "Delete Children Information",
        show: true,
        message: `Are you sure to delete this product ${item.fullName}?`,
        isQuestion: true,
        async yesFunction() {
          self.loading = true;
          await self.$store.dispatch("children/deleteChildren", item.id);
          self.loading = false;
        }
      });
    },
    async viewItem(item) {
      this.loading = true;
      await this.$store.dispatch("children/fetchSingleChildren", item.id);
      this.$store.commit("modal/showChildren", true);
      this.loading = false;
    }
  },

  computed: {
    list() {
      return this.$store.state.children.list;
    }
  },

  async created() {
    await this.fetchList();
    console.log("hello children info", this.list);
  }
};
</script>

<style>
</style>