<template>
  <v-data-table
    :headers="headers"
    :items="list"
    hide-default-footer
    :loading="loading"
    :no-data-text="noDataText"
    item-key="id"
    class="elevation-1"
    sort-by="licenseTitle"
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
        title: "Delete Civil Eligibilty Info.",
        store: {
          name: "civilEligibility",
          delete: "civilEligibility/deleteCivilEligibility",
          list: "civilEligibility/fetchCivilEligibility",
          current: "civilEligibility/fetchSingleCivilEligibility"
        },
        modal: "modal/showCivilEligibility"
      },
      noDataText: "No Civil Eligibilies info.",
      headers: [
        {
          text: "License Title",
          value: "licenseTitle"
        },
        {
          text: "License Number",
          value: "licenseNumber"
        },
        {
          text: "Validity Date",
          value: "validityDate"
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


































