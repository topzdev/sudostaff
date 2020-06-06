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
      <v-icon class="mr-2" @click="viewItem(item.id)">mdi-eye</v-icon>
      <v-icon @click="deleteItem(item.id)">mdi-delete</v-icon>
    </template>

    <template v-slot:item.birthDate="{item}">{{dayjs(item.birthDate).format('MMMM DD, YYYY')}}</template>
  </v-data-table>
</template>

<script>
import TableModalMixin from "@/mixins/TableModalMixin";
export default {
  mixins: [TableModalMixin],
  data() {
    return {
      config: {
        title: "Delete Children Information",
        store: {
          name: "children",
          delete: "children/deleteChildren",
          list: "children/fetchChildrens",
          current: "children/fetchSingleChildren"
        },
        modal: "modal/showChildren"
      },
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
  }
};
</script>

<style>
</style>