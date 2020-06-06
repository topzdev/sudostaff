<template>
  <v-data-table
    :headers="headers"
    :items="list"
    hide-default-footer
    :loading="loading"
    :no-data-text="noDataText"
    item-key="id"
    class="elevation-1"
    sort-by="title"
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
import TableModalMixin from "@/mixins/TableModalMixin";
export default {
  mixins: [TableModalMixin],
  data() {
    return {
      config: {
        title: "Delete Training Program Info.",
        store: {
          name: "trainingProgram",
          delete: "trainingProgram/deleteTrainingProgram",
          list: "trainingProgram/fetchTrainingProgram",
          current: "trainingProgram/fetchSingleTrainingProgram"
        },
        modal: "modal/showTrainingProg"
      },
      noDataText: "No Training Program info.",
      headers: [
        {
          text: "Title",
          value: "title"
        },

        {
          text: "Type",
          value: "type"
        },
        {
          text: "Total Hours",
          value: "totalHours"
        },
        {
          text: "Sponsor",
          value: "sponsor"
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