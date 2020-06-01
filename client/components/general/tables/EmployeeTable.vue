<template>
  <div>
    <v-card outlined>
      <v-simple-table height="430px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Employee Number</th>
              <th class="text-left">Name</th>
              <th class="text-left">Department</th>
              <th class="text-left">Designation</th>
              <th class="text-left">Status</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in employees" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.departmentName }}</td>
              <td>{{ item.designationName }}</td>
              <td>
                <v-chip
                  v-if="item.isActive"
                  color="success lighten-5 success--text font-weight-bold"
                >Active</v-chip>
                <v-chip v-else color="error lighten-5 error--text font-weight-bold">Inactive</v-chip>
              </td>
              <td>
                <v-btn rounded icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
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
          text: "Employee Id",
          value: "id"
        },
        {
          text: "Name",
          value: "id"
        }
      ],
      employees: [
        {
          id: "EMP-001-01",
          name: "Christopher Lugod",
          departmentName: "Information Department",
          designationName: "Senior Web Developer",
          isActive: true
        },
        {
          id: "EMP-001-02",
          name: "John Doe",
          departmentName: "Human Resources Department",
          designationName: "Head",
          isActive: false
        }
      ]
    };
  }
};
</script>

<style>
</style>