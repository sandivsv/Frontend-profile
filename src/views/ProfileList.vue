<template>
  <div>
    <h3 style="margin-bottom: 40px;">All Profile List</h3>
    <div v-if="message" class="alert alert-success">
      {{ this.message }}</div>
    <div class="card-comp" v-if="profiles.length > 0">
      <div class="card" style="width: 20rem;" v-for="profile in profiles" :key="profile._id">
        <div class="card-body">
          <h4 class="card-title">Name: {{ profile.name }} </h4>
          <h4 class="card-title">Comapny Name: {{ profile.company }} </h4>
          <h4 class="card-title">Job: {{ profile.job }} </h4>
          <h4 class="card-title">Salary: {{ profile.salary }} </h4>
          <div>
            <button class="btn btn-warning" 
            v-on:click="updateProfile(profile._id)">
              Update
            </button>

            <button class="btn btn-danger" 
            v-on:click="deleteProfile(profile._id)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else> <h5>Field is Empty You can add</h5></div>
    <div>
        <button class="btn btn-success" 
        v-on:click="createProfile()">Add</button>
    </div>
  </div>
</template>
<script>
import ProfileData from "../service/ProfileData";

export default {
  name: "ProfileList",
  data() {
    return {
      profiles: [],
      message: "",
    };
  },
  methods: {
    refreshProfile() {
      ProfileData.retrieveProfile().then((res) => {
        this.profiles = res.data;
      });
    },
    createProfile() {
      this.$router.push(`/add`);
    },
    updateProfile(id) {
      this.$router.push(`/update/${id}`);
    },
    deleteProfile(id) {
      ProfileData.deleteProfile(id).then(() => {
        this.refreshProfile();
      });
    },
  },
  created() {
    this.refreshProfile();
  },
};
</script>



<style scoped>
.card-comp{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-transform: capitalize;
}

.card{
  margin: 5px;
}
</style>