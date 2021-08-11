<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h2>News</h2>
    <div v-for="newsArticle in newsArticles" :key="`article-${newsArticle}`">
      <hr>
      <h4> {{ newsArticle.title }} </h4>
      <p> {{ newsArticle.article }} </p>
    </div>
    <hr>
    <div>
      <h4>Add new article:</h4>
      <input v-model="newArticle.title" placeholder="Article Title"/><br>
      <textarea v-model="newArticle.article" placeholder="Write your article here"/><br>
      <button
        v-if="newArticle.article && newArticle.title" 
        @click="addArticle()"
      >Add Article</button>
      <label v-else>Article and title cannot be empty</label>
    </div>
  </div>
</template>

<script>
import DataManager from '../DataManager.js'
let dataManager = new DataManager()

export default {
  data() {
    return {
      newsArticles: [],
      newArticle: {title: '', article: ''}
    }
  },
  methods: {
    addArticle() {
      this.newsArticles.push(Object.assign({}, this.newArticle))
      dataManager.saveNewsArticleList(this.newsArticles)
    }
  },
  mounted() {
    this.newsArticles = dataManager.getNewsArticleList()
  }
}
</script>

<style>
textarea{
  width: 80%;
  max-width: 500px;
  margin-top: 10px;
}

input{
  width: 80%;
  max-width: 500px;
}
</style>
