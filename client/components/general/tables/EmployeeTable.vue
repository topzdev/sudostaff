<template>
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

      <template v-slot:item.isActive="{ item }">
        <v-chip
          v-if="item.isActive"
          color="success lighten-5 success--text font-weight-bold"
          >Active</v-chip
        >
        <v-chip v-else color="error lighten-5 error--text font-weight-bold"
          >Inactive</v-chip
        >
      </template>

      <template v-slot:item.isActive="{ item }">
        <v-chip
          v-if="item.isActive"
          color="success lighten-5 success--text font-weight-bold"
          >Active</v-chip
        >
        <v-chip v-else color="error lighten-5 error--text font-weight-bold"
          >Inactive</v-chip
        >
      </template>

      <template v-slot:item.photo="{ item }">
        <v-avatar size="40px">
          <base-image v-if="item.photo.photoUrl" :src="item.photo.photoUrl" />
          <base-image v-else />
        </v-avatar>
      </template>
      <template v-slot:item.designation="{ item }">
        <span v-if="item.designation">
          {{ item.designation.name }}
        </span>
      </template>
      <template v-slot:item.department="{ item }">
        <span v-if="item.designation && item.designation.department.name">
          {{ item.designation.department.name }}
        </span>
      </template>
    </v-data-table>
  </v-card>
</template>


<script>
import debounce from "debounce";

export default {
  props: {
    search: String,
  },
  data() {
    return {
      queryParams: {},
      loading: false,
      pagination: {
        page: 0,
        itemsPerPage: 5,
      },
      dispatch: "employee/fetchEmployees",
      store: "employee",
      queryParams: {
        include: ["fullName", "firstName", "lastName", "isActive"],
        withPhoto: true,
        withDesignation: true,
        withAccount: true,
      },

      headers: [
        {
          text: "",
          value: "photo",
          width: "50px",
        },
        {
          text: "Employee Id",
          value: "id",
        },
        {
          text: "Name",
          value: "fullName",
        },
        {
          text: "Designation",
          value: "designation",
        },
        {
          text: "Department",
          value: "department",
        },
        {
          text: "Status",
          value: "isActive",
          align: "center",
        },
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
  computed: {
    list() {
      return this.$store.state[this.store].list;
    },
  },

  methods: {
    // searchText(text) {
    //   this.search = text;
    //   this.fetchEmployeeTable();
    // },
    editItem(id) {
      this.$router.push(this.store + "/update/" + id);
    },
    fetchEmployeeTable: debounce(async function () {
      const self = this;
      this.loading = true;
      const { itemsPerPage, page } = this.pagination;
      console.log(this.search);
      await self.$store.dispatch(self.dispatch, {
        searchBy: "fullName",
        searchText: self.search,
        limit: itemsPerPage,
        offset: page ? (page - 1) * itemsPerPage : undefined,
        ...self.queryParams,
      });
      console.log("Table Loaded..");
      self.loading = false;
      console.log(this.list);
    }, 500),
  },
  watch: {
    pagination: {
      handler() {
        this.fetchEmployeeTable();
      },
      deep: true,
    },
    search() {
      this.fetchEmployeeTable();
    },
  },

  async fetch() {
    this.fetchEmployeeTable();
  },
};
</script>

<style>
</style>