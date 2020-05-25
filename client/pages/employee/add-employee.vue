<template>
  <v-container class="py-0">
    <create-employee-form>
      <v-card flat class="align-center">
        <v-row>
          <v-col class="py-0">
            <v-card-title class="display-1 font-weight-medium">Create Employee</v-card-title>
            <v-card-subtitle>Add basic information for employee</v-card-subtitle>
          </v-col>
        </v-row>

        <v-card-text class="py-0">
          <v-row>
            <v-col cols="8">
              <v-row>
                <v-col cols="12">
                  <employee-info-card />
                </v-col>

                <v-col cols="12">
                  <personal-info-card />
                </v-col>

                <!-- <v-col cols="12">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" large text>Cancel</v-btn>
                  <v-btn color="primary" large width="200">Save</v-btn>
                </v-card-actions>
                </v-col>-->
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row>
                <v-col cols="12">
                  <photo-info-card />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </create-employee-form>
  </v-container>
</template>

<script>
export default {};
</script>

<style >
</style>