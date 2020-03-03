<template>
    <div class="layout">
        <Layout>
            <TheHeader />
            <Content :style="{margin: '24px 0 0 0', padding: '24px 50px', minHeight: '280px', background: '#fff'}">
                <TheMain />
            </Content>
        </Layout>
    </div>
</template>
<script>
    import TheHeader from './components/header'
    import TheMain from './components/main'
    export default {
        name: 'TheLayout',
        components: {
            TheHeader,
            TheMain
        },
        data() {
            return {}
        }
    }

</script>
<style scoped>
    .layout {
        /* border: 1px solid #d7dde4; */
        /* background: #f5f7f9; */
        position: relative;
        /* border-radius: 4px; */
        overflow: hidden;
    }

</style>
