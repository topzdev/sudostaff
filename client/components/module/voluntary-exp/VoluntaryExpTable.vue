<template>
  <v-data-table
    :headers="headers"
    :items="list"
    hide-default-footer
    :loading="loading"
    :no-data-text="noDataText"
    item-key="id"
    class="elevation-1"
    sort-by="company"
  >
    <template v-slot:item.totalHours="{item}">{{totalHourFormat(item.totalHours)}}</template>
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
        title: "Delete Voluntary Info?",
        store: {
          name: "voluntaryOrg",
          delete: "voluntaryOrg/deleteVoluntaryOrg",
          list: "voluntaryOrg/fetchVoluntaryOrg",
          current: "voluntaryOrg/fetchSingleVoluntaryOrg"
        },
        modal: "modal/showVoluntaryExp"
      },
      noDataText: "No Voluntary Exp/Org info.",
      headers: [
        {
          text: "Company",
          value: "company"
        },

        {
          text: "Position",
          value: "position"
        },
        {
          text: "Total Hours",
          value: "totalHours"
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
  },

  methods: {
    totalHourFormat(number) {
      const hour = parseFloat(number);
      return hour > 1 ? hour + " hrs" : hour + "hr";
    }
  }
};
</script>

<style>
</style>