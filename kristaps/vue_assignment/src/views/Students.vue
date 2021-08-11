<template>
  <div class="about">
    <router-view/>
    <h2>List of Students</h2>
    <hr>
    <div v-for="student in studentsList" :key="`student-${student.id}`">
      <label @click="displayStudentData(student.id)"> {{ student.name }} {{ student.surname }} </label>
    </div>
    <hr>
    <br />
    <router-link to="/students/edit">Add Student</router-link>
  </div>
</template>

<script>
import DataManager from '../DataManager.js'
let dataManager = new DataManager()
export default {
  data() {
    return {
      studentsList: []
    }
  },
  methods: {
    displayStudentData(id) {
      this.$router.replace(`/students/${id}`);
    }
  },
  mounted() {
    this.studentsList = dataManager.getStudentsList()
  }
}
</script>