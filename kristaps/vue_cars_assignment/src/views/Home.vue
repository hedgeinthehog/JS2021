<template>
  <div class="home">
    <h2>Cars List</h2>
    <div class="cars-list-wrapper">
        <car
            v-for="car in carsList" :key="car"
            :brand="car.brand"
            :model="car.model"
            :color="car.color"
            :year="car.year"
            :engineType="car.engineType"
            :odometer="car.odometer"
        ></car>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Car from "@/components/Car.vue";

export default {
  components: {
    Car,
  },
  data() {
    return {
      carsList: [
          { brand: "Tesla", model: "Roadster", color: "red", year: "2010", engineType: "Electric", odometer: 9524},
          { brand: "Tesla", model: "Model X", color: "white", year: "2015", engineType: "Electric", odometer: 0},
          { brand: "Tesla", model: "Model Y", color: "black", year: "2020", engineType: "Electric", odometer: 0},
          { brand: "Nissan", model: "Leaf", color: "white", year: "2018", engineType: "Electric", odometer: 50},
          { brand: "Ford", model: "Focus Electric", color: "black", year: "2017", engineType: "Electric", odometer: 4000},
          { brand: "Toyota", model: "Land Cruiser (J70)", color: "white", year: "1988", engineType: "ICE", odometer: 25462},
          { brand: "Nissan", model: "Micra", color: "blue", year: "2018", engineType: "ICE", odometer: 0},
          { brand: "Nissan", model: "GT-R", color: "orange", year: "2016", engineType: "ICE", odometer: 2800},
          { brand: "Subaru", model: "BRZ", color: "blue", year: "2020", engineType: "ICE", odometer: 0},
      ]
  
    }
  },
}
</script>