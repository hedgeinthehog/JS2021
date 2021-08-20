<template>
    <div>
        <h2>{{ title }}</h2>
        <input v-model="username" type="text"/> 
        <input v-model="password" type="password">

        <!-- when user clicks submit button then submitButtonPressed() will be called and it will emit the event -->
        <button @click="submitButtonPressed()" >{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: {
        title: String,
        buttonText: String,
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        submitButtonPressed() {
            // first parameter is event name
            // second parameter is object of data returned from this form
            this.$emit(
                'submit', 
                { username: this.username, password: this.password }
                )
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
}
</style>