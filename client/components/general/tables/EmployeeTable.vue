<template>
  <div>
    <v-card outlined>
      <v-data-table
        :loading="loading"
        :headers="headers"
        :page.sync="pagination.page"
        :items-per-page.sync="pagination.itemsPerPage"
        :server-items-length="list.count"
        :items="list.rows"
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

        <template v-slot:item.isActive="data">
          <v-chip v-if="data" color="success lighten-5 success--text font-weight-bold">Active</v-chip>
          <v-chip v-else color="error lighten-5 error--text font-weight-bold">Inactive</v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>


<script>
import TableMixin from "@/mixins/TableMixin";
export default {
  mixins: [TableMixin],
  data() {
    return {
      dispatch: "employee/fetchEmployees",
      store: "employee",
      queryParams: {
        include: ["fullName", "firstName", "lastName", "isActive"],
        withPhoto: true,
        withDesignation: true
      },
      headers: [
        {
          text: "Employee Id",
          value: "id"
        },
        {
          text: "Name",
          value: "fullName"
        },
        {
          text: "Designation",
          value: "designation.name"
        },
        {
          text: "Department",
          value: "designation.department.name"
        },
        {
          text: "Status",
          value: "isActive",
          align: "center"
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