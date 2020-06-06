<template>
  <v-data-table
    :headers="headers"
    :items="list"
    hide-default-footer
    :loading="loading"
    :no-data-text="noDataText"
    item-key="id"
    class="elevation-1"
    sort-by="schoolName"
  >
    <template v-slot:item.actions="{ item }">
      <v-tooltip bottom color="info">
        <template v-slot:activator="{ on }">
          <v-icon class="mr-2" @click="viewItem(item.id)" v-on="on">mdi-eye</v-icon>
        </template>
        <span>View</span>
      </v-tooltip>

      <v-tooltip bottom color="error">
        <template v-slot:activator="{ on }">
          <v-icon @click="deleteItem(item.id)" v-on="on">mdi-delete</v-icon>
        </template>
        <span>Delete</span>
      </v-tooltip>
    </template>
  </v-data-table>
</template>

<script>
import dayjs from "dayjs";
import TableModalMixin from "@/mixins/TableModalMixin";
export default {
  mixins: [TableModalMixin],
  data() {
    return {
      config: {
        title: "Delete Education Details.",
        store: {
          name: "educDetails",
          delete: "educDetails/deleteEducDetails",
          list: "educDetails/fetchEducDetails",
          current: "educDetails/fetchSingleEducDetails"
        },
        modal: "modal/showEducationDetails"
      },
      noDataText: "No Education Details",
      headers: [
        {
          text: "Level",
          value: "level"
        },
        {
          text: "School Name",
          value: "schoolName"
        },
        {
          text: "Graduated",
          value: "graduateYear"
        },

        {
          text: "Degree",
          value: "degree"
        },
        {
          text: "Actions",
          width: "120px",
          align: "center",
          value: "actions",
          sortable: false
        }
      ]
    };
  }
};
</script>

<style>
</style>