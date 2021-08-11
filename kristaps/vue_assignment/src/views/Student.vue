<template>
  <div class="about">
    <h2>Selected Student</h2>
    <hr />
    <label> Name: {{ student.name }} </label><br />
    <label> Surname: {{ student.surname }} </label><br />
    <label> Age: {{ student.age }} </label><br />
    <br />
    <button @click="editStudent()">Edit</button>
    <button @click="deleteStudent()">Delete</button>

    <hr />
  </div>
</template>

<script>
import DataManager from "../DataManager.js";
let dataManager = new DataManager();
export default {
  data() {
    return {
      student: {}
    };
  },
  computed: {
    studentID() {
      return this.$route.params.id;
    },
  },
  methods: {
    editStudent() {
      this.$router.push(`/students/edit/${this.studentID}`)
    },
    deleteStudent() {
      dataManager.deleteStudent(this.studentID)
      this.$router.push(`/students`)
    }
  },
  mounted() {
    this.student = dataManager.getStudent(this.studentID);
  }
};
</script>