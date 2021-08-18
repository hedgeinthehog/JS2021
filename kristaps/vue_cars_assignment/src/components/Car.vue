<template>
  <div class="wrapper">
    <h3>{{ brand }}</h3>
    <h4>{{ model }}</h4>
    <div>
      <label>Color: </label>
      <label>{{ color }}</label>
      <br />

      <label>Year: </label>
      <label>{{ year }}</label>
      <br />

      <label>Engine type: </label>
      <label>{{ engineType }}</label>
      <br />

      <label>Odometer: </label>
      <label>{{ odometer }}</label>
      <br />
      <label v-if="isUsed()" class="used">Used</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: {
    brand: undefined,
    model: undefined,
    color: undefined,
    year: undefined,
    engineType: undefined,
    odometer: undefined,
  },
  methods: {
    isUsed() {
      return this.odometer > 2000;
    },
  },
};
</script>

<style scoped>
label {
  min-width: 80px;
}

h3 {
  line-height: 0px;
}

.wrapper {
  width: 250px;
  height: 210px;
  vertical-align: top;
  display: inline-block;
  margin: 10px;
  padding: 40px 10px 10px 10px;
  background: #dfdfdf;
}

.used {
    color: #aa0000;
}
</style>