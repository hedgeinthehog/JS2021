<template>
  <div class="about">
    <h2>Selected Student</h2>
    <hr />
    <label> Name: </label>
    <input v-model="student.name" class="student-input"/><br /> 
    
    <label> Surname: </label>
    <input v-model="student.surname" class="student-input"/><br />
    
    <label> Age: </label>
    <input v-model="student.age" class="student-input" type="number"/><br /><br />
    <br />
    <button @click="saveStudent()">Save</button>

    <hr />
  </div>
</template>

<script>
import DataManager from "../DataManager.js";
let dataManager = new DataManager();
export default {
  data() {
    return {
      student: {
        id: '',
        name: '',
        surname: '',
        age: ''
      },
    };
  },
  methods: {
    saveStudent() {
      if(this.$route.params.id){
        dataManager.updateStudent(this.student)
        console.log("update")
      }
      else {
        dataManager.addStudent(this.student.name, this.student.surname, this.student.age )
      }
      this.$router.go(-1)
    },
  },
  mounted() {
    if(this.$route.params.id){
      
      this.student = dataManager.getStudent(this.$route.params.id)
    }
  }
};
</script>

<style>
.student-input{
  max-width: 300px;
}
</style>