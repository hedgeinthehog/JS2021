<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/students">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

button {
    min-width: 60px;
    min-height: 30px;
    margin: 2px;
    background: #283593;
    border: none;
    border-radius: 3px;
    padding: 5px;
    box-shadow: 1px 0px 2px #8b8b8b;
    color: white;
}
button:hover {
    background: #5f5fc4;
}
button:disabled {
    visibility: hidden;
}
</style>
