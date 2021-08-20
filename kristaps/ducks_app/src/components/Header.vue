/*
hedaer contents:
logo
nav
plus button
user button
*/

<template>
  <header>
    <!-- comment -->
    <img alt="Vue logo" src="@/assets/logo.jpg" />
    <ul>
      <li><a href="/" target="">Home</a></li>
      <li><a href="/" target="">Home</a></li>
    </ul>

    <button>+</button>
    <button
    @click="dropdownClick()"
    >•</button>
        <Dropdown 
        v-if="showDropdown"
        :options="options"
        />
  </header>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'
export default {
  name: "Header",
  props: {},
  components: {
    Dropdown,
  },
  data() {
      return {
        options: [
            {name:"My posts", link:"/"},
            {name:"Login / Register", link:"/"}
        ],
        showDropdown: false
      }

  },
  methods: {
      dropdownClick() {
          this.showDropdown = !this.showDropdown
      }
  }
};
</script>

<style scoped>
header {
  display: flex;
  color: tomato;
  padding: 5px;

  border: 1px solid darkblue;
}

ul {
  flex: 1;
  list-style-type: none;
  border: 1px solid darkred;
}

li {
  float: left;
}

img {
  width: 4rem;
  height: 4rem;
}
</style>