<template>
  <v-data-table
    :headers="headers"
    :items="childrens"
    hide-default-footer
    item-key="id"
    class="elevation-1"
    sort-by="fullName"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon class="mr-2" @click="viewItem(item)">mdi-pencil</v-icon>
      <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
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
      ],
      childrens: [
        {
          id: 1,
          fullName: "Christopher Lugod",
          birthDate: "May 15, 2000"
        },
        { id: 2, fullName: "Christian Lugod", birthDate: "May 17, 1997" }
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