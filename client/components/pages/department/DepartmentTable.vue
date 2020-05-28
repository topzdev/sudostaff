<template>
  <div>
    <v-card outlined>
      <v-data-table
        :headers="headers"
        :items="data"
        hide-default-footer
        item-key="id"
        sort-by="name"
        height="430px"
      >
        <template v-slot:item.actions="{ item }">
          <v-tooltip bottom color="warning">
            <template v-slot:activator="{ on }">
              <v-icon @click="viewItem(item)" v-on="on">mdi-pencil</v-icon>
            </template>
            <span>Edit</span>
          </v-tooltip>
        </template>
      </v-data-table>
      <v-card-actions>
        <v-row>
          <v-col></v-col>
          <v-col class="d-flex justify-end">
            <v-pagination
              v-model="page"
              :length="6"
              class="ml-auto d-flex-inline"
              style="width: auto"
            ></v-pagination>
            <v-select :items="rows" label="Select Rows" hide-details filled dense solo></v-select>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      rows: [5, 10, 20, 25],
      headers: [
        {
          text: "Department Name",
          value: "name"
        },
        {
          text: "Description",
          value: "description"
        },
        {
          text: "Department Head",
          value: "headName"
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
          name: "Information Technology",
          description: "When the technology happens.",
          headName: "Christopher Lugod"
        },
        {
          id: 2,
          name: "Human Resources",
          description: "Manage employee in a company.",
          headName: "John Doe"
        }
      ]
    };
  }
};
</script>

<style>
</style>