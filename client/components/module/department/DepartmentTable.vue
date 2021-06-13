<template>
  <v-card outlined>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :page.sync="pagination.page"
      :items-per-page.sync="pagination.itemsPerPage"
      :server-items-length="list.count"
      :items="list.rows"
      sort-by="name"
      item-key="id"
      fixed-header
      height="430px"
    >
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom color="warning">
          <template v-slot:activator="{ on }">
            <v-icon @click="editItem(item.id)" v-on="on">mdi-pencil</v-icon>
          </template>
          <span>Edit</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import TableMixin from "@/mixins/TableMixin";
export default {
  mixins: [TableMixin],
  data() {
    return {
      dispatch: "department/fetchDepartments",
      store: "department",
      headers: [
        {
          text: "Department Name",
          value: "name",
        },
        {
          text: "Description",
          value: "description",
        },
        // {
        //   text: "Department Head",
        //   value: "departmentHead.employee.fullName"
        // },
        {
          text: "Actions",
          width: "120px",
          align: "center",
          value: "actions",
          sortable: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>