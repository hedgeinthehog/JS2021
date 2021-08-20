<template>
    <div class="page-container">
        <Header />

        <div class="form-container">

            <!-- Login component has event called 'submit' (see in component)
            When this event is triggered the printReturnedStuff method is called -->
            <Login 
                :title="formState.title"
                :buttonText="formState.button"
                @submit="printReturnedStuff"
            /> 

            <p>{{ formReturnData }}</p>
            <button @click="toggleFormState()" >Toggle Form State</button>
        </div>

        <div class="article-container">


            <Article 
                class="article"
                v-for="article in articles" :key="`article-${article.title}`"
                :title="article.title"
                :img="article.img"
            />

        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Article from './components/Article.vue'
import Login from './components/Login.vue'

export default {
    name: 'App',
    components: {
        Header,
        Article,
        Login
    },
    data() {
        return {
            articles: [
                  {title: "Bask in the glory of this drawing", img: "https://artprojectsforkids.org/wp-content/uploads/2020/05/Duck-Crayon-768x593.jpg"},
                  {title: "Greatest duck ever!", img: "https://i.pinimg.com/originals/42/27/02/4227022caa6e5510fe15e27f32736125.jpg"},
                  {title: "Ducks getting into bath tub streaming trend", img: "https://image.made-in-china.com/2f0j00jEbYAZmzAhuH/Handmade-Wall-Art-Duck-Oil-Paintings-for-Home-Decoration.jpg"}
            ],
            formState: {},
            formStates: {
                login: { title:"Login Form", button:"Log in" },
                register: { title:"Register Form", button:"Register" }
            },
            formReturnData: {}
        }
    },
    methods: {
        printReturnedStuff(data){
            this.formReturnData = data
        },
        toggleFormState(){
            this.formState = (this.formState == this.formStates.login) ? this.formStates.register : this.formStates.login
        }
    },
    mounted() {
        this.formState = this.formStates.login
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.article-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
}

.article {
    margin: 5px;
}

.form-container {
    width: 16rem;

    display: inline-block;
}

.page-container {
    text-align: center;
}



</style>
