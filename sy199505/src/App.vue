<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    created () {
        let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let rem = clientWidth < 996 ? clientWidth*20/640 : 20;
        document.documentElement.style.fontSize = rem + 'px';
    }
}
</script>

<style lang="scss">
    html {
        color: rgb(151, 151, 151);
    }
    body {
        background-color: rgb(236, 236, 236);
        margin: 0;
        // margin: .5rem;
    }
    ul, ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    h1, p {
        margin: 0;
    }
</style>
