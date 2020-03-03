<template>
    <div class="l-project-data-structure-table m-project-data-structure-table">

        <label class="l-project-data-structure-table__label m-project-data-structure-table__label" for="">Title</label>
        <Input v-model="taobaoShopProduct.title" placeholder="" />
        <label class="l-project-data-structure-table__label m-project-data-structure-table__label" for="">Head Image Title</label>
        <Input v-model="taobaoShopProduct.head_image_title" placeholder="" />
        <label class="l-project-data-structure-table__label m-project-data-structure-table__label" for="">Head Image Language</label>
        <Input v-model="taobaoShopProduct.head_image_language" placeholder="" />
        <label class="l-project-data-structure-table__label m-project-data-structure-table__label" for="">Head Image Preview</label>
        <div class="l-preview m-preview">
            <Button class="l-preview__button" type="success" icon="md-add" @click="handleHtmlToImage()">Download Image</Button>
            <div class="l-preview__image m-preview__image" ref="imageWrapper">
                <h1>{{taobaoShopProduct.title}}</h1>
                <img src="@/assets/logo_language/c++.jpeg" alt="" srcset="">
            </div>
        </div>
        <label class="l-project-data-structure-table__label m-project-data-structure-table__label" for="">Head Image</label>
        <div class="l-preview m-preview">
            <img :src="previewImageUrl" alt="">
        </div>
    </div>
</template>
<script>
    import html2canvas from "html2canvas"
    export default {
        name: 'TheTaobaoShopProductForm',
        props: ['taobaoShopProduct'],
        data() {
            return {
                previewImageUrl: ''
            }
        },
        components: {},
        methods: {
            fetchTaobaoShopProduct() {
                if (!this.taobaoShopProduct.id) {
                    return;
                }
                let id = this.taobaoShopProduct.id;

                let that = this;
                this.axios
                    .get('/api/taobao_shop_product/'+id)
                    .then(response => {
                        that.taobaoShopProduct = response.data;
                    });
            },
            handleHtmlToImage() {
                setTimeout(() => {
                    html2canvas(this.$refs.imageWrapper,{
                        backgroundColor: null
                    }).then((canvas) => {
                        let dataURL = canvas.toDataURL("image/png");
                        this.previewImageUrl = dataURL;
                    });
                },1000);
            }
        },
        mounted() {
            this.fetchTaobaoShopProduct();
        }
    }
</script>
<style scoped>
    .l-project-data-structure-table__h1 {
        margin-bottom: 10px;
    }

    .l-project-data-structure-table__label {
        margin-bottom: 10px;
    }

    .l-project-data-structure-table__submit {
        margin-top: 10px;
    }

</style>
