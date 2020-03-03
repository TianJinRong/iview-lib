<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="company">
                <img src="@/assets/static/picture/logo-1.png" alt="">
                <p>“张江润和国际总部园网”隶属上海润和生物科技产业有限公司，公司主要业务为对旗下园区内写字楼的租赁项目。集综合办公与商务、科研、服务于一体的润和国际总部园，项目总建筑面积91454.67平方米,绿化覆盖率达51%，停车泊位共750个。项目由多种面积及房型构成花园式的办公园区。
                </p>
            </div>
            <div class="recent-news">
                <h5>近期新闻</h5>
                <ul>
                    <li><a href="http://">知识产权政策宣讲</a></li>
                    <li><a href="http://">利好政策推动总部经济发展</a></li>
                    <li><a href="http://">哥白尼路桥通车啦！</a></li>
                </ul>
            </div>
            <div class="contact">
                <h5>联系我们</h5>
                <ul>
                    <li>邮编：201203</li>
                    <li>传真：86-21-58958851</li>
                    <li>联系电话：021-58958851</li>
                    <li>租售处地址：张衡路1000弄9号楼</li>
                    <li>电子邮箱：markets@rhiog.com</li>
                </ul>
            </div>
            <div class="wechat">
                <h5>关注我们</h5>
                <img class="alignnone wp-image-426 size-thumbnail" src="@/assets/static/picture/1508818234-150x150.png" alt=""
                    width="150" height="150"
                    srcset="@/assets/static/picture/1508818234-150x150.png 150w, static/picture/1508818234.png 280w"
                    sizes="(max-width: 150px) 100vw, 150px">
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        name: "Footer"
    }
</script>
<style scoped>
    .footer {
        clear: both;
        background: #2e220f;
        width: 100%;
        margin: 0;
        padding-top: 72px;
        padding-bottom: 52px;
        float: left;
        text-align: left;
    }

    .footer .footer-content {
        margin: 0 auto;
        width: 1100px;
    }

    .footer .company {
        width: 275px;
        float: left;
    }

    .footer .company p {
        line-height: 26px;
        padding-right: 15px;
        color: white;
    }

    .footer .recent-news {
        width: 275px;
        float: left;
    }

    .footer .recent-news h5 {
        padding: 0 15px;
        margin-bottom: 22px;
        font-size: 20px;
        color: white;
    }

    .footer .recent-news ul,
    .footer .recent-news li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .footer .recent-news li {
        padding: 0 15px;
    }

    .footer .recent-news li a {
        text-decoration: none;
        line-height: 26px;
        color: white;
    }

    .footer .contact {
        width: 275px;
        float: left;
    }

    .footer .contact h5 {
        padding: 0 15px;
        margin-bottom: 22px;
        font-size: 20px;
        color: white;
    }

    .footer .contact ul,
    .footer .contact li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .footer .contact li {
        padding: 0 15px;
        line-height: 26px;
        color: white;
    }

    .footer .wechat {
        width: 275px;
        float: left;
    }

    .footer .wechat h5 {
        padding: 0 15px;
        margin-bottom: 22px;
        font-size: 20px;
        color: white;
    }

    .footer .wechat img {
        padding: 0 15px;
    }
</style>