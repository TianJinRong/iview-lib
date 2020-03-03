<template>
    <nav class="top-menu">
        <div class="logo">
            <a href="http://"><img src="@/assets/static/picture/logo.png" alt=""></a>
        </div>
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/introduction">园区概览</router-link></li>
            <li><router-link to="/gardenscenery">园区景观</router-link></li>
            <li><router-link to="/rentlist">租赁中心</router-link></li>
            <li><router-link to="/location">地理周边</router-link></li>
            <li><router-link to="/newslist">新闻资讯</router-link></li>
            <li><router-link to="/about">联系我们</router-link></li>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: "TopMenu"
    }
</script>
<style scoped>
    .top-menu {
        color: black;
        margin: 0 auto;
        width: 1100px;
    }

    .top-menu .logo {
        float: left;
        height: 90px;
        padding-right: 80px;
    }

    .top-menu .logo a {
        display: block;
        line-height: 90px;
    }

    .top-menu .logo a img {
        vertical-align: middle;
    }

    .top-menu ul,
    .top-menu li {
        padding: 0;
        margin: 0;
        list-style: none;
        float: left;
        vertical-align: baseline;
    }

    .top-menu li a {
        padding: 0 17px;
        text-decoration: none;
        color: black;
        font-weight: 600;
        font-size: 16px;
        line-height: 90px;
    }
</style>