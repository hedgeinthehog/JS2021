<template>
  <div class="about">
    <h1>Using component in another page</h1>

    <car
        brand="Kristaps Motors"
        model="Lightning"
        color="white"
        year="2030"
        engineType="Electric"
        odometer="0"
        ></car>
  </div>
</template>

<script>
import Car from "@/components/Car.vue";

export default {
  components: {
    Car,
  }
}
</script>