<template>
  <v-data-table
    :headers="headers"
    :items="data"
    hide-default-footer
    item-key="id"
    class="elevation-1"
    sort-by="fullName"
  >
    <template v-slot:item.actions="{ item }">
      <v-tooltip bottom color="info">
        <template v-slot:activator="{ on }">
          <v-icon class="mr-2" @click="viewItem(item)" v-on="on">mdi-eye</v-icon>
        </template>
        <span>View</span>
      </v-tooltip>

      <v-tooltip bottom color="error">
        <template v-slot:activator="{ on }">
          <v-icon @click="deleteItem(item)" v-on="on">mdi-delete</v-icon>
        </template>
        <span>Delete</span>
      </v-tooltip>
    </template>
  </v-data-table>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
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
      ],
      data: [
        {
          id: 1,
          employeeId: 1,
          level: "Fourth Year",
          degree: "Information Technology",
          schoolName: "Technological University of the Philippines",
          from: "2020-05-28",
          to: "2020-05-28",
          graduateYear: "2018",
          recognition: "Masteral",
          scholarship: "UNIFAST"
        }
      ]
    };
  },

  methods: {
    deleteItem(item) {
      console.log(item);
    },
    viewItem(item) {
      console.log(item);
    }
  }
};
</script>

<style>
</style>