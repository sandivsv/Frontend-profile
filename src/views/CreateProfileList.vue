<template>
  <div>
    <h3>Create Profile </h3>
    <div class="container">
      <form @submit="validateAndSubmit">
        <div v-if="errors.length">
          <div
            class="alert alert-danger"
            v-bind:key="index"
            v-for="(error, index) in errors"
          >
            {{ error }}
          </div>
        </div>
        <fieldset class="form-group">
          <label> Name</label>
          <input type="text" class="form-control"
           v-model="name" />
        </fieldset>
        <fieldset class="form-group">
          <label> Company Name </label>
          <input type="text" class="form-control"
           v-model="company" />
        </fieldset>
        <fieldset class="form-group">
          <label> Job </label>
          <input type="text" class="form-control" 
          v-model="job" />
        </fieldset>
        <fieldset class="form-group">
          <label> Salary </label>
          <input type="number" class="form-control" 
          v-model="salary" />
        </fieldset>
        <button class="btn btn-success" 
        type="submit">Save</button>
        <button class="btn btn-danger" 
        type="submit"><router-link class="cancel" to="/">Cancel</router-link></button>
      </form>
    </div>
  </div>
</template>
<script>
import ProfileData from "../service/ProfileData";

export default {
  name: "CreateProfileList",
  data() {
    return {
      name: "",
      company: "",
      job: "",
      salary:"",
      errors: [],
    };
  },

  methods: {
    refreshProfilerDetails() {
      ProfileData.retrieveProfile().then((res) => {
        this.id = res.data._id;
        this.name = res.data.name;
        this.company = res.data.company;
        this.job = res.data.job;
        this.salary = res.data.salary;
      });
    },
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.name) {
        this.errors.push("Enter valid values");
      } else if (this.name.length < 4) {
        this.errors.push("Enter atleast 4 characters in First Name");
      }
      if (!this.company) {
        this.errors.push("Enter valid values");
      } else if (this.company.length < 3) {
        this.errors.push("Enter atleast 3 characters in Last Name");
      }

      if (this.errors.length === 0) {
          ProfileData.createProfile({
            name: this.name,
            company: this.company,
            job: this.job,
            salary: this.salary,
          }).then(() => {
            this.$router.push("/");
          });
      }
    },
  },
  created() {
    this.refreshProfilerDetails();
  },
};
</script>

<style Scoped>

  .container{
    width: 40%;
  }
  .btn{
    margin: 5px;
  }
  .cancel{
    color: white;
  }
  .cancel:hover{
    color: white;
    text-decoration: none;
  }

  @media screen and ((max-width: 1000px)) {
      .container{
        width: 60%;
      }
  } 

</style>