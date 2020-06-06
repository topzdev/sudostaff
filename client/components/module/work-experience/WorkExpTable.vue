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
        title: "Delete Work Experience Info.",
        store: {
          name: "workExp",
          delete: "workExp/deleteWorkExp",
          list: "workExp/fetchWorkExp",
          current: "workExp/fetchSingleWorkExp"
        },
        modal: "modal/showWorkExp"
      },
      noDataText: "No Work Experience info.",
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
          text: "Montly Salary",
          value: "monthlySalaray"
        },
        {
          text: "Actions",
          width: "120px",
          align: "center",
          value: "actions",
          sortable: false
        }
      ],
      data: [
        {
          id: 1,
          employeeId: 1,
          company: "Ardee's Venture",
          position: "Truck Driver",
          salaryGrade: "",
          stepIncrementd: "",
          monthlySalaray: 10000,
          from: 2020,
          to: 2020,
          isFullTime: true,
          isGovernmentService: true
        }
      ]
    };
  }
};
</script>

<style>
</style>