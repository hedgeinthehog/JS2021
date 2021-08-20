<template>
    <!-- TODO: dynamically pass img URL -->
    <div class="article-container">
        <div class='article-card' :style="{backgroundImage: `url(${img})`}">
            <h3 class="article-title">{{title}}</h3>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'Article',
        props: {
            title: String,
            img: String
        },
    }
</script>

<style>
.article-card {
    width: 19rem;
    height: 19rem;
    color: #FFF;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.article-card:hover {
    cursor: pointer;
    opacity: 0.6;
}
</style>