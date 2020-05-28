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
      ],
      data: [
        {
          id: 1,
          employeeId: 1,
          title: "Hello,World",
          from: "2020-05-28",
          to: "2020-05-28",
          totalHours: 24,
          type: "Programming",
          sponsor: "Microsoft"
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